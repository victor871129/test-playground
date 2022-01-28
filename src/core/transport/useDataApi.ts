import axios from "axios";
import { useEffect, useState } from "react";

// https://www.robinwieruch.de/react-hooks-fetch-data/
const useDataApi = (initialUrl: string, initialData: string) => {
  const [dataValue, setDataValue] = useState(initialData);
  const [urlPath, setUrlPath] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(urlPath);

        if (!didCancel) {
          setDataValue(result.data);
        }
      } catch (errorValue) {
        if (!didCancel) {
          setIsError(true);
        }
      }

      setIsLoading(false);
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [urlPath]);

  return { dataValue, isLoading, isError, setUrlPath };
};

export default useDataApi;
