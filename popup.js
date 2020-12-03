site = "http://nanyangpt.com/torrents.php?search=\nhttp://npupt.com/torrents.php?search=\nhttps://bt.byr.cn/torrents.php?search=\nhttps://pt.m-team.cc/torrents.php?search=\n";
sites = site.split('\n')
console.log(sites)

var port = chrome.extension.connect({
    name: "Sample Communication"
});


function concatInput(sites){
    var input=document.getElementById("txt").value;
    for(site in sites){
        if(sites[site]){
            port.postMessage(sites[site] + input); 
        }
    }
}

window.onload = function() 
{
    var button = document.getElementById('button')
    button.addEventListener('click', function()
    {
        concatInput(sites); 
    }, false);

    var input = document.getElementById("txt");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("button").click();
        }
      });
};


//TODO: 挖掘与聚合
//TODO: 右键划词
//TODO: 豆瓣跳转