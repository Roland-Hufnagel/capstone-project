import { screen, render } from "@testing-library/react";
import MyPieChart from "./MyPieChart";

describe("display pie chart", () => {
  it("initial render", () => {
    render(
      <MyPieChart
        data={[
          { name: "Yes", value: 80 },
          { name: "No", value: 20 },
        ]}
      />
    );
    expect(screen.getByText("80")).toBeVisible();
    expect(screen.getByText("20")).toBeVisible();
    expect(screen.getByText("100")).toBeVisible();
    expect(screen.getAllByText("Yes")).toHaveLength(1);
    expect(screen.getAllByText("No")).toHaveLength(1);
    expect(screen.getByText("Total:")).toBeInTheDocument();
  });
});
