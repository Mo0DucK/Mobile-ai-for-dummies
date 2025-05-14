import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Download, Check, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredTools = [
  {
    id: 1,
    name: "VoiceGenius AI",
    icon: "/placeholder.svg?height=512&width=512",
    rating: 5,
    features: [
      "Advanced voice recognition with 99% accuracy",
      "Contextual understanding of complex commands",
      "Supports 45+ languages with real-time translation",
    ],
    pros: ["Works offline", "Low battery impact", "Seamless app integration"],
    cons: ["Premium features require subscription", "Occasional lag on older devices"],
    downloadUrl: "https://play.google.com/store/apps",
  },
  {
    id: 2,
    name: "PhotoMind",
    icon: "/placeholder.svg?height=512&width=512",
    rating: 4.5,
    features: [
      "One-tap professional photo enhancement",
      "Smart object removal and background replacement",
      "Artistic style transfer with 50+ presets",
    ],
    pros: ["Intuitive interface", "Fast processing", "Regular updates"],
    cons: ["High storage requirements", "Limited free version"],
    downloadUrl: "https://play.google.com/store/apps",
  },
  {
    id: 3,
    name: "SmartWrite AI",
    icon: "/placeholder.svg?height=512&width=512",
    rating: 4.5,
    features: [
      "Context-aware text prediction and completion",
      "Grammar and style enhancement",
      "Multi-language support with tone adjustment",
    ],
    pros: ["Keyboard integration", "Privacy-focused", "Customizable suggestions"],
    cons: ["Learning curve for advanced features", "Subscription required for all languages"],
    downloadUrl: "https://play.google.com/store/apps",
  },
  // Adding more tools to reach 10 as specified in the prompt
  {
    id: 4,
    name: "MindfulAI",
    icon: "/placeholder.svg?height=512&width=512",
    rating: 5,
    features: [
      "Personalized meditation and mindfulness exercises",
      "Mood tracking with AI-powered insights",
      "Adaptive stress reduction techniques",
    ],
    pros: ["Science-based approach", "Beautiful interface", "Offline sessions"],
    cons: ["Limited free content", "Requires consistent use for best results"],
    downloadUrl: "https://play.google.com/store/apps",
  },
  {
    id: 5,
    name: "LinguaLearn AI",
    icon: "/placeholder.svg?height=512&width=512",
    rating: 4.5,
    features: [
      "Adaptive language learning paths",
      "Real-time pronunciation feedback",
      "Immersive conversation practice with AI",
    ],
    pros: ["Personalized curriculum", "Engaging exercises", "Cultural context included"],
    cons: ["Advanced levels require premium", "Heavy data usage for voice features"],
    downloadUrl: "https://play.google.com/store/apps",
  },
  {
    id: 6,
    name: "ProductivityBot",
    icon: "/placeholder.svg?height=512&width=512",
    rating: 4,
    features: [
      "Smart task prioritization and scheduling",
      "Automated email categorization and responses",
      "Cross-app workflow optimization",
    ],
    pros: ["Seamless calendar integration", "Intuitive suggestions", "Time-saving automations"],
    cons: ["Requires permissions to multiple apps", "Battery intensive"],
    downloadUrl: "https://play.google.com/store/apps",
  },
  {
    id: 7,
    name: "FinanceAI",
    icon: "/placeholder.svg?height=512&width=512",
    rating: 4.5,
    features: [
      "Expense tracking with receipt scanning",
      "Personalized budget recommendations",
      "Investment insights and portfolio analysis",
    ],
    pros: ["Bank-level security", "Comprehensive reports", "Goal tracking"],
    cons: ["Premium required for investment features", "Limited free transaction history"],
    downloadUrl: "https://play.google.com/store/apps",
  },
  {
    id: 8,
    name: "HealthCoach AI",
    icon: "/placeholder.svg?height=512&width=512",
    rating: 5,
    features: [
      "Personalized workout and nutrition plans",
      "Real-time form correction via camera",
      "Health metrics tracking and analysis",
    ],
    pros: ["No equipment needed for workouts", "Adapts to your progress", "Comprehensive health dashboard"],
    cons: ["Camera features drain battery", "Premium tier for specialized plans"],
    downloadUrl: "https://play.google.com/store/apps",
  },
  {
    id: 9,
    name: "SleepSense",
    icon: "/placeholder.svg?height=512&width=512",
    rating: 4.5,
    features: [
      "Sleep cycle analysis and smart alarm",
      "Ambient sound generation based on sleep state",
      "Personalized sleep improvement recommendations",
    ],
    pros: ["Non-invasive tracking", "Detailed sleep insights", "Battery efficient"],
    cons: ["Requires phone placement near bed", "Some features need wearable integration"],
    downloadUrl: "https://play.google.com/store/apps",
  },
  {
    id: 10,
    name: "CreativeStudio AI",
    icon: "/placeholder.svg?height=512&width=512",
    rating: 4,
    features: [
      "AI-powered music composition and editing",
      "Text-to-image generation with styles",
      "Video enhancement and creative filters",
    ],
    pros: ["All-in-one creative suite", "High-quality outputs", "Regular new features"],
    cons: ["High processing requirements", "Large app size", "Export limitations in free version"],
    downloadUrl: "https://play.google.com/store/apps",
  },
]

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "text-yellow-500 fill-yellow-500"
              : star - 0.5 <= rating
                ? "text-yellow-500 fill-yellow-500 opacity-50"
                : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-gray-700 font-medium">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function FeaturedTools() {
  return (
    <section id="featured-tools" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured AI Tools</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our experts have tested hundreds of apps to bring you the absolute best AI tools available for Android
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredTools.map((tool) => (
          <Card key={tool.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src={tool.icon || "/placeholder.svg"}
                    alt={`${tool.name} icon`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <RatingStars rating={tool.rating} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
              <ul className="space-y-1 mb-4">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Pros:</h4>
                  <ul className="space-y-1">
                    {tool.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Cons:</h4>
                  <ul className="space-y-1">
                    {tool.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <X className="w-4 h-4 text-red-500 mr-1 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                <Link
                  href={tool.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button asChild variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
          <Link href="#all-tools">View All 50 AI Tools</Link>
        </Button>
      </div>
    </section>
  )
}
