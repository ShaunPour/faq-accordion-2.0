const minusBtn = document.querySelectorAll('.minus-icon');
const plusBtn = document.querySelectorAll('.plus-icon');
const parentBtn = document.querySelectorAll('.btn');
const description = document.querySelectorAll('.accordion-description');


plusBtn.addEventListener('click', function () {
    const index = plusBtn.indexOf(this);
    description[index].style.display = 'block';
    parentBtn[index].classList.add('active');
});