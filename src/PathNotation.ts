const IS_INDEX_REGEX = /^(0|[1-9][0-9]*)$/;

export type TpathNotaionConstructorArg = string | number | PathNotation 
  | Iterable<string | number | PathNotation>;
/** 
 * A dot-notation based path string which yields key literals, allows
 * for the inclusion of the "." character in keys and square bracket notation 
 * in path strings, promotes readability of path strings and provides other 
 * useful utilities for reasoning and working with object paths.
*/
export default class PathNotation extends Array<string | number> {

  constructor(...path:TpathNotaionConstructorArg[]) 

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
  
          if(constructArg instanceof PathNotation) {
          
            keys.push(...constructArg);
          
          } else {
  
            for(const key of constructArg) {
              
              if(key instanceof PathNotation) {

                keys.push(...key);

              } else {

                keys.push(key);

              }
  
            }
  
          }

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

    return new PathNotation(super.slice(begin, end));

  }

  splice(start?:number, deleteCount?:number, ...items:(string | number)[]):
    PathNotation 
  {

    return new PathNotation(super.splice(start, deleteCount, ...items));

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
  */
  static *pathNotationToKeys(path:string):IterableIterator<string | number> {
    
    let key = '';
    let escaped = false;
    let squareBracket = false;

    for(const char of path) {
      
      // Escape char
      if(char === '\\' && !escaped){

        escaped = true;
      
      // Char is escaped, add to key without further checks
      } else if(escaped) {

        key += char;
        escaped = false;
      
      // Open square bracket, yield and reset key
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

    } else {

      pathNotation = key.indexOf('.') > -1 ? `[${key}]` : key;

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

      } else if(key.indexOf('.') > -1){

        pathNotation = `${pathNotation}[${key}]`;
        
      } else {
        
        pathNotation = `${pathNotation}.${key}`;

      }

      keysIterResult = keysIter.next();

    }

    return pathNotation;

  }


}