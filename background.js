/**
 * @file background script
 * @author zyd
 */


/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({color: '#3aaa757'}, function () {
        console.log('The color is green.');
    });
});
/* eslint-enable no-undef */
