import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  // const { isAdmin } = useSelector(
  //   (state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      if (user.isAdmin === true) {
        navigate("/home");
      } else {
        navigate("/home");
      }
    }

    dispatch(reset);
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      password,
    };
    // adminSignedIn()
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <div className="form-inner-container">
            <h2>Logga In</h2>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Användarnamn"
              className="loginInput"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Lösenord"
              className="loginInput"
              required
            />
          </div>
          <button className="loginBtn">Logga In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
