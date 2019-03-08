'use strict';

var http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/vmi');
http.onload = function () {
  var data = JSON.parse(http.responseText);
  loadBookNamesList(data);
};
http.send();
};

var http2 = new XMLHttpRequest();
http2.open('GET', 'http://localhost:3000/vmi2');
http2.onload = function () {
  var data = JSON.parse(http2.responseText);
  loadDetailedTable(data);
};
http2.send();
