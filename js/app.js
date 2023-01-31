const icons = document.querySelectorAll('.section-1-icons i');
let count = 1;


setInterval(() => {

    count++;
    const icon = document.querySelector('.change');
    icon.classList.remove('change');
    if (count < icons.length) {

        icon.nextElementSibling.classList.add('change');
    } else {
        count = 1;
        icons[0].classList.add('change');
    }

}, 3000)