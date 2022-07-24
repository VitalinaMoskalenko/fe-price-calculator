import React, { CSSProperties } from "react";

import styled from "styled-components";

import { BodyText } from "./Paragraphs";

const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 3px;
  min-width: 100px;
  height: 52px;

  :hover {
    background-color: ${({ theme }) => theme.colors.darkOrange};
    cursor: pointer;
  }
`;

const ButtonText = styled(BodyText)`
  color: ${({ theme }) => theme.colors.white};
`;

type PropsType = {
  text: string;
  onClick: () => void;
  style?: CSSProperties;
};

export const Button: React.FC<PropsType> = ({ text, onClick, style }) => {
  return (
    <ButtonContainer onClick={onClick} style={style} data-testid="button">
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
