'use strict';

const main = require('.');
const {test} = require('tape');

test('isUnautosquashedCommitMessage()', t => {
  t.strictEqual(
    main('squash! tweak metadata'),
    true,
    'should regard the commit message with the leading `squash! ` as unsquashed.'
  );

  t.strictEqual(
    main('fixup! update readme'),
    true,
    'should regard the commit message with the leading `fixup! ` as unsquashed.'
  );

  t.strictEqual(
    main('squash!\nadd new maintainers'),
    true,
    'should regard the commit message with the leading `squash!\\n` as unsquashed.'
  );

  t.strictEqual(
    main('fixup!\nadd more tests'),
    true,
    'should regard the commit message with the leading `fixup!\\n` as unsquashed.'
  );

  t.strictEqual(
    main(' squash! ☺️'),
    true,
    'should allow a leading ASCII whitespace.'
  );

  t.strictEqual(
    main('                fixup! release 1.0.0'),
    true,
    'should allow multiple leading ASCII whitespaces.'
  );

  t.strictEqual(
    main('\tfixup! stop using deprecated API'),
    true,
    'should allow a leading tab.'
  );

  t.strictEqual(
    main('\t squash! \nupdate collaborator list'),
    true,
    'should allow leading mixed tabs/spaces.'
  );

  t.strictEqual(
    main('squash!                                 bump deps'),
    true,
    'should allow multiple ASCII whitespaces before the target commit message.'
  );

  t.strictEqual(
    main('fixup! \n\u0003   \n    '),
    true,
    'should allow ASCII control characters.'
  );

  t.strictEqual(
    main('hello'),
    false,
    'should ignore the string with neither `squash! ` nor `fixup! `.'
  );

  t.strictEqual(
    main('Squash! revise API'),
    false,
    'should be case-sensitive.'
  );

  t.strictEqual(
    main('fixup!follow the project code style'),
    false,
    'should require at least one whitespace after `suqash!` and `fixup!`.'
  );

  t.strictEqual(
    main('squash! '),
    false,
    'should ignore commit messages with nothing other than `squash!` and whitespaces.'
  );

  t.strictEqual(
    main('fixup!                                  '),
    false,
    'should ignore commit messages with nothing other than `fixup!` and whitespaces.'
  );

  t.strictEqual(
    main('squash!\n\nadd index.json'),
    false,
    'should disallow duplicated linebreaks just after `squash!`.'
  );

  t.strictEqual(
    main('     fixup!\n\nadd index.js'),
    false,
    'should disallow duplicated linebreaks just after `fixup!`.'
  );

  t.strictEqual(
    main('fixup!\n\n'),
    false,
    'should ignore commit messages with nothing other than `fixup!` and whitespaces.'
  );

  t.strictEqual(
    main(1),
    false,
    'should ignore non-string value.'
  );

  t.strictEqual(
    main(),
    false,
    'should return false when it takes no arguments.'
  );

  t.end();
});
