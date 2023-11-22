const burger_button = document.getElementById('burger_button');
const burger_menu_icon = document.getElementById('burger_menu_icon');
const burger_menu = document.getElementById('burger_menu');

let documentScroll = true;

burger_button.addEventListener('click', () => {
    burger_menu_icon.classList.toggle('burger_menu_icon-open');
    burger_menu.classList.toggle('burger_menu-open');

    console.log(documentScroll);

    if (documentScroll) {
        document.body.style.maxHeight = '100vh';
        document.body.style.overflow = 'hidden';

        documentScroll = !documentScroll;
    } else {
        document.body.style.maxHeight = 'none';
        document.body.style.overflow = 'scroll';

        documentScroll = !documentScroll;
    }
});

const burger_menu_link = document.querySelectorAll('.burger_menu-link');

burger_menu_link.forEach(element => {
    element.addEventListener('click', () => {
        burger_menu_icon.classList.toggle('burger_menu_icon-open');
        burger_menu.classList.toggle('burger_menu-open');

        document.body.style.overflow = 'scroll';

        documentScroll = true;
    });
});