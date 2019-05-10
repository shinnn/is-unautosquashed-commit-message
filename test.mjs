import {strict as assert} from 'assert';

import main from '.';
import test from 'testit';

test('regard the commit message with the leading `squash! ` as unsquashed', () => {
	assert(main('squash! tweak metadata') === true);
});

test('regard the commit message with the leading `fixup! ` as unsquashed', () => {
	assert(main('fixup! update readme') === true);
});

test('regard the commit message with the leading `squash!\\n` as unsquashed', () => {
	assert(main('squash!\nadd new collaborators') === true);
});

test('regard the commit message with the leading `fixup!\\n` as unsquashed', () => {
	assert(main('fixup!\nadd more tests') === true);
});

test('allow a leading ASCII whitespace', () => {
	assert(main(' squash! ☺️') === true);
});

test('allow multiple leading ASCII whitespaces', () => {
	assert(main('                fixup! release 1.0.0') === true);
});

test('allow a leading tab', () => {
	assert(main('\tfixup! stop using deprecated API') === true);
});

test('should allow leading mixed tabs/spaces', () => {
	assert(main('\t squash! \nupdate collaborator list') === true);
});

test('allow multiple ASCII whitespaces before the target commit message', () => {
	assert(main('squash!                                 bump deps') === true);
});

test('allow ASCII control characters', () => {
	assert(main('fixup! \n\u0003   \n    ') === true);
});

test('ignore the string with neither `squash! ` nor `fixup! `', () => {
	assert(main('hello') === false);
});

test('treat `squash!` and `fixup!` case-sensitive', () => {
	assert(main('Squash! revise API') === false);
});

test('require at least one whitespace after `suqash!` and `fixup!`', () => {
	assert(main('fixup!follow the project code style') === false);
});

test('ignore commit messages with nothing other than `squash!` and whitespaces', () => {
	assert(main('squash! ') === false);
});

test('ignore commit messages with nothing other than `fixup!` and whitespaces', () => {
	assert(main('fixup!                                  ') === false);
});

test('disallow duplicate linebreaks just after `squash!`', () => {
	assert(main('squash!\n\nadd index.json') === false);
});

test('disallow duplicate linebreaks just after `fixup!`', () => {
	assert(main('     fixup!\n\nadd index.js') === false);
});

test('ignore commit messages with nothing other than `fixup!` and whitespaces', () => {
	assert(main('fixup!\n\n') === false);
});

test('ignore non-string value', () => {
	assert(main(1) === false);
});

test('return false when it takes no arguments', () => {
	assert(main() === false);
});
