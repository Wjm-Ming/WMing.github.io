// 首先使用 document.getElementById 获取用户界面上按钮的引用。
// 随后，我们将事件监听器附加到按钮上，该监听器创建了一个无名函数，它在源按钮上被点击执行。
// 当事件触发时，window.history.back() 将页面取消最近的一次访问并且回到前一个页面。
var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  window.history.back();
});