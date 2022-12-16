import { renderingPosts } from  './rendering.js';
import { generatePosts } from './data.js';
import './uploadImage.js';

renderingPosts(generatePosts());
