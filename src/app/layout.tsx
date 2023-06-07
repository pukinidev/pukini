import Link from 'next/link'
import './globals.css'



export const metadata = {
  title: 'Pukini',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-violet-900'>
        <div className='hidden  sm:block pt-6 text-white'>
          <div className="flex space-x-32 items-center justify-center">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/proyects'>Proyects</Link>
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  )
}
