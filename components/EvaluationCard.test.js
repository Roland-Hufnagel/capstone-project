import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event/";
import EvaluationCard from "./EvaluationCard";

describe("display evaluation card", () => {
  it("renders the question", () => {
    render(
      <EvaluationCard
        question="Do you like Elvis?"
        type="yes/no"
        answers={["yes", "yes", "no"]}
      />
    );
    expect(screen.getByText("Do you like Elvis?")).toBeVisible();
    
  });
});
