import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

interface LinkProps {
  href: string;
  name: string;
  active?: boolean;
  /** @ignore */
  className?: string;
  /** @ignore */
  dark?: boolean;
}

interface NavProps {
  /** { href: string, name: string } */
  links: LinkProps[];
  dark?: boolean;
}

const NavLink = (props: LinkProps) => {
  const router = useRouter();
  const active = props.active || (router && router.pathname === props.href);
  const cls = `${props.className}${active ? ' active' : ''}`;

  return (
    <Link href={props.href} passHref>
      <a className={cls}>{props.name}</a>
    </Link>
  );
}

const StyledLink = styled(NavLink)<LinkProps>`
text-decoration: none;
text-transform: uppercase;
padding: 5px 8px;
line-height: 2.4rem;
transition: background-color .3s;
color: ${props => props.theme.colors[props.dark ? 'primaryLight' : 'primaryDark']};

&:hover, &.active:hover {
  background-color: ${props => props.theme.colors.xparent};
  color: ${props => props.dark ? 'white' : 'black'};
}

&.active {
  background-color: ${props => props.theme.colors.xparent};
  color: ${props => props.theme.colors[props.dark ? 'primaryLight' : 'primaryDark']};
}
`;

const Component = (props: NavProps) => (
  <nav>
    { props.links.map(link => <StyledLink dark={props.dark} key={link.name} {...link} />) }
  </nav>
);

/** @component */
export default Component;
