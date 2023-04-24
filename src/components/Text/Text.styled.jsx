import styled from '@emotion/styled';

export const Text = styled.p`
  font-size: 30px;
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};
`;
