import { AddPost } from "../Components/AddPost";
import { HeaderTag } from "../Components/HeaderTag";
import { ReactQueryApproach } from "../Components/ReactQueryApproach";

export const Mutation = () => {
  return (
    <div>
      <HeaderTag
        header="Mutation"
        level="text-2xl"
        className="font-bold my-3"
      />
      <AddPost />
      <ReactQueryApproach />
    </div>
  );
};
