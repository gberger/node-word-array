node-word-array
===============

You're a rubyist and you like this syntax:

    %w(one two three)
    # => ['one', 'two', 'three']

Now you can do this in JS:

    w('one two three')
    // => ['one', 'two', 'three']

Or in Coffee:

    w 'one two three'
    # => ['one', 'two', 'three']


Installation
------------ 

    npm install word-array


Usage
-----

    w = require('word-array')
    w('one two three')
    // => ['one', 'two', 'three']