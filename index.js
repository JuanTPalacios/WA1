'use strict';

// Weekly assessment 1 (1 hour)

// Start with the exercises in this file, then answer the questions
// that you find in "questions.md". If you're stuck on something,
// move on with the rest and come back to it after having completed
// the other parts. Obviously you can't look at any code outside
// of this folder, or check snippets from any source online

// Implement the following "underline" methods.
const _ = {};

// _.each(collection, iteratee, [context])
// Iterates over a collection of elements (i.e. array or object),
// yielding each in turn to an iteratee function, that is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// Returns the collection for chaining.
_.each = (collection, iteratee, context) => {

    if (Array.isArray(collection)) {
   // for (let i of collection) { it's not iterating, why?? not passing the first test..
   for (let i = 0; i < collection.length; i++ ) {
      iteratee.call(context, collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      collection.hasOwnProperty(key) && iteratee.call(context, collection[key], key, collection);
    }
  }
  return collection;

};

// _.reduce(collection, iteratee, [accumulator], [context])
// Reduce boils down a collection of values into a single value.
// Accumulator is the initial state of the reduction,
// and each successive step of it should be returned by iteratee.
// Iteratee is passed four arguments: (accumulator, element, index|key, collection),
// and bound to the context if one is passed. If no accumulator is passed
// to the initial invocation of reduce, iteratee is not invoked on the first element,
// and the first element is instead passed as accumulator for the next invocation.
_.reduce = (collection, iteratee, accumulator, context) => {
    //Need to loop and do something with every element that the loops iterates to. _.each re-usable?
  // accumulator === false as condition? but if accumulator gets 0 is falsy but it does exist. Check if accumulator !== (null//undefined)
  // Checking the accumulator only will happen on the first iteration cause if else gets triggered, accumulator will no longer be null/undefined.
  _.each(collection, (element, key) => {
    if (accumulator !== undefined || null) { // ! if the order is null || undefined  should be able to reduce a collection to a single value  NOT PASSES why?
      accumulator = iteratee.call(context, accumulator, element, key, collection);
    } else {
      accumulator = element
    }
  })
  return accumulator;
};

// _.bind(function, object)
// Binds a function to an object (obviously without using `bind`), meaning that whenever
// the function is called, the value of "this" will be the object. Returns the bound function.
_.bind = function (func, obj) {
    return function () {
      return func.call(obj, ...arguments);
    }
};

// _.memoize(func)
// Memoizes a given function by caching the computed result.
// Useful for speeding up slow-running computations.
// You may assume that the memoized function takes only one argument
// and that it is a primitive. Memoize should return a function that when called,
// will check if it has already computed the result for the given argument
// and return that value instead of recomputing it.
_.memoize = func => {
   let cache = {};
   return function (res) {
    if (cache.hasOwnProperty(res) || (cache[res] = func(res))){
      return cache[res];
    }
   }
};

// Now, using the pesudo-classical approach, create a class named
// "UnderCollections" that has a property named "libraryDesc",
// and includes the collection methods you just implemented above
// (i.e. each and reduce).
function UnderCollections() {
  this.libraryDesc = this.libraryDesc;
}
// Then, create a sub-class of "UnderCollections" named
// "UnderFunctions" that includes the function methods
// you implemented here above (i.e. bind and memoize).

// Finally, assign an instance of UnderCollections to "_.underCollections",
// with the value "collections" as "libraryDesc", and an instance of UnderFunctions
// to "_.underFunctions" with the value "functions" as "libraryDesc".

module.exports = _;
