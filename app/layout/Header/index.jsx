import { HeaderData } from "app/common/mock";
import { ChatBox } from "components/contact";
import Link from "next/link";
import React, { useState } from "react";

export const Header = ({ styles }) => {
  const [open, setOpen] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  return (
    <>
      <div className="container">
        <nav className={styles.nav_wrapper}>
          <div className={styles.logo}>
            <Link className="text-decoration-none text-white" href={"/"}>
              Logo
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <div className={styles.contact_btn}>
              <button onClick={() => setOpenChat(!openChat)}>Contact</button>
            </div>
            <div
              onClick={() => {
                setOpen(!open);
                setOpenChat(false);
              }}
              className={`${styles.menu} ${open ? styles.opened : ""}`}
            >
              <div className={styles.middle}></div>
            </div>
          </div>
        </nav>
      </div>
      <div className={`${styles.primary_nav} ${open ? styles.active : ""}`}>
        <ul className={`${styles.list} ${open ? styles.nav_opac : ""}`}>
          {HeaderData?.map((el, i) => {
            return (
              <li key={i} style={{ visibility: open ? "visible" : "hidden" }}>
                <Link
                  className={`${styles.nav_link}`}
                  href={el?.slug}
                  onClick={() => setOpen(false)}
                >
                  {el?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ChatBox openChat={openChat} setOpenChat={setOpenChat} />
    </>
  );
};
