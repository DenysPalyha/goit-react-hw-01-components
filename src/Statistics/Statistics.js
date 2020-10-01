import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.scss';

function Statistics({ title, stats }) {
  return (
    <section className={styles['statistics']}>
      {title && <h2 className={styles['title']}>{title}</h2>}
      <ul className={styles['stat-list']}>
        {stats.map(stat => (
          <li className={styles['item']} key={stat.id}>
            <span className={styles['label']}>{stat.label}</span>
            <span className={styles['percentage']}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  titel: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
