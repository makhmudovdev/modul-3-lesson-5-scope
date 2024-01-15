

//                          2 - masala

// const kgNarx = parseFloat(prompt("Bir kilogram konfet narxini kiriting:"));

// if (!isNaN(kgNarx)) {
//     for (let kg = 0.1; kg <= 1.0; kg += 0.1) {
//         const totalNarx = kg * kgNarx;
//         console.log(`${kg.toFixed(1)} kg uchun narxi: $${totalNarx.toFixed(2)}`);
//     }
// } else {
//     console.log("Noto'g'ri qiymat kiritdingiz. Iltimos, haqiqiy son kiriting.");
// }

//                           4 - masala

// const N = parseInt(prompt("N butun sonini kiriting:"));
// let total = 0;
// for (let i = 1; i <= N; i++) {
//     total += Math.pow(i, N - i + 1);
// }
// prompt(`Input: N = ${N}\nOutput: ${total}`);

// --------------------------    homework lesson-5    -------------------------- 

// --------------------------    FOR 1    ---------------------------------

// const a = parseInt(prompt("a butun sonini kiriting:"));
// const b = parseInt(prompt("b butun sonini kiriting:"));
// let chiqarilganSonlar = "";
// for (let i = a; i <= b; i++) {
//     console.log(i);
//     chiqarilganSonlar += i + " ";
// }

// console.log(`Chiqarilgan sonlar soni: ${chiqarilganSonlar.trim()}`);

// -------------------------    FOR 2    -----------------------------------

// const a = parseInt(prompt("a butun sonini kiriting:"));
// const b = parseInt(prompt("b butun sonini kiriting:"));
// let chiqarilganSonlar = "";

// for (let i = b - 1; i > a; i--) {
//     console.log(i);
//     chiqarilganSonlar += i + " ";
// }

// console.log(`Chiqarilgan sonlar soni: ${chiqarilganSonlar.trim()}`);



// -------------------------    FOR 3    -----------------------------------

// Bir Kg konfetning narxi
// const kgNarx = parseFloat(prompt("Bir kilogram konfet narxini kiriting:"));

// 1, 2, va 10 kg konfet uchun narxlarni chiqarish
// const weights = [1, 2, 10];

// weights.forEach((kg) => {
//     const totalNarx = kg * kgNarx;
//     console.log(`${kg} kg uchun narxi: $${totalNarx.toFixed(2)}`);
// });



// -------------------------    FOR 4    -----------------------------------

// Bir kg konfetning narxi
// const kgNarx = parseFloat(prompt("Bir kilogram konfet narxini kiriting:"));

// 1.2 dan 2 gacha 0.2 bosqichlar bilan har bir kg uchun narxlarni chiqarish
// for (let kg = 1.2; kg <= 2; kg += 0.2) {
//     const totalNarx = kg * kgNarx;
//     console.log(`${kg.toFixed(1)} kg uchun narxi: $${totalNarx.toFixed(2)}`);
// }



// -------------------------    FOR 5    -----------------------------------

// const a = parseInt(prompt("a butun sonini kiriting:"));
// const b = parseInt(prompt("b butun sonini kiriting:"));

// let yigindi = 0;

// for (let i = a; i <= b; i++) {
//     yigindi += i;
// }

// console.log(`a dan b gacha bo'lgan barcha butun sonlar yig'indisi: ${yigindi}`);



// -------------------------    FOR 6    -----------------------------------

// const a = parseInt(prompt("a butun sonini kiriting:"));
// const b = parseInt(prompt("b butun sonini kiriting:"));

// let kopaytma = 1;

// for (let i = a; i <= b; i++) {
//     kopaytma *= i;
// }

// console.log(`a dan b gacha bo'lgan barcha butun sonlar ko'paytmasi: ${kopaytma}`);




// -------------------------    FOR 7    -----------------------------------

// const a = parseInt(prompt("a butun sonini kiriting:"));
// const b = parseInt(prompt("b butun sonini kiriting:"));

// let yigindiKvadratlar = 0;

// for (let i = a; i <= b; i++) {
//     yigindiKvadratlar += i ** 2;
// }

// console.log(`a dan b gacha bo'lgan barcha butun sonlarining kvadratlari yig'indisi: ${yigindiKvadratlar}`);




// -------------------------    FOR 8    -----------------------------------
// const n = parseInt(prompt("n butun sonini kiriting (n > 0):"));
// let S = 0;
// for (let i = 1; i <= n; i++) {
//     S += 1 / i;
// }

// console.log(`Yig'indisi (S): ${S.toFixed(4)}`);



// -------------------------    FOR 9    -----------------------------------
// const n = parseInt(prompt("n butun sonini kiriting (n > 0):"));
// let S = 1.0;
// for (let i = 1.1; i <= n; i += 0.1) {
//     S *= i;
// }

// console.log(`Ko'paytma (S): ${S.toFixed(4)}`);



// -------------------------    FOR 11    -----------------------------------


// const n = parseInt(prompt("n butun sonini kiriting (n > 0):"));
// let result = 0;
// for (let i = 1; i <= 2 * n - 1; i += 2) {
//     result += i;
// }

// console.log(`${n} ning kvadrati (n^2): ${result}`);




// -------------------------    FOR 12    -----------------------------------
// const n = parseInt(prompt("n butun sonini kiriting (n > 0):"));
// const a = parseFloat(prompt("a haqiqiy sonini kiriting:"));
// let result = 1;

// for (let i = 1; i <= n; i++) {
//     result *= a;
// }

// console.log(`${a} ning ${n}-darajasi (a^n): ${result}`);



// -------------------------    FOR 13    -----------------------------------

// const n = parseInt(prompt("n butun sonini kiriting (n > 0):"));
// const a = parseFloat(prompt("a haqiqiy sonini kiriting:"));

// for (let i = 1; i <= n; i++) {
//     const result = Math.pow(a, i);
//     console.log(`${a} ning ${i}-darajasi (a^${i}): ${result}`);
// }



// -------------------------    FOR 14    -----------------------------------
// const n = parseInt(prompt("n butun sonini kiriting (n > 0):"));
// const a = parseFloat(prompt("a haqiqiy sonini kiriting:"));

// let result = 1;
// let daraja = 1;

// for (let i = 1; i <= n; i++) {
//     daraja *= a;
//     result += daraja;
//     console.log(`${a} ning ${i}-darajasi (a^${i}): ${daraja}`);
// }

// console.log(`Yig'indi (S): ${result}`);





// -------------------------    FOR 15    -----------------------------------

// const n = parseInt(prompt("n butun sonini kiriting (n > 0):"));
// function factorial(x) {
//     if (x === 0 || x === 1) {
//         return 1;
//     } else {
//         return x * factorial(x - 1);
//     }
// }

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += factorial(i);
//     console.log(`${i}! = ${factorial(i)}`);
// }

// console.log(`Yig'indisi (S): ${sum}`);





// -------------------------    FOR 16    -----------------------------------

// const N = parseInt(prompt("N butun sonini kiriting:"));
// const K = parseInt(prompt("K butun sonini kiriting:"));

// let sum = 0;

// for (let i = 1; i <= N; i++) {
//     sum += Math.pow(i, K);
//     console.log(`${i}^${K} = ${Math.pow(i, K)}`);
// }

// console.log(`Yig'indisi (S): ${sum}`);





// -------------------------    FOR 17    -----------------------------------
// const N = parseInt(prompt("N butun sonini kiriting:"));
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//     sum += Math.pow(i, i);
//     console.log(`${i}^${i} = ${Math.pow(i, i)}`);
// }

// console.log(`Yig'indisi (S): ${sum}`);





// -------------------------    FOR 18    -----------------------------------

// const A = parseInt(prompt("A butun sonini kiriting:"));
// const B = parseInt(prompt("B butun sonini kiriting:"));

// for (let i = A; i <= B; i++) {
//     for (let j = 1; j <= i - A + 1; j++) {
//         console.log(i);
//     }
// }





// -------------------------    FOR 18/2    -----------------------------------

// const number = parseInt(prompt("Bir sonni kiriting:"));

// let boluvchilar = [];
// let yigindi = 0;

// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         boluvchilar.push(i);
//         yigindi += i;
//     }
// }

// console.log(`${number} sonining bo'luvchilari: ${boluvchilar}`);
// console.log(`Bo'luvchilarning yig'indisi: ${yigindi}`);


// -------------------------    FOR 19    -----------------------------------

// const n = parseInt(prompt("n butun sonini kiriting (n > 1):"));

// function isTubSon(x) {
//     if (x < 2) return false;
//     for (let i = 2; i <= Math.sqrt(x); i++) {
//         if (x % i === 0) return false;
//     }
//     return true;
// }

// if (isTubSon(n)) {
//     console.log(`${n} - Tub son.`);
// } else {
//     console.log(`${n} - Tub emas son.`);
// }



// -------------------------    FOR 20    -----------------------------------

// const N = parseInt(prompt("N butun sonini kiriting:"));

// for (let i = 1; i <= N; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j;
//     }
//     console.log(line);
// }


// -------------------------    FOR END    -----------------------------------



// -------------------------    while 1    -----------------------------------

// const A = parseInt(prompt("A butun musbat sonini kiriting:"));
// const B = parseInt(prompt("B butun musbat sonini kiriting:"));
// const joylashtirishSoni = A - B;

// console.log(`A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkin: ${joylashtirishSoni}`);




// -------------------------    while 2    -----------------------------------

// const A = parseInt(prompt("A butun musbat sonini kiriting:"));
// const B = parseInt(prompt("B butun musbat sonini kiriting:"));
// const joylashtirishSoni = A - B;

// console.log(`A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkin: ${joylashtirishSoni}`);


// -------------------------    while 3    -----------------------------------

// const n = parseInt(prompt("n butun sonini kiriting (n > 0):"));
// const natija = n === 3 ** 2 ? "3 - ning darajasi" : "3 - ning darajasi emas";

// console.log(natija);


// -------------------------    while 4    -----------------------------------







// -------------------------    while 5    -----------------------------------

// const n = parseInt(prompt("n butun sonini kiriting (n > 0):"));
// const teskariTartib = parseInt(n.toString().split('').reverse().join(''));

// console.log(`${n} sonining teskari tartibi: ${teskariTartib}`);




// -------------------------    while 6    -----------------------------------




// -------------------------    while 7    -----------------------------------



// -------------------------    while 8    -----------------------------------






// -------------------------    while 9    -----------------------------------

// const son = prompt("Iltimos, sonni kiriting:");

// function isPalindromik(son) {
//     const teskari = son.toString().split('').reverse().join('');
//     return son.toString() === teskari;
// }

// console.log(isPalindromik(son));



// -------------------------    while 10    -----------------------------------

// const n = parseInt(prompt("n butun sonini kiriting (n > 1):"));

// function isTubSon(x) {
//     if (x < 2) return false;
//     for (let i = 2; i <= Math.sqrt(x); i++) {
//         if (x % i === 0) return false;
//     }
//     return true;
// }

// if (isTubSon(n)) {
//     console.log(`${n} - Tub son.`);
// } else {
//     console.log(`${n} - Tub emas son.`);
// }


// -------------------------    while END    -----------------------------------