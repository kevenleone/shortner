import React, { useState } from "react";
import GetStarted from "../../components/GetStarted/GetStarted";
import "./Home.scss";
import Shortner from "../../components/Shortner";

export default function Home() {
  return (
    <div className="HomeScreen mt-3">
      <GetStarted />
      <Shortner />
    </div>
  );
}
