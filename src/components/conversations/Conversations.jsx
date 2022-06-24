import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./conversations.css";

export default function Conversations() {
  return (
    <div className="conversations">
      <img
        className="conversationImg"
        src="assets/person/cengoProfile.jpeg"
        alt=""
      />
      <span className="conversationName">Cengizhan Köse</span>
    </div>
  );
}
