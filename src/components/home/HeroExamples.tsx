import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, Sparkles } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { cn } from "@/lib/utils";

interface HeroExampleProps {
  title: string;
  variant: "mesh" | "grid" | "orbs" | "animated" | "dots";
}

export function HeroExample({ title, variant }: HeroExampleProps) {
  return (
    <div className="relative">
      <h2 className="text-center text-sm font-medium text-muted-foreground mb-4">{title}</h2>
      <section className={cn(
        "relative text-foreground rounded-xl overflow-hidden",
        "py-12 px-4 border"
      )}>
        {/* Background Variants */}
        {variant === "mesh" && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        )}

        {variant === "grid" && (
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
          </div>
        )}

        {variant === "orbs" && (
          <div className="absolute inset-0 bg-background overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/30 rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-foreground/30 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        )}

        {variant === "animated" && (
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background animate-gradient">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.05)_25%,hsl(var(--primary)/0.05)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.05)_75%)] bg-[length:60px_60px] animate-[slide_20s_linear_infinite]" />
            </div>
          </div>
        )}

        {variant === "dots" && (
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, hsl(var(--primary)/0.15) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-brand/20 to-transparent blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-brand-foreground/20 to-transparent blur-2xl" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
          <Badge variant="outline" className="gap-2">
            <Sparkles className="h-3 w-3" />
            <span className="text-xs">New Design</span>
          </Badge>

          <h1 className="text-3xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Modern Hero Design
          </h1>

          <p className="text-sm text-muted-foreground max-w-md">
            Beautiful backgrounds that make your landing page stand out
          </p>

          <div className="flex gap-3 mt-2">
            <Button size="sm">
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function HeroExamplesShowcase() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Hero Background Examples</h1>
          <p className="text-muted-foreground">Choose your favorite modern background style</p>
        </div>

        <div className="grid gap-8">
          <HeroExample title="1. Mesh Gradient with Grid" variant="mesh" />
          <HeroExample title="2. Grid Pattern with Glow" variant="grid" />
          <HeroExample title="3. Radial Gradient Orbs" variant="orbs" />
          <HeroExample title="4. Animated Gradient" variant="animated" />
          <HeroExample title="5. Dot Pattern with Blur" variant="dots" />
        </div>
      </div>
    </div>
  );
}