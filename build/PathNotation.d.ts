declare const KEYS: unique symbol;
/**
 * A dot-notation based path string which yields key literals, allows
 * for the inclusion of "." character in keys, and provides other useful
 * utilities for reasoning and working with document paths.
*/
export default class PathNotation extends String {
    private readonly [KEYS];
    constructor(path: string | number | PathNotation | Iterable<string | number | PathNotation>);
    /**
     * Number of key literals in path.
    */
    readonly numKeys: number;
    /**
     * Root key of path.
    */
    readonly firstKey: string;
    /**
     * Terminal key of path.
    */
    readonly lastKey: string;
    readonly [Symbol.toStringTag]: string;
    /**
     * Yields key literals from path.
    */
    keys(): IterableIterator<string>;
    /**
     * Extracts a section of a path and returns it as a new [[PathNotation]],
     * without modifying the original path.
    */
    slicePath(beginKeyIndex: number, endKeyIndex?: number): PathNotation;
    [Symbol.iterator](): IterableIterator<string>;
    /**
     * Yields key literals from dot-notated path.
    */
    static pathNotationToKeys(path: string): IterableIterator<string>;
    /**
      Returns dot-notated path string.
    */
    static keysToPathNotation(keys: Iterable<string>): string;
}
export {};
