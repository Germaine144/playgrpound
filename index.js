let userName = "German";
const birthYear = 1999;
const currentYear = 2025;

let age = currentYear - birthYear;
let message = `My name is ${userName} and my age is ${age}`;

console.log(message);

const Birth = (age) => {
    let birthYear = currentYear - age;
    return `I was born in ${birthYear}`;
}
console.log(Birth(30));

/*let object {
    name:"John",
    age:30,
    country:"United States"
};
console.log(object);*/
let object = {
    name: "John",
    ages: 30,
    country: "United States"
};
console.log(object);

let colors = ["red", "green", "blue", "orange"];

const [firstColor, secondColor] = colors ;

console.log(`The first color is ${firstColor} and the second color is ${secondColor}`);
