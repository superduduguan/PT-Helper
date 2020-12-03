alert("as");
chrome.extension.onConnect.addListener(function(port) {
    console.log("Connected");
    port.onMessage.addListener(function(msg) {
        console.log("message recieved " + msg);
        chrome.tabs.create({url:msg});
    });
});


chrome.contextMenus.create({
	title: "search this keyword in PT sites",
	onclick: function(){alert('您点击了右键菜单！');}
});