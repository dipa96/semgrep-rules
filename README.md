# semgrep-rules

Collection of rules for Static Application Security Testing (SAST) with SemGrep.

## Installation

Setting up environment.

```shell
pip3 install semgrep
git clone https://github.com/dipa96/semgrep-rules
cd semgrep-rules
```

## Vulnerabilities

These rules are an experiment, if you have advice please feel free to open issues or pull request! :D

### DOM XSS

DOM-based XSS vulnerabilities usually arise when JavaScript takes data from an attacker-controllable source, such as the URL, and passes it to a sink that supports dynamic code execution, such as `eval()` or `innerHTML`. This enables attackers to execute malicious JavaScript, which typically allows them to hijack other users' accounts.

#### Usage

**Use case**: Search for DOM XSS in **JavaScript** files.

```shell
semgrep -c rules/js/dom-xss/dom-xss-finder.yaml vulnerable_snippets/js/dom-xss/*.js
```

**Use case**: Search for DOM XSS in **HTML** pages.

```shell
semgrep -c rules/js/extract_js_from_html.yaml -c rules/js/dom-xss/dom-xss-finder.yaml vulnerable_snippets/js/dom-xss/*.html
```

##### Sanitization

+ [owasp.org](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html)
+ [DOMPurify](https://github.com/cure53/DOMPurify)

#### Challenges

Collection of DOM XSS challenge positively solved by using semgrep rules.

[portswigger.net_DOM_XSS](https://portswigger.net/web-security/cross-site-scripting/dom-based)

[domxss.com_Challenge](http://www.domxss.com/domxss/01_Basics/00_simple_noHead.html)

[domgo.at_Challenge](https://domgo.at/cxss/intro)

[google.com_Firing-range](https://public-firing-range.appspot.com/dom/index.html)