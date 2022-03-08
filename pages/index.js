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
          <div class="index-page-container">
            <Profile />
            <Contact />
            <Interests />
          </div>
          <div class="index-page-container">
            <NetworkRelation />
            <Blurbs />
            {showFriendSpace ? (
              <FriendSpace />
            ) : (
              <EnemySpace />
            )}
            <Button
              onClick={toggleShowFriendSpace}
            >
              Show {showFriendSpace ? 'Enemy' : 'Friend'} space
            </Button>
          </div>
        </Row>
      </main>
    </>
  );
}
