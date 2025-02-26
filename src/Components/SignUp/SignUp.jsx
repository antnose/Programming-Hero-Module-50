const SignUp = () => {
  const handleSignup = () => {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-sm p-6 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              required
              className="w-full p-3 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 font-semibold text-center text-black bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
