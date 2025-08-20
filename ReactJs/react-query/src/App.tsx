import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { Navigation } from "./Components/Navigation";
import { Basics } from "./Pages/Basics";
import { useQueryProperties } from "./Pages/useQueryProperties";
import { PostDetails } from "./Pages/PostDetails";
import { Pagination } from "./Pages/Pagination";
import { InfiniteQuery } from "./Pages/InfiniteQuery";
import { Mutation } from "./Pages/Mutation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" index Component={Home} />
            <Route path="/basics" Component={Basics} />
            <Route path="/useQueryProperties" Component={useQueryProperties} />
            <Route path="/postDetails/:id" Component={PostDetails} />
            <Route path="/pagination" Component={Pagination} />
            <Route path="/infiniteQuery" Component={InfiniteQuery} />
            <Route path="/mutation" Component={Mutation} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
