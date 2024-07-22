# Weekly assessment 1

Sections are marked as H2 (##), questions as H3 (###).
For each question please provide a brief answer below it.
You can use Markdown syntax (e.g. to include code snippets).

## Automated tests


### What are pros and cons of unit testing?

Since you are testing unit by unit, it's easy to locate bugs/errors on your code. (PRO)
If the project is big, unit testing is not so adecuate since it will be hugely time consuming. (CON)
### What does "TDD" stand for, and how does it work?
Test driven development. It's when you write the tests before the code.

## Advanced JS


### What are primitive values in JS?

The immutable ones (Number, string, booleans,...).
### What is a closure?
It's how outside from itselves can a function read. 
For example; function A () {
  return function B () {

  }
}
The function B in the return statement has access to function A and its variables. 

### Can you explain what is the delegation chain?
The delegation chain is how objects inherits properties and methods from a parent object or the prototype.
Classes are a good example of this since the Subclasses are part of the delegation chain and inherit the properties and methods from the Class.

### Can you mention some features added in ES6?

They add the keyword Class which are a simpler approach on how to build Classes and also some other keywords as extends to make the subclass have the Class properties but also its owns. Also the keyword super to call methods the Class has.
