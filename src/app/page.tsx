import HimawariLogo from "@/components/HimawariLogo";
import ScrollReveal from "@/components/ScrollReveal";
import { HeroText, GoldParticles, NavScrollEffect } from "@/components/HeroAnimations";

const NAV_ITEMS = [
  { label: "衣装紹介", href: "#levels" },
  { label: "店舗情報", href: "#access" },
];

const LEVELS = [
  {
    titleJa: "はじめての方へ",
    titleEn: "BEGINNER",
    description: "初めてのダンスを楽しむためのシンプルで動きやすい衣装をご用意。レッスンにもぴったりです。",
  },
  {
    titleJa: "社交ダンスを楽しむ方へ",
    titleEn: "SOCIAL DANCER",
    description: "パーティーやデモンストレーションに映える、華やかさと着心地を両立した衣装です。",
  },
  {
    titleJa: "競技ダンサーの方へ",
    titleEn: "COMPETITION",
    description: "フロアで輝くための本格的な競技用ドレス。細部までこだわった最高級の一着を。",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      {/* Client-side scroll effect for nav */}
      <NavScrollEffect />

      {/* ===== Navigation ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF7]/95 backdrop-blur-sm border-b border-gold-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#" className="group flex items-center gap-2 sm:gap-3">
              <HimawariLogo className="w-8 h-8 sm:w-10 sm:h-10" spin />
              <div>
                <span className="font-cinzel text-sm sm:text-base tracking-widest text-gold-dark">
                  BOUTIQUE
                </span>
                <span className="block text-xs sm:text-sm tracking-[0.3em] text-[#2D2D2D]">
                  ひまわり
                </span>
              </div>
            </a>
            <div className="hidden sm:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm tracking-wider text-[#555] hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:076-239-1872"
                className="btn-shine text-sm font-cinzel tracking-wider text-gold border border-gold-subtle px-4 py-2 hover:bg-gold hover:text-white transition-all duration-300"
              >
                TEL 076-239-1872
              </a>
            </div>
            {/* Mobile tel link */}
            <a
              href="tel:076-239-1872"
              className="sm:hidden text-xs font-cinzel tracking-wider text-gold border border-gold-subtle px-3 py-1.5"
            >
              TEL
            </a>
          </div>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
        {/* Gold particles background */}
        <GoldParticles />

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-crimson" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <p className="font-cinzel text-xs sm:text-sm tracking-[0.4em] text-gold mb-4 sm:mb-6 animate-fade-in-up">
                BALLROOM DANCE COSTUME
              </p>
              <HeroText />
              <div className="section-divider mb-6 sm:mb-8 lg:mx-0 lg:ml-0 animate-fade-in-up" style={{ animationDelay: "1.2s", opacity: 0 }} />
              <p className="text-sm sm:text-base leading-loose text-[#555] max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "1.5s", opacity: 0 }}>
                とにかくダンスが大好きで、このお店をはじめました。
                <br className="hidden sm:block" />
                初心者から競技ダンサーまで楽しく選べる衣装を取り揃えています！
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "1.8s", opacity: 0 }}>
                <a
                  href="#levels"
                  className="btn-shine inline-block px-8 py-3 bg-gold text-white text-sm tracking-widest hover:bg-gold-dark transition-colors duration-300"
                >
                  衣装を見る
                </a>
                <a
                  href="#access"
                  className="btn-shine inline-block px-8 py-3 border border-gold-subtle text-gold text-sm tracking-widest hover:bg-gold hover:text-white transition-all duration-300"
                >
                  店舗案内
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
              <div className="animate-float relative w-48 h-60 sm:w-64 sm:h-80 lg:w-72 lg:h-[360px] bg-gray-200 rounded-sm flex items-center justify-center">
                <span className="text-gray-400 text-xs">写真</span>
                <span className="sr-only" role="img" aria-label="メインビジュアル：社交ダンスドレス">メインビジュアル</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3-Level Introduction ===== */}
      <section id="levels" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <p className="font-cinzel text-xs sm:text-sm tracking-[0.4em] text-gold mb-3">
                COLLECTION
              </p>
              <h2 className="text-2xl sm:text-3xl font-light text-[#2D2D2D]">
                あなたのダンスに合わせて
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {LEVELS.map((level, i) => (
              <ScrollReveal key={level.titleEn} delay={i * 150}>
                <div className="level-card border-gold-subtle rounded-sm p-6 sm:p-8 text-center bg-[#FFFDF7]">
                  <div className="w-28 h-40 sm:w-32 sm:h-44 mx-auto mb-6 bg-gray-200 rounded-sm flex items-center justify-center">
                    <span className="text-gray-400 text-xs">写真</span>
                    <span className="sr-only" role="img" aria-label={`${level.titleJa}向け衣装イメージ`}>{level.titleJa}</span>
                  </div>
                  <p className="font-cinzel text-xs tracking-[0.3em] text-gold mb-2">
                    {level.titleEn}
                  </p>
                  <h3 className="text-lg sm:text-xl mb-4 text-[#2D2D2D]">
                    {level.titleJa}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#666]">
                    {level.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Welcome Message ===== */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <HimawariLogo className="w-[400px] h-[400px]" />
          </div>
        </div>
        <ScrollReveal className="relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.4em] text-gold mb-6">
              MESSAGE
            </p>
            <div className="section-divider mb-8 sm:mb-10" />
            <blockquote className="text-base sm:text-lg lg:text-xl leading-loose sm:leading-loose text-[#444]">
              とにかくダンスが大好きで、このお店をはじめました。
              <br />
              初心者から競技ダンサーまで楽しく選べる衣装を取り揃えています！
              <br />
              お手頃価格のダンス衣装から華やかな高級ドレスまで
              <br />
              あなたにぴったりの一着を。
              <br />
              初心者の方も安心してお選びいただけるダンス衣装のお店です。
              <br />
              どうぞお気軽にお立ち寄りください。
            </blockquote>
            <div className="section-divider mt-8 sm:mt-10" />
            <p className="mt-6 text-sm text-gold tracking-wider">
              ブティック ひまわり　オーナー
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== Shop Info & Map ===== */}
      <section id="access" className="py-16 sm:py-24 bg-[#FFFDF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <p className="font-cinzel text-xs sm:text-sm tracking-[0.4em] text-gold mb-3">
                ACCESS
              </p>
              <h2 className="text-2xl sm:text-3xl font-light text-[#2D2D2D]">
                店舗情報
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal>
              <div className="border-gold-subtle rounded-sm p-6 sm:p-8 bg-white">
                <table className="w-full text-sm sm:text-base">
                  <tbody>
                    <tr className="border-b border-gold-subtle">
                      <th className="py-4 pr-4 text-left text-gold font-normal tracking-wider whitespace-nowrap w-24 sm:w-28">
                        店名
                      </th>
                      <td className="py-4 text-[#2D2D2D]">ブティック ひまわり</td>
                    </tr>
                    <tr className="border-b border-gold-subtle">
                      <th className="py-4 pr-4 text-left text-gold font-normal tracking-wider whitespace-nowrap">
                        住所
                      </th>
                      <td className="py-4 text-[#2D2D2D]">
                        〒920-0272
                        <br />
                        石川県河北郡内灘町向陽台一丁目219
                      </td>
                    </tr>
                    <tr className="border-b border-gold-subtle">
                      <th className="py-4 pr-4 text-left text-gold font-normal tracking-wider whitespace-nowrap">
                        TEL
                      </th>
                      <td className="py-4">
                        <a
                          href="tel:076-239-1872"
                          className="text-[#2D2D2D] hover:text-gold transition-colors duration-300 underline underline-offset-4 decoration-gold/30 hover:decoration-gold"
                        >
                          076-239-1872
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-gold-subtle">
                      <th className="py-4 pr-4 text-left text-gold font-normal tracking-wider whitespace-nowrap">
                        営業時間
                      </th>
                      <td className="py-4 text-[#2D2D2D]">11:00〜16:00</td>
                    </tr>
                    <tr>
                      <th className="py-4 pr-4 text-left text-gold font-normal tracking-wider whitespace-nowrap">
                        定休日
                      </th>
                      <td className="py-4 text-[#2D2D2D]">木曜・土曜・日曜</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border-gold-subtle rounded-sm overflow-hidden bg-white">
                <iframe
                  src="https://www.google.com/maps?q=石川県河北郡内灘町向陽台一丁目219&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="ブティックひまわり 地図"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#1A1A1A] text-white/70 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="group flex items-center gap-3">
              <HimawariLogo className="w-8 h-8" spin />
              <div>
                <span className="font-cinzel text-sm tracking-widest text-gold">
                  BOUTIQUE
                </span>
                <span className="block text-xs tracking-[0.3em] text-white/50">
                  ひまわり
                </span>
              </div>
            </div>
            <div className="text-center sm:text-right text-xs sm:text-sm leading-relaxed">
              <p>〒920-0272 石川県河北郡内灘町向陽台一丁目219</p>
              <p className="mt-1">
                TEL{" "}
                <a href="tel:076-239-1872" className="hover:text-gold transition-colors duration-300">
                  076-239-1872
                </a>
                　｜　営業時間 11:00〜16:00　｜　定休日 木・土・日
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="font-cinzel text-xs tracking-widest text-white/30">
              &copy; BOUTIQUE HIMAWARI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
