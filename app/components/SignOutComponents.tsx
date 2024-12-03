



// "use client";

// import { signOut } from "next-auth/react";

// export default function SignOutPage() {
//   return (
//     <div>
//       <h1>Sign Out</h1>
//       <button onClick={() => signOut()}>Sign Out</button>
//     </div>
//   );
// }




"use client";

import { signOut } from "next-auth/react";

const SignOutComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => signOut()}
        className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutComponent;
