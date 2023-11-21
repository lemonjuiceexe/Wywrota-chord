// ==UserScript==
// @name         Wywrota chord
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Don't want to login to spiewnik.wywrota.pl to see the full lyrics? Me either.
// @author       https://github.com/lemonjuiceexe
// @match        *://spiewnik.wywrota.pl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('.login-banner').style["display"] = "none";
    document.querySelector('.interpretation-content-wrapper').style["max-height"] = "unset";
})();