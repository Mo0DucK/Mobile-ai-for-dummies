import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Brain, Accessibility, Smile, Briefcase } from "lucide-react"

const benefits = [
  {
    title: "Save Valuable Time",
    description:
      "AI tools automate repetitive tasks, streamline workflows, and provide instant solutions that would take hours to accomplish manually.",
    icon: Clock,
  },
  {
    title: "Enhance Learning & Skills",
    description:
      "Accelerate your learning with personalized AI tutors, language assistants, and skill-building applications tailored to your pace.",
    icon: Brain,
  },
  {
    title: "Improve Accessibility",
    description:
      "AI tools make technology more accessible through voice commands, text-to-speech, automated captions, and intuitive interfaces.",
    icon: Accessibility,
  },
  {
    title: "Boost Entertainment Value",
    description:
      "Discover new content, create art, compose music, and enjoy personalized entertainment experiences powered by artificial intelligence.",
    icon: Smile,
  },
  {
    title: "Elevate Professional Work",
    description:
      "Enhance your professional capabilities with AI-powered data analysis, content creation, customer service, and productivity tools.",
    icon: Briefcase,
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-12 bg-gray-50 -mx-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">How AI Tools Transform Your Android Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the tangible benefits that AI-powered applications bring to your daily mobile usage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon

            return (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
