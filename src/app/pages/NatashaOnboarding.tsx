import { CheckCircle2, UserPlus, RefreshCw, Settings } from "lucide-react";
const imgImage7 = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face";

export default function NatashaOnboarding() {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <div className="flex items-center gap-4">
        <img src={imgImage7} alt="Natasha Carter" className="size-24 rounded-full object-cover" />
        <div>
          <h1 className="font-[Sofia_Pro,sans-serif] font-semibold text-[24px] text-[#133b34]">
            Welcome back, Natasha!
          </h1>
          <p className="font-[Sofia_Pro,sans-serif] text-[14px] text-[#133b34]">
            Existing Member • Self + One
          </p>
        </div>
      </div>

      <div className="bg-[#f0f5e8] rounded-lg p-4">
        <h2 className="font-[Sofia_Pro,sans-serif] font-semibold text-[18px] text-[#133b34] mb-3">
          Update Your Coverage
        </h2>
        <div className="space-y-4">
          <OnboardingStep
            icon={<CheckCircle2 className="size-5" />}
            title="Account Verification"
            description="Verify your existing account details"
            status="completed"
          />
          <OnboardingStep
            icon={<UserPlus className="size-5" />}
            title="Add Dependent"
            description="Add your partner to your coverage"
            status="current"
          />
          <OnboardingStep
            icon={<RefreshCw className="size-5" />}
            title="Update Plan"
            description="Adjust your plan for two people"
            status="upcoming"
          />
          <OnboardingStep
            icon={<Settings className="size-5" />}
            title="Review Changes"
            description="Confirm your updated coverage"
            status="upcoming"
          />
        </div>
      </div>

      <div className="bg-white border-2 border-[#133b34] rounded-lg p-4">
        <h3 className="font-[Sofia_Pro,sans-serif] font-semibold text-[16px] text-[#133b34] mb-2">
          Expanding Coverage
        </h3>
        <p className="font-[Sofia_Pro,sans-serif] text-[14px] text-[#133b34]">
          As an existing member adding a partner, we'll help you seamlessly update your plan to cover both of you with the right benefits.
        </p>
      </div>

      <button className="bg-[#133b34] text-white font-[Sofia_Pro,sans-serif] font-semibold text-[16px] py-3 rounded-lg hover:bg-[#0d2b25] transition-colors">
        Continue Update
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
