"use client";
import { useStyleStore } from "../state/store";
import { useRouter } from "next/navigation";

const StyleDetail = () => {
  const router = useRouter();
  const { selectedStyle } = useStyleStore();
  return (
    <div className="lg:col-span-8 lg:col-start-3">
      <button onClick={() => router.back()}>Back</button>
      <h1>{selectedStyle?.title}</h1>
    </div>
  );
};

export { StyleDetail };
