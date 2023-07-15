import { useSession, signIn } from "next-auth/react";
import HomePage from "./home";
import LoginPage from "./loginpage";

export default function Home() {
  const { data: session } = useSession();
  // console.log(session?.user?.image);
  // session.user contains >
  // email
  // name
  // image
  return session ? <HomePage session={session} /> : <LoginPage />;
}
