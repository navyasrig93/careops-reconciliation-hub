import "./DashboardPage.css";
import { useState } from "react";

type MigrationCheck = {
  id: string;
  title: string;
  owner: string;
  status: "Open" | "In progress" | "Ready for review" | "Completed";
};

const migrationChecks: MigrationCheck[] = [
    {
    id: "required-fields",
    title: "Verify required caregiver fields",
    owner: "Migration Analyst",
    status: "Open",
  },
  {
    id: "unmatched-records",
    title: "Review unmatched target records",
    owner: "Data Steward",
    status: "In progress",
  },
  {
    id: "critical-exceptions",
    title: "Confirm critical exceptions have an owner",
    owner: "QA Lead",
    status: "Ready for review",
  },
];

function getStatusClass(status: MigrationCheck["status"]) {
  switch (status) {
    case "Open":
      return "status-open";
    case "In progress":
      return "status-in-progress";
    case "Ready for review":
      return "status-ready-for-review";
    case "Completed":
      return "status-completed";
  }
}

type WelcomeMessageProps={
  title : string;
  description : string;
};

function WelcomeMessage({title, description}: WelcomeMessageProps){
  return(
    <section className ="welcome-message">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export function DashboardPage(){

  const [isPracticeComplete, setIsPracticeComplete] = useState(false);
  const [checks, setChecks] = useState(migrationChecks);
  const [searchText, setSearchText] = useState("");
  const normalizedSearchText = searchText.trim().toLowerCase();

  function markCheckComplete(id: string) {
  setChecks((currentChecks) =>
    currentChecks.map((check) =>
      check.id === id ? { ...check, status: "Completed" } : check,
    ),
  );
}

const filteredChecks = checks.filter((check) => {
  const searchableText =
    `${check.title} ${check.owner} ${check.status}`.toLowerCase();

  return searchableText.includes(normalizedSearchText);
});

  return(
    <main className = "dashboard-page">
      <WelcomeMessage
        title="Welcome to CareOps"
        description ="Use this workspace to review synthetic migration data."
        />
      <WelcomeMessage
        title = "A safe practice workspace"
        description = "CareOps uses synthetic records only; it does not store or process real patient data."
        />
      <section className="check-filter">
        <label htmlFor="check-search">Filter practice checks</label>
        <input
          id="check-search"
          type="search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Try typing owner, status, or title text"
        />
        <p>Current filter: {searchText || "None"}</p>
      </section>
      <section className="checklist">
        <h2>Today's practice checks</h2>
        <ul>
          {filteredChecks.length === 0 ? (
            <p className="empty-state">
              No practice checks match "{searchText}".
            </p>
          ) : (
            <ul>
              {filteredChecks.map((check) => (
                <li key={check.id}>
                  <strong>{check.title}</strong>
                 <div className="check-metadata">
                  <span className="check-status">Owner: {check.owner}</span>
                  <span className={`status-badge ${getStatusClass(check.status)}`}>
                    {check.status}
                  </span>
                </div>
                  <button
                    type="button"
                    className="check-button"
                    onClick={() => markCheckComplete(check.id)}
                    disabled={check.status === "Completed"}
                  >
                    {check.status === "Completed" ? "Completed" : "Mark complete"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </ul>
        <button
          type="button"
          className="check-button"
          onClick={() => setChecks(migrationChecks)}
        >
          Reset all checks
        </button>
      </section>
      <section>
        <h2> React practice checkpoint </h2>
        <p>
          {isPracticeComplete
            ? "Practice checkpoint completed."
            : "Mark this React practice checkpoint as complete."}
        </p>
        <button
          type = "button"
          onClick={() => setIsPracticeComplete(true)}
          disabled={isPracticeComplete}
        >
          {isPracticeComplete ? "Completed" : "Mark as complete"}
        </button>
        <button
          type ="button"
          onClick={()=> setIsPracticeComplete(false)}
          disabled={!isPracticeComplete}
        >
          Reset checkpoint
        </button>
      </section>
    </main>
  );
}