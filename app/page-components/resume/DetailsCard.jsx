import React from "react";

export const DetailsCard = ({ styles, data }) => {
  return (
    <div className={styles.card_head}>
      {data?.map((elm, i) => {
        return (
          <div key={i} className={styles.card_details}>
            <div className={styles.date}>
              <p>
                {elm?.startDate} - <br />
                {elm?.endDate}
              </p>
            </div>
            <div className={styles.card_body}>
              <div className="d-flex align-items-center flex-wrap flex-lg-nowrap">
                <h2>{elm?.heading}</h2>
                <h3>{elm?.field}</h3>
              </div>
              <p>{elm?.location}</p>
              {elm?.description && (
                <div className={styles.tech_sub}>
                  <ul className="p-0">
                    {elm?.description?.map((data, i) => {
                      return <li key={i}>{data?.desc}</li>;
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
