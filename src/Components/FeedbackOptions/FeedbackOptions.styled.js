import styled from "styled-components";

export const FeedbackBlock = styled.div`
  padding: 20px 0 10px;
`;

export const FeedbackButton = styled.button`
  display: inline-block;
  padding: 5px 15px;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 600;
  color: #ffffff;
  background-color: blue;
  border: 2px solid transparent;
  border-radius: 20px;
  text-transform: uppercase;
  cursor: pointer;

  ::not(::last-child) {
    margin-right: 15px;
  }

  :hover,
  :focus {
    color: blue;
    background-color: #fff;
    border: 2px solid blue;
  }

  :focus {
    outline: none;
  }
`;
