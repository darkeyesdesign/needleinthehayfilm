import Image from 'next/image';
import styles from './styles/page.module.css';

import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

<h1>"Needle in the Hay"</h1>
<div>A Short Film about Addiction and Friendship</div>
<h2>Seed & Spark campaign coming June 2025!</h2>

{/* Main content */}
				<div className="logo-container">
        	<Image
          	className={styles.logo}
          	src="/public/assets/nith-placeholder.png"
          	alt="nith-placeholder"
						width="800"
						height="500"
        	/>
				</div>

        <ul>
					<li>
						<Link href="#">
	          	Subscribe for Updates
						</Link>
					</li>
					<li>
						<Link href="#">
							Share on Socials
						</Link>
					</li>
					<li>
						<Link href="https://seedandspark.com/fund/needle-in-the-hay#story">
							Support the Film
						</Link>
					</li>
        </ul>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/assets/globe.svg"
              alt="."
              width={20}
              height={20}
            />
						Newsletter	
          </a>
          <a
            href="https://seedandspark.com/fund/needle-in-the-hay#story"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Support
          </a>
        </div>
      </main>

{/* The real Footer */}
      <footer className={styles.footer}>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/assets/file.svg"
            alt="."
            width={16}
            height={16}
          />
         	About 
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/assets/instagram.png"
            alt="."
            width={16}
            height={16}
          />
         	Share 
        </a>
        <a
          href="https://seedandspark.com/fund/needle-in-the-hay#story"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/assets/globe.svg"
            alt="."
            width={16}
            height={16}
          />
          Support →
        </a>
      </footer>
    </div>
  );
}
