const FeedLayout = ({ children, modal }: LayoutProps<"/feed">) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default FeedLayout;
