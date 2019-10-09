const IS_INDEX_REGEX = /^(0|[1-9][0-9]*)$/;

/** 
 * A dot-notation based path string which yields key literals, allows
 * for the inclusion of the "." character in keys and square bracket notation 
 * in path strings, promotes readability of path strings and provides other 
 * useful utilities for reasoning and working with object paths.
*/
export default class PathNotation extends Array<string | number> {

  constructor(...path:(string | number | PathNotation)[]) 

  {

    super();

    const keys:(string | number)[] = [];

    for(const constructArg of path) {

      switch(typeof constructArg) {
  
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
  get firstKey():string | number {

    return this[0];

  }

  /**
   * Terminal key of path.
  */
  get lastKey():string | number {

    return this[this.length - 1];

  }

  get [Symbol.toStringTag]() {
  
    return this.constructor.name;
  
  }

  //Methods
  slice(begin?:number, end?:number): PathNotation {

    return new PathNotation(...super.slice(begin, end));

  }

  splice(start?:number, deleteCount?:number, ...items:(string | number)[]):
    PathNotation 
  {

    return new PathNotation(...super.splice(start, deleteCount, ...items));

  }

  toString():string {
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
  static *pathNotationToKeys(path:string):IterableIterator<string | number> {
    
    let key = '';
    let squareBracket = false;

    for(let i = 0, len = path.length; i < len; i++) {
      
      const char = path[i];

      // Escape char
      if(char === '\\'){

        const nextIndex = i + 1;

        // Last char ignore
        if(nextIndex === len) {
        
          key += char;
          continue;
        
        }

        const nextChar = path[nextIndex];

        // The only escapable chars in square bracket notation is ']'
        if(squareBracket) {

          if(nextChar === ']') {
            
            // add nextChar and increment i so nextChar is skipped next loop
            key += nextChar;
            i++;
          
          } else {

            key += char;

          }

          continue;

        }

        // The only escapable chars outside of square bracket notation are 
        // '\', '.', and '[' 
        switch(nextChar) {
          
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
      } else if(char === '[' && squareBracket === false) {

        squareBracket = true;

        if(key.length > 0) {

          yield key;
          key = '';

        }
      
      // Close square bracket, yield and reset key
      } else if(char === ']' && squareBracket) {

        squareBracket = false;
        
        if(key.length > 0) {

          yield IS_INDEX_REGEX.test(key) ? Number.parseInt(key) : key;
          key = '';

        }

      // Key terminator, yield key and reset
      } else if(char === '.' && squareBracket === false) {
        
        if(key.length > 0){
          
          yield key;
          key = '';

        }

        // Add char to key
      } else {
        
        key += char;

      }

    }

    //Yield terminal key
    if(key.length > 0){
    
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
  static keysToPathNotation(keys:Iterable<string | number>):string 
  {

    const keysIter = keys[Symbol.iterator]();
    
    // Handle first key
    let keysIterResult = keysIter.next();


    // Empty keys iterable
    if(keysIterResult.done){
      return '';
    }

    
    let pathNotation:string;
    let key = keysIterResult.value;
    if(typeof key === 'number') {

      pathNotation = Number.isInteger(key) && key > -1 ? `[${key}]` 
        : key.toString();

    } else if(key.indexOf('.') > -1 || key.indexOf('\\') > -1) {

      // Escape closing square brackets that are apart of path
      key = (<string>key).split(']').join('\\]');

      pathNotation = `[${key}]`;

    } else {

      pathNotation = key;

    }
        
    // Handle remaining keys
    keysIterResult = keysIter.next();
    while(!keysIterResult.done) {

      key = keysIterResult.value;
      if(typeof key === 'number') {

        if(Number.isInteger(key) && key > -1) {

          pathNotation = `${pathNotation}[${key}]`;

        } else {

          pathNotation = `${pathNotation}.${key}`;

        }

      } else if(key.indexOf('.') > -1 || key.indexOf('\\') > -1){

        // Escape closing square brackets that are apart of path
        key = (<string>key).split(']').join('\\]');

        pathNotation = `${pathNotation}[${key}]`;
        
      } else {
        
        pathNotation = `${pathNotation}.${key}`;

      }

      keysIterResult = keysIter.next();

    }

    return pathNotation;

  }


}