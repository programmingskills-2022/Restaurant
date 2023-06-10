const Card = ({ width, height, children }) => {
  return (
    <div className="rounded-xl  shadow-gray-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:w-56 md:w-48 md:h-96 w-40 h-80">
      {children}
    </div>
  );
};

export default Card;
