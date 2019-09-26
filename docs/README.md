**[path-notation](README.md)**


# Class: PathNotation

A dot-notation based path string which yields key literals, allows
for the inclusion of the "." character in keys and square bracket notation
in path strings, promotes readability of path strings and provides other
useful utilities for reasoning and working with object paths.

## Hierarchy

* Array‹string | number›

  * **PathNotation**

## Indexable

* \[ **n**: *number*\]: string | number

A dot-notation based path string which yields key literals, allows
for the inclusion of the "." character in keys and square bracket notation
in path strings, promotes readability of path strings and provides other
useful utilities for reasoning and working with object paths.

## Index

### Constructors

* [constructor](README.md#constructor)

### Properties

* [length](README.md#length)
* [Array](README.md#static-array)

### Accessors

* [__@toStringTag](README.md#__@tostringtag)
* [firstKey](README.md#firstkey)
* [lastKey](README.md#lastkey)

### Methods

* [__@iterator](README.md#__@iterator)
* [__@unscopables](README.md#__@unscopables)
* [concat](README.md#concat)
* [copyWithin](README.md#copywithin)
* [entries](README.md#entries)
* [every](README.md#every)
* [fill](README.md#fill)
* [filter](README.md#filter)
* [find](README.md#find)
* [findIndex](README.md#findindex)
* [flat](README.md#flat)
* [flatMap](README.md#flatmap)
* [forEach](README.md#foreach)
* [includes](README.md#includes)
* [indexOf](README.md#indexof)
* [join](README.md#join)
* [keys](README.md#keys)
* [lastIndexOf](README.md#lastindexof)
* [map](README.md#map)
* [pop](README.md#pop)
* [push](README.md#push)
* [reduce](README.md#reduce)
* [reduceRight](README.md#reduceright)
* [reverse](README.md#reverse)
* [shift](README.md#shift)
* [slice](README.md#slice)
* [some](README.md#some)
* [sort](README.md#sort)
* [splice](README.md#splice)
* [toLocaleString](README.md#tolocalestring)
* [toString](README.md#tostring)
* [unshift](README.md#unshift)
* [values](README.md#values)
* [keysToPathNotation](README.md#static-keystopathnotation)
* [pathNotationToKeys](README.md#static-pathnotationtokeys)

## Constructors

###  constructor

\+ **new PathNotation**(...`path`: string | number | [PathNotation](README.md)[]): *[PathNotation](README.md)*

**Parameters:**

Name | Type |
------ | ------ |
`...path` | string &#124; number &#124; [PathNotation](README.md)[] |

**Returns:** *[PathNotation](README.md)*

## Properties

###  length

• **length**: *number*

*Inherited from void*

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

___

### `Static` Array

▪ **Array**: *ArrayConstructor*

## Accessors

###  __@toStringTag

• **get __@toStringTag**(): *string*

**Returns:** *string*

___

###  firstKey

• **get firstKey**(): *string | number*

Root key of path.

**Returns:** *string | number*

___

###  lastKey

• **get lastKey**(): *string | number*

Terminal key of path.

**Returns:** *string | number*

## Methods

###  __@iterator

▸ **__@iterator**(): *IterableIterator‹string | number›*

*Inherited from void*

Iterator

**Returns:** *IterableIterator‹string | number›*

___

###  __@unscopables

▸ **__@unscopables**(): *object*

*Inherited from void*

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

___

###  concat

▸ **concat**(...`items`: ConcatArray‹string | number›[]): *string | number[]*

*Inherited from void*

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | ConcatArray‹string &#124; number›[] | Additional items to add to the end of array1.  |

**Returns:** *string | number[]*

▸ **concat**(...`items`: T | ConcatArray‹T›[]): *string | number[]*

*Inherited from void*

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T &#124; ConcatArray‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *string | number[]*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: number): *this*

*Inherited from void*

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | number | If target is negative, it is treated as length+target where length is the length of the array. |
`start` | number | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
`end?` | number | If not specified, length of the this object is used as its default value.  |

**Returns:** *this*

___

###  entries

▸ **entries**(): *IterableIterator‹[number, string | number]›*

*Inherited from void*

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *IterableIterator‹[number, string | number]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from void*

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.

▸ (`value`: string | number, `index`: number, `array`: string | number[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |
`index` | number |
`array` | string &#124; number[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: string | number, `start?`: number, `end?`: number): *this*

*Inherited from void*

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | string &#124; number | value to fill array section with |
`start?` | number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

###  filter

▸ **filter**<**S**>(`callbackfn`: function, `thisArg?`: any): *S[]*

*Inherited from void*

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: *string | number*

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: string | number, `index`: number, `array`: string | number[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |
`index` | number |
`array` | string &#124; number[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *S[]*

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *string | number[]*

*Inherited from void*

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: string | number, `index`: number, `array`: string | number[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |
`index` | number |
`array` | string &#124; number[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *string | number[]*

___

###  find

▸ **find**<**S**>(`predicate`: function, `thisArg?`: any): *S | undefined*

*Inherited from void*

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: *string | number*

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: string | number, `index`: number, `obj`: string | number[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`this` | void |
`value` | string &#124; number |
`index` | number |
`obj` | string &#124; number[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *S | undefined*

▸ **find**(`predicate`: function, `thisArg?`: any): *string | number | undefined*

*Inherited from void*

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: string | number, `index`: number, `obj`: string | number[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |
`index` | number |
`obj` | string &#124; number[] |

▪`Optional`  **thisArg**: *any*

**Returns:** *string | number | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from void*

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: string | number, `index`: number, `obj`: string | number[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |
`index` | number |
`obj` | string &#124; number[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  flat

▸ **flat**<**U**>(`this`: U[][][][][][][][], `depth`: 7): *U[]*

*Inherited from void*

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][][][][] | - |
`depth` | 7 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][][][][], `depth`: 6): *U[]*

*Inherited from void*

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][][][] | - |
`depth` | 6 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][][][], `depth`: 5): *U[]*

*Inherited from void*

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][][] | - |
`depth` | 5 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][][], `depth`: 4): *U[]*

*Inherited from void*

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][] | - |
`depth` | 4 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][], `depth`: 3): *U[]*

*Inherited from void*

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][] | - |
`depth` | 3 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][], `depth`: 2): *U[]*

*Inherited from void*

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][] | - |
`depth` | 2 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][], `depth?`: 1): *U[]*

*Inherited from void*

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][] | - |
`depth?` | 1 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[], `depth`: 0): *U[]*

*Inherited from void*

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[] | - |
`depth` | 0 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`depth?`: number): *any[]*

*Inherited from void*

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth. If no depth is provided, flat method defaults to the depth of 1.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`depth?` | number | The maximum recursion depth  |

**Returns:** *any[]*

___

###  flatMap

▸ **flatMap**<**U**, **This**>(`callback`: function, `thisArg?`: This): *U[]*

*Inherited from void*

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

**Type parameters:**

▪ **U**

▪ **This**

**Parameters:**

▪ **callback**: *function*

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

▸ (`this`: This, `value`: string | number, `index`: number, `array`: string | number[]): *U | ReadonlyArray‹U›*

**Parameters:**

Name | Type |
------ | ------ |
`this` | This |
`value` | string &#124; number |
`index` | number |
`array` | string &#124; number[] |

▪`Optional`  **thisArg**: *This*

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: string | number, `index`: number, `array`: string | number[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |
`index` | number |
`array` | string &#124; number[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: string | number, `fromIndex?`: number): *boolean*

*Inherited from void*

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | string &#124; number | The element to search for. |
`fromIndex?` | number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: string | number, `fromIndex?`: number): *number*

*Inherited from void*

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | string &#124; number | The value to locate in the array. |
`fromIndex?` | number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: string): *string*

*Inherited from void*

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *IterableIterator‹number›*

*Inherited from void*

Returns an iterable of keys in the array

**Returns:** *IterableIterator‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: string | number, `fromIndex?`: number): *number*

*Inherited from void*

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | string &#124; number | The value to locate in the array. |
`fromIndex?` | number | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.  |

**Returns:** *number*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from void*

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: string | number, `index`: number, `array`: string | number[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |
`index` | number |
`array` | string &#124; number[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  pop

▸ **pop**(): *string | number | undefined*

*Inherited from void*

Removes the last element from an array and returns it.

**Returns:** *string | number | undefined*

___

###  push

▸ **push**(...`items`: string | number[]): *number*

*Inherited from void*

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | string &#124; number[] | New elements of the Array.  |

**Returns:** *number*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *string | number*

*Inherited from void*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: string | number, `currentValue`: string | number, `currentIndex`: number, `array`: string | number[]): *string | number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string &#124; number |
`currentValue` | string &#124; number |
`currentIndex` | number |
`array` | string &#124; number[] |

**Returns:** *string | number*

▸ **reduce**(`callbackfn`: function, `initialValue`: string | number): *string | number*

*Inherited from void*

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: string | number, `currentValue`: string | number, `currentIndex`: number, `array`: string | number[]): *string | number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string &#124; number |
`currentValue` | string &#124; number |
`currentIndex` | number |
`array` | string &#124; number[] |

▪ **initialValue**: *string | number*

**Returns:** *string | number*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: string | number, `currentIndex`: number, `array`: string | number[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | string &#124; number |
`currentIndex` | number |
`array` | string &#124; number[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *string | number*

*Inherited from void*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: string | number, `currentValue`: string | number, `currentIndex`: number, `array`: string | number[]): *string | number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string &#124; number |
`currentValue` | string &#124; number |
`currentIndex` | number |
`array` | string &#124; number[] |

**Returns:** *string | number*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: string | number): *string | number*

*Inherited from void*

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: string | number, `currentValue`: string | number, `currentIndex`: number, `array`: string | number[]): *string | number*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | string &#124; number |
`currentValue` | string &#124; number |
`currentIndex` | number |
`array` | string &#124; number[] |

▪ **initialValue**: *string | number*

**Returns:** *string | number*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: string | number, `currentIndex`: number, `array`: string | number[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | string &#124; number |
`currentIndex` | number |
`array` | string &#124; number[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *string | number[]*

*Inherited from void*

Reverses the elements in an Array.

**Returns:** *string | number[]*

___

###  shift

▸ **shift**(): *string | number | undefined*

*Inherited from void*

Removes the first element from an array and returns it.

**Returns:** *string | number | undefined*

___

###  slice

▸ **slice**(`begin?`: number, `end?`: number): *[PathNotation](README.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`begin?` | number |
`end?` | number |

**Returns:** *[PathNotation](README.md)*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from void*

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.

▸ (`value`: string | number, `index`: number, `array`: string | number[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |
`index` | number |
`array` | string &#124; number[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: function): *this*

*Inherited from void*

Sorts an array.

**Parameters:**

▪`Optional`  **compareFn**: *function*

The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.

▸ (`a`: string | number, `b`: string | number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | string &#124; number |
`b` | string &#124; number |

**Returns:** *this*

___

###  splice

▸ **splice**(`start?`: number, `deleteCount?`: number, ...`items`: string | number[]): *[PathNotation](README.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`start?` | number |
`deleteCount?` | number |
`...items` | string &#124; number[] |

**Returns:** *[PathNotation](README.md)*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from void*

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Overrides void*

**Returns:** *string*

___

###  unshift

▸ **unshift**(...`items`: string | number[]): *number*

*Inherited from void*

Inserts new elements at the start of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | string &#124; number[] | Elements to insert at the start of the Array.  |

**Returns:** *number*

___

###  values

▸ **values**(): *IterableIterator‹string | number›*

*Inherited from void*

Returns an iterable of values in the array

**Returns:** *IterableIterator‹string | number›*

___

### `Static` keysToPathNotation

▸ **keysToPathNotation**(`keys`: Iterable‹string | number›): *string*

Returns dot-notated and square bracket notated path string.

**`note`** 
When key contains "." character or the key is a positive integer, the key
is formatted in square bracket notation.
```
// Key with "." character
let pathStr = PathNotation.keysToPathNotation(['foo', 'bar.baz']);
console.log(pathStr); // "foo[bar.baz]"

// Key that is positive integer
pathStr = PathNotation.keysToPathNotation(['foo', 2]);
console.log(pathStr); // "foo[2]"
```

**Parameters:**

Name | Type |
------ | ------ |
`keys` | Iterable‹string &#124; number› |

**Returns:** *string*

___

### `Static` pathNotationToKeys

▸ **pathNotationToKeys**(`path`: string): *IterableIterator‹string | number›*

Yields key literals from dot-notated path.

**`note`** 
When string representing positive integer is in square bracket notation,
the string is parsed into an integer.
```
const pathKeys = Array.from(PathNotation.pathNotationToKeys("foo[2]"));
console.log(pathKeys[1] === 2); // true
```

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *IterableIterator‹string | number›*