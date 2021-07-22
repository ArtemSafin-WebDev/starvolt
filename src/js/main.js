import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';
import introSlider from './introSlider';
import productsMenu from './productsMenu';
import accordions from './accordions';
import menu from './menu';
import newsSlider from './newsSlider';
import copyCode from './copyCode';
import mobileFilters from './mobileFilters';
import productCodes from './productCodes';
import gallery from './gallery';
import productTabs from './productTabs';
import otherNews from './otherNews';
import chooseAuto from './chooseAuto';
import searchProducts from './searchProducts';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
    introSlider();
    productsMenu();
    accordions();
    menu();
    newsSlider();
    copyCode();
    mobileFilters();
    productCodes();
    gallery();
    productTabs();
    otherNews();
    chooseAuto();
    searchProducts();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
