import styled from "styled-components";

type FlexType = {
  flexDirection?: string;
  flex?: string;
  alignItems?: "center" | "start" | "end";
};

export const Flex = styled.div<FlexType>`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 100%;
  flex: ${({ flex }) => flex || 1};
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  align-items: ${({ alignItems }) => alignItems || "start"};
  justify-content: space-between;
`;
