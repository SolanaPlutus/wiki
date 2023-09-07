import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import ThemedImage from '@theme/ThemedImage';

const FeatureList = [
  {
    title: 'Overview',
    Svg: ThemedImage,
    sources: {
      light: 'https://solp.cloud/docs/assets/icons/overview.svg',
      dark: 'https://solp.cloud/docs/assets/icons/overview-l.svg',
    },
    description: (
      <>
        Solana Plutus: Comprehensive defense Solana Community.
      </>
    ),
    url: '/docs/overview',
  },
  {
    title: 'Ecosystem',
    Svg: ThemedImage,
    sources: {
      light: 'https://solp.cloud/docs/assets/icons/ecosystem.svg',
      dark: 'https://solp.cloud/docs/assets/icons/ecosystem-l.svg',
    },
    description: (
      <>
        Our ecosystem & instruments
      </>
    ),
    url: '/docs/ecosystem',
  },
  {
    title: 'Developers',
    Svg: ThemedImage,
    sources: {
      light: 'https://solp.cloud/docs/assets/icons/developers.svg',
      dark: 'https://solp.cloud/docs/assets/icons/developers-l.svg',
    },
    description: (
      <>
       Developers
      </>
    ),
    url: '/docs/developers',
  },
  {
    title: 'Tokenomics',
    Svg: ThemedImage,
    sources: {
      light: 'https://solp.cloud/docs/assets/icons/tokenomics.svg',
      dark: 'https://solp.cloud/docs/assets/icons/tokenomics-l.svg',
    },
    description: (
      <>
        Tokenomics
      </>
    ),
    url: '/docs/tokenomics',
  },
  
 


];

function Feature({Svg, title, description, url, sources}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}><Svg className={styles.featureSvg} alt={title} sources={sources} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={url}>{title}</a></h3>
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
