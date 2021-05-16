import styled from 'styled-components';

const StyledLogin = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: black;
`;

const StyledButton = styled.button`
  height: 4rem;
  min-width: 12rem;
  margin: 0;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props) => props.theme.colorPrimary};
  background-color: ${(props) => props.theme.colorBackgroundPrimary};
  font-size: 1.3rem;
  font-weight: bold;
  color: hsl(180, 77%, 90%);
  cursor: pointer;
  &:active {
    background-color: red;
  }
`;

export { StyledButton, StyledLogin };
