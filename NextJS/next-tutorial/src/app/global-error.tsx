"use client";

// deine the global error as the client side and its must have its own html and body
const GlobalError = ({ error }: ErrorPageProps) => {
  return (
    <html>
      <title>Global Error - Outage</title>
      <body>
        <div>
          Global Error - Try Again
          <span>Detail : {error.message}</span>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
