/**
 * A dot-notation based path string which yields key literals, allows
 * for the inclusion of the "." character in keys and square bracket notation
 * in path strings, promotes readability of path strings and provides other
 * useful utilities for reasoning and working with object paths.
*/
export default class PathNotation extends Array<string | number> {
    constructor(...path: (string | number | PathNotation)[]);
    /**
     * Root key of path.
    */
    readonly firstKey: string | number;
    /**
     * Terminal key of path.
    */
    readonly lastKey: string | number;
    readonly [Symbol.toStringTag]: string;
    slice(begin?: number, end?: number): PathNotation;
    splice(start?: number, deleteCount?: number, ...items: (string | number)[]): PathNotation;
    toString(): string;
    /**
     * Yields key literals from dot-notated path.
     * @note
     * When string representing positive integer is in square bracket notation,
     * the string is parsed into an integer.
     * ```
     * const pathKeys = Array.from(PathNotation.pathNotationToKeys("foo[2]"));
     * console.log(pathKeys[1] === 2); // true
     * ```
    */
    static pathNotationToKeys(path: string): IterableIterator<string | number>;
    /**
     * Returns dot-notated and square bracket notated path string.
     * @note
     * When key contains "." character or the key is a positive integer, the key
     * is formatted in square bracket notation.
     * ```
     * // Key with "." character
     * let pathStr = PathNotation.keysToPathNotation(['foo', 'bar.baz']);
     * console.log(pathStr); // "foo[bar.baz]"
     *
     * // Key that is positive integer
     * pathStr = PathNotation.keysToPathNotation(['foo', 2]);
     * console.log(pathStr); // "foo[2]"
     * ```
     */
    static keysToPathNotation(keys: Iterable<string | number>): string;
}
