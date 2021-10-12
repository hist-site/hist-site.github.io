const date = new Date();

const weekday = document.querySelector(".weekday"),
    table1 = document.querySelector(".page1 .main__container__table__lesson-list"),
    table2 = document.querySelector(".page2 .main__container__table__lesson-list"),
    clock = document.getElementById("clock");

const toggleClass = (el, to) => el.classList.toggle(to);

const distributionList = [
    ['Неділя', ['Віхідний']],
    ['Понеділок', ['Англійська', 'Укр.мова', 'Укр.літ', 'Історія У.', 'Фізра', 'Фізика', 'Зарубіжна']],
    ['Вівторок', ['Хімія', 'Геометрія', 'Укр.літ', 'Укр.мова', 'Фізика', 'Фізика', 'Історія У.']],
    ['Середа', ['Алгебра', 'Геометрія', 'Географія', 'З.У.', 'Англійська', 'Інформатика', 'Фізика']],
    ['Четвер', ['Фізра', 'Біологія', 'Біологія', 'Укр.мова', 'Укр.літ', 'Німецька', 'Технології']],
    ['П\'ятниця', ['Англійська', 'Укр.мова', 'Укр.літ', 'Інформатика', 'Хімія', 'Фізра', 'Всесвітня І.']],
    ['Субота', ['Віхідний']],
]

const timeList = [

    ['8:30 - 9:15'],
    ['9:25 - 10:10'],
    ['10:30 - 11:15'],
    ['11:35 - 12:20'],
    ['12:40 - 13:25'],
    ['13:35 - 14:20'],
    ['14:25 - 15:10']
]





function renderDayBook(days) {
    table1.innerHTML = ''
    weekday.innerHTML = distributionList[days][0];
    for (i = 0; i < distributionList[days][1].length; i++) {
        const li = document.createElement('li')
        li.innerHTML = distributionList[days][1][i]
        table1.appendChild(li)
    }
};
renderDayBook(date.getDay())

function renderTime() {
    for (i = 0; i < distributionList.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = timeList[i]
        table2.appendChild(li)
    }
};
renderTime();

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

document.querySelector(".time-btn").addEventListener("click", () => {
    toggleClass(document.querySelector(".page1"), 'active');
    toggleClass(document.querySelector(".page2"), 'active');
});
document.querySelector(".time-close-btn").addEventListener("click", () => {
    toggleClass(document.querySelector(".page1"), 'active');
    toggleClass(document.querySelector(".page2"), 'active');
});

document.querySelector(".calendar-btn").addEventListener("click", () => {
    toggleClass(document.querySelector('.page1 .footer'), 'active');
    toggleClass(document.querySelector(".menu"), 'menu_active');
});

document.querySelector(".menu-btnOff").addEventListener("click", () => {
    toggleClass(document.querySelector('.page1 .footer'), 'active');
    toggleClass(document.querySelector(".menu"), 'menu_active');
});

document.querySelector(".monday").addEventListener("click", () => {

    renderDayBook(1);
});
document.querySelector(".tuesday").addEventListener("click", () => {

    renderDayBook(2);
});
document.querySelector(".wednesday").addEventListener("click", () => {

    renderDayBook(3);
});
document.querySelector(".thursday").addEventListener("click", () => {

    renderDayBook(4);
});
document.querySelector(".friday").addEventListener("click", () => {

    renderDayBook(5);
});