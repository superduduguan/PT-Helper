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


//TODO: 豆瓣跳转
//TODO: 挖掘与聚合
//TODO: 划词悬浮窗
//TODO: 转种子