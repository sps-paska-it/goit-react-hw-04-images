import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalStyled = styled.div`
  max-width: calc(100vw - 300px);
  max-height: calc(100vh - 0px);
`;
