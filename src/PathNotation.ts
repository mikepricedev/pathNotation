const KEYS:unique symbol = Symbol();

/** 
 * A dot-notation based path string which yields key literals, allows
 * for the inclusion of "." character in keys, and provides other useful
 * utilities for reasoning and working with document paths.
*/
export default class PathNotation extends String {
  private readonly [KEYS]:string[];

  constructor(path:string | number | PathNotation | Iterable<string | number | PathNotation>) {

    const keys:string[] = [];

    switch(typeof path) {

      case 'string':
        
        keys.push(...PathNotation.pathNotationToKeys(path));
        break;
      
      case 'number':
        
        keys.push(path.toString());
        break;

      default:{

        if(path instanceof PathNotation) {
        
          keys.push(...path[KEYS]);
        
        } else {

          for(const key of path) {

            switch(typeof key) {
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
  get numKeys():number {

    return this[KEYS].length;

  }

  /**
   * Root key of path.
  */
  get firstKey():string {

    return this[KEYS][0];

  }

  /**
   * Terminal key of path.
  */
  get lastKey():string {

    return this[KEYS][this.numKeys - 1];

  }

  get [Symbol.toStringTag]() {
  
    return this.constructor.name;
  
  }

  //Methods
  /**
   * Yields key literals from path.
  */
  *keys():IterableIterator<string> {

    yield* this[KEYS];

  }
  
  /**
   * Extracts a section of a path and returns it as a new [[PathNotation]],
   * without modifying the original path.
  */
  slicePath(beginKeyIndex:number, endKeyIndex?:number): PathNotation {

    return new PathNotation(this[KEYS].slice(beginKeyIndex, endKeyIndex));

  }

  *[Symbol.iterator]():IterableIterator<string> {

    yield* this[KEYS];

  }

  /**
   * Yields key literals from dot-notated path.
  */
  static *pathNotationToKeys(path:string):IterableIterator<string> {
    
    let key = '';
    let escaped = false;

    for(const char of path) {
      
      // Escape char
      if(char === '\\' && !escaped){

        escaped = true;
      
      // Char is escaped, add to key without further checks
      } else if(escaped) {

        key += char;
        escaped = false;
      
      // Key terminator, yield key and reset
      } else if(char === '.') {
        
        yield key;
        key = '';

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
    Returns dot-notated path string.
  */
  static keysToPathNotation(keys:Iterable<string>):string {

    const keysIter = keys[Symbol.iterator]();
    
    // Handle first key
    let keysIterResult = keysIter.next();

    // Empty keys iterable
    if(keysIterResult.done){
      return '';
    }

    let pathNotation = <string>keysIterResult.value.split('.').join('\\.');
    
    // Handle remaining keys
    keysIterResult = keysIter.next();
    while(!keysIterResult.done) {

      pathNotation = `${pathNotation}.${keysIterResult.value.split('.').join('\\.')}`;

      keysIterResult = keysIter.next();

    }

    // Handle non-undefined value on true done flag
    if(typeof keysIterResult.value === 'string') {

      pathNotation = `${pathNotation}.${keysIterResult.value.split('.').join('\\.')}`;

    }

    return pathNotation;

  }

}