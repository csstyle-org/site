import App from './lib/App';
import Prism from 'prismjs';
import smoothscroll from 'smoothscroll-polyfill';

// SmoothScroll polyfill
smoothscroll.polyfill();

// Prism
Prism.highlightAll();

// Application
window.app = new App;
