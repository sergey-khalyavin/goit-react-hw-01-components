import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ stats, title }) {
  const getRandomNum = () => Math.round(Math.random() * 256);
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            style={{
              backgroundColor: `rgb(
                ${getRandomNum()},
                ${getRandomNum()},
                ${getRandomNum()}
              )`,
            }}
            key={stat.id}
            className={styles.item}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
