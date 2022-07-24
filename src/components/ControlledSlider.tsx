import React, { useState } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";

import { ThemeType } from "../types/shared/styled";
import { Flex } from "./Container";

type PropsType = {
  onValueSelect: (value: number) => void;
};

const StyledInput = styled.input`
  margin: 1rem 20px 30px 20px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
`;

const StyledSlider = styled(Slider).attrs(({ theme }) => {
  return {
    handleStyle: styleSlider(theme),
    trackStyle: { backgroundColor: theme.colors.blue, height: 10 },
    railStyle: { backgroundColor: theme.colors.lightGrey, height: 10 },
  };
})``;

const styleSlider = (theme: ThemeType) => {
  return {
    borderColor: theme.colors.lightGrey,
    height: 28,
    width: 28,
    marginLeft: -7,
    marginTop: -9,
    backgroundColor: "white",
    boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px",
  };
};

export const ControlledSlider = ({ onValueSelect }: PropsType) => {
  const [sliderState, setSliderState] = useState<number>(1);

  const selectValue = (value: number) => {
    setSliderState(value);
    onValueSelect(value);
  };

  return (
    <Flex flexDirection="row" alignItems="center">
      <StyledSlider
        value={sliderState}
        min={1}
        max={100000}
        step={1}
        startPoint={1}
        onChange={(value) => {
          selectValue(Number(value));
        }}
      />
      <StyledInput
        value={Number(sliderState)}
        onChange={(value) => selectValue(Number(value.target.value))}
        maxLength={6}
        type="number"
      />
    </Flex>
  );
};
