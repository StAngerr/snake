import { el } from 'redom';

export class Navigation {
    constructor() {
        const menuItems = ['home', 'settings', 'about us'];
        this.active = 'home';
        this.el = this.render(menuItems);
    }

    render(menuItems) {
        return el('nav.container', el('ul.level.level-left', this.buildListItems(menuItems)));
    }

    buildListItems(items) {
        const liClasses = `.level-item.has-text-centered.button.is-primary.is-narrow`;
        return items.map(item => el(`li${liClasses}${this.active === item ? '.active-item' : ''}`, item));
    }

    setActive(name) {
        this.active = name;
    }
}
