import styled from "styled-components";

const BodyText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body}px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0px;
`;

const SmallBodyText = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.smallBody}px;
  color: ${({ theme }) => theme.colors.black};
`;

export { BodyText, SmallBodyText };
