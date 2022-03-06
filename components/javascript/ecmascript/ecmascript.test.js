import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { summ } from "./ecmascript";
import Ecmascript from "./ecmascript";

describe("sum()", () => {
  it("should return 5 if given 2 and 3 ", () => {
    expect(summ(2, 3)).toBe(5);
  });
  it("should return 15 if given 1,2,3,4,5 ", () => {
    expect(summ(1, 2, 3, 4, 5)).toBe(15);
  });
  it("should return 5 if given 5 ", () => {
    expect(summ(5)).toBe(5);
  });
  it("should return 0 if given 0 ", () => {
    expect(summ(0)).toBe(0);
  });
  it("should return 0 if given none ", () => {
    expect(summ()).toBe(0);
  });
});

describe("Has text in document", () => {
  it("should 'Можно использовать композицию декораторов' be in doc", () => {
    render(<Ecmascript />);
    const textElement = screen.getByText(
      "Можно использовать композицию декораторов."
    );
    expect(textElement).toBeInTheDocument();
  });
});

describe("Run promise on Click promise-btn", () => {
  it("should work", async () => {
    render(<Ecmascript />);

    const btn = screen.getByTestId("promise-btn");
    userEvent.click(btn);

    const resultText = await screen.findByText(
      "console.log(response); // Прошла 1 секунда",
      { exact: false },
      { timeout: 1500 }
    );

    expect(resultText).toBeInTheDocument();
  });
});
