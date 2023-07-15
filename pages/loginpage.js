import Image from "next/image";
import google from "@/public/google.svg";
import apple from "@/public/apple.svg";
import { signIn } from "next-auth/react";
export default function LoginPage() {
  return (
    <div className="sm:col-start-3 sm:col-span-3 bg-lightone flex flex-col justify-center items-center">
      <span className="flex flex-col p-4">
        <span className="text-3xl font-bold">Sign In</span>
        <span className="font-semibold text-sm">Sign in to your account</span>
        <span className="flex items-center flex-wrap gap-4 my-8 text-sm">
          <button
            onClick={() => signIn()}
            className="bg-white flex gap-2 items-center px-4 py-1 rounded-lg text-zinc-500"
          >
            <Image height={15} width={15} src={google} alt="google sign in" />
            Sign in with Google
          </button>
          <button
            onClick=""
            className="bg-white flex gap-2 items-center px-4 py-1 rounded-lg text-zinc-500"
          >
            <Image height={15} width={15} src={apple} alt="apple sign in" />
            Sign in with Apple
          </button>
        </span>
        <form className="bg-white rounded-lg sm:p-8 p-4 flex flex-col gap-4 md:text-sm text-xs font-semibold">
          <span>Email address</span>
          <input
            className="outline-none px-4 py-2 bg-zinc-200 rounded-lg"
            placeholder="johndoe@gmail.com"
            type="email"
          />
          <span>Password</span>
          <input
            className="outline-none px-4 py-2 bg-zinc-200 rounded-lg tracking-wider"
            type="password"
          />
          <span className="font-normal hover:underline text-sky-600 hover:underline-sky-600 underline-offset-2 cursor-pointer">
            Forgot password?
          </span>
          <button className="bg-black text-center p-2 text-white font-bold rounded-lg">
            Sign In
          </button>
        </form>
        <span className="font-normal text-sm mx-auto text-zinc-600 my-4">
          Don't have an account?{" "}
          <span className="hover:underline text-sky-600 hover:underline-sky-600 underline-offset-2 cursor-pointer">
            Register here
          </span>
        </span>
      </span>
    </div>
  );
}
