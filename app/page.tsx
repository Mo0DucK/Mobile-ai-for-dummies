import Hero from "@/components/hero"
import Introduction from "@/components/introduction"
import FeaturedTools from "@/components/featured-tools"
import Categories from "@/components/categories"
import Benefits from "@/components/benefits"
import ComparisonTable from "@/components/comparison-table"
import Testimonials from "@/components/testimonials"
import SelectionGuide from "@/components/selection-guide"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import AdBanner from "@/components/ad-banner"

export const metadata = {
  title: "Top 50 AI Tools for Android in 2025: Transform Your Mobile Experience",
  description:
    "Discover the 50 best AI tools for Android that are revolutionizing productivity, creativity, and daily life. From voice assistants to photo editors, these AI apps will transform how you use your smartphone.",
  keywords:
    "Best AI apps for Android, Android AI tools, Mobile AI applications, Artificial intelligence for smartphones, Voice assistant apps, AI productivity tools, AI photo editors, Android automation with AI, AI writing assistants for mobile, AI language learning apps, Mental health AI apps Android",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Introduction />
        <AdBanner position="below-hero" className="my-8" />
        <FeaturedTools />
        <Categories />
        <AdBanner position="mid-content" className="my-8" />
        <Benefits />
        <ComparisonTable />
        <Testimonials />
        <SelectionGuide />
        <FAQ />
        <AdBanner position="before-footer" className="my-8" />
        <Newsletter />
      </div>
    </main>
  )
}
