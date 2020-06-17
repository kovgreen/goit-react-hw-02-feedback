import React from "react";
import PropTypes from "prop-types";
import { FeedbackBlock, FeedbackButton } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBlock>
      {options.map(option => (
        <FeedbackButton key={option} type="button" onClick={onLeaveFeedback}>
          {option}
        </FeedbackButton>
      ))}
    </FeedbackBlock>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
