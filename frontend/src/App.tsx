import { useEffect, useState } from "react";
import "./App.css";
import { fetchPosts, selectPosts } from "./reducers/postsReducer";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "./utils/api/axiosInstance";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts() as any);
  });

  const posts = useSelector(selectPosts);

  const [postForm, setPostForm] = useState<{
    title: string;
    description: string;
  }>({
    title: "",
    description: "",
  });

  const insertPost = () => {
    axiosInstance.post("/api/v1/post/", postForm);
  };

  return (
    <div className="bg-neutral-200 text-[#222222] flex items-center justify-center h-screen w-full">
      <div className="max-w-[980px] w-[95vw]">
        <h1 className="text-3xl">Your posts</h1>
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="p-8 shadow-md bg-white rounded-xl mt-8 w-full "
            >
              <h2 className="text-2xl">{post.title}</h2>
              <h2 className="text-lg">{post.description}</h2>
            </div>
          );
        })}
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            insertPost();
          }}
        >
          <input
            placeholder="Title"
            onChange={(e) => {
              setPostForm({ ...postForm, title: e.target.value });
            }}
          />
          <textarea
            placeholder="Post description"
            onChange={(e) => {
              setPostForm({ ...postForm, description: e.target.value });
            }}
          ></textarea>
          <button type="submit">Submit post</button>
        </form>
      </div>
    </div>
  );
}

export default App;
