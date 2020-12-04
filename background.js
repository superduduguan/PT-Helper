site = "http://nanyangpt.com/torrents.php?search=\nhttp://npupt.com/torrents.php?search=\nhttps://bt.byr.cn/torrents.php?search=\nhttps://pt.m-team.cc/torrents.php?search=\n";
sites = site.split('\n')

chrome.extension.onConnect.addListener(function(port) {
    //connecting
    console.log("Connected");
    // port.postMessage(sites)

    //listen for message
    port.onMessage.addListener(function(msg) {
        console.log("message recieved " + msg);
        for(site in sites){
            if(sites[site]){
                chrome.tabs.create({url: sites[site] + msg});
            }
        }
    });
});

var index = new Array();
chrome.contextMenus.create({
	title: 'Search on PT sites：%s', // %s表示选中的文字
	contexts: ['selection','link'], // 只有当选中文字时才会出现此右键菜单
	onclick: function(params)
	{
        for(site in sites){
            if(sites[site]){
                if(site == 0){
                    chrome.tabs.create({url: sites[site] + encodeURI(params.selectionText)});
                }
                else{
                    chrome.tabs.create({url: sites[site] + encodeURI(params.selectionText), active:false});
                }
                
            }
        }
    }
});