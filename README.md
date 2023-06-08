# semgrep-rules

Collection of rules for Static Application Security Testing (SAST) with [semgrep](https://semgrep.dev/).

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
semgrep -c rules/js/dom-xss/dom-xss-finder.yaml /vulns/js/dom/xss/*.js
```

**Use case**: Search for DOM XSS in **HTML** pages.

```shell
semgrep -c rules/js/extract_js_from_html.yaml -c /vulns/js/dom/xss/dom-xss-finder.yaml /vulns/js/dom/xss/*.html
```
