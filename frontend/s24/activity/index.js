// console.log("Hello World");

//Strictly Follow the property names and spelling given in the google slide instructions.
//Note: Do not change any variable and function names. 
//All variables and functions to be checked are listed in the exports.

// Create an object called trainer using object literals
// Initialize/add the given object properties and methods
 
// Properties

// Methods

// Check if all properties and methods were properly added

// Access object properties using dot notation

// Access object properties using square bracket notation

// Access the trainer "talk" method

let trainer = {
   name: "Ash Ketchum",
   age: 10,
   pokemon: ['Pikachu', 'Charizard', 'Squirtle', 'Bulbasaur'],
   friends: {
       hoenn: ['May', 'Max'],
       kanto: ['Brock', 'Misty']
   },

   talk: function(){
       return "Pikachu! I choose you!";
   }
}

console.log(trainer);

console.log("Result of dot notation:");
console.log(trainer.name);
console.log("Result of square bracket notation:");
console.log(trainer['pokemon']);
console.log("Result of talk method:");
console.log(trainer.talk());


// Create a constructor function called Pokemon for creating a pokemon


// Create/instantiate a new pokemon


// Create/instantiate a new pokemon


// Create/instantiate a new pokemon


// Invoke the tackle method and target a different object


// Invoke the tackle method and target a different object


function Pokemon(name, level){
    this.name = name;
    this.level = level;

    this.health = 2 * level;
    this.attack = level;

    this.tackle = function(targetPokemon){
        console.log(this.name + " tackled " + targetPokemon.name);

        targetPokemon.health -= this.attack;

        if(targetPokemon.health <= 0){
            return targetPokemon.faint();
        };

        return targetPokemon.name + "'s health is now reduced to " + targetPokemon.health;
    }
    this.faint = function(){
        return this.name + " fainted";
    }
}

let pikachu = new Pokemon("Pikachu", 12);
let geodude = new Pokemon("Geodude", 8);
let mewtwo = new Pokemon("Mewtwo", 100);

console.log(pikachu);
console.log(geodude);
console.log(mewtwo);

console.log(geodude.tackle(pikachu));
console.log(pikachu);
console.log(mewtwo.tackle(geodude));
console.log(geodude);

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        trainer: typeof trainer !== 'undefined' ? trainer : null,
        Pokemon: typeof Pokemon !== 'undefined' ? Pokemon : null

    }
} catch(err){

}