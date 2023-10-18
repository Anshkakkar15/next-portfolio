import { Banner } from "components/Banner";
import styles from "styles/Resume.module.css";

import {
  ContactDetails,
  EducationDetails,
  ExperienceDetails,
  TechnicalSkills,
} from "app/common/mock/resume";
import Link from "next/link";
import { DetailsCard } from "app/page-components/resume/DetailsCard";

export default function resume() {
  return (
    <main>
      <Banner
        content={
          "Your gateway to a comprehensive overview of my professional qualifications, skills, and experiences"
        }
      />
      <div className="container">
        <div className={styles.res_out}>
          <div className={styles.res_layout}>
            <div className={styles.left_sec}>
              <div className={styles.contact}>
                <h1>Ansh Kakkar</h1>
                <p>React Developer</p>
              </div>
              <div className={styles.contac_detail}>
                <div className={styles.contac_lft}>
                  <div className={styles.icons}>
                    {ContactDetails?.map((details, i) => {
                      return (
                        <div key={i} className={styles.cnt_icon}>
                          {details?.icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="sub_heading">
                  <h2>Contact:</h2>
                  <hr />
                  {ContactDetails?.map((details, i) => {
                    return (
                      <div key={i} className={styles.right_sec_v}>
                        <div className={styles.cnt_mail}>
                          <h3>{details?.contact_head}</h3>
                          <a href={details?.url ? details?.url : "#"}>
                            {details?.contact_info}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.marg_tp}>
                <div className="sub_heading">
                  <h2>Core Technologies:</h2>
                  <hr />
                </div>
                <div className={styles.tech_sub}>
                  <ul>
                    {TechnicalSkills?.map((skills, i) => {
                      return <li key={i}>{skills?.tech}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className={styles.marg_tp}>
                <div className="sub_heading">
                  <h2>Projects:</h2>
                  <hr />
                  <div className={styles.projects}>
                    <p>
                      Links to some of my work can be found on
                      <span>
                        <Link href={"/my-work"}>ansh.dev/work</Link>
                      </span>
                      and details can be provided upon request via a scheduled
                      demo call.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right_sec}>
              <div className={styles.marg_tp}>
                <div className="sub_heading">
                  <h2>Summary:</h2>
                  <hr />
                </div>
                <div className={styles.summary}>
                  <p>
                    To seek And Mantain Full-time Position That offers
                    professional Challenges Utilizing Interpersonal Skills,
                    Excellent Time Management and Problem-Solving Skills.
                  </p>
                </div>
              </div>
              <div className={styles.marg_tp}>
                <div className="sub_heading">
                  <h2>Education:</h2>
                  <hr />
                </div>
                <DetailsCard styles={styles} data={EducationDetails} />
              </div>
              <div className={styles.marg_tp}>
                <div className="sub_heading">
                  <h2>Experience:</h2>
                  <hr />
                </div>
                <DetailsCard styles={styles} data={ExperienceDetails} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
