import { CheckCircle2, User, Shield, CreditCard } from "lucide-react";
const imgImage4 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";

export default function PedroOnboarding() {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <div className="flex items-center gap-4">
        <img src={imgImage4} alt="Pedro Barrio" className="size-24 rounded-full object-cover" />
        <div>
          <h1 className="font-[Sofia_Pro,sans-serif] font-semibold text-[24px] text-[#133b34]">
            Welcome, Pedro!
          </h1>
          <p className="font-[Sofia_Pro,sans-serif] text-[14px] text-[#133b34]">
            New Member • Self Only
          </p>
        </div>
      </div>

      <div className="bg-[#f0f5e8] rounded-lg p-4">
        <h2 className="font-[Sofia_Pro,sans-serif] font-semibold text-[18px] text-[#133b34] mb-3">
          Your Onboarding Journey
        </h2>
        <div className="space-y-4">
          <OnboardingStep
            icon={<CheckCircle2 className="size-5" />}
            title="Account Setup"
            description="Complete your personal information"
            status="completed"
          />
          <OnboardingStep
            icon={<User className="size-5" />}
            title="Health Assessment"
            description="Answer a few questions about your health"
            status="current"
          />
          <OnboardingStep
            icon={<Shield className="size-5" />}
            title="Choose Coverage"
            description="Select the right individual plan for you"
            status="upcoming"
          />
          <OnboardingStep
            icon={<CreditCard className="size-5" />}
            title="Payment Setup"
            description="Set up your payment method"
            status="upcoming"
          />
        </div>
      </div>

      <div className="bg-white border-2 border-[#133b34] rounded-lg p-4">
        <h3 className="font-[Sofia_Pro,sans-serif] font-semibold text-[16px] text-[#133b34] mb-2">
          Individual Coverage
        </h3>
        <p className="font-[Sofia_Pro,sans-serif] text-[14px] text-[#133b34]">
          As a new member with individual coverage, we'll guide you through selecting a plan that's tailored to your personal healthcare needs.
        </p>
      </div>

      <button className="bg-[#133b34] text-white font-[Sofia_Pro,sans-serif] font-semibold text-[16px] py-3 rounded-lg hover:bg-[#0d2b25] transition-colors">
        Continue Onboarding
      </button>
    </div>
  );
}

type OnboardingStepProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
};

function OnboardingStep({ icon, title, description, status }: OnboardingStepProps) {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "current":
        return "text-[#133b34]";
      case "upcoming":
        return "text-gray-400";
    }
  };

  return (
    <div className="flex items-start gap-3">
      <div className={`${getStatusColor()} mt-0.5`}>{icon}</div>
      <div className="flex-1">
        <h4 className={`font-[Sofia_Pro,sans-serif] font-semibold text-[14px] ${getStatusColor()}`}>
          {title}
        </h4>
        <p className="font-[Sofia_Pro,sans-serif] text-[12px] text-[#133b34]">
          {description}
        </p>
      </div>
      {status === "completed" && (
        <CheckCircle2 className="size-5 text-green-600" />
      )}
    </div>
  );
}
