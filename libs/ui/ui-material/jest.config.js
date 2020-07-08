module.exports = {
  name: 'ui-ui-material',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/ui-material',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
