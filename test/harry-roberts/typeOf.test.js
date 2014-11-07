var demand = require('should'),
    naming = require('../../lib/bem-naming')({ elem: '__', mod: '--' });

describe('harry roberts', function () {
    describe('typeOf', function () {
        it('should not determine undefined', function () {
            var type = naming.typeOf(undefined);

            demand(type).be.undefined;
        });

        it('should not determine empty object', function () {
            var type = naming.typeOf({});

            demand(type).be.undefined;
        });

        it('should not determine not valid string', function () {
            var type = naming.typeOf('(*)_(*)');

            demand(type).be.undefined;
        });

        it('should not determine not valid object', function () {
            var type = naming.typeOf({ elem: 'elem' });

            demand(type).be.undefined;
        });

        it('should determine block by string', function () {
            naming.typeOf('block').should.equal('block');
        });

        it('should determine block by object', function () {
            var notation = { block: 'block' };

            naming.typeOf(notation).should.equal('block');
        });

        it('should determine mod of block by string', function () {
            naming.typeOf('block--mod--val').should.equal('blockMod');
        });

        it('should determine mod of block by object', function () {
            var notation = { block: 'block', modName: 'mod', modVal: 'val' };

            naming.typeOf(notation).should.equal('blockMod');
        });

        it('should determine boolean mod of block by string', function () {
            naming.typeOf('block--mod').should.equal('blockMod');
        });

        it('should determine boolean mod of block by object', function () {
            var notation = { block: 'block', modName: 'mod', modVal: true };

            naming.typeOf(notation).should.equal('blockMod');
        });

        it('should determine elem by string', function () {
            naming.typeOf('block__elem').should.equal('elem');
        });

        it('should determine elem by object', function () {
            var notation = { block: 'block', elem: 'elem' };

            naming.typeOf(notation).should.equal('elem');
        });

        it('should determine mod of elem by string', function () {
            naming.typeOf('block__elem--mod--value').should.equal('elemMod');
        });

        it('should determine mod of elem by object', function () {
            var notation = { block: 'block', elem: 'elem', modName: 'mod', modVal: 'val' };

            naming.typeOf(notation).should.equal('elemMod');
        });

        it('should determine boolean mod of elem by string', function () {
            naming.typeOf('block__elem--mod').should.equal('elemMod');
        });

        it('should determine boolean mod of elem by object', function () {
            var notation = { block: 'block', elem: 'elem', modName: 'mod', modVal: true };

            naming.typeOf(notation).should.equal('elemMod');
        });
    });
});
