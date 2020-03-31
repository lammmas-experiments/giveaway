import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

interface CardProps {
  margin?: string;
}

interface ItemList {
  text?: string;
  link?: string;
  children?: JSX.Element[] | JSX.Element;
  badge?: {
    text: string;
    color?: string;
    invert?: boolean;
  };
}

interface ListProps {
  /** [{text: 'foo', link: '/foo', children: JSX, badge: {text: '1', color: 'primaryDark', invert: false}}] */
  list: ItemList[];
  margin?: string;
}

const ListCard = styled(Card)<CardProps>`
padding: 0;
overflow: hidden;
display: flex;
flex-direction: column;
margin: ${props => props.margin ? (props.margin in props.theme.sizes ? props.theme.sizes[props.margin] : props.margin) : '0'};

div + div {
  border-top: 1px solid ${props => props.theme.colors.xparent};
}
`;

const CardItem = styled.div`
transition: background-color .3s;
position: relative;

p, span, a, div {
  padding: 10px 8px;
  margin: 0;
  display: block;
}

a, a:visited {
  text-decoration: none;
  color: ${props => props.theme.colors.accentGreen};

  &:hover {
    background-color: ${props => props.theme.colors.xparent};
  }
}
`;

const getBadgeBgColor = (props) => {
  if (!('invert' in props) || !props.invert) return 'none';
  if (!('color' in props)) return 'none';

  if (props.color in props.theme.colors) return props.theme.colors[props.color];

  return props.color;
};
const getBadgeColor = (props) => {
  if ('invert' in props && props.invert) return props.theme.colors.background;
  if (!('color' in props)) return 'none';

  if (props.color in props.theme.colors) return props.theme.colors[props.color];

  return props.color;
};
const Badge = styled.div<{color?: string, invert?: boolean}>`
position: absolute;
right: 6px;
top: 0;
cursor: default;
text-align: center;
line-height: 1rem;
margin: 6px !important;
padding: 5px 8px !important;
font-size: 0.9em;
min-width: 1.5rem;
border-radius: 10rem;
background: ${getBadgeBgColor};
color: ${getBadgeColor};
`;

const createItem = (child, badge, key) => (
  <CardItem key={key}>
    { child }
    { badge && <Badge color={badge.color} invert={badge.invert}>{badge.text}</Badge> }
  </CardItem>);
const generateChildren = (list) => {
  const result = [];
  let key = 1;
  let badge;

  for (let itm of list) {
    if ('badge' in itm) badge = itm.badge;
    else badge = null;

    const content = 'children' in itm ? itm.children : ('text' in itm ? itm.text : '');

    if ('link' in itm) result.push(createItem(<a href={itm.link}>{content}</a>, badge, key));
    else if ('children' in itm) result.push(createItem(<div>{itm.children}</div>, badge, key));
    else result.push(createItem(<p>{content}</p>, badge, key));

    key += 1;
  }

  return result;
};

const Component = ({ list }: ListProps) => (
  <ListCard>
    { generateChildren(list) }
  </ListCard>
)

/** @component */
export default Component;
