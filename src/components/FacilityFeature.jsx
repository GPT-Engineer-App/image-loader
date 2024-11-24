import { cn } from "@/lib/utils";

const FacilityFeature = ({ icon: Icon, title, description, className }) => {
  return (
    <div className={cn("flex flex-col items-center text-center p-4", className)}>
      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  );
};

export default FacilityFeature;