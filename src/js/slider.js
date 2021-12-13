export default function slider() {
  const slider = document.getElementById('slider-for-copy');

  noUiSlider.create(slider, {
    start: [1900, 2021],
    step: 1,
    range: {
      min: 1900,
      max: 2021,
    },
    
    
  });
  
  
  const slider1 = document.getElementById('slider-for-years');

  noUiSlider.create(slider1, {
    start: [1900, 2021],
    step: 1,
    range: {
      min: 1900,
      max: 2021,
    },
    
    
  });
}
