"use client";
import { useMutation } from "@tanstack/react-query";
import { fetchStyles } from "../apis/fetch_styles";
import { StyleResults } from "./StyleResults";

const Chatbot = () => {
  const mutation = useMutation({
    mutationFn: fetchStyles,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    e.preventDefault();
    mutation.mutate();
  };

  if (mutation.isPending) return <div>Loading...</div>;
  if (mutation.error)
    return <div>An error has occurred: {mutation.error.message}</div>;
  console.log("data", mutation.data);
  return (
    <>
      <form
        className="flex flex-wrap items-center mx-auto self-center justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="chatinput" className="ml-0 mr-auto mb-3">
          Describe the hair style you're looking for...
        </label>
        <textarea
          className="border-1 rounded-xl border-zinc-200 w-full p-3 h-[120px] shadow-lg"
          name="chatinput"
          id="chat-input"
          placeholder="I'd like a ..."
        />
        <button
          type="submit"
          className="bg-pink-800 hover:bg-pink-900 cursor-pointer text-white px-4 py-2 rounded-lg mt-4 self-end mr-0 ml-auto"
        >
          Show me styles
        </button>
      </form>
      {mutation?.data?.results.length && (
        <StyleResults results={mutation.data?.results} />
      )}
    </>
  );
};

export { Chatbot };
