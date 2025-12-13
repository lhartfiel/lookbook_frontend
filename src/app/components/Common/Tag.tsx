/**
 * A tag component that displays a tag name with specific styling.
 * @param tagName - The name of the tag to be displayed as a string.
 * @returns A JSX element representing the Tag component.
 */

const Tag = ({ tagName }: { tagName: string }) => {
  return (
    <p className="bg-secondary inline-block w-auto items-center py-[4px] text-[14px] font-medium px-4 mr-2 mb-3 text-gray-900 rounded-sm">
      {tagName}
    </p>
  );
};

export { Tag };
