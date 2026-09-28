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

  function markCheckComplete(id: string) {
  setChecks((currentChecks) =>
    currentChecks.map((check) =>
      check.id === id ? { ...check, status: "Completed" } : check,
    ),
  );
}

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
      <section className="checklist">
        <h2>Today's practice checks</h2>
        <ul>
          {checks.map((check) => (
            <li key={check.id}>
            <strong>{check.title}</strong>
            <span className="check-status">
              Owner: {check.owner} | Status: {check.status}
            </span>
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