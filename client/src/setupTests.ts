import '@testing-library/jest-dom/extend-expect';

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { sleep };
