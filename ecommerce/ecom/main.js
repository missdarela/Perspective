import './style.css'
import '@splidejs/splide/css';

import Splide from '@splidejs/splide';


var splide = new Splide( '.splide', {
    type  : 'fade',
    rewind: true,
    autoplay:true,


} );

const animateP = document.getElementById("text-paragraph")
animateP.classList.add("text")
splide.mount();
new Splide( '.splide' ).mount();