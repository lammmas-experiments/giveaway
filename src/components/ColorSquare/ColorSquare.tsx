import styled from 'styled-components'

interface SquareProps {
  /* theme color */
  color: string,
  /* invert text color */
  inverse?: boolean
}

const ColorSquare = styled.div<SquareProps>`
width: 100px;
height: 100px;
background: ${props => props.color in props.theme.colors ?
  props.theme.colors[props.color] :
  props.color || 'white'};
display: inline-block;
margin: 1px;
padding: 3px 2px;
text-align: center;

p {
  color: ${props => props.inverse ? '#c9c9c9' : '#353535'};
}
`

/** @component */
export default ColorSquare;
