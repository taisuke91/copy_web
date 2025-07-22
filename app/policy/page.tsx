import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <nav className="flex items-center justify-between w-full">
            <Link href="/" className="text-lg font-bold text-primary">
              佐藤総合法律事務所
            </Link>
            <div className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="text-muted-foreground transition-colors hover:text-primary/80">
                ホーム
              </Link>
              <Link href="/practice-areas" className="text-muted-foreground transition-colors hover:text-primary/80">
                取扱分野
              </Link>
              <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary/80">
                お問い合わせ
              </Link>
              <Link href="/policy" className="text-primary transition-colors hover:text-primary/80">
                プライバシーポリシー
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">プライバシーポリシー</h1>
          <p className="text-lg text-muted-foreground">最終更新日: {new Date().toLocaleDateString('ja-JP')}</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>はじめに</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                佐藤総合法律事務所（以下、「当事務所」といいます。）は、個人情報の保護に関する法律（以下、「個人情報保護法」といいます。）を遵守するとともに、以下のプライバシーポリシーに従い、適切な取扱い及び保護に努めます。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>個人情報の取得</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                当事務所は、適法かつ公正な手段によって、個人情報を取得します。偽りその他不正の手段により取得することはありません。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>個人情報の利用目的</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>当事務所は、取得した個人情報を以下の目的で利用します。</p>
              <ul className="list-disc pl-6">
                <li>法律相談、事件処理等の弁護士業務の遂行</li>
                <li>当事務所からの挨拶状、セミナー、その他の情報の送付</li>
                <li>お問い合わせへの対応</li>
                <li>その他、上記の利用目的に付随する目的</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>個人情報の第三者提供</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                当事務所は、法令に定める場合を除き、個人情報を、事前に本人の同意を得ることなく、第三者に提供しません。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>個人情報の安全管理</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                当事務所は、取り扱う個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>プライバシーポリシーの変更</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                当事務所は、必要に応じて、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>お問い合わせ</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>本プライバシーポリシーに関するお問い合わせは、下記までお願いいたします。</p>
              <ul className="list-none">
                <li>名称: 佐藤総合法律事務所</li>
                <li>Email: privacy@sato-law.jp</li>
                <li>電話: 03-1234-5678</li>
              </ul>
              <p className="mt-4">
                <Link href="/contact" className="text-primary hover:underline">
                  お問い合わせフォームはこちら
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}