// ==UserScript==
// @name         HH Remove Mythic books and gifts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Mythic books and gifts on the market in the Hentai Heroes game
// @author       -MM-
// @match        https://www.hentaiheroes.com/shop.html*
// @match        https://nutaku.haremheroes.com/shop.html*
// @run-at       document-end
// @namespace    https://github.com/HH-GAME-MM/HH-Remove-Mythic-books-and-gifts
// @updateURL    https://github.com/HH-GAME-MM/HH-Remove-Mythic-books-and-gifts/raw/main/HH-Remove-Mythic-books-and-gifts.user.js
// @downloadURL  https://github.com/HH-GAME-MM/HH-Remove-Mythic-books-and-gifts/raw/main/HH-Remove-Mythic-books-and-gifts.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hentaiheroes.com
// @grant        none
// ==/UserScript==

let div = document.createElement('div');
div.setAttribute('class', 'slot empty');
document.querySelectorAll('#shops #shop :is(.potion, .gift) div.slot.mythic').forEach(e => e.replaceWith(div.cloneNode()));
