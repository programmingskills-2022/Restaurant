import axios from "axios";
import { useState } from "react";

export default function useHttp(url, type, applyData) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    let response;
    try {
      switch (type) {
        case "get":
          response = await axios.get(url);
          applyData(response.data);
          if (!response) throw new Error("سرور پاسخ نمی دهد.");
          return;
        default:
          throw new Error("خطا");
      }
    } catch (err) {
      setError(err.message || "خطای ناشناس");
    } finally {
      setIsLoading(false);
    }
  };
  return { sendRequest, isLoading, error };
}
