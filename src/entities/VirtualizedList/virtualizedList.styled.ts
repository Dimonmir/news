import styled from '@emotion/styled';

export const ContainerList = styled.div`
  display: grid;
  height: 68vh;
  overflow-y: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  .containerLoader {
    display: flex;
    position: relative;
    top: 200px;
    justify-content: center;
  }
`;
