# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hansori/lotide`

**Require it:**

`const _ = require('@hansori/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays(arr1, arr2)`: takes two arrays as arguments and returns true if their lengths and contents are equal.
* `eqObjects(obj1, obj2)`: takes two objects as arguments and returns true if their lengths and contents are equal. 
* `head(arr)`: takes an array and returns the first element.
* `tail(arr)`: takes an array and returns a new aray without the first element.
* `middle(arr)`: takes an array and returns the middle element. If the array's length is even, it returns the two middle elements. If the array's length is less than 2, an empty is returned.
* `findKey(obj, callback)`: takes an object and a callback function. The callback function is called to each element in a loop, and stops and returns the first value that returns true.
* `findKeyByValues(obj, value)`: takes an object and a value and returns the first key that matches the value.
* `flatten(arr)`: takes an array and flattens all nested arrays within and returns the flattened array.
* `letterPositions(sentence)`: takes a string and returns an object with all characters and its position index as key-value pairs.
* `map(arr, callback)`: takes an array and a callback function that modifies every element and returns a new array.
* `takeUntil(array, callback)`: takes an array and a callback function and returns a new array with all the elements until the callback function returns a truthy value.
* `without(arr1, arr2)`: takes two arrays and returns a new array of unmatched items.
* `countLetters(str)`: takes a string and returns a object with each character as a key, and the number of apperances in string as a value.
* `countOnly(allItems, itemsToCount)`: takes an array of strings and an object of key-value pair with truthy values. Returns a count of the specified items in a new object.