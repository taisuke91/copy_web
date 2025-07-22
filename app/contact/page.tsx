"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "メッセージが送信されました！",
      description: "お問い合わせいただきありがとうございます。内容を確認の上、折り返しご連絡いたします。",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

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
              <Link href="/contact" className="text-primary transition-colors hover:text-primary/80">
                お問い合わせ
              </Link>
              <Link href="/policy" className="text-muted-foreground transition-colors hover:text-primary/80">
                プライバシーポリシー
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">お問い合わせ</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ご相談やご依頼は、下記フォームまたはお電話にてお気軽にご連絡ください。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>連絡先情報</CardTitle>
                <CardDescription>お電話、メールでも受け付けております。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@sato-law.jp</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">電話番号</p>
                    <p className="text-muted-foreground">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">所在地</p>
                    <p className="text-muted-foreground">
                      〒100-0013<br />
                      東京都千代田区霞が関1-1-1<br />
                      法務ビル 10階
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>お問い合わせフォーム</CardTitle>
                <CardDescription>必要事項をご記入の上、送信してください。</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前 *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">件名 *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="ご相談内容の概要"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">ご相談内容 *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="ご相談内容の詳細をご記入ください。"
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "送信中..." : "送信する"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}