class Mammal {
    constructor(legs, name) {
        this.legs = legs;
        this.name = name;
        this.warmBlooded = true;
    }

    walk(){
        return `${this.name} walks`;
    }
}


class Bat extends Mammal{
    constructor(legs, name, eats) {
        super(legs, name);
        this.legs = legs;
        this.name = name;
        this.eats = eats;
        this.warmBlooded = false
    }

    fly(){
        return `I am a ${this.name}, i can fly`
    }
}

let smallBat = new Bat(4, 'batman', 'fruits');

batInfo = smallBat.walk();
batType = smallBat.warmBlooded;
batMovement = smallBat.fly();

console.log(batInfo);
console.log(batType);
console.log(batMovement);


// alternative constructor coding
// class Mammal{
//     constructor(a,b,c,d){
//         Object.assign(this, {a,b,c,d})
//     }
// }

// class Bat extends Mammal{
//     constructor(f, ...args){
//         super(...args);
//         this.f = f;
//     }
// }

// const bigBat = new Bat('f', 'a', 'b', 'c', 'd');
// console.log(bigBat);