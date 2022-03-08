import Head from "next/head";
import React, { useState } from 'react';
import "../components/icons";
import Profile from "../components/profile";
import Blurbs from "../components/blurbs";
import Contact from "../components/contact";
import Interests from "../components/interests";
import NetworkRelation from '../components/networkRelation';
import FriendSpace from '../components/friendSpace';
import EnemySpace from '../components/enemySpace';
import {
  Button,
  Col,
  Row
} from "react-bootstrap";

export default function Home() {
  const [ showFriendSpace, setShowFriendSpace ] = useState(true);

  const toggleShowFriendSpace = () => {
    const newValue = !showFriendSpace;
    setShowFriendSpace(newValue);
  }

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
            {showFriendSpace ? (
              <FriendSpace />
            ) : (
              <EnemySpace />
            )}
            <Button
              onClick={toggleShowFriendSpace}
              >Show {showFriendSpace ? 'Enemy' : 'Friend'} space</Button>
          </Col>
        </Row>
      </main>
    </>
  );
}
