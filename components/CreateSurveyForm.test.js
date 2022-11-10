import { screen, render, getByLabelText } from "@testing-library/react";
import CreateSurveyForm from "./CreateSurveyForm";
import userEvent from "@testing-library/user-event";

describe("display SurveyForm", () => {
  it("initial renders a title-input, a question-input, a type-input and four buttons", async () => {
    render(
      <CreateSurveyForm
        title=""
        questions={[{ id: "", title: "", type: "", answers: [] }]}
        url="URL"
        date=""
        description=""
        onSubmit=""
      />
    );
    expect(screen.getByLabelText("title")).toBeVisible();
    expect(screen.getByLabelText("question")).toBeVisible();
    expect(screen.getByLabelText("type")).toBeVisible();
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });

  it("renders title input and question input and type input", async () => {
    render(
      <CreateSurveyForm
        title=""
        questions={[{ id: "", title: "", type: "", answers: [] }]}
        url="URL"
        date=""
        description=""
        onSubmit=""
      />
    );
    const titleInput = screen.getByLabelText(/title/i);
    const questionInput = screen.getByLabelText("question");
    const typeInput = screen.getByLabelText("type");
    await userEvent.type(titleInput, "First Survey");
    await userEvent.type(questionInput, "First Question");
    await userEvent.selectOptions(typeInput, "yes/no");
    expect(titleInput).toHaveValue("First Survey");
    expect(questionInput).toHaveValue("First Question");
    expect(typeInput).toHaveValue("yes/no");
  });

  it("renders a second QuestionCard with title and type", async () => {
    render(
      <CreateSurveyForm
        title=""
        questions={[
          { id: "", title: "", type: "", answers: [] },
        ]}
        url="URL"
        date=""
        description=""
        onSubmit=""
      />
    );
    const addQuestionButton = screen.getByLabelText("add Question");
    await userEvent.click(addQuestionButton);
    expect(screen.getAllByLabelText("question")).toHaveLength(2);
    expect(screen.getAllByLabelText("type")).toHaveLength(2);
    expect(screen.getAllByLabelText("delete")).toHaveLength(2);
  });
});
