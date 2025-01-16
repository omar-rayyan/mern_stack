export class Effect{
    constructor(name, cost, text, stat, magnitude){
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

export class AttackEffect extends Effect{
    constructor(name, cost, text, stat, magnitude, attacker){
        super(name, cost, text, stat, magnitude);
        this.attacker = attacker;
    }
}