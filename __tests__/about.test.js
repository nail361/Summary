import { render, screen } from "@testing-library/react";
import About from "../pages/about/index";

describe("About tests", () => {
  it("Should fill skills", () => {
    const skills = [
      {
        id: 1,
        title: "test",
        exp: 5,
      },
      {
        id: 2,
        title: "test2",
        exp: 3,
      },
    ];
    // window.fetch = jest.fn();
    // window.fetch.mockResolvedValueOnce({
    //   json: async () => {
    //     skills;
    //   },
    // });

    render(<About skills={skills} />);
    //render(<About />);

    const listOfSkills = screen.getAllByTestId("skill");
    expect(listOfSkills).not.toHaveLength(0);
  });
  it("Should fill 0 skills", () => {
    const skills = [];

    render(<About skills={skills} />);

    const listOfSkills = screen.queryByTestId("skill");
    expect(listOfSkills).toBeNull();
  });
  it("Should fill only 1 skill", () => {
    const skills = [
      {
        id: 1,
        title: "test",
        exp: 5,
      },
    ];

    render(<About skills={skills} />);

    const listOfSkills = screen.getAllByTestId("skill");
    expect(listOfSkills).toHaveLength(1);
  });
});
