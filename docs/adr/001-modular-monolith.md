# ADR 001: Start CareOps as a modular monolith

## Status

Accepted

## Context

CareOps must be delivered as a portfolio project in six weeks while supporting a web
application, secure APIs, import processing, reconciliation rules, exception workflows,
and reporting.

## Decision

Build one FastAPI application with clear modules for authentication, workspaces, imports,
rules, exceptions, reporting, and audit events. Run long-running import and validation
work in a separate Python worker process.

## Rationale

A modular monolith enables fast delivery, easier local development, simpler deployment,
and transactional consistency while preserving clear boundaries for future extraction.

## Consequences

The initial deployment is simpler than a microservices architecture. If workload or team
boundaries later justify it, the import worker or reporting workload can be extracted
without redesigning the public API.