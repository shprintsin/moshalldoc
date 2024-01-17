import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
     <div>
      
     </div>
        <p className="hero__subtitle">בנתיים - אין עדיין מה לראות! אבל זה מתעדכן, מבטיח</p>

    <p>אני עובד על זה, זה יקח קצת זמן, וקצת יציק בעיניים, אבל עד אז-מקווה שזה יהיה שימושי</p>    

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
	  <div>

            <div style={{padding: '40px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}
          }>
            <p className="hero__subtitle" >{siteConfig.tagline}</p>

            <p style={{width:"80%",
   }}>ניסיון לייצר דוקומנטציה נוחה למטרות הדרכה כשנמשיך את הפרוייקט (של מושל), המטרה של האתר היא לחסוך קצת זמן בלהתעסק עם הממשק הויזואלי של Monday ובמקום זה לכתוב פשוט בMarkdown</p>

        </div>
</div>
      </main>
    </Layout>
  );
}
