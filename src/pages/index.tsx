import { Layout, Card, ListCard, Title } from '../components';
import theme from '../theme';

const listOne = [
  { text: 'Alan', link: '/', badge: { text: '1', color: 'textLight' } },
  { text: 'Alan', link: '/', badge: { text: '4 new', color: 'accentGreen', invert: true } },
  { text: 'Alan', link: '/' },
  { text: 'Alan', link: '/', badge: { text: '14', color: 'textLight' } }
];

export default () => (
  <Layout title="Home">
    <Title>Glorious Giveaways!</Title>

    <Card margin={`${theme.sizes.gap} 0`}>
      <h2>This is my card</h2>
      <p>There are many like it, but this one is mine</p>
    </Card>

    <ListCard margin='50em' list={listOne} />
  </Layout>
)
