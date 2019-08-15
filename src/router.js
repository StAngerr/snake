import { loginPage } from "./components/login/login";
import { setChildren } from "redom";
import { Home } from './components/home/home';

export class AppRouter {
  constructor(elem, initialRoute) {
    this.routerContainer = elem;
    window.addEventListener('hashchange', this.onHashChange.bind(this));
    if (initialRoute) {
      location.hash = initialRoute;
      this.handleRoute(initialRoute);
    }
  }

  onHashChange(event) {
    const newHash = event.newURL.split('#')[1];
    const oldHash = event.oldURL.split('#')[1];
    if (newHash === oldHash) {
      return;
    }
    this.handleRoute(newHash);
  }

  handleRoute(routeName) {
    switch (routeName) {
      case 'login':
        this.routerContainer.append(loginPage);
        break;
      case 'home':
        setChildren(this.routerContainer, [new Home()]);
        break;
      default:
        console.log('default');
    }
  }

}
