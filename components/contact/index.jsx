import React from "react";

import styles from "styles/Contact.module.css";

export const ChatBox = ({ openChat, setOpenChat }) => {
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
          <div onClick={() => setOpenChat(false)} className={styles.close_box}>
            <i class="bi bi-x-lg"></i>
          </div>
        </div>
        <div className={styles.chatroom}>
          <div className={`${styles.msg} ${styles.msg_left}`}>
            <div className={styles.bubble}>
              <h6 className="name">Ansh Bot</h6>
              Hello, I am a smart chat bot, <br />
              How can I help you.
            </div>
          </div>
          <div className={`${styles.msg} ${styles.msg_right}`}>
            <div className={styles.bubble}>
              Oh! Look at you. You are awesome
            </div>
          </div>
          <div className={`${styles.msg} ${styles.msg_right}`}>
            <div className={styles.bubble}>
              Can you please tell me who created you?
            </div>
          </div>
          <div className={`${styles.msg} ${styles.msg_left}`}>
            <div className={styles.bubble}>
              Yes, Of course! Adnan Khan created me. <br />
              He's behind my awesomeness. He did a great job. didn't he?
            </div>
          </div>
          <div className={`${styles.msg} ${styles.msg_right}`}>
            <div className={styles.bubble}>
              Yeah! He did an amazing job.
              <br />
              How can I contact him?
            </div>
          </div>
          <div className={`${styles.msg} ${styles.msg_left}`}>
            <div className={styles.bubble}>
              Here's my boss' Fiverr Username. <br />
              <a href="#" target="_blank">
                #
              </a>
            </div>
          </div>
          <div className={`${styles.msg} ${styles.msg_right}`}>
            <div className={styles.bubble}>
              Thanks alot. See you next time. Good bye
            </div>
          </div>

          <div className={`${styles.msg} ${styles.msg_left}`}>
            <div className={styles.bubble}>Good bye. Take care</div>
          </div>
        </div>
      </div>
    </div>
  );
};
