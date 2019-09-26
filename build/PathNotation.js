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
    */
    static *pathNotationToKeys(path) {
        let key = '';
        let escaped = false;
        let squareBracket = false;
        for (const char of path) {
            // Escape char
            if (char === '\\' && !escaped) {
                escaped = true;
                // Char is escaped, add to key without further checks
            }
            else if (escaped) {
                key += char;
                escaped = false;
                // Open square bracket, yield and reset key
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
        else {
            pathNotation = key.indexOf('.') > -1 ? `[${key}]` : key;
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
            else if (key.indexOf('.') > -1) {
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