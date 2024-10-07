import { cn } from "@/lib/utils";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  return (
    <div className={cn("text-foreground", className)}>
      <p>{children}</p>
    </div>
  );
};

export default Subtitle;
