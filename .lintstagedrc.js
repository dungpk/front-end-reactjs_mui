module.exports = {
  '**/*.{ts,tsx,css,scss,md,json}': ['prettier --write'],
  '**/*.ts?(x)': (filenames) => [
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
    'yarn test',
  ],
};
