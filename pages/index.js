import Head from "next/head";
import "../components/icons";
import Profile from "../components/profile";
import Blurbs from "../components/blurbs";
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
            <Blurbs />
          </Col>
        </Row>
      </main>
    </>
  );
}
