import React from "react";

import "jest-styled-components";
import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";

import { Button } from "../Button";
import { TestWrapper } from "../TestWrapper";

describe("Button Tests", () => {
  it("should display proper text", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <Button text="Click me" onClick={onClickMock} />
      </TestWrapper>,
    );
    const textElement = getByText("Click me");

    expect(textElement).toBeInTheDocument();
  });

  it("should contain passed styles", () => {
    const newStyle = { backgroundColor: "orange" };
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <TestWrapper>
        <Button text="text" onClick={onClickMock} style={newStyle} />
      </TestWrapper>,
    );
    const buttonElement = getByTestId("button");

    expect(buttonElement).toHaveStyle(newStyle);
  });

  it("should call one click method", () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <TestWrapper>
        <Button text="text" onClick={onClickMock} />
      </TestWrapper>,
    );
    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
