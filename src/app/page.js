import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{
        backgroundColor: 'maroon', 
        width: '100%',    
        height: '500px',
        color: 'white',
        fontSize: '2rem',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      }}>
        Image Display Box</div>
      <div style={{
        backgroundColor: 'navy',
        width: '100%',    
        height: '500px',
        color: 'white',
        fontSize: '2rem',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      }}>
      Rest of homepage</div>
    </main>
  )
}
