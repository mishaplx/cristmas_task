import data from './data.js';
import Search from './search.js';

export default class App {
  constructor() {
    this.search = new Search(data);
    this.buttonStart = document.querySelector('.button-start');
    this.mainTitle = document.querySelector('.main-title');
    this.wrapperBlock = document.querySelector('.wrapper');
    this.containerBlock = document.querySelector('.container');
    this.footerBlock = document.querySelector('.footer');
    this.mainBlock = document.querySelector('.main');
    this.search = document.querySelector('.inp_search');

    this.search.value = '';
    this.search.focus;
    this.search.select;
    this.search.addEventListener('input', () => {
      this.check(this.search.value);
    });
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
      this.showAll(data);
    });
  }
  showAll(data) {
    //let x = data.filter((el)=>{
    // return el.color === 'желтый'
    //})
    //console.log(x);
    for (let i = 0; i < data.length; i++) {
      this.drawBlock(
        data[i].name,
        data[i].count,
        data[i].num,
        data[i].year,
        data[i].shape,
        data[i].color,
        data[i].size,
        data[i].favorite
      );
    }
  }
  cleanMain() {
    this.mainBlock.innerHTML = '';
  }
  drawBlock(name, count, num, year, shape, color, size, favorite) {
    const block = document.createElement('div');
    block.className = 'block';

    const nameBlock = document.createElement('div');
    nameBlock.className = 'name';
    nameBlock.innerHTML = name;
    const imgBlock = document.createElement('img');
    imgBlock.className = 'img';

    imgBlock.src = `./assets/toys/${num}.png`;

    const countBlock = document.createElement('div');
    countBlock.className = 'count';
    countBlock.innerHTML = `колличество: ${count}`;
    const yearBlock = document.createElement('div');
    yearBlock.className = 'year';
    yearBlock.innerHTML = `Год покупки ${year}`;

    const formBlock = document.createElement('div');
    formBlock.className = 'form';
    formBlock.innerHTML = `форма игрушки: ${shape}`;

    const colorBlock = document.createElement('div');
    colorBlock.className = 'color';
    colorBlock.innerHTML = `Цвет игрушки ${color}`;
    const sizeBlock = document.createElement('div');
    sizeBlock.className = 'size';
    sizeBlock.innerHTML = `Размер игрушки ${size}`;

    const favoriteBlock = document.createElement('div');
    favoriteBlock.className = 'favorite';
    if (favorite) {
      favoriteBlock.innerHTML = 'Да';
    } else {
      favoriteBlock.innerHTML = 'Нет';
    }
    block.appendChild(nameBlock);
    block.appendChild(imgBlock);
    block.appendChild(countBlock);
    block.appendChild(yearBlock);
    block.appendChild(formBlock);
    block.appendChild(colorBlock);
    block.appendChild(favoriteBlock);

    this.mainBlock.appendChild(block);
  }
  check(value) {
    this.cleanMain();
    for (let i = 0; i < data.length; i++) {
      let name = data[i].name.toLocaleLowerCase();
      //debugger
      if (name.indexOf(value) != -1) {
        this.drawBlock(
          data[i].name,
          data[i].count,
          data[i].num,
          data[i].year,
          data[i].shape,
          data[i].color,
          data[i].size,
          data[i].favorite
        );
      }
    }
  }

  // searchForm() {}
  // searchCopy() {}
  // searchYear() {}
  // searchColor() {}
  // searchSize() {}
  // searchFavorite(){ }
}
