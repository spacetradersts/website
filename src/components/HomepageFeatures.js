import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Impossible to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        You thought this TypeScript library was going to be practical? Well, you're wrong!
      </>
    ),
  },
  {
    title: 'Struggle to Focus on Anything',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        spacetradersTS is a library that makes it the most struggling 
        thing to focus on that you might as well just fetch directly from the API instead
      </>
    ),
  },
  {
    title: 'Suffering Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend your suffering with the power of React!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
