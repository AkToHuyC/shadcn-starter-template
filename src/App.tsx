import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-gray-100">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 max-w-md w-full flex flex-col items-center space-y-6 border border-gray-700">
        <h1 className="text-3xl font-bold text-cyan-400">Vite + React</h1>

        <div className="flex flex-col items-center space-y-4 w-full">
          <button
            className="
            w-full
            px-6
            py-3
            bg-cyan-600
            text-white
            rounded-lg
            shadow-md
            hover:bg-cyan-500
            hover:shadow-lg
            active:bg-cyan-700
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400
            transition
            duration-200
            text-lg
            font-semibold
          "
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>

          <p className="text-gray-400 text-sm text-center">
            Edit{" "}
            <code className="bg-gray-700 px-1 rounded text-gray-200">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>

        <p className="text-xs text-gray-500 italic text-center">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}
