var date = new Date();

const table = document.querySelector(".border div");
const weekday = document.querySelector(".weekday h1");
const clock = document.getElementById("clock");

// const DISTRIBUTION = {
//     'Понеділок' : [
//     ['1.', 'Фізика'],
//     ['2.', 'Хімія'],
//     ['3.', 'Історія У.'],
//     ['4.', 'Зарубіжна'],
//     ['5.', 'Алгебра'],
//     ['6.', 'Англ-мова'],
//     ['7.', 'Укр-літ']
//     ],
//     'Вівторок' : [
//     ['1.', 'З.У.'],
//     ['2.', 'Фіз-ра'],
//     ['3.', 'Фізика'],
//     ['4.', 'Труди'],
//     ['5.', 'Всесвітня'],
//     ['6.', 'Укр-мова'],
//     ['7.', 'Укр-літ']
//     ],
//     'Середа' : [
//     ['1.', 'Інформатика'],
//     ['2.', 'З.У.'],
//     ['3.', 'Фіз-ра'],
//     ['4.', 'Укр-мова'],
//     ['5.', 'Фізика'],
//     ['6.', 'Біологія'],
//     ['7.', 'Біологія']
//     ],
//     'Четвер' : [
//     ['1.', 'Фіз-ра'],
//     ['2.', 'Укр-мова'],
//     ['3.', 'Укр-літ'],
//     ['4.', 'Географія'],
//     ['5.', 'Алгебра'],
//     ['6.', 'Геометрія']
//     ],
//         'П\'ятниця' : [
//     ['1.', 'Англ-мова'],
//     ['2.', 'Фізика'],
//     ['3.', 'Нім-мова'],
//     ['4.', 'Хімія'],
//     ['5.', 'Укр-мова'],
//     ['6.', 'Укр-літ'],
//     ['7.', 'Інформатика']
//     ]
// }


const week = function(day) {
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

const monday = `<div class="lesson">Англійська</div>
            <div class="lesson">Укр.мова</div>
            <div class="lesson">Укр.літ</div>
            <div class="lesson">Історія У.</div>
            <div class="lesson">Фізра</div>
            <div class="lesson">Фізика</div>
            <div class="lesson">Зарубіжна</div>`;

const tuesday = `<div class="lesson">Хімия</div>
          <div class="lesson">Геометрія</div>
          <div class="lesson">Укр.літ</div>
          <div class="lesson">Укр.мова</div>
          <div class="lesson">Фізика</div>
            <div class="lesson">Фізика</div>
            <div class="lesson">Історія У.</div>`;

const wednesday = `<div class="lesson">Алгебра</div>
            <div class="lesson">Геометрія</div>
            <div class="lesson">Географія</div>
            <div class="lesson">З.В.</div>
            <div class="lesson">Англійська</div>
            <div class="lesson">Інформатика</div>
            <div class="lesson">Фізика</div>`;

const thursday = `<div class="lesson">Фіз-ра</div>
          <div class="lesson">Біологія</div>
          <div class="lesson">Біологія</div>
          <div class="lesson">Укр.мова</div>
          <div class="lesson">Укр.літ</div>
          <div class="lesson">Німецька</div>
          <div class="lesson">Технології</div>`;

const friday = `<div class="lesson">Англійська</div>
            <div class="lesson">Укр.мова</div>
            <div class="lesson">Укр.літ</div>
            <div class="lesson">Інформатика</div>
            <div class="lesson">Хімія</div>
            <div class="lesson">Фізра</div>
            <div class="lesson">Всесвітня І.</div>`;



// const renderDayBook = () => {
//     const key = date.getDay();
//     for (i in DISTRIBUTION) {
//         weekday.innerHTML = DISTRIBUTION[i == key];
//     }


// };
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
    toggleClass(document.querySelector(".wrapper-time"), 'wrapper-time_active');
    toggleClass(document.querySelector(".wrapper"), 'wrapper_active');
});
document.querySelector(".menu-btn-off").addEventListener("click", () => {
    toggleClass(document.querySelector(".wrapper-time"), 'wrapper-time_active');
    toggleClass(document.querySelector(".wrapper"), 'wrapper_active');
});
document.querySelector(".menu-btnOn").addEventListener("click", () => {
    toggleClass(document.querySelector('.menu-btn-nz'), 'menu-btn-nz_active');
    toggleClass(document.querySelector('.menu-btn-on'), 'menu-btn-on_active');
    toggleClass(document.querySelector('.menu-btnOn'), 'menu-btnOn_active');
    toggleClass(document.querySelector(".menu"), 'menu_active');
});
document.querySelector(".menu-btnOff").addEventListener("click", () => {
    toggleClass(document.querySelector('.menu-btn-nz'), 'menu-btn-nz_active');
    toggleClass(document.querySelector('.menu-btnOn'), 'menu-btnOn_active');
    toggleClass(document.querySelector('.menu-btn-on'), 'menu-btn-on_active');
    toggleClass(document.querySelector(".menu"), 'menu_active');
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