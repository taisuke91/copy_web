import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Briefcase, Home, Scale } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 dark:from-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <nav className="flex items-center justify-between w-full">
            <Link href="/" className="text-lg font-bold text-primary">
              佐藤総合法律事務所
            </Link>
            <div className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="text-primary transition-colors hover:text-primary/80">
                ホーム
              </Link>
              <Link href="/practice-areas" className="text-muted-foreground transition-colors hover:text-primary/80">
                取扱分野
              </Link>
              <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary/80">
                お問い合わせ
              </Link>
              <Link href="/policy" className="text-muted-foreground transition-colors hover:text-primary/80">
                プライバシーポリシー
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">あなたの権利を守るパートナー</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            誠実さと献身をもって、企業法務から個人の問題まで、包括的なリーガルサービスを提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="/contact">
                無料相談を予約 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
              <Link href="/practice-areas">
                取扱分野を見る
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">取扱分野</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              私たちは、多様な法的ニーズにお応えするための専門知識を有しています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>企業法務</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  契約書の作成・レビュー、コンプライアンス、M&Aなど、企業の成長を法的にサポートします。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>刑事弁護</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  逮捕直後から裁判まで、被疑者・被告人の権利を守るために迅速かつ的確な弁護活動を行います。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>家事事件</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  離婚、相続、遺言など、ご家庭内のデリケートな問題について、親身に寄り添い解決へと導きます。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary-foreground mb-4">法的な課題に直面していませんか？</h2>
          <p className="text-xl text-muted-foreground mb-8">
            一人で悩まず、まずはご相談ください。経験豊富な弁護士が最適な解決策をご提案します。
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link href="/contact">
              今すぐお問い合わせ <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">佐藤総合法律事務所</h3>
              <p className="text-gray-400">あなたの未来を守る、信頼のリーガルパートナー。</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">クイックリンク</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">ホーム</Link></li>
                <li><Link href="/practice-areas" className="text-gray-400 hover:text-white">取扱分野</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">お問い合わせ</Link></li>
                <li><Link href="/policy" className="text-gray-400 hover:text-white">プライバシーポリシー</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">取扱分野</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">企業法務</span></li>
                <li><span className="text-gray-400">家事事件</span></li>
                <li><span className="text-gray-400">刑事弁護</span></li>
                <li><span className="text-gray-400">その他</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">連絡先</h4>
              <p className="text-gray-400">
                Email: info@sato-law.jp<br />
                電話: 03-1234-5678
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} 佐藤総合法律事務所. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}