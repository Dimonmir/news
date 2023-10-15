import styled from '@emotion/styled';

export const SCard = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  height: 400px;
  background-color: white;
  border-radius: 5px;
  height: max-content;

  .card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
  img {
    height: 200px;
  }
  .card__title {
    color: #999999;
  }

  .card__flexBox {
    width: 100%;
    display: flex;
    gap: 5px;
  }

  a {
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  overflow: hidden;
  text-overflow: ellipsis;

  .card__desc {
    text-align: center;
  }

  .containerLoader {
    display: flex;
    position: relative;
    top: 200px;
    justify-content: center;
  }
`;
