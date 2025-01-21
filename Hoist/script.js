// Example 1
console.log(hello);
var hello = 'world';

// hoisted:
var hello;
console.log(hello); // outputs undefined
hello = 'world';



// Example 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

// hoisted:
var needle;
function test() {
    var needle;
    needle = 'magnet';
    console.log(needle); // outputs 'magnet'
}
needle = 'haystack';
test();



// Example 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// hoisted:
var brendan;
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan); // outputs 'super cool'



// Example 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    var food = 'half-chicken';
    console.log(food);
    food = 'gone';
}

// hoisted:
var food;
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food); // outputs 'half-chicken'
    food = 'gone';
}
food = 'chicken';
console.log(food); // outputs 'chicken'
eat();



// Example 5
mean();
console.log(food);
var mean = function() {
    var food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
};
console.log(food);

// hoisted:
var mean;
console.log(food); // outputs undefined
mean(); // Outputs an error because mean is not a function



// Example 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    var genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);

// hoisted:
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); // outputs 'rock'
    genre = "r&b";
    console.log(genre); // outputs 'r&b'
}
console.log(genre); // outputs undefined
genre = "disco";
rewind();
console.log(genre); // outputs 'disco'



// Example 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// hoisted:
var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo); // outputs 'seattle'
    dojo = "burbank";
    console.log(dojo); // outputs 'burbank'
}
dojo = "san jose";
console.log(dojo); // outputs 'san jose'
learn();
console.log(dojo); // outputs 'san jose'