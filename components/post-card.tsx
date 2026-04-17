"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { urlFor } from "@/lib/image" 
import { PortableText } from '@portabletext/react' // Renders the full body array

function formatDate(dateInput: string | undefined): string {
  if (!dateInput) return "Just now"
  const date = new Date(dateInput)
  if (isNaN(date.getTime())) return "Just now"

  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMins < 1) return "Just now"
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return date.toLocaleDateString()
}

export function PostCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden border-border bg-card">
      <CardContent className="pt-2 pb-2 px-3">
        {/* Title centered with reduced top padding */}
        {post.title && <h2 className="text-xl font-bold mb-2 text-center">{post.title}</h2>}
        
        {/* Full content rendering via PortableText */}
        {post.body && (
          <div className="text-foreground leading-relaxed">
            <PortableText value={post.body} />
          </div>
        )}
      </CardContent>

      {/* Render Image with Sanity optimization */}
      {post.mainImage && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title || "Post image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      <CardFooter className="flex items-center justify-center px-4 py-2">
        <span className="text-xs text-muted-foreground">
          {formatDate(post._createdAt || post.createdAt)}
        </span>
      </CardFooter>
    </Card>
  )
}