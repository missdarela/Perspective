import './style.css'
import '@splidejs/splide/css';
import 'aos/dist/aos.css';

import AOS from 'aos'; // You can also use <link> for styles
import Splide from '@splidejs/splide';

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
  } );
  
  splide.mount();

AOS.init();
new Splide( '.splide' ).mount();