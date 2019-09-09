**[path-notation](README.md)**

› [PathNotation](README.md)

# Class: PathNotation

A dot-notation based path string which yields key literals, allows
for the inclusion of "." character in keys, and provides other useful
utilities for reasoning and working with document paths.

## Hierarchy

* String

  * **PathNotation**

## Indexable

* \[ **index**: *number*\]: string

A dot-notation based path string which yields key literals, allows
for the inclusion of "." character in keys, and provides other useful
utilities for reasoning and working with document paths.

## Index

### Constructors

* [constructor](README.md#constructor)

### Properties

* [length](README.md#length)
* [String](README.md#static-string)

### Accessors

* [__@toStringTag](README.md#__@tostringtag)
* [firstKey](README.md#firstkey)
* [lastKey](README.md#lastkey)
* [numKeys](README.md#numkeys)

### Methods

* [__@iterator](README.md#__@iterator)
* [anchor](README.md#anchor)
* [big](README.md#big)
* [blink](README.md#blink)
* [bold](README.md#bold)
* [charAt](README.md#charat)
* [charCodeAt](README.md#charcodeat)
* [codePointAt](README.md#codepointat)
* [concat](README.md#concat)
* [endsWith](README.md#endswith)
* [fixed](README.md#fixed)
* [fontcolor](README.md#fontcolor)
* [fontsize](README.md#fontsize)
* [includes](README.md#includes)
* [indexOf](README.md#indexof)
* [italics](README.md#italics)
* [keys](README.md#keys)
* [lastIndexOf](README.md#lastindexof)
* [link](README.md#link)
* [localeCompare](README.md#localecompare)
* [match](README.md#match)
* [normalize](README.md#normalize)
* [padEnd](README.md#padend)
* [padStart](README.md#padstart)
* [repeat](README.md#repeat)
* [replace](README.md#replace)
* [search](README.md#search)
* [slice](README.md#slice)
* [slicePath](README.md#slicepath)
* [small](README.md#small)
* [split](README.md#split)
* [startsWith](README.md#startswith)
* [strike](README.md#strike)
* [sub](README.md#sub)
* [substr](README.md#substr)
* [substring](README.md#substring)
* [sup](README.md#sup)
* [toLocaleLowerCase](README.md#tolocalelowercase)
* [toLocaleUpperCase](README.md#tolocaleuppercase)
* [toLowerCase](README.md#tolowercase)
* [toString](README.md#tostring)
* [toUpperCase](README.md#touppercase)
* [trim](README.md#trim)
* [trimEnd](README.md#trimend)
* [trimLeft](README.md#trimleft)
* [trimRight](README.md#trimright)
* [trimStart](README.md#trimstart)
* [valueOf](README.md#valueof)
* [keysToPathNotation](README.md#static-keystopathnotation)
* [pathNotationToKeys](README.md#static-pathnotationtokeys)

## Constructors

###  constructor

\+ **new PathNotation**(`path`: string | number | [PathNotation](README.md) | Iterable‹string | number | [PathNotation](README.md)›): *[PathNotation](README.md)*

*Defined in [PathNotation.ts:9](https://github.com/raptor9g/pathNotation/blob/38b5148/src/PathNotation.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string &#124; number &#124; [PathNotation](README.md) &#124; Iterable‹string &#124; number &#124; [PathNotation](README.md)› |

**Returns:** *[PathNotation](README.md)*

## Properties

###  length

• **length**: *number*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:501

Returns the length of a String object.

___

### `Static` String

▪ **String**: *StringConstructor*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:527

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

## Accessors

###  __@toStringTag

• **get __@toStringTag**(): *string*

*Defined in [PathNotation.ts:89](https://github.com/raptor9g/pathNotation/blob/38b5148/src/PathNotation.ts#L89)*

**Returns:** *string*

___

###  firstKey

• **get firstKey**(): *string*

*Defined in [PathNotation.ts:74](https://github.com/raptor9g/pathNotation/blob/38b5148/src/PathNotation.ts#L74)*

Root key of path.

**Returns:** *string*

___

###  lastKey

• **get lastKey**(): *string*

*Defined in [PathNotation.ts:83](https://github.com/raptor9g/pathNotation/blob/38b5148/src/PathNotation.ts#L83)*

Terminal key of path.

**Returns:** *string*

___

###  numKeys

• **get numKeys**(): *number*

*Defined in [PathNotation.ts:65](https://github.com/raptor9g/pathNotation/blob/38b5148/src/PathNotation.ts#L65)*

Number of key literals in path.

**Returns:** *number*

## Methods

###  __@iterator

▸ **__@iterator**(): *IterableIterator‹string›*

*Overrides void*

*Defined in [PathNotation.ts:115](https://github.com/raptor9g/pathNotation/blob/38b5148/src/PathNotation.ts#L115)*

**Returns:** *IterableIterator‹string›*

___

###  anchor

▸ **anchor**(`name`: string): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:460

Returns an <a> HTML anchor element and sets the name attribute to the text value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string |   |

**Returns:** *string*

___

###  big

▸ **big**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:463

Returns a <big> HTML element

**Returns:** *string*

___

###  blink

▸ **blink**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:466

Returns a <blink> HTML element

**Returns:** *string*

___

###  bold

▸ **bold**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:469

Returns a <b> HTML element

**Returns:** *string*

___

###  charAt

▸ **charAt**(`pos`: number): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:402

Returns the character at the specified index.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pos` | number | The zero-based index of the desired character.  |

**Returns:** *string*

___

###  charCodeAt

▸ **charCodeAt**(`index`: number): *number*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:408

Returns the Unicode value of the character at the specified location.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.  |

**Returns:** *number*

___

###  codePointAt

▸ **codePointAt**(`pos`: number): *number | undefined*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:408

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

**Parameters:**

Name | Type |
------ | ------ |
`pos` | number |

**Returns:** *number | undefined*

___

###  concat

▸ **concat**(...`strings`: string[]): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:414

Returns a string that contains the concatenation of two or more strings.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...strings` | string[] | The strings to append to the end of the string.  |

**Returns:** *string*

___

###  endsWith

▸ **endsWith**(`searchString`: string, `endPosition?`: number): *boolean*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:424

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.

**Parameters:**

Name | Type |
------ | ------ |
`searchString` | string |
`endPosition?` | number |

**Returns:** *boolean*

___

###  fixed

▸ **fixed**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:472

Returns a <tt> HTML element

**Returns:** *string*

___

###  fontcolor

▸ **fontcolor**(`color`: string): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:475

Returns a <font> HTML element and sets the color attribute value

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *string*

___

###  fontsize

▸ **fontsize**(`size`: number): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:478

Returns a <font> HTML element and sets the size attribute value

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *string*

▸ **fontsize**(`size`: string): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:481

Returns a <font> HTML element and sets the size attribute value

**Parameters:**

Name | Type |
------ | ------ |
`size` | string |

**Returns:** *string*

___

###  includes

▸ **includes**(`searchString`: string, `position?`: number): *boolean*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:417

Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchString` | string | search string |
`position?` | number | If position is undefined, 0 is assumed, so as to search all of the String.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchString`: string, `position?`: number): *number*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:421

Returns the position of the first occurrence of a substring.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchString` | string | The substring to search for in the string |
`position?` | number | The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.  |

**Returns:** *number*

___

###  italics

▸ **italics**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:484

Returns an <i> HTML element

**Returns:** *string*

___

###  keys

▸ **keys**(): *IterableIterator‹string›*

*Defined in [PathNotation.ts:99](https://github.com/raptor9g/pathNotation/blob/38b5148/src/PathNotation.ts#L99)*

Yields key literals from path.

**Returns:** *IterableIterator‹string›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchString`: string, `position?`: number): *number*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:428

Returns the last occurrence of a substring in the string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchString` | string | The substring to search for. |
`position?` | number | The index at which to begin searching. If omitted, the search begins at the end of the string.  |

**Returns:** *number*

___

###  link

▸ **link**(`url`: string): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:487

Returns an <a> HTML element and sets the href attribute value

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

###  localeCompare

▸ **localeCompare**(`that`: string): *number*

*Inherited from void*

*Overrides void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:434

Determines whether two strings are equivalent in the current locale.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`that` | string | String to compare to target string  |

**Returns:** *number*

___

###  match

▸ **match**(`regexp`: string | RegExp): *RegExpMatchArray | null*

*Inherited from void*

*Overrides void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:440

Matches a string with a regular expression, and returns an array containing the results of that search.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`regexp` | string &#124; RegExp | A variable name or string literal containing the regular expression pattern and flags.  |

**Returns:** *RegExpMatchArray | null*

___

###  normalize

▸ **normalize**(`form`: "NFC" | "NFD" | "NFKC" | "NFKD"): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:432

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`form` | "NFC" &#124; "NFD" &#124; "NFKC" &#124; "NFKD" | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC"  |

**Returns:** *string*

▸ **normalize**(`form?`: string): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:440

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`form?` | string | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC"  |

**Returns:** *string*

___

###  padEnd

▸ **padEnd**(`maxLength`: number, `fillString?`: string): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2017.string.d.ts:46

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maxLength` | number | The length of the resulting string once the current string has been padded.        If this parameter is smaller than the current string's length, the current string will be returned as it is.  |
`fillString?` | string | The string to pad the current string with.        If this string is too long, it will be truncated and the left-most part will be applied.        The default value for this parameter is " " (U+0020).  |

**Returns:** *string*

___

###  padStart

▸ **padStart**(`maxLength`: number, `fillString?`: string): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2017.string.d.ts:33

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`maxLength` | number | The length of the resulting string once the current string has been padded.        If this parameter is smaller than the current string's length, the current string will be returned as it is.  |
`fillString?` | string | The string to pad the current string with.        If this string is too long, it will be truncated and the left-most part will be applied.        The default value for this parameter is " " (U+0020).  |

**Returns:** *string*

___

###  repeat

▸ **repeat**(`count`: number): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:447

Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`count` | number | number of copies to append  |

**Returns:** *string*

___

###  replace

▸ **replace**(`searchValue`: string | RegExp, `replaceValue`: string): *string*

*Inherited from void*

*Overrides void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:447

Replaces text in a string, using a regular expression or search string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchValue` | string &#124; RegExp | A string to search for. |
`replaceValue` | string | A string containing the text to replace for every successful match of searchValue in this string.  |

**Returns:** *string*

▸ **replace**(`searchValue`: string | RegExp, `replacer`: function): *string*

*Inherited from void*

*Overrides void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:454

Replaces text in a string, using a regular expression or search string.

**Parameters:**

▪ **searchValue**: *string | RegExp*

A string to search for.

▪ **replacer**: *function*

A function that returns the replacement text.

▸ (`substring`: string, ...`args`: any[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`substring` | string |
`...args` | any[] |

**Returns:** *string*

___

###  search

▸ **search**(`regexp`: string | RegExp): *number*

*Inherited from void*

*Overrides void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:460

Finds the first substring match in a regular expression search.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`regexp` | string &#124; RegExp | The regular expression pattern and applicable flags.  |

**Returns:** *number*

___

###  slice

▸ **slice**(`start?`: number, `end?`: number): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:468

Returns a section of a string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | number | The index to the beginning of the specified portion of stringObj. |
`end?` | number | The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.  |

**Returns:** *string*

___

###  slicePath

▸ **slicePath**(`beginKeyIndex`: number, `endKeyIndex?`: number): *[PathNotation](README.md)*

*Defined in [PathNotation.ts:109](https://github.com/raptor9g/pathNotation/blob/38b5148/src/PathNotation.ts#L109)*

Extracts a section of a path and returns it as a new [PathNotation](README.md),
without modifying the original path.

**Parameters:**

Name | Type |
------ | ------ |
`beginKeyIndex` | number |
`endKeyIndex?` | number |

**Returns:** *[PathNotation](README.md)*

___

###  small

▸ **small**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:490

Returns a <small> HTML element

**Returns:** *string*

___

###  split

▸ **split**(`separator`: string | RegExp, `limit?`: number): *string[]*

*Inherited from void*

*Overrides void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:475

Split a string into substrings using the specified separator and return them as an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator` | string &#124; RegExp | A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
`limit?` | number | A value used to limit the number of elements returned in the array.  |

**Returns:** *string[]*

___

###  startsWith

▸ **startsWith**(`searchString`: string, `position?`: number): *boolean*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:454

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.

**Parameters:**

Name | Type |
------ | ------ |
`searchString` | string |
`position?` | number |

**Returns:** *boolean*

___

###  strike

▸ **strike**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:493

Returns a <strike> HTML element

**Returns:** *string*

___

###  sub

▸ **sub**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:496

Returns a <sub> HTML element

**Returns:** *string*

___

###  substr

▸ **substr**(`from`: number, `length?`: number): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:509

Gets a substring beginning at the specified location and having the specified length.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`from` | number | The starting position of the desired substring. The index of the first character in the string is zero. |
`length?` | number | The number of characters to include in the returned substring.  |

**Returns:** *string*

___

###  substring

▸ **substring**(`start`: number, `end?`: number): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:483

Returns the substring at the specified location within a String object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based index number indicating the beginning of the substring. |
`end?` | number | Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.  |

**Returns:** *string*

___

###  sup

▸ **sup**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:499

Returns a <sup> HTML element

**Returns:** *string*

___

###  toLocaleLowerCase

▸ **toLocaleLowerCase**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:489

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

**Returns:** *string*

___

###  toLocaleUpperCase

▸ **toLocaleUpperCase**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:495

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

**Returns:** *string*

___

###  toLowerCase

▸ **toLowerCase**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:486

Converts all the alphabetic characters in a string to lowercase.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:396

Returns a string representation of a string.

**Returns:** *string*

___

###  toUpperCase

▸ **toUpperCase**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:492

Converts all the alphabetic characters in a string to uppercase.

**Returns:** *string*

___

###  trim

▸ **trim**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:498

Removes the leading and trailing white space and line terminator characters from a string.

**Returns:** *string*

___

###  trimEnd

▸ **trimEnd**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.string.d.ts:23

Removes the trailing white space and line terminator characters from a string.

**Returns:** *string*

___

###  trimLeft

▸ **trimLeft**(): *string*

*Inherited from void*

*Overrides void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.string.d.ts:29

Removes the trailing white space and line terminator characters from a string.

**Returns:** *string*

___

###  trimRight

▸ **trimRight**(): *string*

*Inherited from void*

*Overrides void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.string.d.ts:32

Removes the leading white space and line terminator characters from a string.

**Returns:** *string*

___

###  trimStart

▸ **trimStart**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.string.d.ts:26

Removes the leading white space and line terminator characters from a string.

**Returns:** *string*

___

###  valueOf

▸ **valueOf**(): *string*

*Inherited from void*

Defined in /Users/michaelprice/Development/moduels/pathNotation/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:512

Returns the primitive value of the specified object.

**Returns:** *string*

___

### `Static` keysToPathNotation

▸ **keysToPathNotation**(`keys`: Iterable‹string›): *string*

*Defined in [PathNotation.ts:169](https://github.com/raptor9g/pathNotation/blob/38b5148/src/PathNotation.ts#L169)*

Returns dot-notated path string.

**Parameters:**

Name | Type |
------ | ------ |
`keys` | Iterable‹string› |

**Returns:** *string*

___

### `Static` pathNotationToKeys

▸ **pathNotationToKeys**(`path`: string): *IterableIterator‹string›*

*Defined in [PathNotation.ts:124](https://github.com/raptor9g/pathNotation/blob/38b5148/src/PathNotation.ts#L124)*

Yields key literals from dot-notated path.

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *IterableIterator‹string›*