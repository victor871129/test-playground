import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

// https://www.robinwieruch.de/react-hooks-fetch-data/
const useDataApi = (
  initialUrl: string,
  initialData: any,
  isEnabled: boolean
) => {
  const [dataValue, setDataValue] = useState(initialData);
  const [urlPath, setUrlPath] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [errorValue, setErrorValue] = useState<AxiosError>();

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      if (!isEnabled) {
        return;
      }

      setErrorValue(undefined);
      setIsLoading(true);

      try {
        const result = await axios(urlPath);

        if (!didCancel) {
          console.log("de3454", result.data);
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
  }, [urlPath, isEnabled]);

  return { dataValue, isLoading, errorValue, setUrlPath };
};

export default useDataApi;
