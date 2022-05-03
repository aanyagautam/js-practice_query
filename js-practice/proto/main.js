const person = {
    alive:true
}

const musician = {
    plays:true
}
//js now has getPrototypeof and setPrototypeOf methods instead of using __proto__

objects.setPrototypeOf(musician,person);
console.log(object.getPrototyoeOf(musician));
console.log(musician.__proto__);
console.log(object.getPrototyoeOf(musician) === musician.__proto__);