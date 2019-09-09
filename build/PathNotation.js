"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KEYS = Symbol();
/**
 * A dot-notation based path string which yields key literals, allows
 * for the inclusion of "." character in keys, and provides other useful
 * utilities for reasoning and working with document paths.
*/
class PathNotation extends String {
    constructor(path) {
        const keys = [];
        switch (typeof path) {
            case 'string':
                keys.push(...PathNotation.pathNotationToKeys(path));
                break;
            case 'number':
                keys.push(path.toString());
                break;
            default: {
                if (path instanceof PathNotation) {
                    keys.push(...path[KEYS]);
                }
                else {
                    for (const key of path) {
                        switch (typeof key) {
                            case 'string':
                            case 'number':
                                keys.push(key.toString());
                                break;
                            default:
                                keys.push(...key[KEYS]);
                        }
                    }
                }
                break;
            }
        }
        super(PathNotation.keysToPathNotation(keys));
        this[KEYS] = keys;
    }
    //Accessors
    /**
     * Number of key literals in path.
    */
    get numKeys() {
        return this[KEYS].length;
    }
    /**
     * Root key of path.
    */
    get firstKey() {
        return this[KEYS][0];
    }
    /**
     * Terminal key of path.
    */
    get lastKey() {
        return this[KEYS][this.numKeys - 1];
    }
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
    //Methods
    /**
     * Yields key literals from path.
    */
    *keys() {
        yield* this[KEYS];
    }
    /**
     * Extracts a section of a path and returns it as a new [[PathNotation]],
     * without modifying the original path.
    */
    slicePath(beginKeyIndex, endKeyIndex) {
        return new PathNotation(this[KEYS].slice(beginKeyIndex, endKeyIndex));
    }
    *[Symbol.iterator]() {
        yield* this[KEYS];
    }
    /**
     * Yields key literals from dot-notated path.
    */
    static *pathNotationToKeys(path) {
        let key = '';
        let escaped = false;
        for (const char of path) {
            // Escape char
            if (char === '\\' && !escaped) {
                escaped = true;
                // Char is escaped, add to key without further checks
            }
            else if (escaped) {
                key += char;
                escaped = false;
                // Key terminator, yield key and reset
            }
            else if (char === '.') {
                yield key;
                key = '';
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
      Returns dot-notated path string.
    */
    static keysToPathNotation(keys) {
        const keysIter = keys[Symbol.iterator]();
        // Handle first key
        let keysIterResult = keysIter.next();
        // Empty keys iterable
        if (keysIterResult.done) {
            return '';
        }
        let pathNotation = keysIterResult.value.split('.').join('\\.');
        // Handle remaining keys
        keysIterResult = keysIter.next();
        while (!keysIterResult.done) {
            pathNotation = `${pathNotation}.${keysIterResult.value.split('.').join('\\.')}`;
            keysIterResult = keysIter.next();
        }
        // Handle non-undefined value on true done flag
        if (typeof keysIterResult.value === 'string') {
            pathNotation = `${pathNotation}.${keysIterResult.value.split('.').join('\\.')}`;
        }
        return pathNotation;
    }
}
exports.default = PathNotation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aE5vdGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1BhdGhOb3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sSUFBSSxHQUFpQixNQUFNLEVBQUUsQ0FBQztBQUVwQzs7OztFQUlFO0FBQ0YsTUFBcUIsWUFBYSxTQUFRLE1BQU07SUFHOUMsWUFBWSxJQUE4RTtRQUV4RixNQUFNLElBQUksR0FBWSxFQUFFLENBQUM7UUFFekIsUUFBTyxPQUFPLElBQUksRUFBRTtZQUVsQixLQUFLLFFBQVE7Z0JBRVgsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNO1lBRVIsS0FBSyxRQUFRO2dCQUVYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQzNCLE1BQU07WUFFUixPQUFPLENBQUMsQ0FBQTtnQkFFTixJQUFHLElBQUksWUFBWSxZQUFZLEVBQUU7b0JBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFFMUI7cUJBQU07b0JBRUwsS0FBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBRXJCLFFBQU8sT0FBTyxHQUFHLEVBQUU7NEJBQ2pCLEtBQUssUUFBUSxDQUFDOzRCQUNkLEtBQUssUUFBUTtnQ0FDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dDQUMxQixNQUFNOzRCQUNSO2dDQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDN0I7cUJBRUY7aUJBRUY7Z0JBQ0QsTUFBTTthQUVQO1NBRUY7UUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxD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