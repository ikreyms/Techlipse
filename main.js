//navbar start
const techlipseLogo = document.querySelectorAll('.techlipse');

techlipseLogo[0].addEventListener('click',()=>{
    window.open("index.html","_user");
});
techlipseLogo[1].addEventListener('click',()=>{
    window.open("index.html","_user");
});

const hamburger = document.querySelector('.hamburger');
const menu_m = document.querySelector('.menu_m');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const links_m_list = document.querySelectorAll('.links_m li');
const search_m = document.querySelector('.search_m');
const body = document.body;

hamburger.addEventListener('click',()=>{
    search_m.classList.toggle('fadein');
    menu_m.classList.toggle('menu_m_drop');
    line1.classList.toggle('forline1');
    line2.classList.toggle('forline2');
    line3.classList.toggle('forline3');
    links_m_list.forEach((listitem) => {
            listitem.classList.toggle('fade');
        }
    );
    body.classList.toggle('while_m_drop');
});


const search_input = document.querySelector('.dropleft_content input');
const search_button_d = document.getElementById('search_button_d');
const navlinks = document.querySelector('.navlinks');

search_button_d.addEventListener('click', ()=>{
    search_input.classList.toggle('stretch');
    navlinks.classList.toggle('clear');
    dropdown_content.classList.remove('dropdown');
    dropdowm_box.forEach(box => {
        box.classList.remove('widen');
    });
});

const dropdown_trigger = document.querySelector('.dropdown_trigger');
const dropdown_content = document.querySelector('.dropdown_content');
const dropdowm_box = document.querySelectorAll('.dropdown_box');
const explore = document.querySelector('.explore');

dropdown_trigger.addEventListener('click',(event)=>{
    event.preventDefault();
    dropdown_content.classList.toggle('dropdown');
    dropdowm_box.forEach(box => {
        box.classList.toggle('widen');
    });
    content.forEach(cont => {
        cont.classList.toggle('respect');
    });
    explore.classList.toggle('respect2');
    body.classList.toggle('while_m_drop');
});

//navbar end

//main start

const to_pull_onload = document.querySelector('.to_pull');
const content = document.querySelectorAll('.content');
const onload_appear = document.querySelector('.onload_appear');

window.addEventListener('load', ()=>{
    to_pull_onload.classList.add('pull_up');
    onload_appear.classList.add('onload_appeared');
});

const text_to_apper = document.querySelectorAll('.text_to_appear');
const pull_after = document.querySelectorAll('.pull_after');

window.addEventListener('scroll',()=>{
    var screen_pos1 = window.innerHeight/1.3;
    var screen_pos2 = window.innerHeight/0.7;
    
    text_to_apper.forEach(item =>{
        if(item.getBoundingClientRect().top<screen_pos1){
            item.classList.add('text_appear');
        }
    });
    pull_after.forEach(item =>{
        if(item.getBoundingClientRect().top<screen_pos2){
            item.style.transform='translateY(0)';
        }
    });
});

const gotooneplus8 = document.getElementById('gotooneplus8');
gotooneplus8.addEventListener('click', ()=>{
    window.open('oneplus8.html',"_self");
});

const gotose = document.getElementById('gotose');
gotose.addEventListener('click',()=>{
    window.open('iphonese.html',"_self");
});

const gotoultra = document.getElementById('gotoultra');
gotoultra.addEventListener('click',()=>{
    window.open('ultra.html',"_self");
});

//main end

//other links start

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
window.addEventListener('load',()=>{


const mediaCheck = window.matchMedia('(max-width:500)');
if(window.innerWidth<500){

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const prev1 = document.getElementsByClassName('prev')[0];
const next1 = document.getElementsByClassName('next')[0];
const img_reel1 = document.getElementsByClassName('img_reel')[0];
const gallery1 = document.getElementsByClassName('gallery')[0];

var counter1 = 1;
var img_width1 = gallery1.clientWidth;

img_reel1.style.transform = 'translateX('+ counter1 * -img_width1 +'px)';

prev1.addEventListener('click',()=>{
    if(counter1<0) return;
    counter1--;
    img_reel1.style.transition = '300ms ease-in all';
    img_reel1.style.transform = 'translateX('+ counter1 * -img_width1 +'px)';
});
next1.addEventListener('click',()=>{
    if(counter1>4) return;
    counter1++;
    img_reel1.style.transition = '300ms ease-in all';
    img_reel1.style.transform = 'translateX('+ counter1 * -img_width1 +'px)';
});
img_reel1.addEventListener('transitionend',()=>{
    if(counter1>3){
        img_reel1.style.transition = 'none';
        counter1 = 1;
        img_reel1.style.transform = 'translateX('+ counter1 * -img_width1 +'px)';
    }
    if(counter1<1){
        img_reel1.style.transition = 'none';
        counter1 = 3;
        img_reel1.style.transform = 'translateX('+ counter1 * -img_width1 +'px)';
    }
});

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const prev2 = document.getElementsByClassName('prev')[1];
const next2 = document.getElementsByClassName('next')[1];
const img_reel2 = document.getElementsByClassName('img_reel')[1];
const gallery2 = document.getElementsByClassName('gallery')[1];

var counter2 = 1;
var img_width2 = gallery2.clientWidth;

img_reel2.style.transform = 'translateX('+ counter2 * -img_width2 +'px)';

prev2.addEventListener('click',()=>{
    if(counter2<0) return;
    counter2--;
    img_reel2.style.transition = '300ms ease-in all';
    img_reel2.style.transform = 'translateX('+ counter2 * -img_width2 +'px)';
});
next2.addEventListener('click',()=>{
    if(counter2>4) return;
    counter2++;
    img_reel2.style.transition = '300ms ease-in all';
    img_reel2.style.transform = 'translateX('+ counter2 * -img_width2 +'px)';
});
img_reel2.addEventListener('transitionend',()=>{
    if(counter2>3){
        img_reel2.style.transition = 'none';
        counter2 = 1;
        img_reel2.style.transform = 'translateX('+ counter2 * -img_width2 +'px)';
    }
    if(counter2<1){
        img_reel2.style.transition = 'none';
        counter2 = 3;
        img_reel2.style.transform = 'translateX('+ counter2 * -img_width2 +'px)';
    }
});
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const prev3 = document.getElementsByClassName('prev')[2];
const next3 = document.getElementsByClassName('next')[2];
const img_reel3 = document.getElementsByClassName('img_reel')[2];
const gallery3 = document.getElementsByClassName('gallery')[2];

var counter3 = 1;
var img_width3 = gallery3.clientWidth;

img_reel3.style.transform = 'translateX('+ counter3 * -img_width3 +'px)';

prev3.addEventListener('click',()=>{
    if(counter3<0) return;
    counter3--;
    img_reel3.style.transition = '300ms ease-in all';
    img_reel3.style.transform = 'translateX('+ counter3 * -img_width3 +'px)';
});
next3.addEventListener('click',()=>{
    if(counter3>4) return;
    counter3++;
    img_reel3.style.transition = '300ms ease-in all';
    img_reel3.style.transform = 'translateX('+ counter3 * -img_width3 +'px)';
});
img_reel3.addEventListener('transitionend',()=>{
    if(counter3>3){
        img_reel3.style.transition = 'none';
        counter3 = 1;
        img_reel3.style.transform = 'translateX('+ counter3 * -img_width3 +'px)';
    }
    if(counter3<1){
        img_reel3.style.transition = 'none';
        counter3 = 3;
        img_reel3.style.transform = 'translateX('+ counter3 * -img_width3+'px)';
    }
});
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const prev4 = document.getElementsByClassName('prev')[3];
const next4 = document.getElementsByClassName('next')[3];
const img_reel4 = document.getElementsByClassName('img_reel')[3];
const gallery4 = document.getElementsByClassName('gallery')[3];

var counter4 = 1;
var img_width4 = gallery4.clientWidth;

img_reel4.style.transform = 'translateX('+ counter4 * -img_width4 +'px)';

prev4.addEventListener('click',()=>{
    if(counter4<0) return;
    counter4--;
    img_reel4.style.transition = '300ms ease-in all';
    img_reel4.style.transform = 'translateX('+ counter4 * -img_width4 +'px)';
});
next4.addEventListener('click',()=>{
    if(counter4>4) return;
    counter4++;
    img_reel4.style.transition = '300ms ease-in all';
    img_reel4.style.transform = 'translateX('+ counter4 * -img_width4 +'px)';
});
img_reel4.addEventListener('transitionend',()=>{
    if(counter4>3){
        img_reel4.style.transition = 'none';
        counter4 = 1;
        img_reel4.style.transform = 'translateX('+ counter4 * -img_width4 +'px)';
    }
    if(counter4<1){
        img_reel4.style.transition = 'none';
        counter4 = 3;
        img_reel4.style.transform = 'translateX('+ counter4 * -img_width4 +'px)';
    }
});
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
}
});
//other links end

const modal = document.querySelector('.modal');
const preview = document.querySelectorAll('.preview');
const full_image = document.querySelector('.full_image');
const caption = document.querySelector('.caption');

preview.forEach(item =>{
    item.addEventListener('click',()=>{
        modal.classList.add('view');
        full_image.classList.add('zoom');
        let full_image_src = item.getAttribute('data-original');
        full_image.src=full_image_src;
        caption.innerHTML=item.alt;
        body.classList.add('modal_overflowY');
    });
});
modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('view');
        full_image.classList.remove('zoom');
        body.classList.remove('modal_overflowY');
    }
});
