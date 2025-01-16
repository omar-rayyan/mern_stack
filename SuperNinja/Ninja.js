export class Ninja{
    constructor(name, health=100, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log("Name:", this.name, "Health:", this.health, "Strength:", this.strength, "Speed:", this.speed);
    }

    drinkShake(){
        this.health += 10;
        console.log(this.name, "drank a shake and earned 10 extra health. Their health is currently", this.health);
    }
}