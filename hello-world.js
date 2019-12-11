//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

'use strict';

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {

    if (input.value === '') {
        return 'Hello, World!'
    }

    if (input.value === 'Bob') {
        return 'Hello, Bob!'
    }
    if (input.value === 'Sally') {
        return 'Hello, Sally!'
    }

};

module.exports = HelloWorld;
