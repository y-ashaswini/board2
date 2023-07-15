import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import Panel from "./panel";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <main
        className={
          montserrat.className +
          " w-[100vw] h-[100vh] sm:grid sm:grid-cols-5 gap-2 p-4 overflow-x-hidden"
        }
      >
        <Panel />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
