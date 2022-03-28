// Unescape html text
export const htmlDecode = (inputValue: string) => {
  const actualDoc = new DOMParser().parseFromString(inputValue, "text/html");
  return actualDoc.documentElement.textContent as string;
};
