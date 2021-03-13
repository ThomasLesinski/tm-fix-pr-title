// ==UserScript==
// @name         GitHub Shopware - Fix pr title
// @namespace    https://www.ottscho-it-service.de/
// @version      1
// @description  Add btn to fix pr title
// @author       Thomas Lesinski
// @include      https://github.com/*/compare/*?expand=1
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const prTitleInput = document.querySelector('#pull_request_title');
  prTitleInput.parentElement.style.flexGrow = '1';

  const btnFixPrTitle = document.createElement('div');
  btnFixPrTitle.classList.add('btn', 'btn-fix-pr-title');
  btnFixPrTitle.innerHTML = 'Fix';

  btnFixPrTitle.addEventListener('click', () => {
    const prTitleText = prTitleInput.value.trim();
    const prTitleTextSplitted = prTitleText.split(' ');

    if (prTitleTextSplitted[0].toLowerCase() === 'sup' && /^\d+$/.test(prTitleTextSplitted[1])) {
      const finalPrTitle = `[${prTitleTextSplitted[0].toUpperCase()}-${prTitleTextSplitted[1]}] ${prTitleTextSplitted.slice(2, prTitleTextSplitted.length).join(' ')}`;

      prTitleInput.value = finalPrTitle;
    }
  });

  const anchorEl = document.querySelector('.discussion-topic-header');
  anchorEl.classList.add('d-flex');
  anchorEl.append(btnFixPrTitle);
})();
