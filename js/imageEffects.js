import '../nouislider/nouislider.js';

const imageForm = document.querySelector('.img-upload__form');
const slider = imageForm.querySelector('.effect-level__slider');
const effectLevelValue = imageForm.querySelector('.effect-level__value');
const imagePreview = imageForm.querySelector('.img-upload__preview');

const EFFECTS_OPTIONS = {
  'chrome': {
    filterInfo: {
      filterName: 'grayscale',
      valueUnit: ''
    },
    sliderOptions: {
      range: {
        min: 0,
        max: 1
      },
      start: 0,
      step: 0.1,
      connect: 'lower'
    }
  },
  'sepia': {
    filterInfo: {
      filterName: 'sepia',
      valueUnit: ''
    },
    sliderOptions: {
      range: {
        min: 0,
        max: 1
      },
      start: 0,
      step: 0.1,
      connect: 'lower'
    }
  },
  'marvin': {
    filterInfo: {
      filterName: 'invert',
      valueUnit: '%'
    },
    sliderOptions: {
      range: {
        min: 0,
        max: 100
      },
      start: 0.1,
      step: 1,
      connect: 'lower'
    }
  },
  'phobos': {
    filterInfo: {
      filterName: 'blur',
      valueUnit: 'px'
    },
    sliderOptions: {
      range: {
        min: 0,
        max: 3
      },
      start: 0,
      step: 0.1,
      connect: 'lower'
    }
  },
  'heat': {
    filterInfo: {
      filterName: 'brightness',
      valueUnit: ''
    },
    sliderOptions: {
      range: {
        min: 1,
        max: 3
      },
      start: 1,
      step: 0.1,
      connect: 'lower'
    }
  }
};

let effectClass = 'effects__preview--none';
let effectOptions = {
  filterInfo: {
    filterName: '',
    valueUnit: ''
  },
  sliderOptions: {
    range: {
      min: 0,
      max: 0
    },
    start: 0,
    step: 0.1,
    connect: 'lower'
  }
};

const setEffect = (effect) => {
  imagePreview.classList.remove(effectClass);
  effectClass = `effects__preview--${effect}`;
  imagePreview.classList.add(effectClass);
};

slider.classList.add('hidden');
noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 0,
  },
  start: 0,
});

slider.noUiSlider.on('update', () => {
  const value =slider.noUiSlider.get();
  const filterInfo = effectOptions.filterInfo;
  imagePreview.style.filter = `${filterInfo.filterName}(${value}${filterInfo.valueUnit})`;
  effectLevelValue.value = value;
});

imageForm.addEventListener('change', (evt) =>{
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }

  const effect = evt.target.value;
  setEffect(effect);
  if (effect === 'none') {
    imagePreview.style. filter = 'none';
    slider.classList.add('hidden');
    return;
  }

  effectOptions = EFFECTS_OPTIONS[effect];
  slider.noUiSlider.updateOptions(effectOptions.sliderOptions);
  slider.classList.remove('hidden');
});

