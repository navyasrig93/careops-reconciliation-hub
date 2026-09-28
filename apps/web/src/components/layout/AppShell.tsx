import { NavLink, Outlet } from "react-router-dom";

const upcomingNavigationItems = ["Exceptions", "Rules", "Reports"];

export function AppShell() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="/dashboard">
          <span className="brand-mark" aria-hidden="true">
            CO
          </span>
          <span>
            <strong>CareOps</strong>
            <small>Reconciliation Hub</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <p className="nav-heading">Workspace</p>
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="nav-link" to="/imports">
            Imports
          </NavLink>

          <p className="nav-heading">Coming soon</p>
          {upcomingNavigationItems.map((item) => (
            <span className="nav-link nav-link-muted" key={item}>
              {item}
            </span>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span className="environment-badge">Synthetic data only</span>
          <p>Week 1 foundation</p>
        </div>
      </aside>

      <section className="app-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Migration workspace</p>
            <h1>Northstar Care transition</h1>
          </div>
          <button className="profile-button" type="button">
            NG
          </button>
        </header>

        <Outlet />
      </section>
    </div>
  );
}