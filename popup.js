/**
 * @file popup
 * @author zyd
 */
let changeColor = document.getElementById('changeColor');

/* eslint-disable no-undef */
chrome.storage.sync.get('color', function (data) {
/* eslint-enable no-undef */
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});
