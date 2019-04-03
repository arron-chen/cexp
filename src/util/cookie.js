export function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) +
    ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

// 函数中的参数为 要获取的cookie键的名称。
export function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }

      return unescape(document.cookie.substring(c_start, c_end));
    }
  }

  return "";
}

// 函数中的参数为，要判断的cookie名称
export function checkCookie(c_name) {
  username = getCookie(c_name);
  if (username != null && username != "") {
    // 如果cookie值存在，执行下面的操作。
    alert('Welcome again ' + username + '!');
  } else {
    username = prompt('Please enter your name:', "");
    if (username != null && username != "") {
      //如果cookie不存在，执行下面的操作。
      setCookie('username', username, 365)
    }
  }
}

export function  clearAllCookie() {
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (var i = keys.length; i--; )
      document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString();
  }
}
