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

      it(`Considers text between square brackets as key.`, ()=>{

        const pathStr = 'foo[0].bar[baz]';

        const result = Array.from(PathNotation.pathNotationToKeys(pathStr));

        expect(result[0]).to.eq('foo');
        expect(result[1]).to.eq(0);
        expect(result[3]).to.eq('baz');

      });

      it(`Converts key representing positive integer between square
          brackets to integer.`,()=>
      {

        const pathStr = 'foo[0].bar[12][-1].10[0.01]';
        const result = Array.from(PathNotation.pathNotationToKeys(pathStr));

        expect(result[1]).to.be.a('number');
        expect(result[1]).to.eq(0);
        expect(result[3]).to.be.a('number');
        expect(result[3]).to.eq(12);
        expect(result[4]).to.be.a('string');
        expect(result[4]).to.eq('-1');
        expect(result[5]).to.be.a('string');
        expect(result[5]).to.eq('10');
        expect(result[6]).to.be.a('string');
        expect(result[6]).to.eq('0.01');

      })

      it(`Considers keys with '.' chars between square brackets as whole key.
          e.g. [bar.baz] is key "bar.baz".`,
        ()=>
      {

        const pathStr = 'foo[bar.baz]';

        const result = Array.from(PathNotation.pathNotationToKeys(pathStr));

        expect(result[1]).to.eq('bar.baz');

      });

    });

    describe('keysToPathNotation',()=>{

      it(`Returns a dot-notated path string from an 'Iterable' of string keys.`,()=>{

        const pathKeys = ['foo','bar'];

        expect(PathNotation.keysToPathNotation(pathKeys)).to.eq(pathKeys.join('.'));


      });

      it(`Adds square bracket notation keys with "." chars`,()=>{

        const pathKeys = ['foo','bar', 'baz.qux'];

        expect(PathNotation.keysToPathNotation(pathKeys))
          .to.eq('foo.bar[baz.qux]');


      });

      it(`Uses square bracket notation with keys that are positive integers.`,
        ()=>
      {

        const pathKeys = ['foo','0', 'baz.qux', 1];

        expect(PathNotation.keysToPathNotation(pathKeys))
          .to.eq('foo.0[baz.qux][1]');


      });

    });


  });

  describe('Instantiation',()=>{

    it(`Extends 'Array'.`,()=>{

      const pathStr = 'foo.bar';

      const path = new PathNotation(pathStr);

      expect(path).to.be.instanceof(Array);

      expect(path+'').to.eq(pathStr);

    });

    it(`Accepts dot-notated string as constructor arg.`,()=>{

      const pathStr = 'foo.bar';

      const path = new PathNotation(pathStr);

      expect(Array.from(path)).to.deep.equal(pathStr.split('.'));


    });

    it(`Accepts 'number' as constructor arg.`,()=>{

      const path = new PathNotation(0);

      expect(path.toString()).to.equal('[0]');

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

      expect(path.toString()).to.equal('foo.bar[0].baz');

    });

    it(`Uses square bracket notation with keys that are positive integers.`,
      ()=>
    {

      const path = new PathNotation(['foo','0', 'baz.qux', 1]);

      expect(path.toString()).to.eq('foo.0[baz.qux][1]');


    });

  });

  describe('Properties',()=>{
    
    const pathKeys = ['foo','bar','baz'];
  
    const path = new PathNotation(pathKeys.join('.'));

    describe('length',()=>{
  
      it('Returns number of keys in the path.',()=>{
  
        expect(path).property('length').to.eq(pathKeys.length);
  
      });
  
    });

  });

  describe('Accessors',()=>{

    const pathKeys = ['foo','bar','baz'];

    const path = new PathNotation(pathKeys.join('.'));

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

    describe('slice',()=>{

      it(`Returns new 'PathNotation'.`,()=>{

        const result = path.slice(1);

        expect(result).to.be.instanceof(PathNotation);

        expect(result.toString()).to.eq(pathKeys.slice(1).join('.'));

      });

    });
    
    describe('splice',()=>{

      it(`Returns new 'PathNotation'.`,()=>{

        const pathKeys = ['foo','bar','qux'];

        const path = new PathNotation(pathKeys.join('.'));

        const result = path.splice(1, 2);

        expect(result).to.be.instanceof(PathNotation);
      
      });

    });

    describe('toString',()=>{

      it(`Returns path string in path notation.`,()=>{

        const pathStr = "foo.bar[0].baz[qux.quux]";

        const path = new PathNotation(pathStr);

        expect(path.toString()).to.eq(pathStr);

      });

    });

  });

});




















