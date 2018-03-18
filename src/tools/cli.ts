import chalk from 'chalk';

export const showError = (error: string) => {
  chalk.red(error);
  process.exit();
};
