import { Ninja } from './Ninja.js';

export class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        this.drinkShake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    
}