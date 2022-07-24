import React from "react";

import "jest-styled-components";
import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";

import { RadioButton } from "../RadioButton";
import { TestWrapper } from "../TestWrapper";

describe("RadioButton tests", () => {
  it("should display proper text", () => {
    const onChangeClickMock = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <RadioButton text={"New"} onChange={onChangeClickMock} />
      </TestWrapper>,
    );
    const radioButtonText = getByText("New");

    expect(radioButtonText).toBeInTheDocument();
  });

  it("should call change method", () => {
    const onChangeClickMock = jest.fn();
    const { getByDisplayValue, getByTestId } = render(
      <TestWrapper>
        <RadioButton text="text" value="" onChange={onChangeClickMock} />
      </TestWrapper>,
    );
    const radioButton = getByTestId("radioButton");

    fireEvent.change(radioButton, {
      target: { value: "test" },
    });

    const displayValueAfterChange = getByDisplayValue("test");

    expect(displayValueAfterChange).toBeInTheDocument();
  });
});
