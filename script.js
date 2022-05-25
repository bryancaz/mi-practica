document.getElementById("main").style.backgroundColor = event.value;


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const items = [

];
const numbersPlusTen = numbers.map((number) => number + 10);
const greaterThanFive = numbers.filter((number) => number > 5);
const numberFive = numbers.find((number) => number = 5);
const indexOfFive = numbers.findIndex((number) => number = 5);
// for (let number of numbers){
//numbersPlusTen.push(number + 10);
//}

const printNewNumberPlus20 = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            setTimeout(() => {
                resolve(number + 20);
            }, 1000);
        } else {
            reject('Error tu numero ${number} es menor a 10');
        }
    });
};



console.log(greaterThanFive);