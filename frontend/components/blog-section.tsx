"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    date: "09 Mar 2025",
    title: "𝐌𝐚𝐤𝐢𝐧𝐠 𝐚 𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐜𝐞, 𝐎𝐧𝐞 𝐒𝐦𝐢𝐥𝐞 𝐚𝐭 𝐚 𝐓𝐢𝐦𝐞!",
    excerpt:
      "We're excited to share the heart-warming journey of Harbour of Smiles' recent CSR initiative at Ibulgolla Primary...",
    category: "CSR",
  },
  {
    date: "22 Aug 2024",
    title: "Greek Lanka offers comprehensive Dry Docking support for the vessels calling at Colombo Dockyard PLC",
    excerpt: "Comprehensive dry docking services and technical support for maritime vessels.",
    category: "Services",
  },
  {
    date: "22 Aug 2024",
    title:
      "Discover the Splendor of Sri Lanka's Seas: Unleashing Our Maritime Services across All Four Majestic Ports!",
    excerpt: "Exploring our comprehensive maritime services across Colombo, Galle, Hambantota, and Trincomalee ports.",
    category: "Ports",
  },
  {
    date: "22 Aug 2024",
    title: "We guarantee the best solution for your ship's spare logistics.",
    excerpt: "Professional ship spares logistics and supply chain management solutions.",
    category: "Logistics",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-maritime-navy mb-6">Latest News & Updates</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest developments in maritime services and industry insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-maritime-blue/10 text-maritime-blue">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="font-semibold text-maritime-navy line-clamp-2 group-hover:text-maritime-blue transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto text-maritime-blue hover:text-maritime-blue/80"
                  >
                    Continue reading
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
