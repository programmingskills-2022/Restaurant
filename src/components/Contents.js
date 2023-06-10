import ContentItem from "./ContentItem";

const Contents = ({ items }) => {
  return (
    <main className="flex justify-center items-center flex-wrap md:gap-8 md:px-20 gap-4 pb-8">
      {items.map((item) => (
        <ContentItem item={item} />
      ))}
    </main>
  );
};

export default Contents;
