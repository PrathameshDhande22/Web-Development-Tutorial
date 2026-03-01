const FeedLayout = ({ children, modal }: LayoutProps<"/feed">) => {
  return (
    <div>
      <div>{modal}</div>
      <div>{children}</div>
    </div>
  );
};

export default FeedLayout;
