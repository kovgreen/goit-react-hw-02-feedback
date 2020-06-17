import React from "react";
import PropTypes from "prop-types";
import { StatisticBlock, StatisticParagraph } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticBlock>
      <StatisticParagraph>Good: {good}</StatisticParagraph>
      <StatisticParagraph>Neutral: {neutral}</StatisticParagraph>
      <StatisticParagraph>Bad: {bad}</StatisticParagraph>
      <StatisticParagraph>Total: {total}</StatisticParagraph>
      <StatisticParagraph>
        Positive feedback: {positivePercentage}%
      </StatisticParagraph>
    </StatisticBlock>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
