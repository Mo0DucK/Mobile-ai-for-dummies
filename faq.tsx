import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is AI on Android?",
    answer:
      "AI (Artificial Intelligence) on Android refers to applications and features that use machine learning algorithms to perform tasks that typically require human intelligence. These include voice recognition, image processing, natural language understanding, and predictive text. Android AI tools leverage your device's processing power and, in some cases, cloud computing to deliver smart, adaptive experiences.",
  },
  {
    question: "Are these AI tools safe to use?",
    answer:
      "Most AI tools from reputable developers are safe to use, but it's important to download apps only from official sources like the Google Play Store. Check app permissions before installing and read privacy policies to understand how your data is used. Look for apps that process data locally on your device when possible, and be cautious about tools that require excessive permissions unrelated to their core functionality.",
  },
  {
    question: "Do AI tools drain battery life?",
    answer:
      "AI processing can be resource-intensive and may impact battery life, especially for tools that run continuously in the background or perform complex calculations. However, many modern AI tools are optimized to minimize battery usage, and some even operate primarily when your device is charging. Look for apps with battery optimization features and consider using AI tools selectively if battery life is a concern.",
  },
  {
    question: "Which AI tools work offline?",
    answer:
      "Many AI tools require an internet connection for full functionality, but an increasing number offer offline capabilities. Voice assistants like Google Assistant can perform basic commands offline, while some photo editors, language translators, and productivity tools can work without an internet connection once their models are downloaded. Check the app descriptions for offline functionality if this is important to you.",
  },
  {
    question: "How much do these AI tools cost?",
    answer:
      "AI tools for Android range from completely free to premium subscription-based models. Many follow a freemium approach, offering basic features for free with advanced capabilities requiring payment. Subscription prices typically range from $2.99 to $19.99 per month, with annual plans offering discounts. Some tools also offer one-time purchases for permanent access to premium features.",
  },
  {
    question: "Which Android versions support these AI tools?",
    answer:
      "Most current AI tools require Android 8.0 (Oreo) or newer, with the most advanced features often requiring Android 10 or higher. Some cutting-edge AI applications may require the latest versions (Android 12+) to access advanced APIs and system features. Always check the compatibility information in the app listing before downloading. For older devices, look for 'lite' versions of apps that may offer reduced functionality but better compatibility.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get answers to common questions about AI tools for Android
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-gray-900">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
