import PropTypes from "prop-types";
import "./Form.css";

export const Form = ({
  onInputChange,
  onFormSubmission,
  inputValue,
  answer = "",
  status = "ready",
  placeholder = "",
  inputAriaLabel = "form-input"
}) => {
  const Output = () => {
    if (status === "ready") {
      return <span className="form--answer"><b>Answer:</b> {answer}</span>;
    }
    return <span className="form--answer">{status}</span>;
  };

  return (
    <form onSubmit={(event) => onFormSubmission(event)} className="form">
      <div className="form--input">
        <input
          aria-label={inputAriaLabel}
          onChange={(event) => onInputChange(event.target.value)}
          value={inputValue}
          placeholder={placeholder}
        />
        <button type="submit">Convert</button>
      </div>
      <Output />
    </form>
  );
};

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormSubmission: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  answer: PropTypes.string,
  status: PropTypes.string,
  placeholder: PropTypes.string,
  inputAriaLabel: PropTypes.string,
};
