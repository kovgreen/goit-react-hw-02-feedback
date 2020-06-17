import React from "react";
import PropTypes from "prop-types";
import { SectionBlock, SectionTitle } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBlock>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
