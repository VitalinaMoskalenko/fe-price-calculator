import React from "react";

import "jest-styled-components";
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { Select } from "../Select";
import { TestWrapper } from "../TestWrapper";

describe("Select tests", () => {
  it("should display proper value", () => {
    const onChangeClickMock = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <Select emptyText={"emptyText"} data={[]} onValueSelect={onChangeClickMock} />
      </TestWrapper>,
    );
    const selectValue = getByText("emptyText");

    expect(selectValue).toBeInTheDocument();
  });
});
