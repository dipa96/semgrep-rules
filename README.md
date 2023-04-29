# semgrep-rules

Collection of rules for Static Application Security Testing (SAST) with SemGrep.

## Installation

Setting up environment.

```shell
git clone https://github.com/dipa96/semgrep-rules
cd semgrep-rules
pip3 install semgrep
```

## Vulnerabilities

### DOM XSS

Various passed DOM XSS Challenge with SemGrep rules,

#### Usage

```shell
cd semgrep-rules
semgrep -c rules/js/extract_js_from_html.yaml -c rules/js/dom_vuln_finder.yaml vulnerable_snippets/js/*.js
```

#### Challenges

Collection of DOM XSS challenge positively solved by using semgrep rules.

##### portswigger.net

+ [Reflected DOM XSS](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-dom-xss-reflected)
+ [DOM XSS in document.write sink using source location.search](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink)
+ [DOM XSS in document.write sink using source location.search inside a select element](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink-inside-select-element)
+ [DOM XSS in jQuery anchor href attribute sink using location.search source](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-href-attribute-sink)
+ [DOM XSS in jQuery selector sink using a hashchange event](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-jquery-selector-hash-change-event)
+ [DOM XSS using web messages and JSON.parse](https://portswigger.net/web-security/dom-based/controlling-the-web-message-source/lab-dom-xss-using-web-messages-and-json-parse)

##### domxss.com

[domxss.com - Challenge ](http://www.domxss.com/domxss/01_Basics/00_simple_noHead.html)

##### domgo.at

[domgo.at - Challenge](https://domgo.at/cxss/intro)

## TODO

+ [HackTricks DOM XSS Sinks & Sources](https://book.hacktricks.xyz/pentesting-web/xss-cross-site-scripting/dom-xss)
+ Testing other challenges
+ [AppSecco Blog Automating Discovery XSS](https://blog.appsecco.com/automating-discovery-and-exploiting-dom-client-xss-vulnerabilities-using-sboxr-part-3-2ea910dfb429)
