import Head from 'next/head'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const res = await fetch(`https://we-book.vercel.app/api/users`)
  const { data } = await res.json()
  return {
    props: { data },
  }
}

const logoSvg = () => (
  <div title="WeBook&#39;s Logo" className={styles.logoContainer}>
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="64" viewBox="0 0 38 31" fill="none">
      <rect fill="#D56F12" y="2.20001" width="38" height="28" rx="1"/>
      <path fill="white" d="M4.93939 0.650359L3 2.75033V29H19H35V2.75033L32.5758 0.650359C32.5758 0.650359 30.2026 0.829845 28.697 0.650359C26.5511 0.394552 25.4903 -0.276695 23.3636 0.125378C21.3461 0.506817 19 2.22534 19 2.22534C19 2.22534 16.3315 0.506095 14.1515 0.125378C11.8393 -0.278434 9.65875 0.650359 8.33333 0.650359H4.93939Z"/>
      <path fill="#C4C4C4" d="M8.69686 25.0575C7.36089 25.1661 5.26249 25.0575 5.26249 25.0575L3.29999 29H34.7L33.2281 25.0575C33.2281 25.0575 30.8267 25.2113 29.3031 25.0575C27.1316 24.8382 26.0583 24.2628 23.9062 24.6075C21.8646 24.9344 19.4906 26.4075 19.4906 26.4075C19.4906 26.4075 16.7903 24.9338 14.5844 24.6075C12.2446 24.2613 11.0576 24.8656 8.69686 25.0575Z"/>
      <path fill="black" d="M15.723 17H17.5213L19.179 11.294H19.2472L20.9091 17H22.7074L25.2045 8.27273H23.1889L21.7443 14.3494H21.6676L20.0781 8.27273H18.3523L16.7585 14.3366H16.6861L15.2415 8.27273H13.2259L15.723 17Z"/>
    </svg>
  </div>
)

export default function Home({ data }) {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta charSet="UTF-8" />
        <meta property="og:image" content="https://raw.githubusercontent.com/Alonso-Pablo/WeBook/main/public/og.png" />
        <meta property="og:description" content="WeBook is a platform to meet readers from all over the world and share amazing books." />
        <meta property="og:title" content="WeBook: we read" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="WeBook: we read" />
        <meta name="keywords" content="WeBook - Best books - Read books" />
        <title>WeBook | we read</title>
        <meta name="description" content="WeBook members list" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>

        {logoSvg()}

        <h1 className={styles.title}>Members of our platform:</h1>

        <ul className={styles.userList}>
        {data.map(users => {
          const { _id, firstName, lastName, age, email } = users
          return (
            <li key={_id} className={styles.userItem}>
              <p>First name:</p>
              <span>{firstName}</span>
              <p>Last name:</p>
              <span>{lastName}</span>

              <p>Age:</p>
              <span>{age}</span>

              <p>Email:</p>
              <span>{email}</span>
            </li>
          )
        })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>WeBook © 2021</p>
        <span title="The call&#39;s near">We are not a Sect, please believe us as we believe in Cthulhu</span>
      </footer>
    </>
  )
}
