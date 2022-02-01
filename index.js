let btn = document.createElement("button");
let btns = document.getElementsByClassName('ins-tile__buttons')[0];
btn.innerHTML = "Мы на Ozon";
btn.style['color'] = "white";
btn.style['backgroundColor'] = "#005bff";
btn.style['border'] = "none";
btn.style['border-radius'] = '6px';
btn.style['padding'] = '6px 12px';
btn.onclick = function() {
    location.href = "https://www.ozon.ru/seller/port-usb-253731/products/?miniapp=seller_253731"; }
btns.appendChild(btn);
