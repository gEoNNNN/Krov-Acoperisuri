import React, { useState } from "react";
import "./LiveChat.css";
import ChatButtonBG from "./assets/Group 51.png";
import openchaticon from "./assets/openchatbutton.png"
import livechatopenbg from "./assets/Group 71.png"
import closebutton from "./assets/closebutton.png"

const LiveChat: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <img src={ChatButtonBG} className="livechat-bg" alt="Live Chat BG" />
      <div className="live-chat-title-row">
        <h1 className="live-chat-title">Krov Acoperișuri</h1>
        <div
          className="livechat-open-btn-bg"
          onClick={() => setOpen(true)}
          title="Open Live Chat"
        >
          <img src={openchaticon} className="live-chat-open-button" />
        </div>
      </div>
      {open && (
        <div className="livechat-modal">
          <img src={livechatopenbg} className="livechat-modal-bg" alt="Live Chat Modal BG" />
          <img
            src={closebutton}
            className="livechat-close-button"
            alt="Close"
            onClick={() => setOpen(false)}
          />
          <h1 className="live-chat-open-title">Krov Acoperișuri</h1>
        </div>
      )}
    </div>
  );
}
export default LiveChat;