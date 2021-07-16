import "./RomanNumeralConverter.css";
import { useRomanNumeralConversion } from "../../hooks/useRomanNumeralConversion";
import { Form } from "../Form";

export const RomanNumeralConverter = () => {
  const { answer, onChange, onSubmit, inputValue, status } =
    useRomanNumeralConversion();

  return (
    <div className="converter--wrapper">
      <header>
        <h1>Roman Numeral Converter</h1>
      </header>
      <main>
        <div className="card--wrapper">
          <Form
            onInputChange={onChange}
            onFormSubmission={onSubmit}
            answer={answer}
            placeholder="Enter a roman numeral or a number"
            inputValue={inputValue}
            status={status}
          />
        </div>
      </main>
    </div>
  );
};
