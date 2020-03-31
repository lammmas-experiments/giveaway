import styled from 'styled-components'
import Nav from '../Nav/Nav'

const links = [
  {
    href: '/',
    name: 'Home'
  },
  {
    href: '/create',
    name: 'Create'
  },
  {
    href: '/explore',
    name: 'Explore'
  },
  {
    href: '/history',
    name: 'History'
  },
  {
    href: '/profile',
    name: 'Profile'
  }
];

const StyledHeader = styled.header`
background: ${props => props.theme.colors.primaryDark};
color: ${props => props.theme.colors.primaryLight};
display: flex;
justify-content: space-between;
align-items: stretch;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

nav {
  display: flex;
}`;

const HomeLink = styled.a`
font-size: 2.1rem;
text-decoration: none;
padding: 5px 8px;
color: white;
`;

const Header = () => (<StyledHeader>
  <HomeLink href="/">GIVEAWAY</HomeLink>
  <Nav links={links} dark={true} />
</StyledHeader>);

/** @component */
export default Header;
