import { useState, type FormEvent } from "react";
import "./ImportsPage.css";

export function ImportsPage() {
  const [sourceSystem, setSourceSystem] = useState("");
  const [targetSystem, setTargetSystem] = useState("");
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!sourceSystem.trim() || !targetSystem.trim()) {
      setFormMessage("Enter both a source system and a target system.");
      return;
    }

    setFormMessage(
      `Practice import configured: ${sourceSystem.trim()} to ${targetSystem.trim()}.`,
    );
  }

   function handleReset() {
    setSourceSystem("");
    setTargetSystem("");
    setFormMessage("");
  }


  return (
    <main className="dashboard-page">
      <section className="welcome-message">
        <h2>Import migration data</h2>
        <p>
          In Week 2, this page will accept synthetic source and target CSV extracts
          for reconciliation.
        </p>
      </section>

      <form className="import-form" onSubmit={handleSubmit}>
        <h2>Configure practice import</h2>

        <label htmlFor="source-system">Source system</label>
        <input
          id="source-system"
          type="text"
          value={sourceSystem}
          onChange={(event) => setSourceSystem(event.target.value)}
          placeholder="For example: KanTime"
        />

        <label htmlFor="target-system">Target system</label>
        <input
          id="target-system"
          type="text"
          value={targetSystem}
          onChange={(event) => setTargetSystem(event.target.value)}
          placeholder="For example: AlayaCare"
        />

        <p>
          Practice import: {sourceSystem || "Source system"} to{" "}
          {targetSystem || "Target system"}
        </p>

        <button type="submit">Configure practice import</button>

        <button type="button" onClick={handleReset}>
           Reset form
        </button>

        {formMessage && (
          <p className="form-message" role="status">
            {formMessage}
          </p>
        )}
      </form>
    </main>
  );
}