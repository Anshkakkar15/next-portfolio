import React, { useState } from "react";
import { Questions, chatAnswers, displayChat } from "app/common/mock/chatbox";

import styles from "styles/Contact.module.css";

export const ChatBox = ({ openChat, setOpenChat }) => {
  const [chatting, setChatting] = useState(displayChat);

  const handleAskQuestion = (e) => {
    e.preventDefault();
    const updatedChat = [
      ...chatting,
      {
        message: e.target.textContent,
        sendByUser: true,
      },
    ];

    setChatting(updatedChat);
  };

  const analyzedChat = chatting
    ?.map((data) => {
      const ques = Questions.find(
        (el) =>
          el.question.toLowerCase().replaceAll(" ", "_") ===
          data.message.toLowerCase().replaceAll(" ", "_")
      );

      if (ques) {
        const answer = chatAnswers?.filter((elm) => elm?.ansNo == ques?.quesNo);
        return [data, ...answer];
      } else {
        return data;
      }
    })
    .flat();

  return (
    <div className={styles.chat_bot}>
      <div
        className={`${styles.messenger} br10 ${
          openChat ? styles.expanded : ""
        }`}
      >
        <div className={styles.chat_head}>
          <div className={styles.name_vbss}>
            <h2>Ansh Bot</h2>
            <p>Ask me a question</p>
          </div>
          <div
            onClick={() => {
              setOpenChat(false);
              setChatting(displayChat);
            }}
            className={styles.close_box}
          >
            <i className="bi bi-x-lg"></i>
          </div>
        </div>
        <div className={styles.chatroom}>
          {analyzedChat?.map((ans, index) => {
            return (
              <div key={index}>
                <div
                  className={`${styles.msg} ${
                    ans?.sendBychatBox && styles.msg_left
                  } ${ans?.sendByUser && styles.msg_right}`}
                >
                  <div className={styles.bubble}>
                    <p>{ans?.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {analyzedChat[analyzedChat.length - 1]?.message ===
          "Send me a message and lets chat further!" ? (
            <div className={`${styles.msg} ${styles.msg_left}`}>
              <button
                onClick={() => alert("Pending")}
                className={styles.questionBtn}
              >
                Send Message
              </button>
            </div>
          ) : null}

          {analyzedChat[analyzedChat.length - 1]?.message ===
          "Send me a message and lets chat further!" ? (
            <div className={`${styles.msg} ${styles.msg_left}`}>
              <button
                onClick={() => {
                  const updatedChat = analyzedChat.slice(
                    0,
                    analyzedChat?.length - 1
                  );
                  setChatting(updatedChat);
                }}
                className={styles.questionBtn}
              >
                Other Options?
              </button>
            </div>
          ) : null}

          {analyzedChat[analyzedChat.length - 1]?.message !==
            "Send me a message and lets chat further!" &&
            Questions?.map((ques, index) => {
              return (
                <div key={index} className={`${styles.msg} ${styles.msg_left}`}>
                  <button
                    onClick={handleAskQuestion}
                    className={styles.questionBtn}
                  >
                    {ques?.question}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
