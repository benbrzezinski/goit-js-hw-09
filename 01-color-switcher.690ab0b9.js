!function(){var t,e=document.querySelector("body"),r=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}n.setAttribute("disabled","");r.addEventListener("click",(function(r){r.currentTarget.setAttribute("disabled",""),n.removeAttribute("disabled"),e.style.backgroundColor=o(),t=setInterval((function(){e.style.backgroundColor=o()}),1e3)})),n.addEventListener("click",(function(e){e.currentTarget.setAttribute("disabled",""),r.removeAttribute("disabled"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.690ab0b9.js.map
