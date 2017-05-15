const assert = require('assert');
const User = require('../src/user');


describe('Updating records', () => {
  "use strict"
  let joe;

  beforeEach( (done) => {
    joe = new User({name : 'Joe'});
    joe.save()
      .then( () => done() );
  });

  it('instance set and save', () => {
      console.log(joe);
      joe.set('name', 'Alex');
      console.log(joe);
      joe.save()
        .then( () => User.find({}) )
        .then( (users) => {
          assert(users.length === 1);
          assert(users[0].name === 'Alex');
          done();
        });
  });


});
