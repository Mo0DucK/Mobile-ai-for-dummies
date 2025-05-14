import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Shield, Battery, Zap, HelpCircle } from "lucide-react"

const guideItems = [
  {
    title: "Device Compatibility",
    content:
      "Check the minimum Android version required and ensure your device meets the hardware requirements. Newer AI tools may require more recent Android versions and powerful processors.",
    icon: Smartphone,
  },
  {
    title: "Privacy Considerations",
    content:
      "Review the app's privacy policy and permissions. Look for tools that process data locally when possible, and be cautious about apps that require excessive permissions or send data to external servers.",
    icon: Shield,
  },
  {
    title: "Battery Impact",
    content:
      "AI processing can be resource-intensive. Test how the app affects your battery life and consider tools that offer offline processing or battery optimization features.",
    icon: Battery,
  },
  {
    title: "Performance Optimization",
    content:
      "For the best experience, close background apps when using intensive AI tools. Consider using lightweight versions of apps if available for older devices.",
    icon: Zap,
  },
]

export default function SelectionGuide() {
  return (
    <section id="selection-guide" className="py-12 bg-gradient-to-br from-purple-50 to-indigo-50 -mx-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">AI Tool Selection Guide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How to choose the right AI tools for your specific needs and device
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guideItems.map((item, index) => {
            const IconComponent = item.icon

            return (
              <Card key={index} className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.content}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-amber-100 text-amber-600 mt-1">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Pro Tip: Test Before Committing</h3>
              <p className="text-gray-600">
                Most premium AI tools offer free trials or freemium versions. Take advantage of these to test the app's
                performance on your specific device before purchasing a subscription. Pay attention to how the app
                handles your data, affects battery life, and whether it works offline when needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
