# PathNotation
A dot-notation based path string which yields key literals, allows
for the inclusion of "." character in keys, and provides other useful
utilities for reasoning and working with document paths.

## [Docs](docs/README.md "PathNotation Documentation")

## Example:
```
import PathNotation from 'path-notation':

const path = new PathNotation('foo.bar.baz\\.baz');

console.log(`Path String: ${path}`); // Path String: foo.bar.baz\.baz
console.log(`First key: ${path.firstKey}); // First key: foo
console.log(`Last Key: ${path.lastKey}`; // Last Key: baz.baz
console.log(`Number of Keys: ${path.numKeys}`); // 3
console.log(`Sub Path: ${path.slicePath(0,2)}`); // foo.bar
console.log(`Keys: ${Array.from(path.keys())}`); // foo,bar,baz.baz
```
