
//////////////////////
/// Simple Ajax Wrapper
//////////////////////

(function() {
  
  'use strict';

  window.Ajax = function(options) {

    this.options = options || {}; // Placeholder

  };

  //////////////////////
  /// Get Request
  //////////////////////

  window.Ajax.get = function(url, success, error) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 400){
        // Success
        var data = JSON.parse(request.responseText);
        success(data);
      } else {
        // Error
        error(request.status);
      }
    };

    request.send();

    return request;
  };

  //////////////////////
  /// Post Request
  //////////////////////

  window.Ajax.post = function(url, params, success, error) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
        // Success
        var data = JSON.parse(request.responseText);
        success(data);
      } else {
        // Error
        error(request.status);
      }
    };

    request.send(params);

    return request;
  };

})();