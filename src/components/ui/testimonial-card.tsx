import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-2xl border border-zinc-800",
        "bg-zinc-900/50",
        "p-6",
        "hover:border-zinc-700",
        "w-[400px] sm:w-[480px] flex-shrink-0",
        "transition-all duration-300",
        className
      )}
    >
      <p className="text-sm sm:text-lg text-zinc-300 mb-6 leading-relaxed">
        {text}
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <Avatar className="h-12 w-12 border border-zinc-800">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold text-white leading-none">
            {author.name}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            {author.handle}
          </p>
        </div>
      </div>
    </Card>
  )
}

