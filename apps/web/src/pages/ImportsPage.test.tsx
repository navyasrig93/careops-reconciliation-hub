import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ImportsPage } from "./ImportsPage";

describe("ImportsPage", () => {
  it("clears configured form values when reset", async () => {
    const user = userEvent.setup();

    render(<ImportsPage />);

    const sourceInput = screen.getByLabelText("Source system");
    const targetInput = screen.getByLabelText("Target system");

    await user.type(sourceInput, "KanTime");
    await user.type(targetInput, "AlayaCare");
    await user.click(
      screen.getByRole("button", { name: "Configure practice import" }),
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      "Practice import configured: KanTime to AlayaCare.",
    );

    await user.click(screen.getByRole("button", { name: "Reset form" }));

    expect(sourceInput).toHaveValue("");
    expect(targetInput).toHaveValue("");
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});