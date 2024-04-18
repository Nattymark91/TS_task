const numberWithSpaces = (x: number, fullValue?: boolean) => {  // функция, принимает два значение - X(число) и не обязательное fullValue (булева переменная)
    try {  // блок try (пробуем выполнить следующий блок кода)
        if (fullValue) {    // если значение fullValue == true
            let parts = x.toString().split(".");  // объявляем переменную parts. Приводим Х к типу "строка", затем разделяем эту строку на массив строк разделителем ".", присваиваем переменной parts значение этого массива.
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");  //обращаемся к первому элементу массива parts и с помощью регулярного выражения добавляем пробел после каждых трех символов начиная с конца
            return parts.join(".");  //возращаем переменную parts уже в виде строки, объединив массив parts через "."
        } else {  // иначе (// если значение fullValue == false или его вовсе нет)
            const secondNumber = x.toString()[2] === '0' ? '' : x.toString()[2]  // объявляем переменную secondNumber. Приводим Х к типу "строка". Если третий символ строки Х это '0', то присваиваем значение переменной secondNumber - ''(пустая строка). Если третий символ строки Х не равен '0', то присваиваем переменной secondNumber значение третьего символа строки Х.
            const needDot = secondNumber ? '.' : '' // объявляем переменную needDot. Если secondNumber не равен пустой строке, присваиваем переменной needDot значение '.'. Иначе присваиваем значение переменной needDot - ''(пустая строка).
            const thirdNumber = x.toString()[3] === '0' ? '' : x.toString()[3] // объявляем переменную thirdNumber. Приводим Х к типу "строка". Если четвертый символ строки Х это '0', то присваиваем значение переменной thirdNumber - '' (пустая строка). Если четвертый символ строки Х равен '0', то присваиваем переменной thirdNumber значение четвертого символа строки Х.
            const needDot3 = thirdNumber ? '.' : ''   // объявляем переменную needDot3. Если thirdNumber не равен пустой строке, присваиваем переменной needDot3 значение '.'. Иначе присваиваем значение переменной needDot - ''(пустая строка).
            if (x.toString().length > 12) { // Если длинна строки Х (приведенного к строке) больше 12
                return '999B+'              //  - возвращаем '999B+'
            } else if (x.toString().length === 12) {                                                        // Иначе, если длинна строки Х (приведенного к строке) равна 12
                return x.toString()[0] + x.toString()[1] + x.toString()[2] + needDot3 + thirdNumber + 'B'   //  - возвращаем строку состоящую из - первых трех символов строки Х, значения переменной needDot3, значения переменной thirdNumber и 'B'
            } else if (x.toString().length === 11) {   // Иначе, если длинна строки Х (приведенного к строке) равна 11
                if (thirdNumber) {  // Если thirdNumber не равен пустой строке (имеет значение)
                    return x.toString()[0] + x.toString()[1] + '.' + x.toString()[2] + x.toString()[3] + 'B' //  - возвращаем строку состоящую из - первых двух символов строки Х, точки, третьего и четвертого символа строки Х и 'B' в конце
                } else { // Иначе (если thirdNumber равен пустой строке или undefined)
                    return x.toString()[0] + x.toString()[1] + needDot + secondNumber + 'B' //  - возвращаем строку состоящую из - первых двух символов строки Х, значения переменной needDot, значения переменной secondNumber и 'B'
                }
            } else if (x.toString().length === 10) { // Иначе, если длинна строки Х (приведенного к строке) равна 10
                return x.toString()[0] + '.' + x.toString()[1] + secondNumber + 'B' //  - возвращаем строку состоящую из - первого символа строки Х, точки, второго символа строки Х, значения переменной secondNumber и 'B' в конце строки
            } else if (x.toString().length === 9) { // Иначе, если длинна строки Х (приведенного к строке) равна 9
                return x.toString()[0] + x.toString()[1] + x.toString()[2] + needDot3 + thirdNumber + 'M' //  - возвращаем строку состоящую из  - возвращаем строку состоящую из - первых трех символов строки Х, значения переменной needDot3, значения переменной thirdNumber, и 'M' на конце
            } else if (x.toString().length === 8) { // Иначе, если длинна строки Х (приведенного к строке) равна 8
                if (thirdNumber) { // Если thirdNumber не равен пустой строке (имеет значение)
                    return x.toString()[0] + x.toString()[1] + '.' + x.toString()[2] + x.toString()[3] + 'M' //  - возвращаем строку состоящую из - первых двух символов строки Х, точки, третьего и четвертого символа строки Х и 'М' в конце 
                } else {  // Иначе (если thirdNumber равен пустой строке или undefined)
                    return x.toString()[0] + x.toString()[1] + needDot + secondNumber + 'M' //  - возвращаем строку состоящую из - первых двух символов строки Х, значения переменной needDot, значения переменной secondNumber и 'М' в конце 
                }
            } else if (x.toString().length === 7) { // Иначе, если длинна строки Х (приведенного к строке) равна 7
                return x.toString()[0] + '.' + x.toString()[1] + secondNumber + 'M' //  - возвращаем строку состоящую из - первых из первого символа строки Х, точки, второго символа строки Х, значения переменной secondNumber и 'М' в конце 
            } else { // Иначе (Если длинна строки Х (приведенного к строке) меньше 7)
                let parts = x.toString().split("."); // объявляем переменную parts. Приводим Х к типу "строка", затем разделяем эту строку на массив строк разделителем ".", присваиваем переменной parts значение этого массива.
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " "); //обращаемся к первому элементу массива parts и с помощью регулярного выражения добавляем пробел после каждых трех символов начиная с конца
                return parts.join("."); //возращаем переменную parts уже в виде строки, объединив массив parts через "."
            }
        }
    } catch (e) {  // в случае ошибки (не выполнения блока try)
        console.log(`[numberWithSpaces] error with ${e}`); // - выводим в консоль сообщение "[numberWithSpaces] error with значение ошибки"
        // тут ошибка, нужен return
    }
};

// функция numberWithSpaces - странная реализация форматирования чисел, работающая некорректно! Некорректно, потому что 51231411.31313131 никак не больше 999 миллиардов, ровно так же, как и то что 5 132.51321 не будет равно 5-ти миллиардам, а исходя из логики функции описанной выше это так...

const newFunc = (x: number, fullValue?: boolean): string => {
    try { 
        if (fullValue || ( x < 1000000 && -x < 1000000) ) {  
            const digits = x.toString().split(".");
            let fractiondigits;
            digits[1] ? fractiondigits = digits[1].length : fractiondigits = 0;
            const parts = new Intl.NumberFormat('ru-RU', {minimumFractionDigits: fractiondigits}).format(x).replace(',', '.');
            return parts;
        }

         else { if ( x < 1000000000 && -x < 1000000000) {
                    x = x/1000000;
                    const y = x.toFixed(2);
                    const last = y.length - 1;
                    if (y[last] === '0') return x.toFixed(1) + 'M';
                    return x.toFixed(2) + 'M';
                }
                if ( x < 1000000000000 && -x < 1000000000000) {
                    x = x/1000000000;
                    const y = x.toFixed(2);
                    const last = y.length - 1;
                    if (y[last] === '0') return x.toFixed(1) + 'B';
                    return x.toFixed(2) + 'B';
                }
                else return '999B+';
            }

    } catch (e) {
        return `[newFunc] error with ${e}`;
    }
}

// конечно же не все тесты будут пройдены, т.к. функция numberWithSpaces работает некорректно;

(() => {
    const tests = [
        123, 10001, 153056, 5132.51321, -1, -5561321313, 99999, 12345678, 912321561321, 912301561321, 51231411.31313131, 0
    ]

    tests.forEach((number, index) => {
        const old = numberWithSpaces(number, false);
        const old1 = numberWithSpaces(number, true);
        const newN = newFunc(number, false)?.replace(/\xa0/g, ' ')?.replace(/\u202f/g, ' ');
        const newN1 = newFunc(number, true)?.replace(/\xa0/g, ' ')?.replace(/\u202f/g, ' ');
        const status = (old == newN && old1 == newN1);
        console.log(`#${index + 1}`, status ? "OK" : "FAILED", !status ? `${old} == ${newN} | ${old1} == ${newN1}` : '');
    });
})();