module.exports = {
  name: 'auth-feature-login-web',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/feature-login-web',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
