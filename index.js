let btn = document.createElement("button");
btn.innerHTML = "OZON";
btn.style['color'] = "white";
btn.style['backgroundColor'] = "#005bff";
btn.style['border'] = "none";
btn.style['border-radius'] = '4px';
btn.style['padding'] = '6px 12px';
btn.onclick= function() {
    location.href = "https://www.ozon.ru/"; }
document.body.appendChild(btn)
