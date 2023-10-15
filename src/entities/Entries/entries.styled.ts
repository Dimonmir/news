import styled from '@emotion/styled';

interface ISCard {
  show: boolean;
}

export const SCard = styled.div<ISCard>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  background-color: white;
  border-radius: 5px;

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
    display: flex;
    gap: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card__desc {
    text-align: center;
  }
`;
