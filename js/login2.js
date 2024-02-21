const box = document.querySelector('.box');
const box1 = document.querySelector('.box1');

let loadRegister = document.querySelector('.box .txt1>button');
let loginRegister = document.querySelector('.box1 .txt1>button');

let go = document.querySelector('.box .txt.t1');
let send1 = document.querySelector('.box .txt.t2');
let come = document.querySelector('.box1 .txt');

let Back = document.querySelector('.Back');
// 标记点
let m = 0;

const un = document.querySelector('.box .logup_name')
const pw = document.querySelector('.box .login_box.p1>.logup_pw')
const pw1 = document.querySelector('.box .login_box.p2>.logup_pw')
const pw2 = document.querySelector('.box .login_box.p3>.logup_pw')

const unn = document.querySelector('.box1 .logup_name')
const pww = document.querySelector('.box1 .logup_pw')

let emptyAa = document.querySelector('.emptyA.a');
let Xa = document.querySelector('.emptyA.a>div');

let emptyAc = document.querySelector('.emptyA.c');
let Xc = document.querySelector('.emptyA.c>div');

let emptyAm = document.querySelector('.emptyA.m');
let Xm = document.querySelector('.emptyA.m>div');

let emptyAz = document.querySelector('.emptyA.z');
let Xz = document.querySelector('.emptyA.z>div');

let emptyAy = document.querySelector('.emptyA.y');
let Xy = document.querySelector('.emptyA.y>div');

let emptyAs = document.querySelector('.emptyA.s');
let Xs = document.querySelector('.emptyA.s>div');


let temp1 = null;
let isclick = 1;



// 登录功能
loginRegister.addEventListener("click", function () {
  const username = unn.value;
  const password = pww.value;
  console.log(username)
  console.log(password)

  if (username == '') {
    // alert('姓名不能为空');
    emptyAc.style.display = 'block';
  } else if (password == '') {
    // alert('密码不能为空');
    emptyAa.style.display = 'block';
  } else {
    if (username!='shen' || password !='123456') {
      alert('用户名或密码错误')
    } else{
      emptyAm.style.display = 'block';
      Xm.addEventListener('click', function () {
        window.location.href = "examine.html";
      })
    }
  }
  // .catch(error => {
  //   console.log(error)
  // })
})

come.addEventListener('click', function () {
  box.style.display = 'none';
  box1.style.display = 'block';
  m = m + 90;
  Back.style.transform = `rotate(${m}deg)`;
});


Xa.addEventListener('click', function () {
  emptyAa.style.display = 'none';
})

Xc.addEventListener('click', function () {
  emptyAc.style.display = 'none';
})

Xy.addEventListener('click', function () {
  emptyAy.style.display = 'none';
})

Xs.addEventListener('click', function () {
  emptyAs.style.display = 'none';
})
