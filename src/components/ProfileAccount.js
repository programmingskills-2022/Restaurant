import { useContext } from "react";
import ItemsContext from "../context/ItemsContext";

const ProfileAccount = () => {
  const { loggedUser, lang, dic } = useContext(ItemsContext);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-1 pb-12 max-w-2xl mx-auto"
    >
      <label htmlFor="username" className="p-2 mx-4 ">
        {lang ? dic[2].fa : dic[2].en}:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        readOnly
        value={loggedUser?.username}
        className="p-2 mx-4 rounded-lg bg-papayawhip-default border border-teal-800 border-solid text-teal-900 text-lg outline-none md:text-xl"
      />
      <label htmlFor="name" className="p-2 mx-4 ">
        {lang ? dic[2].fa : dic[2].en}:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        readOnly
        value={loggedUser?.name}
        className="p-2 mx-4 rounded-lg bg-papayawhip-default border border-teal-800 border-solid text-teal-900 text-lg outline-none md:text-xl"
      />
      <label htmlFor="address" className="p-2 mx-4 ">
        {lang ? dic[1].fa : dic[1].en}:
      </label>
      <input
        type="text"
        id="address"
        name="address"
        value={loggedUser?.address}
        readOnly
        className="p-2 mx-4 rounded-lg bg-papayawhip-default border border-teal-800 border-solid text-teal-900 text-lg outline-none md:text-xl"
      />
    </form>
  );
};

export default ProfileAccount;
