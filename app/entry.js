'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.on('click', () => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton = $('#moving-button');

movingButton.on('click', () => {
  block.animate({ marginLeft: '500px' }, 500);
  block.animate({ marginLeft: '20px' }, 1000);
});
