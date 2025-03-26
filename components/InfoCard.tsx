import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface InfoCardProps {
  title: string;
  description?: string;
  content: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  tags?: string[];
  githubLink?: string;
  externalLink?: string;
  externalLinkText?: string;
  className?: string;
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
  className,
}: InfoCardProps) {
  return (
    <Card
      className={`h-full flex flex-col bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-blue-500/30 transition-all duration-300 ${
        className || ""
      }`}
    >
      <CardHeader className="flex-grow-0 pb-4">
        <CardTitle className="text-xl font-semibold text-white tracking-tight">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-sm text-gray-400 leading-relaxed">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col space-y-5">
        {imageSrc && (
          <div className="aspect-video relative overflow-hidden rounded-lg group">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt || title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        <div className="text-sm text-gray-300 leading-relaxed">
          {typeof content === "string"
            ? content.replace(/\bapi\b/gi, "API")
            : content}
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors duration-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {(githubLink || externalLink) && (
          <div className="flex space-x-3 pt-2">
            {githubLink && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="text-xs bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-200"
              >
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                >
                  <Github className="w-4 h-4 mr-1.5" />
                  GitHub
                </a>
              </Button>
            )}
            {externalLink && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="text-xs bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-200"
              >
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  {externalLinkText || "View"}
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
