import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col items-center text-center gap-2 mb-12', className)} {...props}>
      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">{subtitle}</p>}
    </div>
  );
}
