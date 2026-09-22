import "./DashboardPage.css";

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
    </main>
  );
}