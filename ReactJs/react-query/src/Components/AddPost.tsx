import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import { createPost } from "../api/post.api";

type Post = {
  title: string;
  content: string;
};

export const AddPost = () => {
  const { handleSubmit, register } = useForm<Post>({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  //   useMutation is used to handle the creation of a new post
  //   It takes a mutation function that will be called when the form is submitted
  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      console.log("Post created successfully:", data.data);
    },
  });

  const onSubmit: SubmitHandler<Post> = async (data: Post) => {
    console.log("Form submitted:", data);
    mutate({
      id: Number(Math.floor(Math.random() * 1000)),
      title: data.title,
      content: data.content,
    });
  };

  return (
    <div className="mb-4">
      <form
        className="flex flex-col justify-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
        action={""}
      >
        <label className="floating-label">
          <span>Title</span>
          <input
            className="input input-md"
            {...register("title", { minLength: 1 })}
          />
        </label>
        <label className="floating-label block">
          <span>Content</span>
          <input
            className="input input-md"
            {...register("content", { minLength: 1 })}
          />
        </label>

        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
      </form>
    </div>
  );
};
