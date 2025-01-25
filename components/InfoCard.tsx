import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

interface InfoCardProps {
  title: string
  description?: string
  content: React.ReactNode
  imageSrc?: string
  imageAlt?: string
  tags?: string[]
  githubLink?: string
  externalLink?: string
  externalLinkText?: string
}

export function InfoCard({
  title,
  description,
  content,
  imageSrc,
  imageAlt,
  tags,
  githubLink,
  externalLink,
  externalLinkText,
}: InfoCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-grow-0">
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <CardDescription className="text-sm">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        {imageSrc && (
          <div className="mb-2 aspect-video relative overflow-hidden rounded-lg">
            <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt || title} layout="fill" objectFit="cover" />
          </div>
        )}
        <div className="text-sm mb-2">{content}</div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto mb-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {(githubLink || externalLink) && (
          <div className="flex space-x-2 mt-auto">
            {githubLink && (
              <Button variant="outline" size="sm" asChild className="text-xs">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3 mr-1" />
                  GitHub
                </a>
              </Button>
            )}
            {externalLink && (
              <Button variant="outline" size="sm" asChild className="text-xs">
                <a href={externalLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  {externalLinkText || "View"}
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

