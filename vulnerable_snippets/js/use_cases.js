// custom vulnerable code + portswigger labs use cases + random uses cases take from web

const qs = window.location.search;
const hash = window.location.hash;

// vulnerable, constant pass into sinks
document.write(qs);
document.write(hash);

// not vulnerable, no param inside sink
document.write("<OPTION value=2>TatakiRegna</OPTION>");

// vulnerable
const e1 = document.createElement('p');
e1.innerHTML = qs;

// vulnerable
const e2 = document.createElement('p');
e2.innerHTML = hash;

// not vulnerable
const e3 = document.createElement('p');
e3.innerHTML = "test"

// not vulnerable
$("div.test").html("test")

// vulnerable
$("div.test").html(hash)

// vulnerable
$("div.test").add(qs)

// vulnerable?
const referer = document.referrer
$("div.test").add(referer.substring(1,2))

// vulnerable
const searchParams = new URLSearchParams(window.location.search)
const firstname = searchParams.get('firstname')
$("div.test").add(firstname)

// vulnerable
const names = [searchParams.get('firstname'), searchParams.get('lastname')]
$("div.test").add(names.join(' '))

// vulnerable
const arr = []
arr.push(searchParams.get('firstname'))
arr.push(searchParams.get('lastname'))
$("div.test2").html(arr.join(' '))

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

  

