// To apply these root layout you need to delete the app/layout.tsx app root layout.
const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer>These is Login/Register Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
