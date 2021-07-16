import { useState } from "react";
import { RomanNumerals } from "../helpers/RomanNumerals";

export const useRomanNumeralConversion = () => {
  const [submission, setSubmission] = useState();
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("ready");

  const handleStringSubmission = () => {
    if (RomanNumerals.isValidRoman(submission)) {
      const conversion = RomanNumerals.fromRoman(submission);
      setAnswer(`${submission} = ${conversion}`);
      setInputValue("");
    } else {
      setStatus("Please input either a number or a valid Roman numeral");
      setInputValue("");
    }
  };

  const handleNumberSubmission = () => {
    const num = parseInt(submission);
    if (num < 1 || num > 3999){
      setStatus("Number entries should be between 0 and 4000");
      setInputValue("");
      return;
    }
    const conversion = RomanNumerals.toRoman(parseInt(submission));
    setAnswer(`${submission} = ${conversion}`);
    setInputValue("");
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (submission === undefined) return;
    const isStringSubmission = Number.isNaN(parseInt(submission));
    if (isStringSubmission) handleStringSubmission();
    else handleNumberSubmission();
  };

  const onChange = (value) => {
    if (status !== "ready") setStatus("ready");
    setInputValue(value);
    setSubmission(value);
  };

  return {
    onSubmit: onSubmit,
    onChange: onChange,
    answer: answer,
    inputValue: inputValue,
    status: status,
  };
};
