import Head from "next/head";
import "../components/icons";
import Profile from "../components/profile";
import Contact from "../components/contact";
import Interests from "../components/interests";

export default function Home() {
  return (
    <>
      <Head></Head>

      <main>
        <Profile />
        <Contact />
        <Interests />
      </main>
    </>
  );
}
