// app/layout.tsx
import type { Metadata } from "next"
import "../../globals.css"

export const metadata: Metadata = {
  title: "LPPM Press",
  description: "Website LPPM Press UPNVJ Publikasi Jurnal Ilmiah, Seminar, Buku dan Konferensi",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {/* Header */}
        {/* <Header /> */}

        {/* Main Content */}
        <main style={{  }}>{children}</main>

        {/* Footer */}
        {/* <Footer /> */}
      </body>
    </html>
  )
}