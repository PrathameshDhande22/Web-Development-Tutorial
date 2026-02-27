declare global {
  type ErrorPageProps = {
    error: Error;
    reset(): void;
  };
}

export {};
