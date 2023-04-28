// https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink
function trackSearch(query) {
      document.write('<img src="/resources/images/tracker.gif?searchTerms='+query+'">');
  }
  var query = (new URLSearchParams(window.location.search)).get('search');
  if(query) {
      trackSearch(query);
  }

// https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink-inside-select-element
  var stores = ["London","Paris","Milan"];
  var store = (new URLSearchParams(window.location.search)).get('storeId');
  document.write('<select name="storeId">');
  if(store) {
      document.write('<option selected>'+store+'</option>');
  }
  for(var i=0;i<stores.length;i++) {
      if(stores[i] === store) {
          continue;
      }
      document.write('<option>'+stores[i]+'</option>');
  }
  document.write('</select>');

  // https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-href-attribute-sink
  $(function() {
      $('#backLink').attr("href", (new URLSearchParams(window.location.search)).get('returnPath'));
  });

  // Not vulnerable, window.random fake function
  $(function() {
      $('#backLink').attr("href", (new URLSearchParams(window.random)).get('returnPath'));
  });

  // https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-selector-hash-change-event
  $(window).on('hashchange', function(){
      var post = $('section.blog-list h2:contains(' + decodeURIComponent(window.location.hash.slice(1)) + ')');
      if (post) post.get(0).scrollIntoView();
  });

  // https://portswigger.net/web-security/dom-based/controlling-the-web-message-source/lab-dom-xss-using-web-messages-and-json-parse
  window.addEventListener('message', function(e) {
    var iframe = document.createElement('iframe'), ACMEplayer = {element: iframe}, d;
    document.body.appendChild(iframe);
    try {
        d = JSON.parse(e.data);
    } catch(e) {
        return;
    }
    switch(d.type) {
        case "page-load":
            ACMEplayer.element.scrollIntoView();
            break;
        case "load-channel":
            ACMEplayer.element.src = d.url;
            break;
        case "player-height-changed":
            ACMEplayer.element.style.width = d.width + "px";
            ACMEplayer.element.style.height = d.height + "px";
            break;
    }
}, false);