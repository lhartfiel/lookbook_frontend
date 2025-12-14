"use client";
import { useRouter } from "next/navigation";
import { Button } from "./Common/Button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useStyleStore } from "../state/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Card } from "./Common/Card";

/**
 * SkeletonPlaceholder is a React component that renders a skeleton placeholder for loading states.
 * @returns A JSX element representing a skeleton placeholder.
 */

export default function imageSkeleton(key?: number) {
  return (
    <Skeleton
      key={key}
      baseColor="#f5f5f5"
      highlightColor="#fff"
      width="100%"
      height="240px"
    />
  );
}

/**
 * A style results component that displays a list of style cards and a favorites button.
 * @param loading - A boolean indicating whether the styles are currently being loaded.
 * @returns A JSX element representing the StyleResults component.
 */

const StyleResults = ({ loading }: { loading: boolean }) => {
  const { results, favoriteIds } = useStyleStore();
  const router = useRouter();

  // Calculate favorites count from favoriteIds
  const favoritedLength = favoriteIds.length;
  const goToFavorites = () => {
    router.push("/favorites");
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1024px] my-8 mx-auto justify-center">
        {loading && Array.from({ length: 3 }, (_, idx) => imageSkeleton(idx))}

        <div className="flex items-center justify-end w-full col-span-full text-right">
          <Button
            type="text"
            text={`Favorites (${favoritedLength})`}
            callback={goToFavorites}
            customClasses="w-auto justify-end dark:text-secondary dark:hover:decoration-secondary"
            childItems={
              <FontAwesomeIcon
                className="text-secondary text-2xl mr-2"
                icon={faHeart}
              />
            }
          ></Button>
        </div>
        {!results ||
          (results.length === 0 && (
            <p className="text-primary-dark text-body">
              No styles found. Please refine your search.
            </p>
          ))}

        {results.map((result) => (
          <Card result={result} key={result.id} />
        ))}
      </div>
    </>
  );
};

export { StyleResults };
