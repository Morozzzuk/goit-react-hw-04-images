import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalBox = styled.div`
  width: 75vw;
  height: 75vh;

  border-radius: 10px;
  overflow: hidden;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
