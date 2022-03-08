import Head from "next/head";
import {
  Jumbotron,
  Button,
  Container,
  Image,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "../components/icons";
import Profile from "../components/profile";

export default function Home() {
  return (
    <>
      <Head></Head>

      <main>
        <Profile />
      </main>
    </>
  );
}
