// Бегущая строка в инпуте

const runInput = document.querySelector("#run_input");
const speed = 125;
const line = "test@youremail.com...";

// for (let i = 0; i <= line.length; i++) {
//    runInput.value = line.substring(0, i);
// }

let i = 0;
function runLine() {
   if (i++ < line.length) {
      runInput.value = line.substring(0, i);
   } else {
      runInput.value = " ";
      i = 0;
   }
   done = setTimeout("runLine()", speed);
}

runLine();

// прокручивание скрола по нажатию на элемент в меню

const mainElement = document.documentElement; //Получили тег html
const mainElemWidth = mainElement.clientWidth; //ширина доступной части страницы
const mainElemHeight = mainElement.clientHeight; //высота доступной части страницы
let scrollHeight = Math.max(
   // высота всейстраницы в пикселях
   document.body.scrollHeight,
   document.documentElement.scrollWidth,
   document.body.offsetWidth,
   document.documentElement.offsetWidth,
   document.body.clientHeight,
   document.documentElement.clientWidth
);

console.log(mainElemWidth);
console.log(mainElemHeight);
console.log(scrollHeight);

// Прокрутка до элементов по клику одной из кнопок в меню

const menuHome = document.querySelector(".nav__link-home");
const menuAbout = document.querySelector(".nav__link-about");
const menuServices = document.querySelector(".nav__link-services");
const menuWork = document.querySelector(".nav__link-work");
const menuContact = document.querySelector(".nav__link-contact");
const scrollDownBtn = document.querySelector(".mainimage__button");

// прокрутка в начало по нажатию Home
function scrollToHome(param) {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
   });
}
menuHome.addEventListener("click", () => {
   scrollToHome();
});

// прокрутка до about
function scrollIntoOurStory(about) {
   const ourStory = document.querySelector(".ourstory__header");
   ourStory.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
   });
}
menuAbout.addEventListener("click", () => {
   scrollIntoOurStory(true);
});

// прокрутка до services
function scrollIntoServices(param) {
   const services = document.querySelector(".capabilities");
   services.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
   });
}
menuServices.addEventListener("click", () => {
   scrollIntoServices(true);
});

// прокрутка до work
function scrollIntoWork(param) {
   const work = document.querySelector(".amasing");
   work.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
   });
}
menuWork.addEventListener("click", () => {
   scrollIntoWork(true);
});

// прокрутка до contact
function scrollIntoContact(param) {
   const contact = document.querySelector(".copy");
   contact.scrollIntoView({
      block: "end",
      inline: "nearest",
      behavior: "smooth",
   });
}
menuContact.addEventListener("click", () => {
   scrollIntoContact(true);
});

// scroll down кнопка
function scrollDown(param) {
   const scrollDown = document.querySelector(".menu");
   scrollDown.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
   });
}
scrollDownBtn.addEventListener("click", () => {
   scrollDown(true);
});

//\/\/\/\/\/\/\/\/
//  КНОПКА TO TOP

const scrollTopBtn = document.querySelector(".fa-solid");

window.onscroll = () => {
   if (window.scrollY > 765) {
      scrollTopBtn.classList.add("_show-btn");
   } else if (window.scrollY < 800) {
      scrollTopBtn.classList.remove("_show-btn");
   }
};
scrollTopBtn.addEventListener("click", () => {
   scrollToHome();
});
