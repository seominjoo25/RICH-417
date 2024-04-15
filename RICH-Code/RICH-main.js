let bw_click = () => {
    document.querySelector('.gnb').classList.toggle('block');
};

document.querySelector('.fa-chevron-down').addEventListener('click', () => {
    bw_click();
});

function toggleUl(menuClass, ulClass) {
    const menu = document.querySelector(menuClass);
    const ul = document.querySelector(ulClass);

    menu.addEventListener('mouseover', () => {
        const allUl = document.querySelectorAll('.ul_A, .ul_B, .ul_C, .ul_D, .ul_E, .ul_F');
        allUl.forEach((e) => {
            e.style.display = 'none';
        });

        ul.style.display = 'block';
    });
}

toggleUl('.menu_A', '.ul_A');
toggleUl('.menu_B', '.ul_B');
toggleUl('.menu_C', '.ul_C');
toggleUl('.menu_D', '.ul_D');
toggleUl('.menu_E', '.ul_E');
toggleUl('.menu_F', '.ul_F');

document.querySelectorAll('.ulb_all').forEach(li => {
    const ul = li.parentElement;
    ul.addEventListener('mouseover', () => {
        ul.style.display = 'none';
    });

    ul.addEventListener('mouseout', () => {
        ul.style.display = '';
    });
});

document.querySelector('.dlb1_bgwhite').addEventListener('click', function () {
    var newserch = document.querySelector('.newserch');
    if (newserch.style.display == 'none') {
        newserch.style.display = 'block';
    } else {
        newserch.style.display = 'none';
    }
});


