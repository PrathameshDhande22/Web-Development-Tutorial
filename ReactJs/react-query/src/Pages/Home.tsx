import { Link } from "react-router";

export const Home = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center text-center min-h-[calc(100vh-5rem)]">
      <h3 className="font-extrabold md:text-4xl text-2xl">
        React Query Tutorial Home Page
      </h3>
      <p className="md:text-lg text-base max-w-xl">
        This is a simple home page for the React Query Tutorial. You can
        navigate to different sections using the navigation bar.
      </p>
      <button className="btn btn-wide btn-primary hover:btn-info">
        <Link to={"/basics"}>Get Started</Link>
      </button>
    </div>
  );
};
