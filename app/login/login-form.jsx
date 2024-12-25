"use client";

//Client component for CSR (Client Site Rendering)
export default function LoginForm() {
  return (
    <div className="w-[380px] mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
        <form action="#" className="space-y-6">
          {/* Title Section */}
          <h3 className="text-center text-xl font-semibold text-gray-900 mb-3">
            Sign in to your Account
          </h3>

          {/* Email Section */}
          <div>
            <label
              htmlFor="emil"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={"nismal.saumya1@gmail.com"}
              className="bg-gray-50 border border-gray-300 rounded-sm text-gray-900  focus:ring-blue-500  focus:border-blue-500 block w-full p-1"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Section */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 rounded-sm text-gray-900  focus:ring-blue-500  focus:border-blue-500 block w-full p-1"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Section */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-400 h-4 w-4 rounded "
              />
            </div>

            <div className="text-sm ml-3">
              <label htmlFor="remember" className="font-medium text-gray-900 ">
                Remember me
              </label>
            </div>
            <a
              href="/forget-password"
              className="text-sm text-blue-600 font-medium hover:underline ml-auto"
            >
              Forget password?
            </a>
          </div>

          {/* Submite Button */}
          <button
            type="submit"
            className="w-full text-white bg-black hover:bg-purple-700 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2"
          >
            Sign in
          </button>

          <div className="flex justify-center text-sm font-medium text-gray-600 space-x-2">
            <span>Don't have an account yet?</span>
            <a
              href="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Creat an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
