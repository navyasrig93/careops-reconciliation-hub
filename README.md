# CareOps Reconciliation Hub

A secure, explainable platform for validating synthetic care-platform data migrations,
managing reconciliation exceptions, and measuring release readiness.

> This project uses synthetic data only. It does not process real patient information,
> make clinical decisions, or integrate with live healthcare systems.

## Problem

Data migrations between care-management platforms frequently expose missing values,
duplicates, invalid relationships, and incorrect transformations late in a release.
CareOps provides a shared workflow to identify, explain, assign, resolve, and audit
those exceptions before go-live.

## Core Workflow

1. Create a migration workspace.
2. Upload synthetic source and target CSV extracts.
3. Configure and execute reconciliation rules.
4. Review exceptions with evidence and severity.
5. Assign, resolve, or waive exceptions with an audit trail.
6. Review readiness, risk, and data-quality dashboards.

## Planned Stack

| Area | Technology |
|---|---|
| Frontend | React, TypeScript, Vite |
| Backend | Python, FastAPI, Pydantic |
| Data | PostgreSQL, Redis |
| Authentication | JWT, secure refresh tokens, role-based access control |
| Testing | Pytest, React Testing Library, Playwright |
| Local environment | Docker, Docker Compose |
| CI/CD | GitHub Actions |
| Cloud | Azure Container Apps, Azure Database for PostgreSQL, Blob Storage, Key Vault |
| Infrastructure | Terraform |

## Repository Structure

```text
apps/web            React application
apps/api            FastAPI service
docs/adr            Architecture Decision Records
infrastructure      Cloud infrastructure definitions
.github/workflows   CI/CD workflows

## Current Frontend Capabilities

- Responsive React and TypeScript application shell with Dashboard and Imports routes.
- Migration-check dashboard with typed data, status badges, dynamic summary metrics, filtering, empty states, completion actions, and reset behavior.
- Controlled import-configuration form with validation, response feedback, and reset behavior.
- Responsive sidebar navigation and accessible labels, focus states, status messages, and native button interactions.
- Automated component and interaction tests using Vitest and React Testing Library.

## Frontend Development

```bash
cd apps/web
npm install
npm run dev

Bash

```
cd apps/web
npm run lint
npm test
npm run build
```
