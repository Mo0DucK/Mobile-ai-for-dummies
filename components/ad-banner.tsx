import { cn } from "@/lib/utils"

interface AdBannerProps {
  position: "below-hero" | "mid-content" | "before-footer" | "sidebar"
  className?: string
}

export default function AdBanner({ position, className }: AdBannerProps) {
  // Different sizes based on position
  const getAdSize = () => {
    switch (position) {
      case "below-hero":
        return "h-[90px] md:h-[120px]"
      case "mid-content":
        return "h-[250px]"
      case "before-footer":
        return "h-[90px] md:h-[120px]"
      case "sidebar":
        return "h-[600px] w-[300px]"
      default:
        return "h-[90px]"
    }
  }

  return (
    <div
      className={cn(
        "w-full bg-gray-100 rounded-md flex items-center justify-center border border-dashed border-gray-300",
        getAdSize(),
        className,
      )}
    >
      <p className="text-gray-500 text-sm">AdSense Banner ({position})</p>
    </div>
  )
}
