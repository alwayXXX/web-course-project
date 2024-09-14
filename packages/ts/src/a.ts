// src/a.js
class Person {
    name: string;
    constructor(name: any) {
        this.name = name;
    }
    say = (who: God) => {
        // God：上帝 / god：神
        const firstChar = who.charAt(0).toLocaleUpperCase();
        console.log(`${firstChar}${who.slice(1)} bless you`);
    };
}

type God ='God' |'god'|'主'|'Trisolaran'
let DPZ=new Person("DPZ");
// let 主='God';
// DPZ.say(主);

