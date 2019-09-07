const KEYS:unique symbol = Symbol();

/**
  @description Dot-notation based path string which yields key literals, allows for the inclusion of keys with "." characters, and provides node meta data and other useful utilities.
  @extends String
*/
export default class PathNotation extends String {
  private readonly [KEYS]:string[];
  /**
    @description Creates a PathNotation instance.
    @arg {string | number | PathNotation | Iterable<string | number | PathNotation>} path - 
      path or an iterable of keys or other PathNotation instances.
  */
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
    @description Number of key literals in path.
    @type {number}
  */
  get numKeys():number {

    return this[KEYS].length;

  }

  /**
    @description First key literal in path.
    @type {string}
  */
  get firstKey():string {

    return this[KEYS][0];

  }

  /**
    @description Last key literal in path.
    @type {string}
  */
  get lastKey():string {

    return this[KEYS][this.numKeys - 1];

  }

  get [Symbol.toStringTag]() {
  
    return this.constructor.name;
  
  }

  //Methods
  /**
    @description Yields key literals from path.
    @generator
    @yields {string} The next key literal in path.
  */
  *keys():IterableIterator<string> {

    yield* this[KEYS];

  }
  
  /**
    @description Returns sub path.
    @arg {number} fromKeyIndex - The zero-based index at which to begin extraction.
    @arg {number} [endKeyIndex] - Optional. The zero-based index before which to end extraction.
  */
  slicePath(beginKeyIndex:number, endKeyIndex?:number): PathNotation {

    return new PathNotation(this[KEYS].slice(beginKeyIndex, endKeyIndex));

  }

  *[Symbol.iterator]():IterableIterator<string> {

    yield* this[KEYS];

  }

  /**
    @description Yields key literals dot-notated path.
    @generator
    @yields {string} The next key literal in path.
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
    @description Returns dot-notated path.
    @returns {string} Dot-notated path.
  */
  static keysToPathNotation(keys:Iterable<string>):string {

    

    const keysIter = <Iterator<string, string>>keys[Symbol.iterator]();
    
    // Handle first key
    let keysIterResult = keysIter.next();

    // Empty keys iterable
    if(keysIterResult.done){
      return '';
    }

    let pathNotation = keysIterResult.value.split('.').join('\\.');
    
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