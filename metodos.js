// Module created by Luis Mex
// Ene-11-2021

function fEach(array, fn) {
    // Input :  array as a list , fn a callback function
    // return : none, go over element of the list and
    // callback a function fn if true
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

function filterCustom(array, fn) {
    // Input : Array as a list, fn as callback function
    // Return : newArray as list if the callback function
    // return true, otherwise return empty list if not found
    newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function FindIndex(array, fn) {
    // Input : array as a list, fn as a callback function
    // Return : the index of the list if callback function
    //return true
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return i;
        }
    }
    return -1;
}

function mapCustom(array, fn) {
    // Input : array as list and fn as a callback function
    // Return : newarray as alist where the callback function
    //  is applied to the entire array.
    newarray = [];
    for (let i = 0; i < array.length; i++) {
        newarray.push(fn(array[i]));
    }
    return newarray;
}

function findC(array, fn) {
    // Input : array as list, fn as a callback function
    // Output : an element of the list, if callback funciton
    // return true, otherwise return -1, if not found
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return array[i];
        }
    }
    return -1;
}

function Containts(array, fn) {
    // Input: array as list
    // Returns : true if the value on the function fn
    // is present in the array,

    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            return true;
        }
    }
    return false;
}

function Pluck(_object_list, _key) {
    // Input : a Object as A List,
    // Returns : a list of values based on the _key as input
    list = [];
    for (let i = 0; i < _object_list.length; i++) {
        let temp = _object_list[i];
        list.push(temp[_key]);
    }
    return list;
}

function withOut(array, fn) {
    // returns a copy of the array with all instannces
    // of the values removed
    // Inputs :
    // array, fn is a function with all instances you will remove
    // Output ;
    // Return a list as a copy of the array with all instances
    // if the value removed
    // Example:
    list = [];
    for (let i = 0; i < array.length; i++) {
        if (!fn(array[i])) {
            list.push(array[i]);
        }
    }
    return list;
}

// Aqui se prueban

console.log('***********************************');
console.log('Example of modules by Luis Mex:');
console.log('***********************************');

numbers = [1, 2, 1, 0, 3, 1, 4];

// fEach
fEach(numbers, e => console.log(e));
console.log('***********************************');

//FilterCustom
console.log('Filtercustom,');
let filtercustom = filterCustom(numbers, e => e % 2 == 0);
console.log('the array after applying filter :', filtercustom);
console.log('***********************************');

//Findndex
let findex = FindIndex(numbers, e => e == 2);
console.log('El index after applying FindIndex of 2 is:', findex);
console.log('***********************************');

//mapCustom
let mapC = mapCustom(numbers, e => e * e);
console.log('Elements after applying mapCustom:, e**2:->', mapC);
console.log('***********************************');

//find
let fInd = findC(numbers, e => e == 1);
console.log('List after applying fInd == 1, returns ->', fInd);
console.log('***********************************');

// pluck
var stooges = [
    { name: 'moe', age: 40 },
    { name: 'larry', age: 50 },
    { name: 'curly', age: 60 },
];

console.log('the Original List before applying Pluck:', stooges);
let rr = Pluck(stooges, 'name');
console.log('After applying Pluck,');
console.log('the keys are :', rr);
console.log('***********************************');

// Contains example
let h = Containts(numbers, e => e == 6);
console.log('Numbers contains 6: ', h);
console.log('***********************************');

// Without example
to_remove = 1;
let without = withOut(numbers, e => e == to_remove);
console.log('La lista original es :', numbers);
console.log('and Without 1 :');
console.log(without);
console.log('***********************************');