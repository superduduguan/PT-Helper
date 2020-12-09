//global params
var sites;

//port
var port = chrome.extension.connect({
    name: "Sample Communication"
});

//listen
// port.onMessage.addListener(function(msg) {
//     console.log("message recieved" + msg);
//     sites = msg;
// });

//functional
function concatInput(sites){
    var input=document.getElementById("txt").value;
            port.postMessage(input); 
}


window.onload = function() 
{
    //listen for click
    var button = document.getElementById('button')
    button.addEventListener('click', function()
    {
        concatInput(sites); 
    }, false);

    //listen for enter
    var input = document.getElementById("txt");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("button").click();
        }
      });
};

//TODO: options
//TODO: 划词悬浮窗
//TODO: 转种子
//TODO: 挖掘与聚合


// nanyang ： document.querySelector("#outer > table > tbody > tr > td > table > tbody > tr:nth-child(XXX) > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > a > b")
// 
// npupt ： document.querySelector("#torrents_table > tbody > tr:nth-child(XXX) > td.rowfollow.th-fat > table > tbody > tr > td:nth-child(1) > a > b")      
// 
// byr ： document.querySelector("#outer > table > tbody > tr > td > table > tbody > tr:nth-child(XXX) > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > a > b")
// 
// mteam ： document.querySelector("#form_torrent > table > tbody > tr:nth-child(XXX) > td.torrenttr > table > tbody > tr > td:nth-child(1) > a > b")