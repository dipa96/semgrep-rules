// custom vulnerable code + portswigger labs use cases + random uses cases take from web

// Sources
const qs = window.location.search;
const hash = window.location.hash;

// 1 vulnerable, constant pass into sinks
document.write(qs + asd);
document.write(hash);

// not vulnerable, no param inside sink
document.write("<OPTION value=2>TatakiRegna</OPTION>");

// 2 vulnerable
const e1 = document.createElement('p');
e1.innerHTML = qs;

// 3 vulnerable
const e2 = document.createElement('p');
e2.innerHTML = hash;

// not vulnerable
const e3 = document.createElement('p');
e3.innerHTML = "test"

// not vulnerable
$("div.test").html("test")

// 4 vulnerable
$("div.test").html(hash)

// 5 vulnerable
$("div.test").add(qs)

// 6 vulnerable
const referer = document.referrer
$("div.test").add(referer.substring(1,2))

// 7 vulnerable
const searchParams = new URLSearchParams(window.location.search)
const firstname = searchParams.get('firstname')
$("div.test").add(firstname)

// 8 vulnerable
const names = [searchParams.get('firstname'), searchParams.get('lastname')]
$("div.test").add(names.join(' '))

// 9 vulnerable
const arr = []
arr.push(searchParams.get('firstname'))
arr.push(searchParams.get('lastname'))
$("div.test2").html(arr.join(' '))