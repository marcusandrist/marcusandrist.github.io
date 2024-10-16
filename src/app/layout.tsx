import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "marcus andrist\'s site",
  description: "hosted on gh-pages",
}

const jaro = localFont({src: "fonts/jaro.ttf", variable: "--font-jaro",})
const dt_mono = localFont({src: "fonts/dt.otf", variable: "--font-daddytime",})

export default function RootLayout(
{children,}: {children: React.ReactNode}) {

  return (
  
  <html lang="en">
    <body className={`${jaro.variable} ${dt_mono.variable}`}>
      {children}
    </body>
  </html>

  )
}
