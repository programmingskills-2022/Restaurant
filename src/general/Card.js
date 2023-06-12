//kind:0 for items
//kind:1 for orders
const Card = ({ kind, children }) => {
  return (
    <div
      className={`rounded-xl shadow-gray-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${
        kind === 1
          ? "h-24"
          : kind === 0
          ? "lg:w-56 md:w-48 md:h-96 w-40 h-80"
          : "h-36"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
