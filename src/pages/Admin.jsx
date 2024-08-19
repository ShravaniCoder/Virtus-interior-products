import { SignInButton } from "@clerk/clerk-react";


const Admin = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-semibold">👋Welcome Back!</h1>
      <h2 className="text-xl font-semibold text-center p-3">Sign In Here...</h2>
      <div className="bg-gray-100 hover:bg-slate-200 border px-4 py-2 rounded-full">
        <SignInButton mode="modal" signUpFallbackRedirectUrl="/dashboard" />
      </div>
    </div>
  );
}

export default Admin;
