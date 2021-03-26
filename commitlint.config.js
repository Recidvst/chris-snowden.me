module.exports = {
  extends: '@commitlint/config-conventional',
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [
      1,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [1, 'never', '.'],
    'type-case': [1, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'breaking',
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'other',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ],
    'scope-case': [0],
    'scope-empty': [1, 'never'],
    'scope-enum': [0]
  }
};
