const numbers = [1, 2, 3, 4, 5, 6];

//Keys help react identify which elements have changed in a list of elements
// Keys must only be unique among sibling elements.
const listItems = numbers.map((number) => (
  <li key={number.toString()}>{number}</li>
));

export default listItems;
