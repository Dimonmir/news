import styled from 'styled-components';

export const SNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5% 0 10%;
  align-items: center;
  font-size: 20px;
  width: 100%;
  height: 100vh;
  position: relative;
  background: #fff;
  font-family: 'Roboto, Arial, sans-serif';

  .status {
    font-size: 10em;
    z-index: 1;
  }

  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  .contant_box_404 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    z-index: 1;
  }
`;
