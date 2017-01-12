'use strict';

var unautosquashedCommitMessageRegex = /^[\t ]*(squash|fixup)!(?:[^\n\S]*\n(?:|[^\n]+)|[^\n\S]+)\S+/;

function isUnautosquashedCommitMessage(str) {
  return typeof str === 'string' && unautosquashedCommitMessageRegex.test(str);
}

module.exports = isUnautosquashedCommitMessage;
