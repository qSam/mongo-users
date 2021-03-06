const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
  "use strict"
  let joe;

  beforeEach( (done) => {
    joe = new User({ name: 'Joe'});
    joe.save()
      .then( () => done());
  });

  it('model instance remove' , (done) => {
    joe.remove()
      .then( () => User.findOne({ name: 'Joe'}))
      .then ( (user) => {
        assert(user === null);
        done();
      });
  });

  it('class method remove', () => {
    //Remove a bunch of users with some given criteria
    User.remove({name: 'Joe'})
      .then( () => User.findOne({name: 'Joe'}))
      .then( (user) => {
        assert(user === null);
        done();
      });

  });

  it('class method findOneAndRemove' , () => {
    User.findOneAndRemove({ name: 'Joe' })
    .then( () => User.findOne({name: 'Joe'}))
    .then( (user) => {
      assert(user === null);
      done();
    });
  });

  it('class method findByIdAndRemove', () => {
    User.findByIdAndRemove(joe._id)


  });



});
