import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../common/card"

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
    <Card className="group h-full overflow-hidden border-border/70 transition-[translate,box-shadow] duration-500 ease-craft hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-craft group-hover:scale-[1.04]"
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
        <CardTitle className="font-display text-2xl font-medium text-foreground">
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
    const external = /^https?:\/\//.test(link)
    return (
      <a
        href={link}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block h-full"
      >
        {cardContent}
      </a>
    )
  }

  return cardContent
} 