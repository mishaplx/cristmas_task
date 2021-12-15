export default class Search {
  constructor(data) {
    this.globalState = data;
    this.mainBlock = document.querySelector('.main');

    this.search = document.querySelector('.inp_search');
    //this.categoryCheckBox = document.getElementById('category');
    this.foreverCheckBox = document.getElementById('checkbox-forever');
    this.countFavorites = document.querySelector('.count-favorites');
    this.settingBlock = document.querySelector('.setting');
    
    this.settingBlock.addEventListener('click', (event) => {
      if (event.target.id == 'bell') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchForm('колокольчик', this.mainBlock.children, true);
        } else {
          this.searchForm('колокольчик', this.mainBlock.children, false);
        }
      }
      if (event.target.id == 'ball') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchForm('шар', this.block, true);
        } else {
          this.searchForm('шар', this.block, false);
        }
      }

      if (event.target.id == 'cone') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchForm('шишка', this.block, true);
        } else {
          this.searchForm('шишка', this.block, false);
        }
      }
      if (event.target.id == 'snow') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchForm('снежинка', this.block, true);
        } else {
          this.searchForm('снежинка', this.block, false);
        }
      }

      if (event.target.id == 'toy') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchForm('фигурка', this.block, true);
        } else {
          this.searchForm('фигурка', this.block, false);
        }
      }

      if (event.target.id == 'ball-big') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchSize2('большой', this.mainBlock.children, true);
        } else {
          this.searchSize2('большой', this.mainBlock.children, false);
        }
      }
      if (event.target.id == 'ball-middle') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchSize2('средний', this.mainBlock.children, true);
        } else {
          this.searchSize2('средний', this.mainBlock.children, false);
        }
      }
      if (event.target.id == 'ball-small') {
        if (this.changeColorSvg(document.getElementById(event.target.id))) {
          this.searchSize2('малый', this.mainBlock.children, true);
        } else {
          this.searchSize2('малый', this.mainBlock.children, false);
        }
      }
    });
    //this.checkboxRed = document.querySelector('.checkbox-red');
    this.buttonReset = document.querySelector('.button-reset');
    
    this.ballBig = document.getElementById('ball-big');

    this.buttonReset.addEventListener('click', () => {
      this.search.value = '';
      this.foreverCheckBox.checked = false;
    });
    this.showAll(data);
    this.countFavorites.innerHTML = this.searchFavorite(data).length;
    this.block = document.querySelectorAll('.block');

    //this.categoryCheckBox.addEventListener('input', () => {
    //this.cleanMain();
    //this.showAll(data);
    //this.search.value = '';
    //});

    this.foreverCheckBox.addEventListener('input', () => {
      if (this.foreverCheckBox.checked) {
        this.globalState = this.getObj();

        let draw = this.searchFavorite(this.globalState);

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
  check(value, state) {
    console.log('state', state);
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
  searchForm(form, data, flag) {
    if (flag) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].children[4].innerHTML.split(': ')[1] == form) {
          data[i].classList.remove('hideBlock');
        } else if (data[i].children[4].innerHTML.split(': ')[1] !== form) {
          data[i].classList.add('hideBlock');
        }
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].children[4].innerHTML.split(': ')[1] !== form) {
          data[i].classList.remove('hideBlock');
        }
      }
    }
  }
  // searchCopy() {}
  // searchYear() {}
  searchColor(color) {
    let res = data.filter((el) => {
      return el.color === color;
    });
    return res;
  }
  searchSize(form, data, flag) {
    if (flag) {
      for (let i = 0; i < data.length; i++) {
       
        if (data[i].children[6].innerHTML.split(': ')[1] == form) {
          data[i].classList.remove('hideBlock');
        } else if (data[i].children[6].innerHTML.split(': ')[1] !== form) {
          data[i].classList.toggle('hideBlock');
        }
      }
    } else {
      
      for (let i = 0; i < data.length; i++) {
        if (data[i].children[6].innerHTML.split(': ')[1] !== form) {
          data[i].classList.remove('hideBlock');
        }
      }
    }
  }







  searchSize2(form, data, flag) {
   console.log(data); 
    if(flag) {
     for (const key of data) {
      //debugger
       if(key.children[6].innerHTML.split(': ')[1] == form && (key.className !== 'block hideBlock')){
        key.classList.remove('hideBlock')
       }
       if(key.children[6].innerHTML.split(': ')[1] !== form && (key.className !== 'block hideBlock')){
        key.classList.add('hideBlock')
       }
       
     }
    }
    else{
      
      for (const key of data) {
        console.log(key.className);
        if(key.children[6].innerHTML.split(': ')[1] !== form && (key.className == 'block hideBlock')){
         key.classList.remove('hideBlock')
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
