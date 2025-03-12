import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
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
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
					Share
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Become a Star →
        </a>
      </footer>

				<div className="logo-container">
        	<Image
          	className={styles.logo}
          	src="/nith-placeholder.png"
          	alt="nith-placeholder"
						width="800"
						height="500"
						objectFit="contain"
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
						<Link href="#">
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
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
						Newsletter	
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Support
          </a>
        </div>
      </main>
      <footer className={styles.footer}>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
         	Share 
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Make our Day →
        </a>
      </footer>
    </div>
  );
}
