import React from "react";

import styled from "styled-components";

type CheckedType = {
  checked?: boolean;
};

const StyledLabel = styled.label<CheckedType>`
  width: 100%;
  height: auto;
  margin: 0 20px 1em 0;
  position: relative;
  padding: 10px 15px;
  border: 1px solid ${({ checked, theme }) => (checked ? theme.colors.blue : theme.colors.lightGrey)};
  background-color: ${({ checked, theme }) => (checked ? theme.colors.blue : theme.colors.white)};
  border-radius: 3px;
  color: ${({ checked, theme }) => (checked ? theme.colors.white : theme.colors.black)};
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;

const StyledInput = styled.input`
  margin-right: 10px;
`;

type PropsType = {
  text: string;
  onChange: (changeEvent: any) => void;
  selectedOption?: string | number;
  value?: string | number;
};

export const RadioButton: React.FC<PropsType> = ({ value, text, onChange, selectedOption }) => {
  return (
    <StyledLabel checked={selectedOption === value}>
      <StyledInput
        type="radio"
        value={value}
        checked={selectedOption === value}
        onChange={onChange}
        data-testid="radioButton"
      />
      {text}
    </StyledLabel>
  );
};
