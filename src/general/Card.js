//kind:0 for items
//kind:1 for orders
const Card = ({ kind, children }) => {
  return (
    //kind===0 for content Items
    //kind===1 for order Items
    //kind===2 from order sum
    //kind===3 for login
    <div
      className={`rounded-xl shadow-gray-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${
        kind === 1
          ? "h-24"
          : kind === 0
          ? "lg:w-56 md:w-48 md:h-96 w-40 h-80"
          : kind === 2
          ? "h-36"
          : "h-auto"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
