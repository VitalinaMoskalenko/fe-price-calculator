import styled from "styled-components";

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fonts.size.body}px;
  color: ${({ theme }) => theme.colors.blue};
  margin: 0px;
  text-decoration: none;
`;
