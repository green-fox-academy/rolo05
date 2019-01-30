/* Every pokemon has a name and a type. Certain types are effective against others, e.g. water is effective against fire.

You have a Pokemon class with a method called isEffectiveAgainst().

Ash has a few pokemon. Help Ash decide which Pokemon to use against the wild one.

You can use the already created pokemon files. */

'use strict'
export{};

class Pokemon{
    name:string;
    type:string;
    constructor(name:string,type:string){
        this.name = name;
        this.type = type;
    }
    isEffectiveAgainst(type){
        if (type ==='wind') {
            console.log('Ash, choose earth or waterpokemon,Bro!');
        }else if(type = 'earth') {
            console.log('Ash, choose waterpokemon,Bro!');
        }else if (type = 'fire'){
            console.log('Ash, choose wind or waterpokemon,Bro!');
        }else if (type = 'water'){
            console.log('Ash, choose earthpokemon,Bro!');
        }else(){};
    
    }
}
const obj1 = New Pokemon('wind');