import Head from "next/head";
import "../components/icons";
import Profile from "../components/profile";
import Contact from "../components/contact";
import Interests from "../components/interests";
import NetworkRelation from '../components/networkRelation';
import {
  Col,
  Row
} from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head></Head>

      <main>
        <Row>
          <Col>
            <Profile />
            <Contact />
            <Interests />
          </Col>
          <Col>
            <NetworkRelation />
          </Col>
        </Row>
      </main>
    </>
  );
}
