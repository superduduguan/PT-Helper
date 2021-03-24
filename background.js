site = "http://nanyangpt.com/torrents.php?search=\nhttp://npupt.com/torrents.php?search=\nhttps://bt.byr.cn/torrents.php?search=\nhttps://pt.m-team.cc/torrents.php?search=\nhttps://pt.eastgame.org/torrents.php?search=\n";
sites = site.split('\n')

// get popup and create
chrome.extension.onConnect.addListener(function(port){
    // connecting
    console.log("Connected");
    // port.postMessage(sites)

    //listen for message
    port.onMessage.addListener(function(msg) {
        console.log("message recieved " + msg);
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            var tabindex = tabs[0].index;
            console.log(tabindex);
            for(site in sites){
                if(sites[site]){
                    var newindex = parseInt(tabindex) + parseInt(site) + 1;
                    console.log(newindex);
                    if(site == 0){
                        chrome.tabs.create({url: sites[site] + msg, index:newindex});
                    }
                    else{
                        chrome.tabs.create({url: sites[site] + msg, index:newindex, active:false});
                    }
                }
            }
        });
        
    });
});


chrome.runtime.onMessage.addListener(function(request, sender)
{
	console.log('收到来自content-script的消息：');
    console.log(request, sender);
    if(request.site == 'doubansub'){
        var name = sender.tab.title.slice(start=0, end=-4);
        console.log(name);
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            var tabindex = tabs[0].index;
            console.log(tabindex);
            for(site in sites){
                if(sites[site]){
                    var newindex = parseInt(tabindex) + parseInt(site) + 1;
                    console.log(newindex);
                    if(site == 0){
                        chrome.tabs.create({url: sites[site] + name, index:newindex});
                    }
                    else{
                        chrome.tabs.create({url: sites[site] + name, index:newindex, active:false});
                    }
                }
            }
        });
    }

    if(request.site == 'doubanlist'){
        var name = request.name
        console.log(name);
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            var tabindex = tabs[0].index;
            console.log(tabindex);
            for(site in sites){
                if(sites[site]){
                    var newindex = parseInt(tabindex) + parseInt(site) + 1;
                    console.log(newindex);
                    if(site == 0){
                        chrome.tabs.create({url: sites[site] + name, index:newindex});
                    }
                    else{
                        chrome.tabs.create({url: sites[site] + name, index:newindex, active:false});
                    }
                }
            }
        });
    }
});


// right click
var index = new Array();
chrome.contextMenus.create({
	title: 'Search on PT sites：%s', // %s表示选中的文字
	contexts: ['selection','link'], // 只有当选中文字时才会出现此右键菜单
	onclick: function(params)
	{
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            var tabindex = tabs[0].index;
            console.log(tabindex);
            for(site in sites){
                if(sites[site]){
                    var newindex = parseInt(tabindex) + parseInt(site) + 1;
                    console.log(newindex);
                    if(site == 0){
                        chrome.tabs.create({url: sites[site] + encodeURI(params.selectionText), index:newindex});
                    }
                    else{
                        chrome.tabs.create({url: sites[site] + encodeURI(params.selectionText), index:newindex, active:false});
                    }
                }
            }
        });
    }
});

