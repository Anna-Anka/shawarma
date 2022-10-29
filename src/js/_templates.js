// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// * stepper
//import { stepperFunction } from "./functions/stepper";
//stepperFunction()

// * accordion 
//import { accordionFunction } from "./templates/accordion";
//accordionFunction();

// * Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// * Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// * Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// * Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// * Реализация бургер-меню
//import { burger } from './templates/burger';
// burger()

// * Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './templates/disable-scroll';

// * Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './templates/enable-scroll';

// * Реализация модального окна
//import GraphModal from 'graph-modal';
// const modal = new GraphModal('modal');

// * Реализация табов
//import GraphTabs from 'graph-tabs';
//const tabs = new GraphTabs('tab');

// * Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// * Подключение плагина кастом-скролла
//import 'simplebar';

// * Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// * Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// * Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// * Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// * Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// * Подключение галереи (Fullscreen Lightbox)
//import 'fslightbox'

// * Подключение mixit up
//import mixitup from 'mixitup';
//let mixer = mixitup('.sort-content');

// * Подключение Isotope
// import Isotope from "isotope-layout";
// const elem = document.querySelector('.');
// const iso = new Isotope(elem, {
//     itemSelector: '.',
//     layoutMode: 'masonry'
// });

// * Подключение inputmask
// import Inputmask from "inputmask";
// let inputs = document.querySelectorAll('input[type="tel"]')
// let im = new Inputmask('+7 (999) 999-99-99')
// im.mask(inputs)

// * Подключение choices.js
// import Choices from "choices.js";

// const defaultSelect = () => {
//     const element = document.querySelector('.default');
//     const choices = new Choices(element, {
//         searchEnabled: false
//     });   
// }

// defaultSelect()

// * Подключение just-validate
//import JustValidate from "just-validate";

//Если несколько форм
// const forms = document.querySelectorAll('.form')
// forms.forEach((form) => {
//     const formValidation = new JustValidate(form)

//     formValidation.addField('input[type="email"]', [
//         {
//             rule: 'required',
//             errorMessage: 'Поле должно быть заполнено',
//         },
//         {
//             rule: 'email',
//             errorMessage: 'Введите корректный email',
//         },
//     ]);
// })

//Если одна форма
// const validation = new JustValidate('.test');

// validation.addField('input[type="email"]', [
//     {
//         rule: 'required',
//         errorMessage: 'Поле должно быть заполнено',
//     },
//     {
//         rule: 'email',
//         errorMessage: 'Введите корректный email',
//     },
// ]);

// * Подключение marquee
//import { handleMarquee } from "./templates/marquee";
//handleMarquee();

// * Подключение липкой шапки
// import { headerSticky } from "./templates/header-sticky";
// headerSticky()

// * Подключение плавного скролла
// import { smoothScroll } from "./templates/smooth-scroll";
// smoothScroll()