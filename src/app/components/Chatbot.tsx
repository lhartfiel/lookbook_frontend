"use client";
import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchStyles } from "../apis/fetch_styles";
import { StyleResults } from "./StyleResults";
import { StyleTextResponse } from "./StyleTextResponse";

const Chatbot = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mutation = useMutation({
    mutationFn: (value: string) => fetchStyles(value),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = textareaRef.current?.value || "";
    mutation.mutate(query);
  };

  console.log("pending", mutation.isPending);

  if (mutation.error)
    return <div>An error has occurred: {mutation.error.message}</div>;
  console.log("data", mutation.data);
  return (
    <>
      <form
        className="flex flex-wrap items-center mx-auto self-center justify-center w-full max-w-[480px]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <fieldset className="flex flex-wrap basis-full justify-center">
          <label
            htmlFor="chatinput"
            className="w-full mb-2 ml-3 font-medium text-body-primary"
          >
            Describe the hair style you're looking for:
          </label>
          <textarea
            ref={textareaRef}
            className="flex-grow bg-white field-sizing-content w-full border-1 rounded-4xl border-zinc-200 shadow-lg py-3 px-4"
            name="chatinput"
            id="chat-input"
            placeholder="I'd like a ..."
          />
        </fieldset>
        <button
          type="submit"
          className="flex bg-primary font-semibold hover:bg-pink-900 cursor-pointer text-white px-4 py-2 rounded-4xl mt-4 self-end mr-0 ml-auto"
        >
          Show me styles
        </button>
      </form>
      {mutation.isPending && <p>Loading...</p>}
      {!mutation.isPending && mutation.data?.results.length > 0 && (
        <>
          <StyleTextResponse text={mutation?.data?.aiResponse} />
          <StyleResults
            results={mutation.data?.results}
            loading={mutation.isPending}
          />
        </>
      )}
    </>
  );
};

export { Chatbot };
