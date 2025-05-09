module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(\w+)\]\s(.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'Feat',
        'Fix',
        'Docs',
        'Style',
        'Refactor',
        'Test',
        'Chore',
        'Ci',
        'Perf',
        'Build',
        'Revert',
      ],
    ],
    'type-case': [2, 'always', 'pascal-case'],
    'subject-empty': [2, 'never'],
    'header-max-length': [2, 'always', 72],
  },
};
