console.log('----------------1')

const teddy='bear'
console.log(sing())
// Function expressions
const sing=()=>{
    console.log('ohh lalalallala')
}
// Function decleration
function sing1(){
    console.log('uhh lalalalala')
}
console.log(teddy)

const one=1
const one=2
console.log(one)

function a(){
    console.log('hi')
}
function a (){
    console.log('bye')
}

const favoriteFood='grapes'
const foodThoughts=()=>{
    console.log('original favorite food:' + favoriteFood)
    
    const favoriteFood='sushi'
    console.log('New favorite food :' + favoriteFoo)
}

// function invocation/call/execution
foodThoughts()
// Argument
function marry(person1, person2){
    console.log(Array.from(arguments))
    console.log('ARGUMENTS', arguments)
    return  `${person1} is now married to ${person2}`
}

marry1('ndeta', 'xxxx')
function marry(...args){
    console.log(Array.from(arguments))
    console.log('ARGUMENTS', arguments)
    return  `${args[0]} is now married to ${args[1]}`
}
marry1('ndeta', 'xxxx')


// Variable environment
function two(){
    var isValid //undefined
}
function one(){
    isValid=true
    two()
}
var isValid=false
one()

// Scope chain

function findName(){
    var b='b'
    return printName()
}
function printName(){
    var c='c'
    return 'Ndeta innocent'
}
function sayMyName(){
    var a='a'
    return findName()
}
// invoke
sayMyName()