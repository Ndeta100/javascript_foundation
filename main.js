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


// Javascript being weird
function weird(){
    height=50
    return height
}
weird()
const heyhey=function doodle(){
    return 'hey hey '
}

// function scope vs block scope
if(4>3){
    var secret='748390'
}
secret

// exercise
// change let and use var to see the difference
function loop(){
    for(let i=0; i<5; i++){
        console.log(i)
    }
    console.log('final', i)
}
loop()

// IIFE
(()=>{

})()

// This keyword
// this gives methods access to their objects
// Execute the same code for multiple objects
const obj={
    name:'billy',
    sing(){
        return 'lalalalala' + this.name
    },
    singAgain(){
        return this.sing() + '!'
    }
}
obj.sing()

function importantPerson(){
    console.log(this.name)
}

const name='Ndeta'
const obj1={
    name:'Cassey',
    importantPerson:importantPerson
}
const obj2={
    name:'John',
    importantPerson:importantPerson
}
importantPerson()
obj1.importantPerson()
obj2.importantPerson()


// call, apply and bind

function a (){
    console.log('hi')
}
a.call()
a.apply()

const wizard={
    name:'Merlin',
    health:100,
    heal(){
        return this.health=100
    } 
}

wizard.heal()

const archer={
    name:'Robin Hood',
    health:30
}
wizard.heal.call(archer)

// function currying

function multiple(a,b){
    return a *b
}
multiple(3,5)
let multiplyByTwo=multiple.bind(this, 2) //now it gives a function which we can call with a second parameter
multiplyByTwo(4)

// Exercise
var b={
    name:'jay',
    say() {console.log(this)}
}
 var c={
     name:'jay',
     say() {return function() {console.log(this)}}
 }
 var d={
     name:'jay',
     say() {return ()=>console.log(this)}
 }