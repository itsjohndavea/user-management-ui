import Image from "next/image";
import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import Login from "./components/Login";
import { getSession } from "next-auth/react";
export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <>
      <NavBar />
      <AddUser />
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
