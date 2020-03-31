import * as React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from './Header/Header';

interface Props {
  title?: string
}

const Wrapper = styled.div`
width: 100vw;
`;
const Content = styled.div`
margin: 0 ${props => props.theme.sizes.gapXL};

@media (max-width: ${props => props.theme.sizes.laptop}) {
  margin: 0 ${props => props.theme.sizes.gapL};
}

@media (max-width: ${props => props.theme.sizes.tablet}) {
  margin: 0 ${props => props.theme.sizes.gap};
}
`;

const Footer = styled.footer`
background: ${props => props.theme.colors.primaryLight};
`

const Layout: React.SFC<Props> = ({ children, title = 'Giveaway' }) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style>
      {`
        body {
          margin: 0;
          font-family: Roboto, Arial, sans-serif;
          background: #FAFAFA;
        }

        * {
          box-sizing: border-box;
        }
      `}
      </style>
    </Head>
    <Header />
    <Wrapper>
      <Content>
        {children}
      </Content>
    </Wrapper>
    <Footer />
  </React.Fragment>
)

export default Layout;
