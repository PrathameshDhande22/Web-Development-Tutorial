import { HeaderTag } from "../Components/HeaderTag";
import { Traditional } from "../Components/Traditional";
import { ReactQueryApproach } from "../Components/ReactQueryApproach";

export const Basics = () => {
  // fetching the data using react query is more efficient and easier to manage
  return (
    <div className="container mx-auto mt-3">
      {/* Traditional Approach */}
      <HeaderTag
        header="Traditional Approach Using UseEffect and State"
        level="text-2xl"
        className="font-bold py-4"
      />
      <Traditional />
      <hr className="mt-4"/>
      {/* React Query Approach */}
      <HeaderTag
        header="React Query Approach"
        level="text-2xl"
        className="font-bold pt-4 pb-4"
      />
      <ReactQueryApproach />
    </div>
  );
};
