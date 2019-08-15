import { el } from 'redom';

export class Navigation {
    constructor() {
        const menuItems = ['home', 'settings', 'about us'];
        this.active = 'home';
        this.el = this.render(menuItems);
    }

    render(menuItems) {
        return el('div', el('ul', this.buildListItems(menuItems)));
    }

    buildListItems(items) {
        return items.map(item => el(`li${this.active === item ? '.active-item' : ''}`, item));
    }

    setActive(name) {
        this.active = name;
    }
}
