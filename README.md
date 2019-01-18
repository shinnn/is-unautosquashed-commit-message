# is-unautosquashed-commit-message

[![npm version](https://img.shields.io/npm/v/is-unautosquashed-commit-message.svg)](https://www.npmjs.com/package/is-unautosquashed-commit-message)
[![Build Status](https://travis-ci.com/shinnn/is-unautosquashed-commit-message.svg?branch=master)](https://travis-ci.com/shinnn/is-unautosquashed-commit-message)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-unautosquashed-commit-message.svg)](https://coveralls.io/github/shinnn/is-unautosquashed-commit-message)

Check if a given value is a message of [Git](https://git-scm.com/) commit that'll be melded into another by [`git -i --autosquash`](https://git-scm.com/docs/git-rebase#git-rebase---autosquash):

> When the commit log message begins with "squash! …​" (or "fixup! …​"), and there is a commit whose title begins with the same …​, automatically modify the todo list of rebase -i so that the commit marked for squashing comes right after the commit to be modified, and change the action of the moved commit from `pick` to `squash` (or `fixup`).

```javascript
isUnautosquashedCommitMessage('Update README'); //=> false
isUnautosquashedCommitMessage('fixup! Update README'); //=> true
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install is-unautosquashed-commit-message
```

## API

```javascript
import isUnautosquashedCommitMessage from 'is-unautosquashed-commit-message';
```

### isUnautosquashedCommitMessage(*message*)

*message*: any type (but always return `false` when non-string value is passed)  
Return: `boolean`

```javascript
// Returns `true`
isUnautosquashedCommitMessage('fixup! add index.js');
isUnautosquashedCommitMessage('squash!          use Set\n\ninstead of Array');
isUnautosquashedCommitMessage(' fixup! bump version');
isUnautosquashedCommitMessage('\tsquash!\n🔧');

// Returns `false`
isUnautosquashedCommitMessage('add index.js');
isUnautosquashedCommitMessage('fixup!add index.js');
isUnautosquashedCommitMessage('squash!');
isUnautosquashedCommitMessage('fixup!                    ');
isUnautosquashedCommitMessage(['this', 'is', 'a', 'non-string', 'value']);
isUnautosquashedCommitMessage();
```

## License

[MIT No Attribution](./LICENSE) © 2019 Shinnosuke Watanabe
