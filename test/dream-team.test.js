const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const createDreamTeam = require('../src/dream-team.js');


describe('Dream team', () => {
  // Presence requirement

  describe('variable presence', () => {
    it.optional('function createDreamTeam exists', () => {
      expect(createDreamTeam).to.exist;
    });
  });

  //Specific requirements

  describe('base requirements', () => {
    it.optional('should return sequence from pre-sorted array', () => {
      assert.equal(createDreamTeam([
        'Amelia',
        'Grace',
        'Lily',
        'Ruby',
      ]), 'AGLR');
    });

    it.optional('empty team shouldn\'t lead to error', () => {
      expect(() => createDreamTeam([])).to.not.throw(Error);
    });
  });

  describe('functional requirements ', () => {   
    it.optional('should handle whitespaces', () => {
      assert.equal(createDreamTeam([
        '   William Alston ',
        ' Paul Benacerraf',
        '  Ross Cameron',
        '       Gilles Deleuze',
        '  Arda Denkel ',
        '  Michael Devitt',
        '  Kit Fine',
        ' Nelson Goodman',
        'David Kolb',
        '   Saul Kripke',
        '  Trenton Merricks',
        '  Jay Rosenberg',
      ]), 'ADGJKMNPRSTW');
    });
    it.optional('should handle lowercase', () => {
      assert.equal(createDreamTeam([
        'amelia',
        'ruby',
        'lily',
        'grace',
        'millie',
        'daisy',
        'freya',
        'erin',
        'megan',
        'jasmine',
        'brooke',
      ]), 'ABDEFGJLMMR');
    });
    it.optional('should return false on wrong type', () => {
      assert.equal(createDreamTeam(3), false);
      assert.equal(createDreamTeam(3.312312), false);
      assert.equal(createDreamTeam(false), false);
      assert.equal(createDreamTeam(null), false);
      assert.equal(createDreamTeam(undefined), false);
      assert.equal(createDreamTeam({'foo': 'bar'}), false);
    });
    it.optional('should ignore non-string values', () => {
      assert.equal(createDreamTeam([
        'Amelia',
        null,
        undefined,
        'Ruby',
        'Lily',
        11,
        'Grace',
        22,
        'Millie',
        'Daisy',
        true,
        'Freya',
        false,
        'Erin',
        new Set([1,2,3,4,5]),
        'Megan',
        {
          'John': 'Smith'
        },
        'Jasmine',
        1,
        2,
        3,
        4,
        5,
        'Brooke',
      ]), 'ABDEFGJLMMR');
    });
    it.optional('should handle non-standard cases', () => {
      assert.equal(createDreamTeam([
        ['David Abram'],
        ['Robin Attfield'],
        'Thomas Berry',
        ['Paul R.Ehrlich'],
        'donna Haraway',
        ' BrIaN_gOodWiN  ',
        {
          0: 'Serenella Iovino'
        },
        'Erazim Kohak',
        '  val_plumwood',
      ]), 'BDETV');
    });
  });
});
