import axios from "axios";
import { useState } from "react";

export default function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (url, type, applyData, data = null) => {
    setIsLoading(true);
    let response;
    try {
      switch (type) {
        case "get":
          response = await axios.get(url);
          applyData(response.data);
          if (!response) throw new Error("سرور پاسخ نمی دهد.");
          return;
        case "post":
          response = await axios.post(url, data);
          if (!response) throw new Error("سرور پاسخ نمی دهد.");
          return;
        case "put":
          response = await axios.put(url, data);
          if (!response) throw new Error("سرور پاسخ نمی دهد.");
          return;
        default:
          throw new Error("عملیات با خطا متوقف شد.");
      }
    } catch (err) {
      setError(err.message || "خطای ناشناس");
    } finally {
      setIsLoading(false);
    }
  };
  return { sendRequest, isLoading, error };
}
