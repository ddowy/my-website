import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>Navbar</h2>
        </header>
        {children}
        <footer>
          <h2>Page foot</h2>  
        </footer>  
      </body>
    </html>
  )
}