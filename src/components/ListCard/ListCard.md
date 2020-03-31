```jsx
const span = <span>SPAN</span>;
const listOne = [{ text: 'Foo' }, { text: 'Bar' }, { text: 'Baz' }];
const listTwo = [{ text: 'Foo' }, { text: 'Linked', link: '/' }, { children: span }];
const listThree = [{ text: 'Link 1', link: '/link1'}, { text: 'Link 2', link: '/link2', badge: { text: '555' } }];
const listFour = [
  { text: 'Foo', badge: { text: '1' } },
  { text: 'Bar', badge: { text: '2', color: 'error' } },
  { text: 'Baz', badge: { text: '3', color: 'text', invert: true }
}];
<div>
  <div style={{padding: '2px 0'}}>
    <ListCard list={listOne} />
  </div>
  <div style={{padding: '2px 0'}}>
    <ListCard list={listTwo} />
  </div>
  <div style={{padding: '2px 0'}}>
    <ListCard list={listThree} />
  </div>
  <div style={{padding: '2px 0'}}>
    <ListCard list={listFour} />
  </div>
</div>
```
