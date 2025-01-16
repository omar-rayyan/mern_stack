import { Stack } from './Stack.js';
import { Unit } from './Unit.js';
import { Effect } from './Effect.js';
import { AttackEffect } from './Effect.js';

let turn = new Stack();

function newTurn(){
    console.log("======= New turn! =======")
    if (!turn.isEmpty()){
        console.log("======= Turn effects: =======")
        for (let i = 0; i <= turn.size(); i++) {
            console.log("======= Effect =======");
            const currentEffect = turn.pop();
            const unit = currentEffect.unit;
            const effect = currentEffect.effect;
            unit.playEffect(effect);
            console.log("======= End of effect =======");
        }
        console.log("======= End of turn =======")
    } else {
        console.log("No pending effects.")
        console.log("===============================");
    }
}

function addEffect(unit, effect){
    const effectDict = {
        unit: unit,
        effect: effect
    };
    turn.push(effectDict);
    console.log(`Next Turn: Effect added for unit ${unit.name} with effect ${effect.name}`);
}

newTurn();
const red_belt_ninja = new Unit("Red Belt Ninja", 3, 3, 4);
const hard_algorithim = new Effect("Hard Algorithim", 2, "increases target's resilience by 3", "resilience", 3);
addEffect(red_belt_ninja, hard_algorithim);

newTurn();
const black_belt_ninja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandled_promise_rejection = new Effect("Unhandled Promise Rejection", 1, "reduces target's resilience by 2", "resilience", -2);
addEffect(red_belt_ninja, unhandled_promise_rejection);

newTurn();
const pair_programming = new Effect("Pair Programming", 3, "increases target's power by 2", "power", 2);
const attack = new AttackEffect("Attack", 3, "reduces enemy's power by 2", "power", 2, red_belt_ninja);
addEffect(red_belt_ninja, pair_programming);
addEffect(black_belt_ninja, attack);

newTurn();