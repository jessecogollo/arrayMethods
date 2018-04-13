# Array methods

## data:

We are getting data from the meetup.com API using the endpoint: http://api.meetup.com/medellinjs/events?status=past.
This end point retrieved the past meetups made for medellinjs community.

## methods

### .length
the `length` method returns the number of elements in that array.
This method doesn't receive paramenters

### .from
The `from` method creates a new Array instance from an array.
This method receive two params, the first one is the original array, the second one is a function to map every element.

### .isArray
The `.isArray` method determines whether the passed values is an Array.
This method doesn't receive parameters

### .of
The `.of` method creates a new Array instance with a variable number of arguments.
This method receive n params.

### .concat
The `.concat` method is used to merge two or more arrays and returns a new array.
This method receive n params.

### .every
The `.every` method tests whether all elements in the array pass the test implemented by the provided function.
This method receive 1 param and is a function.

### .fill
The `.fill` method fills all elements of an array from start to an end index with a static value. the end index is not inclued.
This method receive between 1 and 3 parameters. the first one is the static value, the second one the start index and the last one is the end index.

### .filter
The `.filter` method creates a new array with all elements that pass the test implemented by the provided function.
This method receive 1 param and is a function.

### .find
The `.find` method return the first the value of the first element in the array that satisfies the provided testing function.
This method receive 1 param and is a function.

### .findIndex
The `findIndex` method the index of the first element in the array that satisfies the provided testing function, otherwise -1 is returned.
This method receive 1 param and is a function.

### .forEach
The `.forEach` method executes a provided function once for each element.
This method receive 1 param and is a function.

###
