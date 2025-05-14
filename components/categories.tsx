import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mic, ImageIcon, PenTool, Brain, Languages, Calendar, LineChart, Heart, Music, BookOpen } from "lucide-react"

const categories = [
  {
    id: "voice-assistants",
    title: "Voice Assistants",
    description: "AI-powered voice recognition tools that understand natural language and perform tasks.",
    icon: Mic,
    color: "bg-blue-500",
  },
  {
    id: "photo-editors",
    title: "Photo & Video Editors",
    description: "Transform your media with AI-powered enhancements, filters, and creative tools.",
    icon: ImageIcon,
    color: "bg-pink-500",
  },
  {
    id: "writing-tools",
    title: "Writing & Communication",
    description: "Improve your writing with AI suggestions, grammar correction, and style enhancement.",
    icon: PenTool,
    color: "bg-purple-500",
  },
  {
    id: "productivity",
    title: "Productivity & Organization",
    description: "Automate tasks, manage time, and optimize your workflow with AI assistance.",
    icon: Calendar,
    color: "bg-green-500",
  },
  {
    id: "language-learning",
    title: "Language Learning",
    description: "Master new languages with personalized AI tutors and adaptive learning paths.",
    icon: Languages,
    color: "bg-yellow-500",
  },
  {
    id: "mental-health",
    title: "Mental Health & Wellness",
    description: "AI companions for meditation, mood tracking, and personalized mental wellness.",
    icon: Brain,
    color: "bg-teal-500",
  },
  {
    id: "finance",
    title: "Finance & Budgeting",
    description: "Smart financial assistants for expense tracking, budgeting, and investment insights.",
    icon: LineChart,
    color: "bg-emerald-500",
  },
  {
    id: "health-fitness",
    title: "Health & Fitness",
    description: "Personalized workout plans, nutrition advice, and health monitoring with AI.",
    icon: Heart,
    color: "bg-red-500",
  },
  {
    id: "creative-tools",
    title: "Creative & Entertainment",
    description: "AI-powered music composition, art generation, and creative content tools.",
    icon: Music,
    color: "bg-indigo-500",
  },
  {
    id: "education",
    title: "Education & Learning",
    description: "Smart study assistants, personalized tutoring, and knowledge enhancement tools.",
    icon: BookOpen,
    color: "bg-orange-500",
  },
]

export default function Categories() {
  return (
    <section id="categories" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">AI Tool Categories</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore AI tools by category to find the perfect applications for your specific needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon

          return (
            <Card key={category.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{category.description}</CardDescription>
                <Button asChild variant="outline" className="w-full border-gray-300 hover:bg-gray-50 text-gray-700">
                  <Link href={`#${category.id}`}>View Tools</Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
