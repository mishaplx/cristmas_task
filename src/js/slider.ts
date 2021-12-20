import noUiSlider from '../../node_modules/nouislider';

export default function slider() {
  const slider = document.getElementById('slider-for-copy');

  noUiSlider.create(slider, {
    start: [1, 20],
    step: 1,
    tooltips: true,
    range: {
      min: 1,
      max: 20,
    },
    format: {
      to: function (value: any) {
        return parseInt(value);
      },
      from: function (value: any) {
        return parseInt(value);
      },
    },
  });

  const slider1 = document.getElementById('slider-for-years');

  noUiSlider.create(slider1, {
    start: [1900, 2021],
    step: 1,
    tooltips: true,
    range: {
      min: 1900,
      max: 2021,
    },
    format: {
      to: function (value: any) {
        return parseInt(value);
      },
      from: function (value: any) {
        return parseInt(value);
      },
    },
  });
}
