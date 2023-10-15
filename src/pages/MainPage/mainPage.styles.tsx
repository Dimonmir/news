import styled from '@emotion/styled';

export const SMainPage = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .ContainerCategories {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .ContainerEntries {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .containerLoader {
    display: flex;
    position: relative;
    top: 200px;
    justify-content: center;
  }
`;
