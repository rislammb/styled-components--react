import styled, { css } from 'styled-components';

export default styled.button`
font-family: ${props => props.theme.font};
font-size: 1.3rem;
border: none;
padding: 3px 10px;
border-radius: 5px;
// background: ${props => (props.primary ? 'green' : 'red')};
${props =>
  props.color &&
  css`
    background: ${props => props.theme[props.color]};
  `};
color: #fff;
&:hover {
  background: blue;
}
`;
