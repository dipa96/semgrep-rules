/* 
semgrep -c rules/js/extract_js_from_html.yaml -c rules/js/dom_vuln_finder.yaml vulnerable_snippets/js/dom-xss/1_use_cases.js
Output: Ran 2 rules on 1 file: 10 findings.
*/



// Sources
const qs = window.location.search;
const hash = window.location.hash;

// vulnerable, constant pass into sinks
document.write(qs + asd);
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

// vulnerable
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