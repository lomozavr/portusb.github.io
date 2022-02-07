let btn = document.createElement("button");
let btns = document.getElementsByClassName('ins-tile__buttons')[0];
btn.innerHTML = "МЫ НА OZON";
btn.style['color'] = "white";
btn.style['backgroundColor'] = "#005bff";
btn.style['border'] = "none";
btn.style['border-radius'] = '6px';
btn.style['margin-left'] = '10px';
btn.style['padding'] = '6px 12px';
btn.style['fontFamily'] = 'inter';
btn.onclick = function() {
    location.href = "https://www.ozon.ru/seller/port-usb-253731/products/?miniapp=seller_253731"; }
btns.appendChild(btn);
btn.style['cursor'] = 'pointer';
btn.onmouseenter = function() {
  this.style.background = '#0066ff';
}

btn.onmouseleave = function() {
  this.style.background = '#005bff';
}

let btn = document.createElement("button");
let btns = document.getElementsByClassName('ins-tile-product-details')[0];
btn.innerHTML = "Заказать на OZON";
btn.style['color'] = "white";
btn.style['backgroundColor'] = "#005bff";
btn.style['border'] = "none";
btn.style['border-radius'] = '6px';
btn.style['margin-left'] = '10px';
btn.style['padding'] = '6px 12px';
btn.style['fontFamily'] = 'inter';
btn.onclick = function() {
    location.href = "https://www.ozon.ru/product/zaryadnaya-stantsiya-5usb-ports-quick-charger-3-0-s-nochnikom-gribok-belo-seryy-383222478/?_bctx=CAQQo74P&asb=DxGGt2In5cf3mtR8XibGYOzfq4nV8F8Rq7KX%252FWme5UM%253D&asb2=O0QnzRGEa3puK4GXquR0E5xrbsMLMf1WtPcCpzV0UfY2pwAd5lcnX2vHlcd4GyVsKcozLQ7KSurLiSD79jU8Gw&hs=1&miniapp=seller_253731&sh=l8kKJAAAAA"; }
btns.appendChild(btn);
btn.style['cursor'] = 'pointer';
btn.onmouseenter = function() {
  this.style.background = '#0066ff';
}

btn.onmouseleave = function() {
  this.style.background = '#005bff';
}
