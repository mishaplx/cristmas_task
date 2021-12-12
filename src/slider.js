import noUiSlider from 'nouislider';
export default function slider() {
  var slider = document.getElementById('slider');

  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });
}
