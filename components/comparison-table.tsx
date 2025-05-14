"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Check, X, Info, ChevronDown, ChevronUp, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Define the tool type
type Tool = {
  id: number
  name: string
  category: string
  pricing: "Free" | "Freemium" | "Paid" | "Subscription"
  offline: boolean
  batteryImpact: "Low" | "Medium" | "High"
  privacy: 1 | 2 | 3 | 4 | 5 // 1-5 rating
}

// Sample data for the comparison table
const toolsData: Tool[] = [
  {
    id: 1,
    name: "VoiceGenius AI",
    category: "Voice Assistants",
    pricing: "Freemium",
    offline: true,
    batteryImpact: "Low",
    privacy: 4,
  },
  {
    id: 2,
    name: "PhotoMind",
    category: "Photo & Video Editors",
    pricing: "Freemium",
    offline: false,
    batteryImpact: "High",
    privacy: 3,
  },
  {
    id: 3,
    name: "SmartWrite AI",
    category: "Writing & Communication",
    pricing: "Subscription",
    offline: true,
    batteryImpact: "Low",
    privacy: 5,
  },
  {
    id: 4,
    name: "MindfulAI",
    category: "Mental Health & Wellness",
    pricing: "Freemium",
    offline: true,
    batteryImpact: "Low",
    privacy: 5,
  },
  {
    id: 5,
    name: "LinguaLearn AI",
    category: "Language Learning",
    pricing: "Subscription",
    offline: true,
    batteryImpact: "Medium",
    privacy: 4,
  },
  {
    id: 6,
    name: "ProductivityBot",
    category: "Productivity & Organization",
    pricing: "Subscription",
    offline: false,
    batteryImpact: "High",
    privacy: 3,
  },
  {
    id: 7,
    name: "FinanceAI",
    category: "Finance & Budgeting",
    pricing: "Freemium",
    offline: false,
    batteryImpact: "Low",
    privacy: 5,
  },
  {
    id: 8,
    name: "HealthCoach AI",
    category: "Health & Fitness",
    pricing: "Subscription",
    offline: true,
    batteryImpact: "Medium",
    privacy: 4,
  },
  {
    id: 9,
    name: "SleepSense",
    category: "Health & Fitness",
    pricing: "Freemium",
    offline: true,
    batteryImpact: "Low",
    privacy: 5,
  },
  {
    id: 10,
    name: "CreativeStudio AI",
    category: "Creative & Entertainment",
    pricing: "Paid",
    offline: false,
    batteryImpact: "High",
    privacy: 3,
  },
  {
    id: 11,
    name: "StudyBuddy AI",
    category: "Education & Learning",
    pricing: "Freemium",
    offline: true,
    batteryImpact: "Low",
    privacy: 4,
  },
  {
    id: 12,
    name: "TravelTranslate",
    category: "Language Learning",
    pricing: "Freemium",
    offline: true,
    batteryImpact: "Medium",
    privacy: 4,
  },
  {
    id: 13,
    name: "NewsDigest AI",
    category: "Productivity & Organization",
    pricing: "Free",
    offline: false,
    batteryImpact: "Low",
    privacy: 3,
  },
  {
    id: 14,
    name: "WeatherPredict",
    category: "Productivity & Organization",
    pricing: "Free",
    offline: false,
    batteryImpact: "Low",
    privacy: 4,
  },
  {
    id: 15,
    name: "MusicComposer",
    category: "Creative & Entertainment",
    pricing: "Subscription",
    offline: false,
    batteryImpact: "Medium",
    privacy: 3,
  },
]

// Privacy rating component
function PrivacyRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className={`w-2 h-6 mx-0.5 rounded-sm ${star <= rating ? "bg-green-500" : "bg-gray-200"}`} />
      ))}
    </div>
  )
}

export default function ComparisonTable() {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Tool | null
    direction: "ascending" | "descending"
  }>({
    key: null,
    direction: "ascending",
  })

  const [filters, setFilters] = useState({
    pricing: [] as string[],
    offline: null as boolean | null,
    batteryImpact: [] as string[],
  })

  // Sort function
  const sortedTools = [...toolsData].sort((a, b) => {
    if (!sortConfig.key) return 0

    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1
    }
    return 0
  })

  // Filter function
  const filteredTools = sortedTools.filter((tool) => {
    // Filter by pricing
    if (filters.pricing.length > 0 && !filters.pricing.includes(tool.pricing)) {
      return false
    }

    // Filter by offline capability
    if (filters.offline !== null && tool.offline !== filters.offline) {
      return false
    }

    // Filter by battery impact
    if (filters.batteryImpact.length > 0 && !filters.batteryImpact.includes(tool.batteryImpact)) {
      return false
    }

    return true
  })

  // Request sort
  const requestSort = (key: keyof Tool) => {
    let direction: "ascending" | "descending" = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  // Get sort direction indicator
  const getSortDirectionIndicator = (key: keyof Tool) => {
    if (sortConfig.key !== key) {
      return null
    }
    return sortConfig.direction === "ascending" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    )
  }

  return (
    <section id="comparison" className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">AI Tools Comparison</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Compare the top AI tools across key features to find the perfect match for your needs
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-lg font-medium flex items-center">
            <Info className="w-5 h-5 mr-2 text-blue-500" />
            Showing {filteredTools.length} of {toolsData.length} tools
          </h3>

          <div className="flex flex-wrap gap-2">
            {/* Pricing Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Pricing
                  {filters.pricing.length > 0 && (
                    <span className="ml-1 w-5 h-5 rounded-full bg-purple-100 text-purple-600 text-xs flex items-center justify-center">
                      {filters.pricing.length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {["Free", "Freemium", "Paid", "Subscription"].map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option}
                    checked={filters.pricing.includes(option)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setFilters({ ...filters, pricing: [...filters.pricing, option] })
                      } else {
                        setFilters({ ...filters, pricing: filters.pricing.filter((item) => item !== option) })
                      }
                    }}
                  >
                    {option}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Offline Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Offline
                  {filters.offline !== null && (
                    <span className="ml-1 w-5 h-5 rounded-full bg-purple-100 text-purple-600 text-xs flex items-center justify-center">
                      1
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem
                  checked={filters.offline === true}
                  onCheckedChange={(checked) => {
                    setFilters({ ...filters, offline: checked ? true : null })
                  }}
                >
                  Works Offline
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.offline === false}
                  onCheckedChange={(checked) => {
                    setFilters({ ...filters, offline: checked ? false : null })
                  }}
                >
                  Requires Internet
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Battery Impact Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Battery Impact
                  {filters.batteryImpact.length > 0 && (
                    <span className="ml-1 w-5 h-5 rounded-full bg-purple-100 text-purple-600 text-xs flex items-center justify-center">
                      {filters.batteryImpact.length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {["Low", "Medium", "High"].map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option}
                    checked={filters.batteryImpact.includes(option)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setFilters({ ...filters, batteryImpact: [...filters.batteryImpact, option] })
                      } else {
                        setFilters({
                          ...filters,
                          batteryImpact: filters.batteryImpact.filter((item) => item !== option),
                        })
                      }
                    }}
                  >
                    {option}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Reset Filters */}
            {(filters.pricing.length > 0 || filters.offline !== null || filters.batteryImpact.length > 0) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFilters({ pricing: [], offline: null, batteryImpact: [] })}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                Reset Filters
              </Button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">
                  <Button variant="ghost" onClick={() => requestSort("name")} className="font-bold flex items-center">
                    Tool Name {getSortDirectionIndicator("name")}
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => requestSort("category")}
                    className="font-bold flex items-center"
                  >
                    Category {getSortDirectionIndicator("category")}
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => requestSort("pricing")}
                    className="font-bold flex items-center"
                  >
                    Pricing {getSortDirectionIndicator("pricing")}
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => requestSort("offline")}
                    className="font-bold flex items-center"
                  >
                    Offline {getSortDirectionIndicator("offline")}
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => requestSort("batteryImpact")}
                    className="font-bold flex items-center"
                  >
                    Battery Impact {getSortDirectionIndicator("batteryImpact")}
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => requestSort("privacy")}
                    className="font-bold flex items-center"
                  >
                    Privacy {getSortDirectionIndicator("privacy")}
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTools.map((tool) => (
                <TableRow key={tool.id}>
                  <TableCell className="font-medium">{tool.name}</TableCell>
                  <TableCell>{tool.category}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tool.pricing === "Free"
                          ? "bg-green-100 text-green-800"
                          : tool.pricing === "Freemium"
                            ? "bg-blue-100 text-blue-800"
                            : tool.pricing === "Paid"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {tool.pricing}
                    </span>
                  </TableCell>
                  <TableCell>
                    {tool.offline ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tool.batteryImpact === "Low"
                          ? "bg-green-100 text-green-800"
                          : tool.batteryImpact === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {tool.batteryImpact}
                    </span>
                  </TableCell>
                  <TableCell>
                    <PrivacyRating rating={tool.privacy} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
