import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

// https://www.robinwieruch.de/react-hooks-fetch-data/
const useDataApi = (initialUrl: string, initialData: any) => {
  const [dataValue, setDataValue] = useState(initialData);
  const [urlPath, setUrlPath] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [errorValue, setErrorValue] = useState<AxiosError>();

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      setErrorValue(undefined);
      setIsLoading(true);

      try {
        const result = await axios(urlPath);

        if (!didCancel) {
          setDataValue(result.data);
        }
      } catch (errorCatch) {
        if (!didCancel) {
          setErrorValue(errorCatch as AxiosError);
        }
      }

      return await setIsLoading(false);
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [urlPath]);

  return { dataValue, isLoading, errorValue, setUrlPath };
};

export default useDataApi;
