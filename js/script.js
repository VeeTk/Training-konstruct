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

// Бегущая строка в инпуте_______________________________________

const runInput = document.querySelector("#run_input");
const speed = 125;
const line = "test@youremail.com...";

let i = 0;
function runLine() {
   if (i++ < line.length) {
      runInput.value = line.substring(0, i);
   } else {
      runInput.value = "";
      i = 0;
   }
   done = setTimeout("runLine()", speed);
}

if (runInput.value === "") {
   runLine();
}

//\/\/\/\/\/\/\/
// Отправка введенной в инпут почты при нажатии signup

document.addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById("run_input");
   const signup = document.querySelector(".signup__button");
   const signupBody = document.querySelector(".signup");

   signup.addEventListener("click", formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);
      // let formData = new FormData(form);

      if (error === 0) {
         signupBody.classList.add("_sending");
         let response = await fetch("sendmail.php", {
            method: "POST",
            body: formData,
         });

         //    if (response.ok) {
         //       let result = await response.json();
         //       alert(result.message);
         //       formPreview.innerHTML = "";
         //       form.reset();
         //       form.classList.remove("_sending");
         //    } else {
         //       alert("Ошибка");
         //       form.classList.remove("_sending");
         //    }
      } else {
         alert("Пожалуйста, заполните поле корректно");
      }
   }

   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelector("._req");

      if (emailTest(formReq)) {
         formAddError(formReq);
         error++;
      } else if (formReq.value === "") {
         formAddError(formReq);
         error++;
      } else {
         formRemoveError(formReq);
      }
      return error;
   }
   function formAddError(formReq) {
      formReq.classList.add("_error");
   }
   function formRemoveError(formReq) {
      formReq.classList.remove("_error");
   }
   // Функция проверки email
   function emailTest(formReq) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
         formReq.value
      );
   }
});
