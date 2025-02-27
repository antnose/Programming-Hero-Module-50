import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase.init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, password);

    // reset status
    setSuccess(false);
    setLoginError("");

    // login user
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          setLoginError("Please verify your email address");
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log("Error", error.message);
        setLoginError(error.message);
      });
  };

  const handleResetPassword = () => {
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    if (!email) {
      setLoginError("Please enter your mail");
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        alert("Reset email send in your mail address. Please check your email");
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              ref={emailRef}
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Password</label>
            <input
              name="password"
              type="password"
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        {success && <p className="text-green-600">User login successful!</p>}
        {loginError && <p className="text-red-600"> {loginError} </p>}
        <p
          onClick={handleResetPassword}
          className="my-3 hover:underline cursor-pointer"
        >
          Forget Password
        </p>
        <p>
          New to this website please <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

// 4.25
