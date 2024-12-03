

// "use client";
// import {signIn} from "next-auth/react";
// export default function SignInComponents(){
//     return (
//         <div>

// <h1>Sign In</h1>
// <button onClick={()=> signIn("github")}>SignIn with Github</button>
//         </div>
//     )
// }



// components/SignInComponent.tsx
import { signIn } from "next-auth/react";

const SignInComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => signIn("github")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SignInComponent;
