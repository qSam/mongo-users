const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', () => {
    const joe = new User({name : 'Joe'});
    joe.save()
      .then(() => {
        //Has Joe been saved successfully
        assert(!joe.isNew);
        done();
      });
  });
});
