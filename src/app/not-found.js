import styles from './not-found.module.css'


export default function NotFound() {
  return (
    <div className={styles.notFound}>
        <h2>404 Page Not Found</h2>
        <p>The resources you are requesting are invalid.</p>
        <a className={styles.homepageLink} href="/">
            <img className={styles.houseImg} src="/assets/house.svg" alt="" />
            Back to Homepage
        </a>
    </div>
  )
}