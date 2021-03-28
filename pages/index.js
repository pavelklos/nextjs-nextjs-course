// rfce
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <hr />
      <h2>next/link Link.href</h2>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link replace href='/blog/2020/12'>
            Blog [2020-12]
          </Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
        <li>
          <Link href='/clients/1'>Client [1]</Link>
        </li>
        <li>
          <Link href='/clients/1/overview'>Client [1] Overview</Link>
        </li>
        <li>
          <Link href='/clients/1/2'>Client [1] Project [2]</Link>
        </li>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/portfolio/1'>Portfolio Project [1]</Link>
        </li>
        <li>
          <Link href='/portfolio/list'>Portfolio List</Link>
        </li>
      </ul>
      <hr />
      <h2>HTML a.href</h2>
      <ul>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/blog/2020/12'>Blog [2020-12]</a>
        </li>
        <li>
          <a href='/clients'>Clients</a>
        </li>
        <li>
          <a href='/clients/1'>Client [1]</a>
        </li>
        <li>
          <a href='/clients/1/overview'>Client [1] Overview</a>
        </li>
        <li>
          <a href='/clients/1/2'>Client [1] Project [2]</a>
        </li>
        <li>
          <a href='/portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='/portfolio/1'>Portfolio Project [1]</a>
        </li>
        <li>
          <a href='/portfolio/list'>Portfolio List</a>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default HomePage;

// import Head from 'next/head'
// import styles from "../styles/Home.module.css";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <h1>Hello Next World!</h1>
//       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//       <hr />
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla pariatur quas quia ex et. Quis dignissimos mollitia, neque provident dolorum aliquam! Est laudantium doloremque ab esse rerum tenetur consequatur asperiores labore, maxime impedit dolorum debitis adipisci dolores dolore. Facere, natus? Accusamus odio ipsum porro quis sequi qui magni aliquam commodi facilis distinctio quam officia non consequuntur obcaecati dolor aliquid ad, maiores quos harum quasi laudantium. Ullam alias adipisci ipsa unde porro, magnam officiis aliquid labore recusandae. Autem odit quis dignissimos cum similique animi? Voluptatem ipsum maiores temporibus enim eius id qui aspernatur repudiandae sed sapiente, ratione rem voluptas iure magni?</p>
//     </div>
//   )
// }

// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }
