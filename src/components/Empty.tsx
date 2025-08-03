import { cn } from "@/lib/utils";

// Empty state component with customizable message
interface EmptyProps {
  message?: string;
  icon?: string;
  className?: string;
}

export function Empty({ 
  message = "No data available", 
  icon = "fa-regular fa-folder-open",
  className = ""
}: EmptyProps) {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center py-16 text-center",
      className
    )}>
      <div className="text-gray-400 text-6xl mb-4">
        <i class={icon}></i>
      </div>
      <h3 className="text-xl font-medium text-gray-700 mb-2">Nothing here</h3>
      <p className="text-gray-500 max-w-md">{message}</p>
    </div>
  );
}