const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let o;function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}r.setAttribute("disabled","");e.addEventListener("click",(e=>{e.currentTarget.setAttribute("disabled",""),r.removeAttribute("disabled"),t.style.backgroundColor=d(),o=setInterval((()=>{t.style.backgroundColor=d()}),1e3)})),r.addEventListener("click",(t=>{t.currentTarget.setAttribute("disabled",""),e.removeAttribute("disabled"),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.1aa4ef57.js.map