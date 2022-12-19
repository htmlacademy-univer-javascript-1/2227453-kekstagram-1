import {shuffle, debounce} from './utils.js';

const ACTIVE_FILTER_CLASS = 'img-filters__button--active';
const INACTIVE_FILTERS_CLASS = 'img-filters--inactive';
const RERENDER_DELAY = 500;
const RANDOM_PHOTOS_COUNT = 10;

const filters = document.querySelector('.img-filters');
const filterDefault = filters.querySelector('#filter-default');
const filterRandom = filters.querySelector('#filter-random');
const filterDiscussed = filters.querySelector('#filter-discussed');

let currentFilter = filterDefault;
currentFilter.classList.add(ACTIVE_FILTER_CLASS);

const renderFiltered = {
  'filter-default': (posts, render) => render(posts),
  'filter-random': (posts, render) => render(shuffle(posts.slice()).slice(0, RANDOM_PHOTOS_COUNT)),
  'filter-discussed': (posts, render) => render(posts.slice()
    .sort((postA, postB) => postB.comments.length - postA.comments.length))
};

const setNewFilter = (filter) => {
  currentFilter.classList.remove(ACTIVE_FILTER_CLASS);
  currentFilter = filter;
  currentFilter.classList.add(ACTIVE_FILTER_CLASS);
};

const onFilterClick = (evt, posts, renderFunction) => {
  const filter = evt.target;
  setNewFilter(filter);
  debounce(() => renderFiltered[filter.id](posts, renderFunction),
    RERENDER_DELAY);
};

export const renderingFilter = (posts, renderFunction) => {
  filters.classList.remove(INACTIVE_FILTERS_CLASS);
  filterDefault.addEventListener('click', (evt) => {
    onFilterClick(evt, posts, renderFunction);
  });
  filterRandom.addEventListener('click', (evt) => {
    onFilterClick(evt, posts, renderFunction);
  });
  filterDiscussed.addEventListener('click', (evt) => {
    onFilterClick(evt, posts, renderFunction);
  });
};
