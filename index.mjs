var unautosquashedCommitMessageRegex = /^[\t ]*(squash|fixup)!(?:[^\n\S]*\n(?:|[^\n]+)|[^\n\S]+)\S+/;

export default function isUnautosquashedCommitMessage(str) {
	return typeof str === 'string' && unautosquashedCommitMessageRegex.test(str);
}
