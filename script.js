function task1(a, b, c) {
    const result = (a - b) / c;
    console.log(`результат вычисления ${result}`);
};

function task2(a) {
    const result3 = Math.pow(a, 3);
    const result2 = Math.pow(a, 2);
    console.log(`в степени 3 ${result3}`);
    console.log(`в степени 2 ${result2}`);
};

function task3(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    console.log(`меньшее число ${min}`);
    console.log(`большее число ${max}`);
};

function task4_1() {
    let arr = prompt('введите числа через пробел', 10);
    arr = arr.split(' ');
    return arr;
};

function task4() {
    const result = task4_1();
    console.log(result);
};

function task5(arg) {
    const even_odd = arg || prompt('введите число', 19);
    if (even_odd % 2 === 0) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
};

function task6(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(task5(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
};

function task7() {
    let parametr = prompt('enter your simbol', 50);
    let parametr2 = prompt('enter your other simbol', '$');
    parametr = parseInt(parametr, 10);
    console.log(parametr);
    for (let i = 1; i <= parametr; i++) { 
        document.write('<br/>')
        for (let index = 1; index <= i; index++) {
            if (parametr2) {
                document.write(`${parametr2}`)
            } else {
                document.write(`${i}`)
            }
        }
    }
};

function task8(n) {
    const arr = [];
    for (let i = 0; i< n; i++) {
        if (i === 0 || i === 1) arr[i] = 1;
        else arr[i] = arr[i-1] + arr[i-2]
    }
    console.log(arr);
    return arr;
};
let sum = 0;
function task9(arr) {
    arr = arr.toString().split('');
    for (let index = 0; index < arr.length; index++) {
        sum = sum + Number(arr[index]);
        if (sum > 9) {
            task9(sum);
            console.log('Сумма больше 9');
        } else {
            console.log(sum);
        }
    }
};
