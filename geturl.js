// http://getidurl.com.br/teste.html?id=1

var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");

console.log(id); // 1
