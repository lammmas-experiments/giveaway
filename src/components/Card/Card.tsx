import styled from 'styled-components';

interface CardProps {
  margin?: string;
}

const Card = styled.div<CardProps>`
background: white;
border: none;
border-radius: 2px;
display: inline-block;
position: relative;
box-shadow: 0 1px 2px 1px ${props => props.theme.colors.shadow};
padding: ${props => props.theme.sizes.gap};
margin: ${props => props.margin ? (props.margin in props.theme.sizes ? props.theme.sizes[props.margin] : props.margin) : '0'};
`;

/** @component */
export default Card;
