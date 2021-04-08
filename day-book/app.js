$(function(){

  $('.menu-btn-on').on('click', function(e) {
    e.preventDefault();
  $('.menu-time').toggleClass('menu-time_active');
  $('.container').toggleClass('container_active');
  });

  $('.menu-btn-off').on('click', function(e) {
    e.preventDefault();
  $('.menu-time').toggleClass('menu-time_active');
  $('.container').toggleClass('container_active');
  });
});

var date = new Date();

var clock = document.getElementById("clock");


  var days = function (day) {
    switch (day) {
      case 0: return"Неділя";
      case 1: return"Понеділок";
      case 2: return"Вівторок";
      case 3: return"Середа";
      case 4: return"Четвер";
      case 5: return"П'ятниця";
      case 6: return"Субота";
      default: return "Х'юстон у на проблєми";
    }
  }

const renderDayBook = () => {

  document.querySelector(".date h1").innerHTML = days(date.getDay());
  const table = document.querySelector(".tables ol");

  const monday = `<li>Фізика</li>
		     		<li>Хімія</li>
		     		<li>Історія У.</li>
		     		<li>Зарубіжна</li>
		     		<li>Алгебра</li>
		     		<li>Англ-мова</li>
		     		<li>Укр-літ</li>`;

  const tuesday = `<li>З.У.</li>
					<li>Фіз-ра</li>
					<li>Фізика</li>
					<li>Труди</li>
			 		<li>Всесвітня</li>
		     		<li>Укр-мова</li>
		     		<li>Укр-літ</li>`;

  const wednesday = `<li>Інформатика</li>
			    	<li>З.У.</li>
			  		<li>Фіз-ра</li>
		    		<li>Укр-мова</li>
		     		<li>Фізика</li>
		     		<li>Біологія</li>
		    		<li>Біологія</li>`;

  const thursday = `<li>Фіз-ра</li>
		 			<li>Укр-мова</li>
					<li>Укр-літ</li>
					<li>Географія</li>
					<li>Алгебра</li>
					<li>Геометрія</li>`;

  const friday = `<li>Англ-мова</li>
			 		  <li>Фізика</li>
		     		<li>Нім-мова</li>
		     		<li>Хімія</li>
		     		<li>Укр-мова</li>
		     		<li>Укр-літ</li>
		     		<li>Інформатика</li>`;

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
    table.innerHTML = `<li style="list-style: none;">Вихідні, іди гуляй дурачок</li>`;
  }
};
renderDayBook();

function renderLesson() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();

  if ( h == 8 && m >= 0 || h == 8 && m <= 45) {
    document.querySelectorAll(".tables ol li")[0].classList.add('lesson');
  }
  else if ( h == 8 && m >= 45 || h == 9 && m <= 50) {
    document.querySelectorAll(".tables ol li")[1].classList.add('lesson');
  }
  else if ( h == 9 && m >= 50 || h == 10 && m <= 55) {
    document.querySelectorAll(".tables ol li")[2].classList.add('lesson');
  }
  else if ( h == 10 && m >= 55 || h == 12 && m <= 0) {
    document.querySelectorAll(".tables ol li")[3].classList.add('lesson');
  }
  else if ( h == 12 && m >= 0 || h == 13 && m <= 5) {
    document.querySelectorAll(".tables ol li")[4].classList.add('lesson');
  }
  else if ( h == 13 && m >= 5 || h == 14 && m <= 0) {
    document.querySelectorAll(".tables ol li")[5].classList.add('lesson');
  }
  else if ( h == 14 && m >= 0 || h == 15 && m <= 55) {
    document.querySelectorAll("ol li")[6].classList.add('lesson');
  }
  else {}
};
setInterval(renderLesson, 100);

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

document.querySelector(".prev").addEventListener("click", () => {
  date = new Date(date.getFullYear(), date.getMonth(), (date.getDate()-1));
  renderDayBook();
});

document.querySelector(".next").addEventListener("click", () => {
  date = new Date(date.getFullYear(), date.getMonth(), (date.getDate()+1));
  renderDayBook();
});