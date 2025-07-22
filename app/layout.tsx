import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: '佐藤総合法律事務所 | あなたの権利を守るパートナー',
  description: '佐藤総合法律事務所は、企業法務、家事事件、刑事弁護など、幅広い分野で専門的なリーガルサービスを提供します。',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}