const Tag = ({ tagName }: { tagName: string }) => {
  return (
    <p className="bg-secondary inline-block w-auto items-center py-[4px] text-[14px] font-medium px-4 mr-2 mb-3 text-white rounded-sm">
      {tagName}
    </p>
  );
};

export { Tag };
