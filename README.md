# is-unautosquashed-commit-message

[![NPM version](https://img.shields.io/npm/v/is-unautosquashed-commit-message.svg)](https://www.npmjs.com/package/is-unautosquashed-commit-message)
[![Bower version](https://img.shields.io/bower/v/is-unautosquashed-commit-message.svg)](https://github.com/shinnn/is-unautosquashed-commit-message/releases)
[![Build Status](https://travis-ci.org/shinnn/is-unautosquashed-commit-message.svg?branch=master)](https://travis-ci.org/shinnn/is-unautosquashed-commit-message)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-unautosquashed-commit-message.svg)](https://coveralls.io/r/shinnn/is-unautosquashed-commit-message)

Check if a given value is a message of [Git](https://git-scm.com/) commit that'll be melded into another by [`git -i --autosquash`](https://git-scm.com/docs/git-rebase#git-rebase---autosquash):

> When the commit log message begins with "squash! …​" (or "fixup! …​"), and there is a commit whose title begins with the same …​, automatically modify the todo list of rebase -i so that the commit marked for squashing comes right after the commit to be modified, and change the action of the moved commit from `pick` to `squash` (or `fixup`).

```javascript
import isUnautosquashedCommitMessage from 'is-unautosquashed-commit-message';

isUnautosquashedCommitMessage('Update README'); //=> false
isUnautosquashedCommitMessage('fixup! Update README'); //=> true
```

## Installation

### [npm](https://www.npmjs.com/)

```
npm install is-unautosquashed-commit-message
```

### [bower](https://bower.io/)

```
bower install is-unautosquashed-commit-message
```

## API

```javascript
import isUnautosquashedCommitMessage from 'is-unautosquashed-commit-message';
```

### isUnautosquashedCommitMessage(*message*)

*message*: any type (but always return `false` when non-string value is passed)  
Return: `Boolean`

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
isUnautosquashedCommitMessage(['non-string', 'value']);
isUnautosquashedCommitMessage();
```

## License

Copyright (c) 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
