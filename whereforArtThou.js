function whatIsInAName(collection, source) {
    const myKeys = Object.keys(source);

    return collection
      .filter(obj => myKeys
        .every(key => obj.hasOwnProperty(key) &&
            obj[key] === source[key]));
  }
  
  
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


/* Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
 0. given an array of objects, we want to return an array full of matched objects only. 
 1. could use filter again, just need to look at the index.property and return it. 
 2. collection is an array of objects. we can iterate over each and compare if they contain source
 2.5 access the object collection[i].property
 3. source is an object {}
*/