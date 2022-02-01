let btn = document.createElement("button");
buttons = document.getElementsByClassName("ins-tile__buttons");
btn.innerHTML = "OZON";
btn.style['color'] = "white";
btn.style['backgroundColor'] = "#005bff";
btn.style['border'] = "none";
btn.style['border-radius'] = '4px';
btn.style['padding'] = '6px 12px';
btn.onclick= function() {
    location.href = "https://www.ozon.ru/seller/port-usb-253731/products/?miniapp=seller_253731"; }
buttons.appendChild(btn);
