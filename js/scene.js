var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
  window.history.back();
});

function showBigImage(bigImageUrl) {
  // 创建一个<div>元素，用于显示大图
  var bigImageDiv = document.createElement("div");
  bigImageDiv.style.position = "fixed";
  bigImageDiv.style.top = "0";
  bigImageDiv.style.left = "0";
  bigImageDiv.style.bottom = "0";
  bigImageDiv.style.right = "0";
  bigImageDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  bigImageDiv.style.display = "flex";
  bigImageDiv.style.alignItems = "center";
  bigImageDiv.style.justifyContent = "center";

  // 创建一个<img>元素，用于显示大图
  var bigImage = document.createElement("img");
  bigImage.src = bigImageUrl;

  // 将<img>元素添加到<div>元素中
  bigImageDiv.appendChild(bigImage);

  // 将<div>元素添加到body元素中
  document.body.appendChild(bigImageDiv);

  // 点击大图区域关闭大图
  bigImageDiv.onclick = function () {
    document.body.removeChild(bigImageDiv);
  }
}
