import { screen, render } from "@testing-library/react";
import QuestionCard from "./QuestionCard";
import userEvent from "@testing-library/user-event";

describe("display QuestionCard", () => {
  it("renders card with yes/no-type", async () => {
    render(
      <QuestionCard question="Do you like Elvis?" id="12345" type="yes/no" />
    );
    expect(screen.getByText("Do you like Elvis?")).toBeVisible();
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });
  it("renders card with choice-type", () => {
    render(<QuestionCard question="How are you?" id="12345" type="choice" />);
    expect(screen.getByText("How are you?")).toBeVisible();
    expect(screen.getAllByRole("radio")).toHaveLength(5);
  });
  it("renders card with text-type", () => {
    render(<QuestionCard question="Your Feedback:" id="12345" type="text" />);
    expect(screen.getByText("Your Feedback:")).toBeVisible();
    expect(screen.queryAllByRole("radio")).toHaveLength(0);
    expect(screen.getByLabelText("Feedback")).toBeVisible();
  });
  it("gets a Yes-Value when type=yes/no", async () => {
    render(<QuestionCard question="Like Elvis?" type="yes/no" id="12345" />);
    const inputYes = screen.getByLabelText("Yes");
    const inputNo = screen.getByLabelText("No");
    expect(inputYes).not.toBeChecked();
    expect(inputNo).not.toBeChecked();

    await userEvent.click(inputYes);
    expect(inputYes).toBeChecked();
    expect(inputNo).not.toBeChecked();
    await userEvent.click(inputNo);
    expect(inputYes).not.toBeChecked();
    expect(inputNo).toBeChecked();
  });
  it("gets a text when type is Text", async () => {
    render(<QuestionCard question="Like Elvis?" type="text" id="12345" />);

    const input = screen.getByLabelText("Feedback");
    expect(input).toHaveValue("");
    await userEvent.type(input, "Hello");
    expect(input).toHaveValue("Hello");
  });
});
