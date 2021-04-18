var date = new Date();

const table = document.querySelector(".border div");
const weekday = document.querySelector(".weekday h1");
const clock = document.getElementById("clock");


const week = function (day) {
    switch (day) {
        case 0:
            return "Неділя";
        case 1:
            return "Понеділок";
        case 2:
            return "Вівторок";
        case 3:
            return "Середа";
        case 4:
            return "Четвер";
        case 5:
            return "П'ятниця";
        case 6:
            return "Субота";
        default:
            return "Х'юстон у на проблема!";
    }
}

const monday = `<div class="lesson">Фізика</div>
            <div class="lesson">Хімія</div>
            <div class="lesson">Історія У.</div>
            <div class="lesson">Зарубіжна</div>
            <div class="lesson">Алгебра</div>
            <div class="lesson">Англ-мова</div>
            <div class="lesson">Укр-літ</div>`;

const tuesday = `<div class="lesson">З.У.</div>
          <div class="lesson">Фіз-ра</div>
          <div class="lesson">Фізика</div>
          <div class="lesson">Труди</div>
          <div class="lesson">Всесвітня</div>
            <div class="lesson">Укр-мова</div>
            <div class="lesson">Укр-літ</div>`;

const wednesday = `<div class="lesson">Інформатика</div>
            <div class="lesson">З.У.</div>
            <div class="lesson">Фіз-ра</div>
            <div class="lesson">Укр-мова</div>
            <div class="lesson">Фізика</div>
            <div class="lesson">Біологія</div>
            <div class="lesson">Біологія</div>`;

const thursday = `<div class="lesson">Фіз-ра</div>
          <div class="lesson">Укр-мова</div>
          <div class="lesson">Укр-літ</div>
          <div class="lesson">Географія</div>
          <div class="lesson">Алгебра</div>
          <div class="lesson">Геометрія</div>`;

const friday = `<div class="lesson">Англ-мова</div>
            <div class="lesson">Фізика</div>
            <div class="lesson">Нім-мова</div>
            <div class="lesson">Хімія</div>
            <div class="lesson">Укр-мова</div>
            <div class="lesson">Укр-літ</div>
            <div class="lesson">Інформатика</div>`;


const renderDayBook = () => {

    weekday.innerHTML = week(date.getDay());
    if (date.getDay() == 1) {
        table.innerHTML = monday;
    } else if (date.getDay() == 2) {
        table.innerHTML = tuesday;
    } else if (date.getDay() == 3) {
        table.innerHTML = wednesday;
    } else if (date.getDay() == 4) {
        table.innerHTML = thursday;
    } else if (date.getDay() == 5) {
        table.innerHTML = friday;
    } else {
        table.innerHTML = `<div>Вихідний день</div>`;
    }
};
renderDayBook();

const toggleClass = (el, to) => el.classList.toggle(to);

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
    toggleClass(document.querySelector(".wrapper-time"),'wrapper-time_active');
    toggleClass(document.querySelector(".wrapper"),'wrapper_active');
});
document.querySelector(".menu-btn-off").addEventListener("click", () => {
    toggleClass(document.querySelector(".wrapper-time"),'wrapper-time_active');
    toggleClass(document.querySelector(".wrapper"),'wrapper_active');
});
document.querySelector(".menu-btnOn").addEventListener("click", () => {
    toggleClass(document.querySelector('.menu-btn-on'),'menu-btn-on_active');
    toggleClass(document.querySelector('.menu-btnOn'),'menu-btnOn_active');
    toggleClass(document.querySelector(".menu"),'menu_active');
});
document.querySelector(".menu-btnOff").addEventListener("click", () => {
    toggleClass(document.querySelector('.menu-btnOn'),'menu-btnOn_active');
    toggleClass(document.querySelector('.menu-btn-on'),'menu-btn-on_active');
    toggleClass(document.querySelector(".menu"),'menu_active');
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
