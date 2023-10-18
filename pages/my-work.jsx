import React from "react";

import { Banner } from "components/Banner";

import styles from "styles/Work.module.css";

export default function MyWork() {
  return (
    <div>
      <Banner
        content={
          "These projects are a testament to my creativity, innovation, and problem-solving abilities"
        }
      />
      <div className="container">
        <div className={styles.blog_container}>
          <div class={styles.blog_card}>
            <div className={styles.project_logo}>
              <img
                src="https://chomp-seven.vercel.app/static/media/logo.ed3a55143ec156986fd4b7e10b55996c.svg"
                alt="white palace ceiling view"
              />
            </div>
            <div class={styles.blog_content}>
              <h2>Lorem ipsum dolor sit .</h2>
              <a href="#">View Live</a>
            </div>
          </div>
          <div class={styles.blog_card}>
            <div className={styles.project_logo}>
              <img
                src="https://chomp-seven.vercel.app/static/media/logo.ed3a55143ec156986fd4b7e10b55996c.svg"
                alt="white palace ceiling view"
              />
            </div>
            <div class={styles.blog_content}>
              <h2>Lorem ipsum dolor sit .</h2>
              <a href="#">View Live</a>
            </div>
          </div>
          <div class={styles.blog_card}>
            <div className={styles.project_logo}>
              <img
                src="https://chomp-seven.vercel.app/static/media/logo.ed3a55143ec156986fd4b7e10b55996c.svg"
                alt="white palace ceiling view"
              />
            </div>
            <div class={styles.blog_content}>
              <h2>Lorem ipsum dolor sit .</h2>
              <a href="#">View Live</a>
            </div>
          </div>
          <div class={styles.blog_card}>
            <div className={styles.project_logo}>
              <img
                src="https://chomp-seven.vercel.app/static/media/logo.ed3a55143ec156986fd4b7e10b55996c.svg"
                alt="white palace ceiling view"
              />
            </div>
            <div class={styles.blog_content}>
              <h2>Lorem ipsum dolor sit .</h2>
              <a href="#">View Live</a>
            </div>
          </div>
          <div class={styles.blog_card}>
            <div className={styles.project_logo}>
              <img
                src="https://chomp-seven.vercel.app/static/media/logo.ed3a55143ec156986fd4b7e10b55996c.svg"
                alt="white palace ceiling view"
              />
            </div>
            <div class={styles.blog_content}>
              <h2>Lorem ipsum dolor sit .</h2>
              <a href="#">View Live</a>
            </div>
          </div>
          <div class={styles.blog_card}>
            <div className={styles.project_logo}>
              <img
                src="https://chomp-seven.vercel.app/static/media/logo.ed3a55143ec156986fd4b7e10b55996c.svg"
                alt="white palace ceiling view"
              />
            </div>
            <div class={styles.blog_content}>
              <h2>Lorem ipsum dolor sit .</h2>
              <a href="#">View Live</a>
            </div>
          </div>
          <div class={styles.blog_card}>
            <div className={styles.project_logo}>
              <img
                src="https://chomp-seven.vercel.app/static/media/logo.ed3a55143ec156986fd4b7e10b55996c.svg"
                alt="white palace ceiling view"
              />
            </div>
            <div class={styles.blog_content}>
              <h2>Lorem ipsum dolor sit .</h2>
              <a href="#">View Live</a>
            </div>
          </div>
          <div class={styles.blog_card}>
            <div className={styles.project_logo}>
              <img
                src="https://chomp-seven.vercel.app/static/media/logo.ed3a55143ec156986fd4b7e10b55996c.svg"
                alt="white palace ceiling view"
              />
            </div>
            <div class={styles.blog_content}>
              <h2>Lorem ipsum dolor sit .</h2>
              <a href="#">View Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
