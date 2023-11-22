const price_selector = document.querySelectorAll('.price_selector');
const price_selector_active = document.querySelector('.price_selector_active');
const price_card_mobile = document.querySelectorAll('.price_card-mobile');
const cards = document.getElementById('cards');


price_selector.forEach((element, index) => {
    element.addEventListener('click', () => {

        let position = 0;

        if (index === 1) {
            position = '21px';
            cards.style.marginLeft = `-100vw`;
        } else if (index === 2) {
            position = '42px';
            cards.style.marginLeft = `-200vw`;
        } else {
            position = '0px';
            cards.style.marginLeft = `0vw`;
        }

        price_selector_active.style.left = position;

    })
})