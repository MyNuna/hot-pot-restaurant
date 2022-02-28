var baseURL = "";

function initAjax() {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    };
    return xmlhttp;
};

function get(path = "", callBack = function() {}) {
    let ajax = initAjax();
    ajax.onreadystatechange = callBack();
    ajax.open("GET", baseURL + path, true);
    ajax.send();
};

function post(path = "", date = "", callBack = function() {}) {
    let ajax = initAjax();
    ajax.onreadystatechange = callBack();
    ajax.open("POST", baseURL + path, true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send(date);
};

export {get, post }