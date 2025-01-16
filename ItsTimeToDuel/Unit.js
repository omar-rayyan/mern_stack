export class Unit{
    constructor(name, cost=5, power=5, resilience=5){
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    playEffect(effect) {
        if (effect.stat == "resilience"){
            this.resilience += effect.magnitude;
        } else {
            this.power += effect.magnitude;
        }
        console.log(`Effect ${effect.name} was used on unit ${this.name}`);
        console.log(`This effect ${effect.text}`);
        console.log(`Stat affected: ${effect.stat}`);
        console.log(`Cost: ${effect.cost}`);
        console.log(`Magnitude: ${effect.magnitude}`);
    }
}