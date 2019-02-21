export default class EventHandler {
    constructor(app) {
        this.app = app;

        history.scrollRestoration = 'manual';

        const result = document.evaluate(
            '//*[@*[starts-with(name(), "@")]]',
            document,
            null,
            XPathResult.UNORDERED_NODE_ITERATOR_TYPE
        );
        let els = [];

        for (let el; el = result.iterateNext();) {
            els.push(el);
        }

        els.forEach((el) => {
            Array.from(el.attributes).forEach((attr) => {
                if (attr.name.startsWith('@')) {
                    this.add(attr);
                }
            });
        });
    }

    add = (attr) => {
        let { event, modifiers } = this.parseAttr(attr.name);
        let el = attr.ownerElement;

        if (! `on${event}` in el) {
            return;
        }

        let options = {
            capture: modifiers.includes('capture'),
            once: modifiers.includes('once'),
            passive: modifiers.includes('passive'),
        };

        el.addEventListener(event, (e) => {
            if (modifiers.includes('self') && e.target !== el) {
                if (modifiers.includes('prevent') && modifiers.indexOf('prevent') < modifiers.indexOf('self')) {
                    e.preventDefault();
                }

                if (modifiers.includes('stop') && modifiers.indexOf('stop') < modifiers.indexOf('self')) {
                    e.stopPropagation();
                }

                return;
            }

            if (modifiers.includes('prevent')) {
                e.preventDefault();
            }

            if (modifiers.includes('stop')) {
                e.stopPropagation();
            }

            this.getHandler(attr.value).handle(e);
        }, options);
    }

    parseAttr = (name) => {
        let [event, ...modifiers] = name.replace(/^@/, '').split('.');

        return { event, modifiers };
    }

    getHandler = (handler) => {
        let handle = (e) => {
            let segments = handler.split('.');
            let callback = this.app[segments.shift()];

            while (segments.length) {
                callback = callback[segments.shift()];
            }

            return callback(e);
        };

        return {
            handle,
        };
    }
}
