let name = prompt("Введите ваше имя:");
let age = +prompt("Введите ваш возраст:");
let money = +prompt("Сколько у вас денег в кармане?");
let people = prompt("Сколько людей хотят зайти вместе с вами?");

if ( name == "A" || name == "a" && age > 20 && age < 40 && money > 100) {
    console.log("Заходи");
} else {
    console.log("Пошел Вон.");
}