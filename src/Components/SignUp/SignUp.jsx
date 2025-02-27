import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(name, email, terms);

    if (!terms) {
      setErrorMessage("Please accept our terms and condition");
      return;
    }

    if (password.length <= 8) {
      setErrorMessage("Password should be 8 character or more");
      return;
    }

    // reset error status
    setErrorMessage("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        e.target.email.value = "";
        e.target.password.value = "";
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-sm p-6 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              required
              className="w-full p-3 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setShow(!show)}
              className="btn btn-xs absolute right-3 mt-3 "
            >
              {show ? <FaEyeSlash /> : <BsFillEyeFill />}
            </button>
            <div className="form-control mt-4 ">
              <label className="label cursor-pointer">
                <input name="terms" type="checkbox" className="checkbox" />
                <span className="label-text">
                  Accept our terms and condition
                </span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 font-semibold text-center text-black bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        {errorMessage && <p className="text-red-600"> {errorMessage} </p>}
        {success && <p className="text-green-600 ">Signup is successful</p>}
        <p>
          If you have account please go <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
