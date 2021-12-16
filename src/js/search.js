export default class Search {
  constructor(data) {
    this.globalState = data;
    this.block = document.querySelectorAll('.block');
    this.mainBlock = document.querySelector('.main');
    this.search = document.querySelector('.inp_search');
    this.sliderForCopy = document.getElementById('slider-for-copy');
    this.sliderForYears = document.getElementById('slider-for-years');
    this.foreverCheckBox = document.getElementById('checkbox-forever');
    this.countFavorites = document.querySelector('.count-favorites');
    this.settingBlock = document.querySelector('.setting');
    this.tegPath = document.getElementsByTagName('path');
    this.slider = document.querySelector('.noUi-target.noUi-ltr.noUi-horizontal');
    this.allInput = document.getElementsByTagName('input');
    this.buttonReset = document.querySelector('.button-reset');
    this.ballBig = document.getElementById('ball-big');
    this.countFavorites.innerHTML = this.searchFavorite(data).length;
    this.settingBlock.addEventListener('click', (event) => {
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
    this.settingBlock.addEventListener('input', (event) => {
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
    });
    this.sliderForCopy.noUiSlider.on('change', () => {
      this.searchSlider(this.sliderForCopy.noUiSlider.get(), this.mainBlock.children,2);
    });
    this.sliderForYears.noUiSlider.on('change', () => {
      this.searchSlider(this.sliderForYears.noUiSlider.get(), this.mainBlock.children,3);
    });

    this.search.addEventListener('change', () => {
      this.check(this.search.value, this.globalState);
    });
    this.showAll(data);
  }
  searchSlider(arrValue, data,itemChildren) {
    
    let firstValue = arrValue[0];
    let lastValue = arrValue[1];
    const dataHide = document.querySelectorAll('.block.hideBlock');
    
    for (const key of data) {
      let count = Number(key.children[itemChildren].innerHTML.match(/\d+/g)[0]);

      if (count >= firstValue && count <= lastValue) {
        key.classList.remove('hideBlock');
      } else {
        key.classList.add('hideBlock');
      }
    }
    console.log();
  }
  reset() {
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
  changeColorSvg(elemHTML) {
    elemHTML.getAttribute('fill');
    if (elemHTML.getAttribute('fill') == '#fff') {
      elemHTML.setAttribute('fill', '#24C5DB');
      return 1;
    } else if (elemHTML.getAttribute('fill') == '#24C5DB') {
      elemHTML.setAttribute('fill', '#fff');
      return 0;
    }
  }
  showAll(data) {
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
  check(value) {
    let countNoResult = 0;
    for (let i = 0; i < this.block.length; i++) {
      let name = this.block[i].children[0].innerHTML.toLocaleLowerCase();

      if (name.indexOf(value) != -1) {
        this.block[i].classList.remove('hideBlock');
      }
      if (name.indexOf(value) == -1) {
        this.block[i].classList.add('hideBlock');
        countNoResult++;

        if (countNoResult >= 60) {
          alert('Совпадений не обнаруженно');
        }
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
  searchFun(form, data, itemChildren, flag) {
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
  searchFavorite(data) {
    let res = data.filter((el) => {
      return el.favorite === true;
    });
    return res;
  }
}
