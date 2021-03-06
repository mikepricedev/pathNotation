import PathNotation from './src/PathNotation';

const path = new PathNotation('foo', 'bar', 2, '10','baz\\.qux');

console.log(`Path notation string: ${path}`); 
// Path notation string: foo.bar[2].10[baz.qux]

console.log(`Number of keys in the path: ${path.length}`);
// Number of keys in the path: 5

console.log(`First key in the path: ${path.firstKey}`);
// First key in the path: foo

console.log(`Last key in the path: ${path.lastKey}`);
// Last key in the path: baz.qux

// Create a PathNotation instance from a path notation string.
const pathStr = new PathNotation('foo.bar[2].10[baz.qux]');

console.log('\nKeys')
for(const key of pathStr) {
  console.log(`  Key: ${key}; Type ${typeof key}`);
}
// Keys
//   Key: foo; Type string
//   Key: bar; Type string
//   Key: 2; Type number
//   Key: 10; Type string
//   Key: baz.qux; Type string