import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DashboardPage } from "./DashboardPage";

describe("DashboardPage", () => {
  it("renders the welcome heading and migration summary", () => {
    render(<DashboardPage />);

    expect(
      screen.getByRole("heading", { name: "Welcome to CareOps" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("region", { name: "Migration check summary" }),
    ).toBeInTheDocument();

    expect(screen.getByText("Total checks")).toBeInTheDocument();
  });

  it("marks a checklist item as completed", async () => {
    const user = userEvent.setup();

    render(<DashboardPage />);

    const firstCompleteButton = screen.getAllByRole("button", {
      name: "Mark complete",
    })[0];

    await user.click(firstCompleteButton);

    expect(
      screen.getByRole("button", { name: "Completed" }),
    ).toBeDisabled();
  });
});