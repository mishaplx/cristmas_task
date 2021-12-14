import data from './data.js';
import Search from './search.js';

export default class App {
  constructor() {
    this.globalState = data;
    this.buttonStart = document.querySelector('.button-start');
    this.mainTitle = document.querySelector('.main-title');
    this.wrapperBlock = document.querySelector('.wrapper');
    this.containerBlock = document.querySelector('.container');
    this.footerBlock = document.querySelector('.footer');
  }

  start() {
    this.buttonStart.addEventListener('click', () => {
      this.buttonStart.classList.toggle('hide');
      this.mainTitle.classList.toggle('hide');
      this.containerBlock.style.display = 'block';
      this.containerBlock.style.display = 'block';
      this.wrapperBlock.style.display = 'flex';
      this.containerBlock.style.backgroundColor = '#192f2d';
      this.footerBlock.style.display = 'none';
      new Search(data);
    });
  }
}
