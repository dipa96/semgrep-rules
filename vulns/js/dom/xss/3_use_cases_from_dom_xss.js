// Ran 2 rules on 1 file: 4 findings.

// http://www.domxss.com/domxss/01_Basics/00_simple_noHead.html
var pos=document.URL.indexOf("name=")+5;
var username = unescape(document.URL.substring(pos,document.URL.length));
var r='<b>'+username+'</b>'
document.write(r);

// http://www.domxss.com/domxss/01_Basics/04_eval.html
function loadObj(){
    var cc = eval('('+unescape(aMess)+')');
    // This is a FP because found textContent = anything which is not a string
    document.getElementById('mess').textContent = cc.message;
   }
   
   if(window.location.hash.indexOf('message')==-1)
     var aMess="({\"message\":\"Hello User!\"})";
   else
     var aMess=location.hash.substr(window.location.hash.indexOf('message=')+8);

// http://www.domxss.com/domxss/01_Basics/05_jquery_html.html
// https://security.stackexchange.com/questions/47638/how-is-dom-xss-possible-here
function setMessage(){
    var t=unescape(location.hash.slice(1));
    $("div[id="+t+"]").html("Message from the name "+window.name);
    // FP, falso positivo
    $("div").html("Message from the name");
    }
    $(document).ready(setMessage  );
    $(window).bind("hashchange",setMessage)
