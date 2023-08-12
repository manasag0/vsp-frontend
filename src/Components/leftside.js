import { useNavigate } from "react-router-dom";

const Leftside = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div className="left">
      <h1 className="left_title">Tuner</h1>
      <p className="left_desc">
        <span>Enjoy Multiple videos</span>
        <span>at one place</span>
      </p>
      <p
        className="left_register"
        onClick={() => navigate(text === "Register" ? "/register" : "/login")}
      >
        {text}
      </p>
    </div>
  );
};
export default Leftside;
