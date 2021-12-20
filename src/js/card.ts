import { Idata } from '../interfaces/interfaces';

export default class Card {
  globalState: Idata[];
  block: NodeListOf<Element>;
  mainBlock: any;
  search: any;
  select: any;
  sliderForCopy: any;
  sliderForYears: any;
  foreverCheckBox: any;
  countFavorites: any;
  settingBlock: any;
  tegPath: HTMLCollectionOf<SVGPathElement>;
  slider: HTMLElement;
  allInput: HTMLCollectionOf<HTMLInputElement>;
  buttonReset: any;
  ballBig: HTMLElement;
  constructor(data: Idata[]) {
    this.globalState = data;
    this.block = document.querySelectorAll('.block');

    this.mainBlock = document.querySelector('.main');
    this.search = document.querySelector('.inp_search');
    this.search.focus();
    this.select = document.getElementById('select');
    this.sliderForCopy = document.getElementById('slider-for-copy');
    this.sliderForYears = document.getElementById('slider-for-years');
    this.foreverCheckBox = document.getElementById('checkbox-forever');
    this.countFavorites = document.querySelector('.count-favorites');
    this.settingBlock = document.querySelector('.setting');
    this.tegPath = document.getElementsByTagName('path');
    const dataBlockAndHide = document.querySelectorAll('.block.hideBlock');
    this.slider = document.querySelector('.noUi-target.noUi-ltr.noUi-horizontal');
    this.allInput = document.getElementsByTagName('input');
    this.buttonReset = document.querySelector('.button-reset');
    this.ballBig = document.getElementById('ball-big');
    this.countFavorites.innerHTML = this.searchFavorite(data).length;
    this.settingBlock.addEventListener('click', (event: { target: { id: string } }) => {
      if (event.target.id == 'bell') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchFun('колокольчик', this.mainBlock.children, 4, true);
        } else {
          this.searchFun('колокольчик', this.mainBlock.children, 4, false);
        }
      }
      if (event.target.id == 'ball') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchFun('шар', this.block, 4, true);
        } else {
          this.searchFun('шар', this.block, 4, false);
        }
      }

      if (event.target.id == 'cone') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchFun('шишка', this.block, 4, true);
        } else {
          this.searchFun('шишка', this.block, 4, false);
        }
      }
      if (event.target.id == 'snow') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchFun('снежинка', this.block, 4, true);
        } else {
          this.searchFun('снежинка', this.block, 4, false);
        }
      }

      if (event.target.id == 'toy') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchFun('фигурка', this.block, 4, true);
        } else {
          this.searchFun('фигурка', this.block, 4, false);
        }
      }

      if (event.target.id == 'ball-big') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchFun('большой', this.mainBlock.children, 6, true);
        } else {
          this.searchFun('большой', this.mainBlock.children, 6, false);
        }
      }
      if (event.target.id == 'ball-middle') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchFun('средний', this.mainBlock.children, 6, true);
        } else {
          this.searchFun('средний', this.mainBlock.children, 6, false);
        }
      }
      if (event.target.id == 'ball-small') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchFun('малый', this.mainBlock.children, 6, true);
        } else {
          this.searchFun('малый', this.mainBlock.children, 6, false);
        }
      }
      if (event.target.id == 'reset') {
        this.reset();
      }
    });
    this.settingBlock.addEventListener('input', (event: { target: { id: string; checked: boolean } }) => {
      if (event.target.id == 'checkbox-white') {
        if (event.target.checked) {
          this.searchFun('белый', this.mainBlock.children, 5, true);
        } else {
          this.searchFun('белый', this.mainBlock.children, 5, false);
        }
      }
      if (event.target.id == 'checkbox-yellow') {
        if (event.target.checked) {
          this.searchFun('желтый', this.mainBlock.children, 5, true);
        } else {
          this.searchFun('желтый', this.mainBlock.children, 5, false);
        }
      }
      if (event.target.id == 'checkbox-red') {
        if (event.target.checked) {
          this.searchFun('красный', this.mainBlock.children, 5, true);
        } else {
          this.searchFun('красный', this.mainBlock.children, 5, false);
        }
      }
      if (event.target.id == 'checkbox-blue') {
        if (event.target.checked) {
          this.searchFun('синий', this.mainBlock.children, 5, true);
        } else {
          this.searchFun('синий', this.mainBlock.children, 5, false);
        }
      }
      if (event.target.id == 'checkbox-green') {
        if (event.target.checked) {
          this.searchFun('зелёный', this.mainBlock.children, 5, true);
        } else {
          this.searchFun('зелёный', this.mainBlock.children, 5, false);
        }
      }
      if (event.target.id == 'checkbox-forever') {
        if (event.target.checked) {
          this.searchFun('Да', this.mainBlock.children, 7, true);
        } else {
          this.searchFun('Нет', this.mainBlock.children, 7, false);
        }
      }
    });
    this.sliderForCopy.noUiSlider.on('change', () => {
      this.searchSlider(this.sliderForCopy.noUiSlider.get(), this.mainBlock.children, 2);
    });
    this.sliderForYears.noUiSlider.on('change', () => {
      this.searchSlider(this.sliderForYears.noUiSlider.get(), this.mainBlock.children, 3);
    });

    this.search.addEventListener('input', () => {
      this.check(this.search.value);
    });
    this.showAll(data);

    this.select.addEventListener('change', () => {
      if (this.select.value == 'less_alphabet_more') {
        this.sortalfabet(this.mainBlock.children, 0, true);
      }
      if (this.select.value == 'more_alphabet_less') {
        this.sortalfabet(this.mainBlock.children, 0, false);
      }
      if (this.select.value == 'less_years_more') {
        this.sortCount(this.mainBlock.children, 2, true);
      }
      if (this.select.value == 'more_years_less') {
        this.sortCount(this.mainBlock.children, 2, false);
      }
    });
  }
  sortalfabet(data: any, itemChildren: number, marks: boolean) {
    let switching;
    let shouldSwitch;
    let i;

    switching = true;
    //debugger
    while (switching) {
      switching = false;

      for (i = 0; i < data.length; i++) {
        shouldSwitch = false;
        if (marks) {
          if (
            data[i].children[itemChildren].innerHTML.toLowerCase()[0] >
            data[i + 1].children[itemChildren].innerHTML.toLowerCase()[0]
          ) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (
            data[i].children[itemChildren].innerHTML.toLowerCase()[0] <
            data[i + 1].children[itemChildren].innerHTML.toLowerCase()[0]
          ) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        data[i].parentNode.insertBefore(data[i + 1], data[i]);
        switching = true;
      }
    }
  }
  sortCount(data: any, itemChildren: number, marks: boolean): void {
    let switching;
    let shouldSwitch;
    let i;

    switching = true;
    //debugger
    while (switching) {
      switching = false;

      for (i = 0; i < data.length; i++) {
        shouldSwitch = false;
        if (marks) {
          if (
            Number(data[i].children[itemChildren].innerHTML.match(/\d+/g)[0]) >
            Number(data[i + 1].children[itemChildren].innerHTML.match(/\d+/g)[0])
          ) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (
            Number(data[i].children[itemChildren].innerHTML.match(/\d+/g)[0]) <
            Number(data[i + 1].children[itemChildren].innerHTML.match(/\d+/g)[0])
          ) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        data[i].parentNode.insertBefore(data[i + 1], data[i]);
        switching = true;
      }
    }
  }

  searchSlider(arrValue: number[], data: HTMLCollection, itemChildren: number): void {
    let firstValue: number = arrValue[0];
    let lastValue: number = arrValue[1];

    for (const key of data) {
      let count: number = Number(key.children[itemChildren].innerHTML.match(/\d+/g)[0]);

      if (count >= firstValue && count <= lastValue) {
        key.classList.remove('hideBlock');
      } else {
        key.classList.add('hideBlock');
      }
    }
  }
  reset(): void {
    this.search.value = '';
    this.foreverCheckBox.checked = false;
    for (const iterator of this.tegPath) {
      iterator.setAttribute('fill', '#fff');
    }
    this.sliderForCopy.noUiSlider.reset();
    this.sliderForYears.noUiSlider.reset();

    for (const iterator of this.allInput) {
      if (iterator.getAttribute('type') == 'checkbox') {
        iterator.checked = false;
      }
    }
    for (const iterator of this.mainBlock.children) {
      iterator.classList.remove('hideBlock');
    }
  }
  changeColorSvg(elemHTML: HTMLElement): number {
    elemHTML.getAttribute('fill');
    if (elemHTML.getAttribute('fill') == '#fff') {
      elemHTML.setAttribute('fill', '#24C5DB');
      return 1;
    } else if (elemHTML.getAttribute('fill') == '#24C5DB') {
      elemHTML.setAttribute('fill', '#fff');
      return 0;
    }
  }
  showAll(data: Idata[]): void {
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
  drawBlock(
    name: string,
    count: string,
    num: string,
    year: string,
    shape: string,
    color: string,
    size: string,
    favorite: boolean
  ): void {
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
    favoriteBlock.addEventListener('click', () => {
      if (favoriteBlock.innerHTML.split(': ')[1] == 'Нет') {
        favoriteBlock.innerHTML = 'Любимая: Да';
        this.countFavorites.innerHTML = Number(this.countFavorites.innerHTML) + 1;
        if (Number(this.countFavorites.innerHTML) > 20) {
          alert('больше 20-и игрушек нельзя добавлять в избранное');
          favoriteBlock.innerHTML = 'Любимая: Нет';
          this.countFavorites.innerHTML = Number(this.countFavorites.innerHTML) - 1;
          favoriteBlock.classList.toggle('favorite-active');
        }
      } else if (favoriteBlock.innerHTML.split(': ')[1] == 'Да') {
        favoriteBlock.innerHTML = 'Любимая: Нет';
        this.countFavorites.innerHTML = Number(this.countFavorites.innerHTML) - 1;
      }
      favoriteBlock.classList.toggle('favorite-active');
    });
    if (favorite) {
      favoriteBlock.innerHTML = 'Любимая: Да';
      favoriteBlock.classList.toggle('favorite-active');
    } else {
      favoriteBlock.innerHTML = 'Любимая: Нет';
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
  check(value: string): void {
    let countNoResult = 0;
    for (const i of this.mainBlock.children) {
      let name = i.children[0].innerHTML.toLocaleLowerCase();

      if (name.indexOf(value) != -1) {
        i.classList.remove('hideBlock');
      }
      if (name.indexOf(value) == -1) {
        i.classList.add('hideBlock');
        countNoResult++;

        if (countNoResult >= this.globalState.length) {
          alert('Совпадений не обнаруженно');
        }
      }
    }
  }
  getObj(): object[] {
    let arrObj = [];
    let block: any = document.querySelectorAll('.block');
    for (let i = 0; i < block.length; i++) {
      const obj: any = new Object();
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
  searchFun(form: string, data: any, itemChildren: any, flag: boolean): void {
    const dataHide = document.querySelectorAll('.block.hideBlock');
    if (flag) {
      for (const key of data) {
        if (dataHide.length == 0) {
          if (key.children[itemChildren].innerHTML.split(': ')[1] !== form && key.className !== 'block hideBlock') {
            key.classList.add('hideBlock');
          }
        }
      }
      if (dataHide.length !== 0) {
        for (const iterator of dataHide) {
          if (iterator.children[itemChildren].innerHTML.split(': ')[1] == form) {
            iterator.classList.remove('hideBlock');
          }
        }
      }
    } else {
      for (const key of data) {
        if (key.children[itemChildren].innerHTML.split(': ')[1] == form) {
          key.classList.add('hideBlock');
        }
      }
    }
  }
  searchFavorite(data: Idata[]): boolean | any {
    let res = data.filter((el) => {
      return el.favorite === true;
    });
    return res;
  }
}
