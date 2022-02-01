import { useNavigate } from "react-router-dom";

const useHome = () => {
  const navigate = useNavigate();

  return {
    goNext: () => navigate("/question/1"),
  };
};

export default useHome;
