let btn = document.createElement("button");
btn.innerHTML = "Click";
btn.onclick = function () {
  alert("Button is clicked");
};
document.body.appendChild(btn)
