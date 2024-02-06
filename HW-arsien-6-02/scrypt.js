const arr = [10, 20, 30, 40, 50] // length = 5
// Чтобы получить последний элемент массива нужно [length - 1]


//HM
//Цикл for для вывода каждого второго числа от 0 до 10:
const numbers = [3, 5, 11, 2, 8, 1, 6];

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

//Цикл for для вывода всех чисел от 55 до 20:
for (let i = 55; i >= 20; i--) {
    console.log(i);
}

//Вывод всех чисел из массива numbers в консоль:
const numbers = [3, 5, 11, 2, 8, 1, 6];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared = [];

for (let i = 0; i < numbers.length; i++) {
    const square = numbers[i] ** 2;
    numbers_squared.push(square);
}

console.log(numbers_squared);

//Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу

const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared = [];

for (let i = 0; i < numbers.length; i++) {
    const square = numbers[i] ** 2;
    numbers_squared.push(square);
}

console.log(numbers_squared);

const last_elem = numbers_squared[numbers_squared.length - 1];

console.log(last_elem);

//Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }

    
    const userData = `User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old.`;

console.log(userData);