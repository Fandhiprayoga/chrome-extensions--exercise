
console.log('log from backgroun service worker')
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "MATI",
    })
})
const websitedetik = 'https://news.detik.com/';

chrome.action.onClicked.addListener(async (tab) => {
    // console.log('log from clicked action')
    if (tab.url.startsWith(websitedetik)) {
        console.log('website detik nich gan')
        const prevstate = await chrome.action.getBadgeText({ tabId: tab.id })
        const nextstate = prevstate === 'NYALA' ? 'MATI' : 'NYALA';

        await chrome.action.setBadgeText({
            text: nextstate,
        })
    } else {
        console.log('bukan website detik')
        await chrome.action.setBadgeText({
            text: 'MATI',
        })
    }
})