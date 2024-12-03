






"use client";

import { useSession } from "next-auth/react";
import SignInComponent from "./components/SignInComponents";
import SignOutComponent from "./components/SignOutComponents";

const HomePage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
          <p className="text-xl font-medium text-gray-700 mb-4">
            You need to sign in
          </p>
          <SignInComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome, {session.user?.name}
        </h1>
        <SignOutComponent />
      </div>
    </div>
  );
};

export default HomePage;
