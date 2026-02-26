import { motion } from "motion/react";
import { useMemo } from "react";
import { useNavigate } from "react-router";

const S = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
});

function ProgressRing({ percent, size = 48, stroke = 4, color = "#b4f02d" }: { percent: number; size?: number; stroke?: number; color?: string }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(19,59,52,0.1)" strokeWidth={stroke} />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round"
        initial={{ strokeDasharray: circ, strokeDashoffset: circ }}
        animate={{ strokeDashoffset: circ * (1 - percent / 100) }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </svg>
  );
}

function QuickAction({ icon, label, delay }: { icon: string; label: string; delay: number }) {
  return (
    <motion.button
      {...S(delay)}
      className="flex flex-col items-center gap-[6px] flex-1 cursor-pointer active:scale-95 transition-transform"
    >
      <div className="w-[44px] h-[44px] rounded-[14px] bg-[#eae8e3] flex items-center justify-center text-[20px]">
        {icon}
      </div>
      <span className="font-[Sofia_Pro,sans-serif] font-normal text-[11px] text-[#133b34] text-center leading-tight">{label}</span>
    </motion.button>
  );
}

function UpcomingCard({ title, subtitle, time, icon, delay }: { title: string; subtitle: string; time: string; icon: string; delay: number }) {
  return (
    <motion.div
      {...S(delay)}
      className="flex items-center gap-[10px] p-[12px] rounded-[12px] bg-white cursor-pointer active:scale-[0.98] transition-transform"
      style={{ boxShadow: "0 1px 4px rgba(19,59,52,0.08)" }}
    >
      <div className="w-[40px] h-[40px] rounded-[10px] bg-[#eae8e3] flex items-center justify-center text-[18px] shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-[Sofia_Pro,sans-serif] font-semibold text-[13px] text-[#133b34] leading-tight truncate">{title}</p>
        <p className="font-[Sofia_Pro,sans-serif] font-normal text-[11px] text-[#133b34] opacity-60 truncate">{subtitle}</p>
      </div>
      <span className="font-[Sofia_Pro,sans-serif] font-medium text-[11px] text-[#b4f02d] bg-[#133b34] px-[8px] py-[3px] rounded-full shrink-0">{time}</span>
    </motion.div>
  );
}

function GoalRow({ label, percent, delay }: { label: string; percent: number; delay: number }) {
  return (
    <motion.div {...S(delay)} className="flex items-center gap-[10px]">
      <div className="flex-1 min-w-0">
        <p className="font-[Sofia_Pro,sans-serif] font-medium text-[12px] text-[#133b34] truncate">{label}</p>
        <div className="mt-[4px] h-[4px] rounded-full bg-[rgba(19,59,52,0.08)] overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: "#b4f02d" }}
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ delay: delay + 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </div>
      <span className="font-[Sofia_Pro,sans-serif] font-semibold text-[12px] text-[#133b34]">{percent}%</span>
    </motion.div>
  );
}

export default function DashboardScreen() {
  const navigate = useNavigate();
  const greeting = useMemo(() => {
    const h = new Date().getHours();
    return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-[#eae8e3] relative size-full"
    >
      <div className="absolute h-[720px] left-[7px] top-[59px] w-[371px] overflow-y-auto overflow-x-hidden rounded-[10px]" style={{ scrollbarWidth: "none" }}>

        {/* Hero header */}
        <div className="relative bg-[#133b34] rounded-t-[10px] px-[20px] pt-[20px] pb-[24px] overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-[40px] -right-[30px] w-[120px] h-[120px] rounded-full border border-[rgba(180,240,45,0.15)]" />
          <div className="absolute -bottom-[20px] -left-[20px] w-[80px] h-[80px] rounded-full bg-[rgba(180,240,45,0.06)]" />

          {/* Top bar: logo + avatar */}
          <div className="flex items-center justify-between mb-[12px]">
            <motion.div {...S(0.05)} className="h-[22px] w-[80px] opacity-70">
              <svg viewBox="0 0 120 33" fill="none" className="w-full h-full">
                <text x="0" y="26" fontFamily="Sofia Pro, sans-serif" fontWeight="700" fontSize="28" fill="white" letterSpacing="-0.5">myplan</text>
              </svg>
            </motion.div>
            <motion.div {...S(0.08)} className="w-[36px] h-[36px] rounded-full overflow-hidden border-2 border-[rgba(180,240,45,0.4)]">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" alt="Holly" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <motion.p {...S(0.1)} className="font-[Sofia_Pro,sans-serif] font-normal text-[13px] text-[rgba(255,255,255,0.6)]">
            {greeting}
          </motion.p>
          <motion.h1 {...S(0.15)} className="font-[Sofia_Pro,sans-serif] font-bold text-[26px] text-white leading-tight mt-[2px]">
            Holly
          </motion.h1>

          {/* Plan overview card */}
          <motion.div
            {...S(0.25)}
            className="mt-[16px] bg-[rgba(255,255,255,0.08)] backdrop-blur rounded-[14px] p-[14px] flex items-center gap-[14px]"
          >
            <div className="relative">
              <ProgressRing percent={72} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[Sofia_Pro,sans-serif] font-bold text-[14px] text-white">72%</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="font-[Sofia_Pro,sans-serif] font-semibold text-[14px] text-white">Plan setup complete</p>
              <p className="font-[Sofia_Pro,sans-serif] font-normal text-[11px] text-[rgba(255,255,255,0.5)] mt-[2px]">3 of 4 goals in progress</p>
            </div>
            <div className="bg-[#b4f02d] rounded-full px-[10px] py-[4px]">
              <span className="font-[Sofia_Pro,sans-serif] font-semibold text-[11px] text-[#133b34]">View</span>
            </div>
          </motion.div>
        </div>

        {/* Quick actions */}
        <div className="bg-white px-[16px] py-[16px]">
          <div className="flex gap-[4px]">
            <QuickAction icon="🔍" label="Find care" delay={0.3} />
            <QuickAction icon="💊" label="Rx refill" delay={0.35} />
            <QuickAction icon="📋" label="Claims" delay={0.4} />
            <QuickAction icon="💳" label="ID card" delay={0.45} />
            <QuickAction icon="📞" label="Support" delay={0.5} />
          </div>
        </div>

        {/* Upcoming */}
        <div className="px-[16px] py-[14px] bg-[#f5f4f1]">
          <motion.p {...S(0.4)} className="font-[Sofia_Pro,sans-serif] font-semibold text-[15px] text-[#133b34] mb-[10px]">
            Upcoming
          </motion.p>
          <div className="flex flex-col gap-[8px]">
            <UpcomingCard
              icon="🩺"
              title="Dr. Sarah Chen — Annual Physical"
              subtitle="Bright Horizons Family Medicine"
              time="Mar 15"
              delay={0.5}
            />
            <UpcomingCard
              icon="🦷"
              title="Dr. James Lee — Dental Cleaning"
              subtitle="Pine Street Dental Group"
              time="Mar 22"
              delay={0.55}
            />
            <UpcomingCard
              icon="💉"
              title="Flu shot — CVS Pharmacy"
              subtitle="Covered at 100% — no copay"
              time="Available"
              delay={0.6}
            />
          </div>
        </div>

        {/* Health goals */}
        <div className="px-[16px] py-[14px] bg-white">
          <motion.p {...S(0.55)} className="font-[Sofia_Pro,sans-serif] font-semibold text-[15px] text-[#133b34] mb-[10px]">
            Your health goals
          </motion.p>
          <div className="flex flex-col gap-[12px]">
            <GoalRow label="Increase activity level" percent={65} delay={0.6} />
            <GoalRow label="Better sleep habits" percent={40} delay={0.65} />
            <GoalRow label="Start meditating" percent={20} delay={0.7} />
          </div>
        </div>

        {/* Benefits snapshot */}
        <div className="px-[16px] py-[14px] bg-[#f5f4f1]">
          <motion.p {...S(0.65)} className="font-[Sofia_Pro,sans-serif] font-semibold text-[15px] text-[#133b34] mb-[10px]">
            Benefits snapshot
          </motion.p>
          <div className="grid grid-cols-2 gap-[8px]">
            <motion.div {...S(0.7)} className="bg-white rounded-[12px] p-[12px]" style={{ boxShadow: "0 1px 3px rgba(19,59,52,0.06)" }}>
              <p className="font-[Sofia_Pro,sans-serif] font-normal text-[11px] text-[#133b34] opacity-50">Deductible</p>
              <p className="font-[Sofia_Pro,sans-serif] font-bold text-[20px] text-[#133b34] mt-[2px]">$450</p>
              <p className="font-[Sofia_Pro,sans-serif] font-normal text-[10px] text-[#133b34] opacity-40">of $1,500 met</p>
            </motion.div>
            <motion.div {...S(0.75)} className="bg-white rounded-[12px] p-[12px]" style={{ boxShadow: "0 1px 3px rgba(19,59,52,0.06)" }}>
              <p className="font-[Sofia_Pro,sans-serif] font-normal text-[11px] text-[#133b34] opacity-50">Out-of-pocket</p>
              <p className="font-[Sofia_Pro,sans-serif] font-bold text-[20px] text-[#133b34] mt-[2px]">$820</p>
              <p className="font-[Sofia_Pro,sans-serif] font-normal text-[10px] text-[#133b34] opacity-40">of $5,000 max</p>
            </motion.div>
            <motion.div {...S(0.8)} className="bg-white rounded-[12px] p-[12px]" style={{ boxShadow: "0 1px 3px rgba(19,59,52,0.06)" }}>
              <p className="font-[Sofia_Pro,sans-serif] font-normal text-[11px] text-[#133b34] opacity-50">Primary care</p>
              <p className="font-[Sofia_Pro,sans-serif] font-bold text-[20px] text-[#133b34] mt-[2px]">$20</p>
              <p className="font-[Sofia_Pro,sans-serif] font-normal text-[10px] text-[#133b34] opacity-40">copay per visit</p>
            </motion.div>
            <motion.div {...S(0.85)} className="bg-white rounded-[12px] p-[12px]" style={{ boxShadow: "0 1px 3px rgba(19,59,52,0.06)" }}>
              <p className="font-[Sofia_Pro,sans-serif] font-normal text-[11px] text-[#133b34] opacity-50">Specialist</p>
              <p className="font-[Sofia_Pro,sans-serif] font-bold text-[20px] text-[#133b34] mt-[2px]">$40</p>
              <p className="font-[Sofia_Pro,sans-serif] font-normal text-[10px] text-[#133b34] opacity-40">copay per visit</p>
            </motion.div>
          </div>
        </div>

        {/* Care team */}
        <div className="px-[16px] py-[14px] bg-white rounded-b-[10px]">
          <motion.p {...S(0.75)} className="font-[Sofia_Pro,sans-serif] font-semibold text-[15px] text-[#133b34] mb-[10px]">
            Your care team
          </motion.p>
          <div className="flex gap-[12px]">
            {[
              { name: "Dr. Chen", role: "PCP", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face" },
              { name: "Dr. Lee", role: "Dentist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face" },
              { name: "Dr. Martinez", role: "Peds Dentist", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face" },
            ].map((doc, i) => (
              <motion.div key={doc.name} {...S(0.8 + i * 0.05)} className="flex flex-col items-center gap-[4px]">
                <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-[Sofia_Pro,sans-serif] font-medium text-[11px] text-[#133b34]">{doc.name}</span>
                <span className="font-[Sofia_Pro,sans-serif] font-normal text-[9px] text-[#133b34] opacity-50">{doc.role}</span>
              </motion.div>
            ))}
          </div>

          {/* Start over link */}
          <motion.div {...S(0.95)} className="mt-[20px] pb-[8px]">
            <button
              onClick={() => navigate("/")}
              className="w-full bg-[#133b34] rounded-[10px] py-[12px] cursor-pointer hover:bg-[#0d2b25] active:bg-[#082019] transition-colors"
            >
              <span className="font-[Sofia_Pro,sans-serif] font-medium text-[14px] text-white">Start new demo</span>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
