var num = 0
var names = new Array();
var btns = new Array();
var n = new Array();
var targets = document.querySelectorAll('li.title');
for(target in targets) {
    try{
        namex = targets[target].querySelector('a em').innerText.split('/')[0];
        console.log(namex)
        names[num] = namex

        btns[num] = document.createElement("button");
        var text=document.createTextNode("Search");
        btns[num].appendChild(text);
        btns[num].id = "PT_btn";
        btns[num].style.width = "80px";
        btns[num].style.marginTop = "3.5px";
        btns[num].style.color = "#268dcd";
        btns[num].style.font = "550 15px Times New Roman";
        targets[target].appendChild(btns[num]);
        num += 1;
    }catch(err){}

}


// /////////////////////////
for (let i = 0; i < btns.length; i += 1){
    btns[i].addEventListener('click', function()
    {
        chrome.runtime.sendMessage({site: 'doubanlist', name: names[i]}, function() {});
    }, false);
}






