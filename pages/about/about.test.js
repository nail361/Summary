import { render, screen } from "@testing-library/react";
import About from "./index";

describe("About tests", () => {
  it("Should fill skills", () => {
    const skills = [
      {
        id: 1,
        title: "test",
        exp: 5,
      },
    ];
    render(<About skills={skills} />);

    const listOfSkills = screen.getAllByText("");
    expect(listOfSkills).not.toHaveLength(0);
  });
});
