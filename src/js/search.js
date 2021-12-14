export default class Search {
  constructor(data) {
    this.globalState = data;
    this.mainBlock = document.querySelector('.main');
    this.search = document.querySelector('.inp_search');
    this.categoryCheckBox = document.getElementById('category');
    this.foreverCheckBox = document.getElementById('checkbox-forever');
    this.countFavorites = document.querySelector('.count-favorites');
    //this.checkboxRed = document.querySelector('.checkbox-red');
    this.buttonReset = document.querySelector('.button-reset')
    this.mainBlock = document.querySelector('.main');
    this.buttonReset.addEventListener('click', ()=>{
      this.search.value = ''
      this.foreverCheckBox.checked = false
    })
    this.showAll(data);
    this.countFavorites.innerHTML = this.searchFavorite(data).length;

    this.categoryCheckBox.addEventListener('input', () => {
      this.cleanMain();
      this.showAll(data);
      this.search.value = '';
    });

    this.foreverCheckBox.addEventListener('input', () => {
      if (this.foreverCheckBox.checked) {
        this.globalState = this.getObj();
        console.log('this.globalState', this.globalState);
        let draw = this.searchFavorite(this.globalState);
        this.cleanMain();
        for (let i = 0; i < draw.length; i++) {
          this.drawBlock(
            draw[i].name,
            draw[i].count,
            draw[i].num,
            draw[i].year,
            draw[i].shape,
            draw[i].color,
            draw[i].size,
            draw[i].favorite
          );
        }
      } else if (!this.foreverCheckBox.checked) {
        console.log('this.globalState', this.globalState);
        this.cleanMain();
        for (let i = 0; i < this.globalState.length; i++) {
          this.drawBlock(
            this.globalState[i].name,
            this.globalState[i].count,
            this.globalState[i].num,
            this.globalState[i].year,
            this.globalState[i].shape,
            this.globalState[i].color,
            this.globalState[i].size,
            this.globalState[i].favorite
          );
        }
      }
    });

    this.search.addEventListener('input', () => {
      this.check(this.search.value, this.globalState);
    });
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
      if (favoriteBlock.innerHTML == 'Нет') {
        favoriteBlock.innerHTML = 'Да';
        this.countFavorites.innerHTML = Number(this.countFavorites.innerHTML) + 1;
        if (Number(this.countFavorites.innerHTML) > 20) {
          alert('больше 20-и игрушек нельзя добавлять в избранное');
          favoriteBlock.innerHTML = 'Нет';
          this.countFavorites.innerHTML = Number(this.countFavorites.innerHTML) - 1;
          favoriteBlock.classList.toggle('favorite-active');
        }
      } else if (favoriteBlock.innerHTML == 'Да') {
        favoriteBlock.innerHTML = 'Нет';
        this.countFavorites.innerHTML = Number(this.countFavorites.innerHTML) - 1;
      }
      favoriteBlock.classList.toggle('favorite-active');
    });
    if (favorite) {
      favoriteBlock.innerHTML = 'Да';
      favoriteBlock.classList.toggle('favorite-active');
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
  check(value, state) {
    console.log('state', state);
    this.cleanMain();
    let countNoResult = 0;
    for (let i = 0; i < state.length; i++) {
      let name = state[i].name.toLocaleLowerCase();

      if (name.indexOf(value) != -1) {
        this.drawBlock(
          state[i].name,
          state[i].count,
          state[i].num,
          state[i].year,
          state[i].shape,
          state[i].color,
          state[i].size,
          state[i].favorite
        );
      }
      if (name.indexOf(value) == -1) {
        countNoResult++;

        if (countNoResult >= 60) this.mainBlock.innerHTML = 'Извините, совпадений не обнаружено';
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
  searchColor(color) {
    let res = data.filter((el) => {
      return el.color === color;
    });
    return res;
  }
  // searchSize() {}
  searchFavorite(data) {
    let res = data.filter((el) => {
      return el.favorite === true;
    });
    return res;
  }
}
