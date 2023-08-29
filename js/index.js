function login() {
  var account = document.getElementById("username").value; // 获取输入的用户名
  var password = document.getElementById("password").value; // 获取输入的密码

  // 设置预设账号和密码
  var presetAccount = "吴小明";
  var presetPassword = "123456";
  const localPath = "./view/main.html";

  // 根据输入判断是否跳转页面
  if (account == presetAccount && password == presetPassword) {
    window.location.href = localPath; // 登录成功后跳转的页面
  } else {
    alert("用户名或密码不正确！"); // 若账号或密码错误则弹出提示框
  }
}