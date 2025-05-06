//NOX

// Register events to raise after page load complete
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}


// Disable Form Submit on Enter Key Press
function disableEnterKey(e)
{
     var key;     
     if(window.event)
          key = window.event.keyCode; //IE
     else
          key = e.which; //firefox     

     return (key != 13);
}


//Fire a button based on other control keyPress // KeyPressed_ctrl,
function DoClickOnKeyPress(ctrl_ToClick,e)
{
     var key;     
     if(window.event)
          key = window.event.keyCode; //IE
     else
          key = e.which; //firefox     
    if(key == 13)
    {
        $('#'+ctrl_ToClick).attr('href')!=null ? window.location=$('#'+ctrl_ToClick).click().attr('href') : $('#'+ctrl_ToClick).click() ;
    }
    return true;
}


 // make the specified div a windowed control in IE6
 // this masks an iframe (which is a windowed control) onto the div,
 // turning the div into a windowed control itself
 function makeWindowed(p_div,fullSize)
 {
    var is_ie6 =
       document.all && 
       (navigator.userAgent.toLowerCase().indexOf('msie 6.') != -1);
    var p_div_width='100%',p_div_height='100%';
    var p_div_left= '0px',p_div_top='0px';

    if (is_ie6)
    {
        if(fullSize == true)
        {
            p_div_left = "7px";
            p_div_top = "7px";
            p_div_width = "95%";
            p_div_height = "95%";
        }

       var html =
          '<iframe style=\'position: absolute; display: block; ' +
          'z-index: -1; width: ' + p_div_width + '; height: ' + p_div_height + '; top: ' + p_div_top + '; left: ' + p_div_left + ';' +
          'filter: mask(); background-color: #ffffff; \'></iframe>';
       if (p_div) p_div.innerHTML += html;
       // force refresh of div
       var olddisplay = p_div.style.display;
       p_div.style.display = 'none';
       p_div.style.display = olddisplay;
    };
 }
// Reading QueryString in client
function PageQuery(q) {
    if(q.length > 1) 
        this.q = q.substring(1, q.length);
    else 
        this.q = null;
    this.keyValuePairs = new Array();
    if(q) {
        for(var i=0; i < this.q.split('&').length; i++) {
            this.keyValuePairs[i] = this.q.split('&')[i];
        }
    }
    this.getKeyValuePairs = function() { 
        return this.keyValuePairs; }
    this.getValue = function(s) {
        for(var j=0; j < this.keyValuePairs.length; j++) {
            if(this.keyValuePairs[j].split('=')[0] == s)
                return this.keyValuePairs[j].split('=')[1];
        }
        return false;
    }
    this.getParameters = function() {
        var a = new Array(this.getLength());
        for(var j=0; j < this.keyValuePairs.length; j++) {
            a[j] = this.keyValuePairs[j].split('=')[0];
        }
        return a;
    }
    this.getLength = function() { 
        return this.keyValuePairs.length; }
}

function queryString(key){
    var page = new PageQuery(window.location.search);
    try {
        return decodeURI(page.getValue(key));
    }
    catch (err) { }
    
}

// find position(left,top) of a control in the page - compatible with all browsers 
function findPos(obj) {
    var curleft = curtop = 0;                    
    if (obj.offsetParent) {
    do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;                    
        } while (obj = obj.offsetParent);
    }
    return [curleft,curtop];
}

