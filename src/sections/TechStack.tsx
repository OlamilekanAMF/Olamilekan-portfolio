import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-4";

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

export default function TechStack() {
  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-sm font-medium tracking-widest text-lime uppercase">
            Trusted By & Partnered With
          </h2>
          <p className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Working with the best in the game
          </p>
        </div>
        
        <div className="relative">
          <div
            aria-hidden="true"
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none h-[300px] w-[600px] rounded-full",
              "bg-lime/5 blur-[80px]"
            )}
          />
          <LogoCloud logos={logos} />
        </div>
      </div>
    </section>
  );
}
