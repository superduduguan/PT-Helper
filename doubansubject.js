var button = document.createElement("button");
var text=document.createTextNode("Search on PT");
button.appendChild(text);
button.id = "PT_btn";
button.style.width = "140px";
button.style.height = "25px";
button.style.color = "#268dcd";
button.style.font = "550 17px Times New Roman";
document.getElementById("interest_sectl").appendChild(button);

button.addEventListener('click', function()
    {

        chrome.runtime.sendMessage({site: 'doubansub'}, function() {});
        
    }, false);