import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WebSocket from 'ws';

export default function Home() {

const ws = new WebSocket("ws://localhost:8082"); //ws is fine local, for production use wss
   
  ws.binaryType = 'arraybuffer';
  ws.addEventListener("open", () => {
     console.log("We are connected");

     ws.send("Hey how is it going?");
   });

   ws.addEventListener("message", e => {
     console.log(e.data)
   });

  return (
    <div className={styles.container}>
      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}