var date = new Date();

const table = document.querySelector(".border");
const weekday = document.querySelector(".weekday h1");
var clock = document.getElementById("clock");


  var week = function (day) {
    switch (day) {
      case 0: return"Неділя";
      case 1: return"Понеділок";
      case 2: return"Вівторок";
      case 3: return"Середа";
      case 4: return"Четвер";
      case 5: return"П'ятниця";
      case 6: return"Субота";
      default: return "Х'юстон у на проблема!";
    }
  }

  const monday = `<ol><li>Фізика</li>
            <li>Хімія</li>
            <li>Історія У.</li>
            <li>Зарубіжна</li>
            <li>Алгебра</li>
            <li>Англ-мова</li>
            <li>Укр-літ</li></ol>`;

  const tuesday = `<ol><li>З.У.</li>
          <li>Фіз-ра</li>
          <li>Фізика</li>
          <li>Труди</li>
          <li>Всесвітня</li>
            <li>Укр-мова</li>
            <li>Укр-літ</li></ol>`;

  const wednesday = `<ol><li>Інформатика</li>
            <li>З.У.</li>
            <li>Фіз-ра</li>
            <li>Укр-мова</li>
            <li>Фізика</li>
            <li>Біологія</li>
            <li>Біологія</li></ol>`;

  const thursday = `<ol><li>Фіз-ра</li>
          <li>Укр-мова</li>
          <li>Укр-літ</li>
          <li>Географія</li>
          <li>Алгебра</li>
          <li>Геометрія</li></ol>`;

  const friday = `<ol><li>Англ-мова</li>
            <li>Фізика</li>
            <li>Нім-мова</li>
            <li>Хімія</li>
            <li>Укр-мова</li>
            <li>Укр-літ</li>
            <li>Інформатика</li></ol>`;


const renderDayBook = () => {

  weekday.innerHTML = week(date.getDay());
  if (date.getDay() == 1) {
  	table.innerHTML = monday;
  }
  else if (date.getDay() == 2) {
  	table.innerHTML = tuesday;
  }
  else  if (date.getDay() == 3) {
  	table.innerHTML = wednesday;
  }
  else if (date.getDay() == 4) {
  	table.innerHTML = thursday;
  }
  else if (date.getDay() == 5) {
  	table.innerHTML = friday;
  }
  else{
    table.innerHTML = `<ol><li style="list-style: none;">Вихідний день</li></ol>`;
  }
};
renderDayBook();

// function renderLesson() {
//   var time = new Date();
//   var h = time.getHours();
//   var m = time.getMinutes();

//   if ( h == 8 && m >= 0 || h == 8 && m <= 45) {
//     document.querySelectorAll(".table ol li")[0].classList.add('lesson');
//   }
//   else if ( h == 8 && m >= 45 || h == 9 && m <= 50) {
//     document.querySelectorAll(".table ol li")[1].classList.add('lesson');
//   }
//   else if ( h == 9 && m >= 50 || h == 10 && m <= 55) {
//     document.querySelectorAll(".table ol li")[2].classList.add('lesson');
//   }
//   else if ( h == 10 && m >= 55 || h == 12 && m <= 0) {
//     document.querySelectorAll(".table ol li")[3].classList.add('lesson');
//   }
//   else if ( h == 12 && m >= 0 || h == 13 && m <= 5) {
//     document.querySelectorAll(".table ol li")[4].classList.add('lesson');
//   }
//   else if ( h == 13 && m >= 5 || h == 14 && m <= 0) {
//     document.querySelectorAll(".table ol li")[5].classList.add('lesson');
//   }
//   else if ( h == 18 && m >= 0 || h == 15 && m <= 55) {
//     if (document.querySelectorAll(".table border ol li") !== [6]) {
//       console.log("none")
//     }
//     else {
      
//       document.querySelectorAll(".table border ol li")[6].classList.add('lesson');
//     }
//   }
//   else {}
// };
// setInterval(renderLesson, 1000);

function Clock() {
  var time = new Date();
  var h = time.getHours().toString();
  var m = time.getMinutes().toString();

  if (h.length < 2) {
    h = '0' + h;
  }

  if (m.length < 2) {
    m = '0' + m;
  }

  var clockString = h + ":" + m;

  clock.textContent = clockString;
};
setInterval(Clock, 500);

document.querySelector(".menu-btn-on").addEventListener("click", () => {
  document.querySelector(".wrapper-time").classList.add('wrapper-time_active');
  document.querySelector(".wrapper").classList.add('wrapper_active');
});
document.querySelector(".menu-btn-off").addEventListener("click", () => {
  document.querySelector(".wrapper-time").classList.remove('wrapper-time_active');
  document.querySelector(".wrapper").classList.remove('wrapper_active');
});
document.querySelector(".menu-btnOn").addEventListener("click", () => {
  document.querySelector('.menu-btn-on').classList.add('menu-btn-on_active');
  document.querySelector('.menu-btnOn').classList.add('menu-btnOn_active');
  document.querySelector(".menu").classList.add('menu_active');
});
document.querySelector(".menu-btnOff").addEventListener("click", () => {
  document.querySelector('.menu-btnOn').classList.remove('menu-btnOn_active');
  document.querySelector('.menu-btn-on').classList.remove('menu-btn-on_active');
  document.querySelector(".menu").classList.remove('menu_active');
});


document.querySelector(".monday").addEventListener("click", () => {
  weekday.innerHTML = week(1);
  table.innerHTML = monday;
});
document.querySelector(".tuesday").addEventListener("click", () => {
  weekday.innerHTML = week(2);
  table.innerHTML = tuesday;
});
document.querySelector(".wednesday").addEventListener("click", () => {
  weekday.innerHTML = week(3);
  table.innerHTML = wednesday;
});
document.querySelector(".thursday").addEventListener("click", () => {
  weekday.innerHTML = week(4);
  table.innerHTML = thursday;
});
document.querySelector(".friday").addEventListener("click", () => {
  weekday.innerHTML = week(5);
  table.innerHTML = friday;
});