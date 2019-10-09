"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IS_INDEX_REGEX = /^(0|[1-9][0-9]*)$/;
/**
 * A dot-notation based path string which yields key literals, allows
 * for the inclusion of the "." character in keys and square bracket notation
 * in path strings, promotes readability of path strings and provides other
 * useful utilities for reasoning and working with object paths.
*/
class PathNotation extends Array {
    constructor(...path) {
        super();
        const keys = [];
        for (const constructArg of path) {
            switch (typeof constructArg) {
                case 'string':
                    keys.push(...PathNotation.pathNotationToKeys(constructArg));
                    break;
                case 'number':
                    keys.push(constructArg);
                    break;
                default:
                    keys.push(...constructArg);
                    break;
            }
        }
        this.push(...keys);
    }
    //Accessors
    /**
     * Root key of path.
    */
    get firstKey() {
        return this[0];
    }
    /**
     * Terminal key of path.
    */
    get lastKey() {
        return this[this.length - 1];
    }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
    //Methods
    slice(begin, end) {
        return new PathNotation(...super.slice(begin, end));
    }
    splice(start, deleteCount, ...items) {
        return new PathNotation(...super.splice(start, deleteCount, ...items));
    }
    toString() {
        return PathNotation.keysToPathNotation(this);
    }
    /**
     * Yields key literals from dot-notated path.
     * @note
     * When string representing positive integer is in square bracket notation,
     * the string is parsed into an integer.
     * ```
     * const pathKeys = Array.from(PathNotation.pathNotationToKeys("foo[2]"));
     * console.log(pathKeys[1] === 2); // true
     * ```
     * @note
     * Characters ".", "\\", and, "[" are escaped with double backslashes outside
     * of square bracket notation and the character "]" is escaped with double
     * backslashes inside of square bracket notation.  In all other cases double
     * backslashes are parsed as a single slash in the path. This allows for the
     * "\\" character in paths and to pass double backslash escaping to consumers
     * of [[PathNotation]].
    */
    static *pathNotationToKeys(path) {
        let key = '';
        let squareBracket = false;
        for (let i = 0, len = path.length; i < len; i++) {
            const char = path[i];
            // Escape char
            if (char === '\\') {
                const nextIndex = i + 1;
                // Last char ignore
                if (nextIndex === len) {
                    key += char;
                    continue;
                }
                const nextChar = path[nextIndex];
                // The only escapable chars in square bracket notation is ']'
                if (squareBracket) {
                    if (nextChar === ']') {
                        // add nextChar and increment i so nextChar is skipped next loop
                        key += nextChar;
                        i++;
                    }
                    else {
                        key += char;
                    }
                    continue;
                }
                // The only escapable chars outside of square bracket notation are 
                // '\', '.', and '[' 
                switch (nextChar) {
                    // add nextChar and increment i so nextChar is skipped next loop
                    case '.':
                    case '[':
                    case '\\':
                        key += nextChar;
                        i++;
                        break;
                    default:
                        key += char;
                }
                // Open square bracket
            }
            else if (char === '[' && squareBracket === false) {
                squareBracket = true;
                if (key.length > 0) {
                    yield key;
                    key = '';
                }
                // Close square bracket, yield and reset key
            }
            else if (char === ']' && squareBracket) {
                squareBracket = false;
                if (key.length > 0) {
                    yield IS_INDEX_REGEX.test(key) ? Number.parseInt(key) : key;
                    key = '';
                }
                // Key terminator, yield key and reset
            }
            else if (char === '.' && squareBracket === false) {
                if (key.length > 0) {
                    yield key;
                    key = '';
                }
                // Add char to key
            }
            else {
                key += char;
            }
        }
        //Yield terminal key
        if (key.length > 0) {
            yield key;
        }
    }
    /**
     * Returns dot-notated and square bracket notated path string.
     * @note
     * When a key contains the "." character, the "\\" character, or the key is a
     * positive integer, the key is formatted in square bracket notation.
     * ```
     * // Key with "." character
     * let pathStr = PathNotation.keysToPathNotation(['foo', 'bar.baz']);
     * console.log(pathStr); // "foo[bar.baz]"
     *
     * // Key with "\" character
     * pathStr = PathNotation.keysToPathNotation(['foo', 'bar\\baz']);
     * console.log(pathStr); // "foo[bar\baz]"
     *
     * // Key that is positive integer
     * pathStr = PathNotation.keysToPathNotation(['foo', 2]);
     * console.log(pathStr); // "foo[2]"
     * ```
     * @note
     * When a key is formatted with square bracket notation due to a "." or "\\"
     * character and it contains a "]" character.  The "]" is escaped.
     * ```
     * const pathStr = PathNotation.keysToPathNotation(['foo', 'bar.baz]qux']);
     * console.log(pathStr); // "foo[bar.baz\]qux]"
     * ```
     */
    static keysToPathNotation(keys) {
        const keysIter = keys[Symbol.iterator]();
        // Handle first key
        let keysIterResult = keysIter.next();
        // Empty keys iterable
        if (keysIterResult.done) {
            return '';
        }
        let pathNotation;
        let key = keysIterResult.value;
        if (typeof key === 'number') {
            pathNotation = Number.isInteger(key) && key > -1 ? `[${key}]`
                : key.toString();
        }
        else if (key.indexOf('.') > -1 || key.indexOf('\\') > -1) {
            // Escape closing square brackets that are apart of path
            key = key.split(']').join('\\]');
            pathNotation = `[${key}]`;
        }
        else {
            pathNotation = key;
        }
        // Handle remaining keys
        keysIterResult = keysIter.next();
        while (!keysIterResult.done) {
            key = keysIterResult.value;
            if (typeof key === 'number') {
                if (Number.isInteger(key) && key > -1) {
                    pathNotation = `${pathNotation}[${key}]`;
                }
                else {
                    pathNotation = `${pathNotation}.${key}`;
                }
            }
            else if (key.indexOf('.') > -1 || key.indexOf('\\') > -1) {
                // Escape closing square brackets that are apart of path
                key = key.split(']').join('\\]');
                pathNotation = `${pathNotation}[${key}]`;
            }
            else {
                pathNotation = `${pathNotation}.${key}`;
            }
            keysIterResult = keysIter.next();
        }
        return pathNotation;
    }
}
exports.default = PathNotation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aE5vdGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1BhdGhOb3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sY0FBYyxHQUFHLG1CQUFtQixDQUFDO0FBRTNDOzs7OztFQUtFO0FBQ0YsTUFBcUIsWUFBYSxTQUFRLEtBQXNCO0lBRTlELFlBQVksR0FBRyxJQUF1QztRQUlwRCxLQUFLLEVBQUUsQ0FBQztRQUVSLE1BQU0sSUFBSSxHQUF1QixFQUFFLENBQUM7UUFFcEMsS0FBSSxNQUFNLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFFOUIsUUFBTyxPQUFPLFlBQVksRUFBRTtnQkFFMUIsS0FBSyxRQUFRO29CQUVYLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDNUQsTUFBTTtnQkFFUixLQUFLLFFBQVE7b0JBRVgsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDeEIsTUFBTTtnQkFFUjtvQkFFRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7b0JBQzNCLE1BQU07YUFHVDtTQUVGO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRXJCLENBQUM7SUFFRCxXQUFXO0lBQ1g7O01BRUU7SUFDRixJQUFJLFFBQVE7UUFFVixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqQixDQUFDO0lBRUQ7O01BRUU7SUFDRixJQUFJLE9BQU87UUFFVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRS9CLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUV0QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBRS9CLENBQUM7SUFFRCxTQUFTO0lB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