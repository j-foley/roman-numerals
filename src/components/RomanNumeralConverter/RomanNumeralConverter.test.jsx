import { render, screen, fireEvent } from "@testing-library/react";
import { RomanNumeralConverter } from "./RomanNumeralConverter";

describe("RomanNumeralConverter Component", () => {
  test("It should handle a valid Roman numeral", () => {
    render(<RomanNumeralConverter />);
    const input = screen.getByLabelText("form-input");
    fireEvent.change(input, { target: { value: "IV" } });
    expect(screen.getByText("Answer:")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Convert"));
    expect(screen.getByText("Answer: IV = 4")).toBeInTheDocument();
  });

  test("It should handle a valid number", () => {
    render(<RomanNumeralConverter />);
    const input = screen.getByLabelText("form-input");
    fireEvent.change(input, { target: { value: "6" } });
    expect(screen.getByText("Answer:")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Convert"));
    expect(screen.getByText("Answer: 6 = VI")).toBeInTheDocument();
  });

  test("It should handle a invalid number", () => {
    render(<RomanNumeralConverter />);
    const input = screen.getByLabelText("form-input");
    fireEvent.change(input, { target: { value: "0" } });
    expect(screen.getByText("Answer:")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Convert"));
    expect(
      screen.getByText("Number entries should be between 0 and 4000")
    ).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "4000" } });
    expect(screen.getByText("Answer:")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Convert"));
    expect(
      screen.getByText("Number entries should be between 0 and 4000")
    ).toBeInTheDocument();
  });

  test("It should handle a invalid Roman numeral string", () => {
    render(<RomanNumeralConverter />);
    const input = screen.getByLabelText("form-input");
    fireEvent.change(input, { target: { value: "test" } });
    expect(screen.getByText("Answer:")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Convert"));
    expect(
      screen.getByText("Please input either a number or a valid Roman numeral")
    ).toBeInTheDocument();
  });

  test("It should clear previous input on submission", () => {
    render(<RomanNumeralConverter />);
    const input = screen.getByLabelText("form-input");
    fireEvent.change(input, { target: { value: "IV" } });
    expect(input.value).toBe("IV");
    fireEvent.click(screen.getByText("Convert"));
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "8" } });
    expect(input.value).toBe("8");
    fireEvent.click(screen.getByText("Convert"));
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "0" } });
    expect(input.value).toBe("0");
    fireEvent.click(screen.getByText("Convert"));
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "test string" } });
    expect(input.value).toBe("test string");
    fireEvent.click(screen.getByText("Convert"));
    expect(input.value).toBe("");
  });
});
