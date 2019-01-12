'use strict';

var unautosquashedCommitMessageRegex = /^[\t ]*(squash|fixup)!(?:[^\n\S]*\n(?:|[^\n]+)|[^\n\S]+)\S+/;

module.exports = function isUnautosquashedCommitMessage(str) {
	return typeof str === 'string' && unautosquashedCommitMessageRegex.test(str);
}
