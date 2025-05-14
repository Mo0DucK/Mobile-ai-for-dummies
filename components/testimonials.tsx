import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Graduate Student",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The AI language learning app completely transformed my study abroad experience. I was able to pick up conversational Spanish in just weeks, and the app even helped me understand local dialects that weren't covered in my university courses.",
    toolsUsed: ["LinguaLearn AI", "VoiceGenius AI"],
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Marketing Professional",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "As someone who creates content daily, the AI writing and image generation tools have cut my production time in half. I can now focus on strategy while the AI handles the creative heavy lifting. The quality is so good that my clients can't tell the difference!",
    toolsUsed: ["SmartWrite AI", "PhotoMind", "CreativeStudio AI"],
  },
  {
    id: 3,
    name: "Robert Miller",
    role: "Retiree",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "At 72, I was hesitant about new technology, but the voice assistant and health monitoring AI apps have made my life so much easier. I can check my vitals, remember medications, and stay connected with family all through simple voice commands.",
    toolsUsed: ["VoiceGenius AI", "HealthCoach AI"],
  },
  {
    id: 4,
    name: "Maya Patel",
    role: "Freelance Designer",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The AI design tools have been a game-changer for my small business. I can now offer services that would normally require a team of specialists. My clients are amazed by how quickly I can turn around complex projects with professional results.",
    toolsUsed: ["CreativeStudio AI", "PhotoMind"],
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Success Stories</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from real users about how AI tools have transformed their Android experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-100">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`${testimonial.name}'s avatar`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 italic border-l-4 border-purple-200 pl-4 py-1">
                "{testimonial.content}"
              </blockquote>
            </CardContent>

            <CardFooter className="border-t bg-gray-50 px-6 py-3">
              <div>
                <p className="text-sm text-gray-500 mb-1">Tools Used:</p>
                <div className="flex flex-wrap gap-2">
                  {testimonial.toolsUsed.map((tool, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
