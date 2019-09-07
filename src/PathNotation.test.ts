import {expect} from 'chai';
import PathNotation from './PathNotation';

describe('PathNotation',()=>{

  describe('Static Methods',()=>{

    describe('pathNotationToKeys',()=>{

      it(`Returns an 'IterableIterator' of keys from dot-notated path string.`, ()=>{

        const pathStr = 'foo.bar';

        const result = PathNotation.pathNotationToKeys(pathStr);

        expect(result).to.have.property('next');

        expect(Array.from(result)).to.deep.eq(pathStr.split('.'));

      });

      it(`Escapes with double backslashes e.g. "bar\\\\.baz" is key "bar.baz".`,()=>{

        const pathStr = 'foo.bar\\.baz';

        const result = Array.from(PathNotation.pathNotationToKeys(pathStr));

        expect(result[1]).to.eq('bar.baz');

      });

    });

    describe('keysToPathNotation',()=>{

      it(`Returns a dot-notated path string from an 'Iterable' of string keys.`,()=>{

        const pathKeys = ['foo','bar'];

        expect(PathNotation.keysToPathNotation(pathKeys)).to.eq(pathKeys.join('.'));


      });

      it(`Adds double backslash escaping to keys with "."`,()=>{

        const pathKeys = ['foo','bar', 'baz.qux'];

        expect(PathNotation.keysToPathNotation(pathKeys)).to.eq('foo.bar.baz\\.qux');


      });

    });


  });

  describe('Instantiation',()=>{

    it(`Extends 'String'.`,()=>{

      const pathStr = 'foo.bar';

      const path = new PathNotation(pathStr);

      expect(path).to.be.instanceof(String);

      expect(path+'').to.eq(pathStr);

    });

    it(`Accepts dot-notated string as constructor arg.`,()=>{

      const pathStr = 'foo.bar';

      const path = new PathNotation(pathStr);

      expect(Array.from(path)).to.deep.equal(pathStr.split('.'));


    });

    it(`Accepts 'number' as constructor arg.`,()=>{

      const path = new PathNotation(0);

      expect(path.toString()).to.equal('0');

    });

    it(`Accepts 'PathNotation' instance as constructor arg.`,()=>{

      const pathStr = 'foo.bar';

      const path1 = new PathNotation(pathStr);

      const path2 = new PathNotation(path1);

      expect(Array.from(path2)).to.deep.equal(pathStr.split('.'));


    });

    it(`Accepts 'Iterable' of strings, numbers, and/or PathNotation 
        instances as constructor arg.`,()=>{

      const path1 = new PathNotation('foo.bar');

      const path = new PathNotation([path1, 0, 'baz']);

      expect(path.toString()).to.equal('foo.bar.0.baz');

    });

  });

  describe('Accessors',()=>{

    const pathKeys = ['foo','bar','baz'];

    const path = new PathNotation(pathKeys.join('.'));

    describe('numKeys',()=>{

      it('Returns number of keys in the path.',()=>{

        expect(path).property('numKeys').to.eq(pathKeys.length);

      });

    });

    describe('firstKey',()=>{

      it('Returns the first key in the path.',()=>{

        expect(path).property('firstKey').to.eq(pathKeys[0]);

      });

    });

    describe('lastKey',()=>{

      it('Returns the last key in the path.',()=>{

        expect(path).property('lastKey').to.eq(pathKeys[pathKeys.length -1]);

      });

    });

  });

  describe('Methods',()=>{

    const pathKeys = ['foo','bar','qux'];

    const path = new PathNotation(pathKeys.join('.'));

    describe('keys',()=>{

      it(`Returns an 'IterableIterator' of keys from the path.`,()=>{

        const result = path.keys();

        expect(result).to.have.property('next');

        expect(Array.from(result)).to.deep.eq(pathKeys);

      });

    });

    describe('slicePath',()=>{

      it(`Returns new 'PathNotation' instance based on String.prototype.slice().`,()=>{

        const result = path.slicePath(1);

        expect(result).to.be.instanceof(PathNotation);

        expect(result.toString()).to.eq(pathKeys.slice(1).join('.'));

      });

      it(`Excepts second optional end index arg.`,()=>{

        const result = path.slicePath(1,3);

        expect(result).to.be.instanceof(PathNotation);

        expect(result.toString()).to.eq(pathKeys.slice(1,3).join('.'));

      });

    });
    
    describe('[Symbol.iterator]',()=>{

      it(`Returns an 'IterableIterator' of keys from the path.`,()=>{

        const result = path.keys();

        expect(result).to.have.property('next');

        expect(Array.from(result)).to.deep.eq(pathKeys);

      });

      it(`Implements 'PathNotation' integrability.`,()=>{

        const pathKeys = ['foo','bar', 'baz.qux'];

        const path = new PathNotation(pathKeys);

        expect(Array.from(path)).to.deep.equal(pathKeys);

      });

    });

  });

});




















