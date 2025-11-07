"use client";
import { useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchStyles } from "../apis/fetch_styles";
import { Button } from "./Common/Button";
import { StyleResults } from "./StyleResults";
import { StyleTextResponse } from "./StyleTextResponse";
import { useStyleStore } from "../state/store";
import Skeleton from "react-loading-skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {
    results,
    aiResponse,
    updateResults,
    updateAiResponse,
    updateResponseInitialized,
  } = useStyleStore();
  const mutation = useMutation({
    mutationFn: (value: string) => fetchStyles(value),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = textareaRef.current?.value || "";
    mutation.mutate(query);
    updateResponseInitialized(true);
    updateAiResponse("");
  };

  useEffect(() => {
    if (!mutation.isPending && mutation?.data) {
      updateResults(mutation?.data.results);
      updateAiResponse(mutation?.data.aiResponse);
    }
  }, [mutation.isPending]);

  useEffect(() => {
    updateResponseInitialized(false);
  }, []);

  return (
    <>
      <form
        className="flex flex-wrap items-center mx-auto self-center justify-center w-full md:max-w-[600px] lg:max-w-[480px]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <fieldset className="flex flex-wrap basis-full justify-center">
          <label
            htmlFor="chatinput"
            className="w-full mb-2 ml-3 font-medium text-body-primary text-body dark:text-light"
          >
            Describe the hair style you're looking for:
          </label>
          <textarea
            ref={textareaRef}
            className="flex-grow bg-white field-sizing-content w-full border-1 rounded-4xl border-zinc-200 shadow-lg py-3 px-4"
            name="chatinput"
            id="chatinput"
            placeholder="I'd like a ..."
          />
        </fieldset>
        <Button text="Show me styles" type="submit"></Button>
      </form>
      {mutation.isPending && (
        <div className="mt-6 w-full mx-auto max-w-[1024px]">
          {Array.from({ length: 6 }, (_, idx) => {
            return (
              <Skeleton
                key={`text-skeleton-${idx}`}
                baseColor="#c4c4c4"
                highlightColor="#f5f5f5"
                width="100%"
                height="16px"
              />
            );
          })}
        </div>
      )}
      {mutation.error && (
        <p className="flex flex-nowrap justify-center items-center font-barlow text-primary-dark text-body dark:text-white mt-12">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-h3 mr-2 dark:text-caution"
          />
          An error has occurred: {mutation.error.message}
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-h3 ml-2 dark:text-caution"
          />
        </p>
      )}

      {!mutation.isPending && results.length > 0 ? (
        <>
          <StyleTextResponse />
          <StyleResults loading={mutation.isPending} />
        </>
      ) : (
        <p className="mt-12 w-full text-body font-semibold mx-auto max-w-[420px] justify-center text-primary-dark text-center dark:text-light">
          {aiResponse}
        </p>
      )}
    </>
  );
};

export { Chatbot };
