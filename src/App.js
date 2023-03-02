import React from "react";

function App() {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-100 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

