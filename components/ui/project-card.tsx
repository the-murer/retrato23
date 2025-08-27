import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/stories/card"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  tags?: string[]
  link?: string
  category?: string
  year?: number
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  tags = [],
  link,
  category,
  year
}: ProjectCardProps) {
  const cardContent = (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {(category || year) && (
          <div className="absolute top-3 left-3 flex gap-2">
            {category && (
              <span className="bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 rounded text-xs font-medium">
                {category}
              </span>
            )}
            {year && (
              <span className="bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 rounded text-xs font-medium">
                {year}
              </span>
            )}
          </div>
        )}
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      {tags.length > 0 && (
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    )
  }

  return cardContent
} 