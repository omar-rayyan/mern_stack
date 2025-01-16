class Ninja{
    constructor(name, health=100, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("Ninja", this.name);
    }

    showStats(){
        console.log("Ninja:", this.name, "Health:", this.health, "Strength:", this.strength, "Speed:", this.speed);
    }

    drinkShake(){
        this.health += 10;
        console.log("Ninja", this.name, "drank a shake and earned 10 extra health. Their health is currently", this.health);
    }
}

ali = new Ninja("Ali");
ali.sayName();
ali.showStats();
ali.drinkShake();
ali.showStats();
