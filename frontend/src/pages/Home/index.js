import React from 'react';
import { Button } from 'reactstrap';
import GetStarted from '../../components/GetStarted/GetStarted';
import Statistics from '../../components/Statistics';
import Shortner from '../../components/Shortner';
import Footer from '../../components/Footer';
import './Home.scss';

export default function Home() {
  return (
    <div className="HomeScreen mt-3">
      <GetStarted />
      <div className="main">
        <Shortner />
        <Statistics />
      </div>
      <div className="boost">
        <h1>Boost your links today</h1>
        <Button>Get Started</Button>
      </div>
      <Footer />
    </div>
  );
}
