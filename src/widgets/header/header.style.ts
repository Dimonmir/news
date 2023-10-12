import styled, { withTheme } from 'styled-components';

const SContainer = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

export default withTheme(SContainer);
