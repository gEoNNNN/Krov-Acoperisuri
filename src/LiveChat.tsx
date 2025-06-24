import React, { useState } from "react";
import "./LiveChat.css";
import ChatButtonBG from "./assets/Group 51.png";
import openchaticon from "./assets/openchatbutton.png"
import livechatopenbg from "./assets/Group 71.png"
import closebutton from "./assets/closebutton.png"
import sendicon from "./assets/sendicon.png"

const LiveChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  React.useEffect(() => {
    if (open) setVisible(true);
    else {
      // Wait for animation before removing from DOM
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  const handleSend = () => {
    if (message.trim() !== "") {
      console.log(message);
      setMessage("");
    }
  };

  return (
    <div>
      <img
        src={ChatButtonBG}
        className="livechat-bg"
        alt="Live Chat BG"
        style={open ? { display: "none" } : undefined}
      />
      <div
        className="live-chat-title-row"
        style={open ? { display: "none" } : undefined}
      >
        <h1 className="live-chat-title">Krov Acoperișuri</h1>
        <div
          className="livechat-open-btn-bg"
          onClick={() => setOpen(true)}
          title="Open Live Chat"
        >
          <img src={openchaticon} className="live-chat-open-button" />
        </div>
      </div>
      {visible && (
        <div className={`livechat-modal${open ? "" : " closed"}`}>
          <img src={livechatopenbg} className="livechat-modal-bg" alt="Live Chat Modal BG" />
          <img
            src={closebutton}
            className="livechat-close-button"
            alt="Close"
            onClick={() => setOpen(false)}
          />
          <h1 className="live-chat-open-title">Krov Acoperișuri</h1>
          <div className="livechat-input-row">
            <input
              type="text"
              className="livechat-input"
              placeholder="Scrie-ți mesajul aici..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
            />
            <button
              className="livechat-send-btn"
              onClick={handleSend}
              type="button"
              aria-label="Trimite mesaj"
            >
              <img src={sendicon} alt="Send" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default LiveChat;