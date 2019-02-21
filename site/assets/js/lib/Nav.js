export default class Nav {
    constructor() {
        document.addEventListener('DOMContentLoaded', e => {
            let path = this.constructor.getPath();

            if (path) {
                this.jumpTo(path);
            } else {
                this.jumpTo('home');
            }
        });

        window.addEventListener('popstate', e => {
            let path = this.constructor.getPath();

            if (path) {
                this.scrollTo(path);
            } else {
                this.scrollTo('home');
            }
        });
    }

    static getPath() {
        return window.location.pathname.replace(/^\/+/, '');
    }

    go = (e) => {
        let path = this.constructor.getPath();
        let id = e.target.getAttribute('href').replace('#', '');

        this.scrollTo(id);

        if (path != id) {
            history.pushState({id}, '', '/' + id);
        }
    }

    scrollTo = (id) => {
        let el = document.getElementById(id);

        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        el.focus({
            preventScroll: true,
        });

        if (document.activeElement != el) {
            el.setAttribute('tabindex', -1);
            el.focus({
                preventScroll: true,
            });
        }
    }

    jumpTo = (id) => {
        let el = document.getElementById(id);

        el.scrollIntoView({
            block: 'start',
        });
        el.focus({
            preventScroll: true,
        });

        if (document.activeElement != el) {
            el.setAttribute('tabindex', -1);
            el.focus({
                preventScroll: true,
            });
        }
    }
}
