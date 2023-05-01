  // https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-href-attribute-sink
  $(function() {
    $('#backLink').attr("href", (new URLSearchParams(window.location.search)).get('returnPath'));
});

// - pattern: $(...)

// rules.js.dom_vuln_finder
// dom dom dom, who is?           
                               
//   2┆   $(function() {
//   3┆     $('#backLink').attr("href", (new                                                              
// URLSearchParams(window.location.search)).get('returnPath'));                                                       
//   4┆ });

//   Taint comes from:
//     3┆ $('#backLink').attr("href", (new URLSearchParams(window.location.search)).get('returnPath'));

//   This is how taint reaches the sink:
//     2┆   $(function() {
//     3┆     $('#backLink').attr("href", (new                                                            
// URLSearchParams(window.location.search)).get('returnPath'));                                                       
//     4┆ });

  // https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-selector-hash-change-event
  $(window).on('hashchange', function(){
    var post = $('section.blog-list h2:contains(' + decodeURIComponent(window.location.hash.slice(1)) + ')');
    if (post) post.get(0).scrollIntoView();
});