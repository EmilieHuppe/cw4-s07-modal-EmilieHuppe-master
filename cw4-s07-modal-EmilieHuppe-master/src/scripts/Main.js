import Factory from './Factory';

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');

    new Factory();
  }
}
new Main();
