!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),r=null;function o(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){if(1===r)return;r=setInterval(o,1e3),t.setAttribute("disabled","true")})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.87eb6f92.js.map
