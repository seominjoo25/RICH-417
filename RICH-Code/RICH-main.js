let bw_click = () => {
    document.querySelector('.gnb').classList.toggle('block');
};

document.querySelector('.fa-chevron-down').addEventListener('click', () => {
    bw_click();
});

document.querySelector('.menu_A').addEventListener('mouseover', () => {
    document.querySelector('.ul_A').style.display = 'block';
});

document.querySelector('.menu_A').addEventListener('mouseout', () => {
    document.querySelector('.ul_A').style.display = '';
});

document.querySelector('.menu_B').addEventListener('mouseover', () => {
    document.querySelector('.ul_B').style.display = 'block';
});

document.querySelector('.menu_B').addEventListener('mouseout', () => {
    document.querySelector('.ul_B').style.display = '';
});

document.querySelector('.menu_C').addEventListener('mouseover', () => {
    document.querySelector('.ul_C').style.display = 'block';
});

document.querySelector('.menu_C').addEventListener('mouseout', () => {
    document.querySelector('.ul_C').style.display = '';
});

document.querySelector('.menu_D').addEventListener('mouseover', () => {
    document.querySelector('.ul_D').style.display = 'block';
});

document.querySelector('.menu_D').addEventListener('mouseout', () => {
    document.querySelector('.ul_D').style.display = '';
});

document.querySelector('.menu_E').addEventListener('mouseover', () => {
    document.querySelector('.ul_E').style.display = 'block';
});

document.querySelector('.menu_E').addEventListener('mouseout', () => {
    document.querySelector('.ul_E').style.display = '';
});

document.querySelector('.menu_F').addEventListener('mouseover', () => {
    document.querySelector('.ul_F').style.display = 'block';
});

document.querySelector('.menu_F').addEventListener('mouseout', () => {
    document.querySelector('.ul_F').style.display = '';
});

document.querySelector('.dlb1_bgwhite').addEventListener('click', function () {
    var newserch = document.querySelector('.newserch');
    if (newserch.style.display == 'none') {
        newserch.style.display = 'block';
    } else {
        newserch.style.display = 'none';
    }
});


