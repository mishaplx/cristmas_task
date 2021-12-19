import data from './data';
import Card from './card';
import { Idata } from "../interfaces/interfaces"

export default class App {
  globalState: Idata[];
  buttonStart: HTMLElement;
  mainTitle: HTMLElement;
  wrapperBlock: HTMLElement;
  containerBlock: HTMLElement;
  footerBlock: HTMLElement;
  constructor() {
    this.globalState = data;
    this.buttonStart = document.querySelector('.button-start');
    this.mainTitle = <HTMLElement>document.querySelector('.main-title');
    this.wrapperBlock = <HTMLElement>document.querySelector('.wrapper');
    this.containerBlock = <HTMLElement>document.querySelector('.container');
    this.footerBlock = <HTMLElement>document.querySelector('.footer');
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
      new Card(data);
    });
  }
}
