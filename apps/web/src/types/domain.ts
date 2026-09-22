export type UserRole =
  | "migration_analyst"
  | "data_steward"
  | "qa_lead"
  | "release_manager";

export type ExceptionSeverity = "critical" | "high" | "medium" | "low";

export type ExceptionStatus =
  | "open"
  | "in_progress"
  | "resolved"
  | "waived";

export interface MigrationWorkspace {
  id: string;
  name: string;
  sourceSystem: string;
  targetSystem: string;
  readinessPercent: number;
}

export interface ReconciliationException {
  id: string;
  title: string;
  severity: ExceptionSeverity;
  status: ExceptionStatus;
  assigneeName: string | null;
  sourceRecordId: string;
  targetRecordId: string | null;
  ruleName: string;
  createdAt: string;
}