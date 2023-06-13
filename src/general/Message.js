import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Message = ({ message }) => {
  const navigate = useNavigate();

  const navigateHomePage = () => {
    navigate("/");
  };

  return (
    <Card>
      <div className="flex flex-col justify-center items-center mx-4 p-8 gap-8">
        <p className="text-center text-xl text-teal-800">{message}</p>
        <button
          className="bg-teal-600 hover:bg-teal-700 text-white w-32 p-2 rounded-xl"
          onClick={navigateHomePage}
        >
          بازگشت
        </button>
      </div>
    </Card>
  );
};

export default Message;
