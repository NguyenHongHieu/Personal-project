var x1 = document.getElementsByTagName('h1');//lay tat ca the h1
console.log(x1);//tra ve la 1 mang


var p1 = document.getElementsByTagName('p');
console.log(p1);
console.log(p1[1].innerHTML);//gia tri ben trog the
p1[1].innerHTML = "noi dung moi";

var y = document.getElementsByTagName('h4');
console.log(y);

y[1].innerHTML = "<button class='btn btn-info'>hello world</button>"

var x = document.querySelector('.list-group-item');
console.log(x);

var y = document.querySelectorAll('.card .card-text');
console.log(y);

var x1 = document.querySelectorAll('.n1');
console.log(x1);
console.log(x1[0].classList.remove('btn-outline-info'))
console.log(x1[0].classList.add('btn-warning'));

var x3 = document.querySelectorAll('.n3');
x3[0].classList.toggle('btn');
x3[0].classList.toggle('btn-block');