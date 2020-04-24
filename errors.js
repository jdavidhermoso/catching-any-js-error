(function(){
    window.onerror = function (msg, url, lineNo, columnNo, error) {
        var string = msg.toLowerCase();
        var substring = "script error";
        if (string.indexOf(substring) > -1){
            alert('Script Error: See Browser Console for Detail');
        } else {
            alert(msg, url, lineNo, columnNo, error);
        }   
      return false; 
  };
})();