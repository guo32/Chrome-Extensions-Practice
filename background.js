// Extension event listeners are a little different from the patterns you may have seen in DOM or
// Node.js APIs. The below event listener registration can be broken in to 4 distinct parts:
//
// * chrome      - the global namespace for Chrome's extension APIs
// * runtime     – the namespace of the specific API we want to use
// * onInstalled - the event we want to subscribe to : 가입하려는 이벤트
// * addListener - what we want to do with this event
//
// See https://developer.chrome.com/docs/extensions/reference/events/ for additional details.
chrome.runtime.onInstalled.addListener(async () => {  
  let url = chrome.runtime.getURL("Test.html");

  // async functions and the await keyword(async code 호출에 사용) 활용
  let tab = await chrome.tabs.create({ url });

  // 탭의 id 기록하기(template literal 활용)  
  console.log(`Created tab ${tab.id}`);
});