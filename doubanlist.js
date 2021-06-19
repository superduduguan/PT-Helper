// console.log('test')
// targets = document.getElementsByClassName("rating-info");
var num = 0
var btns = new Array();
var n = new Array();
var ids = new Array();
var targets = document.querySelectorAll('h3');
for(target in targets) {
    try{var cat = targets[target].querySelectorAll('span')[0].textContent}catch(err){}
    
    if((cat == "[电影]") || (cat ==  "[电视剧]") || (cat ==  "[音乐]"))
    {
        var id = targets[target].getElementsByTagName("a")[0].getAttribute("href").split('%2')[4].slice(start=1);
        // console.log(urls)
        console.log(id);
        console.log(cat)
        ids[num] = id
        n[num] = targets[target].querySelectorAll("a")[0].textContent

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
    }
}

console.log(btns)
console.log(n)
console.log(ids)
// /////////////////////////
for (let i = 0; i < btns.length; i += 1){
    btns[i].addEventListener('click', function()
    {
        // console.log(n)
        // console.log(i)
        // console.log(n[i])
        chrome.runtime.sendMessage({site: 'doubanlist', name: n[i], id:ids[i]}, function() {});
    }, false);
}






