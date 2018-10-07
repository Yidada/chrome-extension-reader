/**
 * @file background script
 * @author zyd
 */

/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        color: '#3aaa757'
    }, function () {
        console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    hostEquals: 'developer.chrome.com'
                }
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

/* eslint-enable no-undef */
