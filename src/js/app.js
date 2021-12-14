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

    // this.search.value = '';

    this.search.addEventListener('input', () => {
      this.check(this.search.value);
      console.log(this.getObj());
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
    colorBlock.innerHTML = `Цвет игрушки: ${color}`;

    const sizeBlock = document.createElement('div');
    sizeBlock.className = 'size';
    sizeBlock.innerHTML = `Размер игрушки: ${size}`;

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
    block.appendChild(sizeBlock);
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
  getObj() {
    let arrObj = [];
    let block = document.querySelectorAll('.block');
    for (let i = 0; i < block.length; i++) {
      const obj = new Object();
      obj.name = block[i].children[0].innerHTML;
      obj.num = block[i].children[1].src.match(/\d+/g)[5];
      obj.count = block[i].children[2].innerHTML.match(/\d+/g)[0];
      obj.year = block[i].children[3].innerHTML.match(/\d+/g)[0];
      obj.shape = block[i].children[4].innerHTML.split(': ')[1];
      obj.color = block[i].children[5].innerHTML.split(': ')[1];
      obj.size = block[i].children[6].innerHTML.split(': ')[1];
      if (block[i].children[7].innerHTML == 'Нет') {
        obj.favorite = false;
      } else {
        obj.favorite = true;
      }
      arrObj.push(obj);
    }
    return arrObj;
  }
  cleanMain() {
    this.mainBlock.innerHTML = '';
  }
  // searchForm() {}
  // searchCopy() {}
  // searchYear() {}
  // searchColor() {}
  // searchSize() {}
  // searchFavorite(){ }
}
