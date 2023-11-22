const active_background = document.getElementById('active_feature');
const personal_button = document.getElementById('personal_button');
const business_button = document.getElementById('business_button');

const feature_button = document.querySelectorAll('.feature_button');

feature_button[0].classList.add('active_feature');

feature_button.forEach((element, index) => {

    element.addEventListener('click', () => {

        element.classList.add('active_feature');

        if (!index) {
            feature_button[1].classList.remove('active_feature');
            active_background.style.left = '0px';
        } else {
            feature_button[0].classList.remove('active_feature');
            active_background.style.left = '158px';
        }

    });

})