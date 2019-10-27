// console.group('hello world!');
// var a = 1;
// console.log('a');
// console.log(a);
// var x = 1, y = 2;
// console.log(x + y);
// var z = "hello ";
// console.log(z + y);
// function test() {
//     console.log('test ham');
// }
// var dtb = 4;
// if (dtb <= 5)
// {
//     console.log("khong dat");
// }
// var A = ["Một", "Hai", "Ba"];
// console.log(A);
// console.log(A[1]);
// var newlength = A.push("Bon");
// console.log(A);
// var newlength = A.unshift('Strawberry')
// console.log(A);
// var last = A.pop();
// console.log(A);
// var first = A.shift();
// console.log(A);
// var pos = A.indexOf('Hai');
// console.log(A);
// var removedItem = A.splice(pos, 1);
// console.log(A);
// //bai moi
// var x = 9;
// x = x / 3;//hoac x/=3
// console.log("ket qua la " + x);
// //vong lap
// var sv = ['viet', 'nam', 'que', ' toi'];
// console.log('cac phan tu trong mang');
// // for (let index = 0; index < Array.length; i++){
//     for (i = 0; i < sv.length; i++){
//         console.log(sv[i]);
// }
/*
var hv = {
    ten: "Hieu",
    diemtoan: 10,
    Ly: 9,
    Hoa: 10,
}

console.log(hv);
console.log(hv.ten);
/*
//hien tat ca du lieu, su dung vong lap f
var x;
for (x in hv) {
    console.log(hv[x]);
    
}
*/
/*
"use strict"
   var x= 5;
console.log(x);
*/
//lay do dai
// var x = "hello world iphone";
// console.log(x.length);

// var vitri = x.indexOf('wworld');
// if (vitri == -1)
// {
//     console.log("khong tim thay");

// }
// else {
//     console.log("tim thay");
// }

// var x1 = x.replace('iphone', 'samsung');
// console.log(x1);

// var y = "iphone, samsung, oppo, nokia";
// var mang = y.split(',');//tach tu ky tu","
// console.log(mang);
// console.log(mang[1]);
// for (var i = 0; i < mang.length; i++) {
//     if (i % 2 == 0)
//         console.log(mang[i]);
// }
// //doi so thannh ky tu
// var so1 = 10;
// var so2 = 3;
// so2 = so2.toString();
// console.log(so1 + so2);
// //doi ky tu thanh so
// var chu1 = "10";
// chu1 = Number(chu1);
// console.log(chu1 + 5);
//ham
function tinhtong(a1, a2) {
    var s = a1 + a2;
    console.log("tog cua 2 so la:" + s);
}
tinhtong(4, 12);
tinhtong(5, 15);

function tbc(x, y)
{
    var z = (x + y) / 2;
    return z;
}
console.log(tbc(7, 12));
if (tbc(3, 6) > 5) {
    console.log("gioi");
}
else
    console.log("yeu");








