import React, { useState } from "react";

import styled from "styled-components";

import { BodyText } from "./Paragraphs";

type PropsType = {
  emptyText: string;
  value?: string;
  data: string[];
  onValueSelect: (value: string) => void;
};

const Container = styled.div`
  position: relative;
  width: 65px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

type ValueContainerType = {
  isOpen: boolean;
};

const ValueContainer = styled.div<ValueContainerType>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  height: 40px;
  border: "0px";
  padding: 0px 16px;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? 0 : 8)}px;
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? 0 : 8)}px;
`;

const ValueListContainer = styled.div`
  width: 67px;
  position: absolute;
  top: 41px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: -1px;
  z-index: 100;
`;

const ValueButtonContainer = styled.button`
  cursor: pointer;
  text-align: left;
  width: 100%;
  height: 40px;
  border: 0px;
  padding: 0px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: "Arial", Arial, monospace;

  :hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Select = ({ data, value, emptyText, onValueSelect }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectValue = (item: string) => {
    setSelectedValue(item);
    onValueSelect(item);
    toggleIsOpen();
  };

  return (
    <Container>
      <ValueContainer onClick={toggleIsOpen} isOpen={isOpen}>
        <BodyText>{selectedValue || emptyText}</BodyText>
      </ValueContainer>
      {isOpen && (
        <ValueListContainer>
          {data.map((item) => {
            return (
              <ValueButtonContainer data-testid="select" onClick={() => selectValue(item)} key={item}>
                <BodyText>{item}</BodyText>
              </ValueButtonContainer>
            );
          })}
        </ValueListContainer>
      )}
    </Container>
  );
};
