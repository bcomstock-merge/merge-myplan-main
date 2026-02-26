import { useNavigate } from "react-router";
import { motion, useMotionValue, useTransform, animate as motionAnimate } from "motion/react";
import { useEffect, useRef } from "react";
import svgPaths from "../../imports/svg-bs45aw6p3h";

function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 371;
    canvas.height = 720;

    const colors = ["#b4f02d", "#133b34", "#eae8e3", "#7ac400", "#0d2b25", "#d4ff6e"];
    const particles: Array<{
      x: number; y: number; w: number; h: number;
      color: string; vx: number; vy: number;
      rotation: number; rotSpeed: number; opacity: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * 371,
        y: -20 - Math.random() * 400,
        w: 4 + Math.random() * 6,
        h: 8 + Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 3,
        vy: 2 + Math.random() * 4,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.15,
        opacity: 0.8 + Math.random() * 0.2,
      });
    }

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, 371, 720);
      let alive = false;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rotation += p.rotSpeed;
        p.opacity -= 0.002;
        if (p.y < 800 && p.opacity > 0) alive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      if (alive) frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 371,
        height: 720,
        pointerEvents: "none",
        zIndex: 20,
      }}
    />
  );
}

export default function FinishedScreen() {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} className="bg-[#eae8e3] relative size-full" data-name="Screen 06 - Finished">
      <div className="absolute bg-white content-stretch flex flex-col gap-[10px] h-[720px] items-start left-[7px] overflow-clip px-[16px] py-[12px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(19,59,52,0.12)] top-[59px] w-[371px]" data-name="Contents">
        <Confetti />
        <div className="h-[33px] relative shrink-0 w-[120px] cursor-pointer z-30" data-name="myplan_logo" onClick={() => navigate("/")}>
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="myplan">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169.92 46.56">
                  <g clipPath="url(#clip0_1_104)" id="myplan">
                    <path d={svgPaths.p172e5780} fill="var(--fill-0, #133b34)" id="Vector" />
                    <path d={svgPaths.p394c5ec0} fill="var(--fill-0, #133b34)" id="Vector_2" />
                    <path d={svgPaths.p20bc7500} fill="var(--fill-0, #133b34)" id="Vector_3" />
                    <path d={svgPaths.pe364080} fill="var(--fill-0, #133b34)" id="Vector_4" />
                    <path d={svgPaths.p2eacd030} fill="var(--fill-0, #133b34)" id="Vector_5" />
                    <path d={svgPaths.p2e2e1500} fill="var(--fill-0, #133b34)" id="Vector_6" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_104">
                      <rect fill="white" height="46.56" width="169.92" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start leading-[normal] pt-[24px] relative shrink-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-[Sofia_Pro,sans-serif] font-semibold relative shrink-0 text-[#133b34] text-[16px]"
          >
            GREAT JOB!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-[Sofia_Pro,sans-serif] font-normal relative shrink-0 text-[#133b34] text-[24px] w-[348px] whitespace-pre-wrap"
          >
            Your health plan is all set up. We're ready to support you through the next year of your health journey.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="content-stretch flex flex-col gap-[24px] items-center py-[12px] relative shrink-0 w-full"
        >
          <div className="h-[205px] relative shrink-0 w-[206px]" data-name="Success Streamline Bangalore">
            <div className="absolute inset-[0.98%_0.73%_-0.49%_0.24%]" data-name="Interface-Success-01">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 204">
                <g id="Interface-Success-01">
                  <circle cx="102" cy="102" fill="var(--fill-0, #eae8e3)" id="Ellipse 2" r="102" />
                  <path d={svgPaths.p19c2f880} fill="var(--fill-0, #FFFCD9)" fillOpacity="0.7" id="Vector 2" />
                  <path d={svgPaths.p19af3880} fill="var(--fill-0, white)" id="Vector 3" />
                  <g id="color 2">
                    <path d={svgPaths.p2bbb0700} fill="var(--fill-0, #b4f02d)" id="Vector" />
                    <path d={svgPaths.p129e3700} fill="var(--fill-0, #b4f02d)" id="Vector_2" />
                  </g>
                  <g id="color 1">
                    <path d={svgPaths.p13c50cc0} fill="var(--fill-0, #133b34)" id="Vector_3" />
                    <path d={svgPaths.p19bebe80} fill="var(--fill-0, #133b34)" id="Vector_4" />
                    <path d={svgPaths.p33055780} fill="var(--fill-0, #133b34)" id="Vector_5" />
                    <path d={svgPaths.peab4880} fill="var(--fill-0, #133b34)" id="Vector_6" />
                    <path d={svgPaths.p3a8da600} fill="var(--fill-0, #133b34)" id="Vector_7" />
                    <path d={svgPaths.p2053b000} fill="var(--fill-0, #133b34)" id="Vector_8" />
                    <path d={svgPaths.p2c6500} fill="var(--fill-0, #133b34)" id="Vector_9" />
                    <path d={svgPaths.pf1b3d00} fill="var(--fill-0, #133b34)" id="Vector_10" />
                    <path d={svgPaths.p35d880} fill="var(--fill-0, #133b34)" id="Vector_11" />
                    <path d={svgPaths.p3fd25000} fill="var(--fill-0, #133b34)" id="Vector_12" />
                    <path d={svgPaths.p555c200} fill="var(--fill-0, #133b34)" id="Vector_13" />
                    <path d={svgPaths.p2edd6af0} fill="var(--fill-0, #133b34)" id="Vector_14" />
                    <path d={svgPaths.p35af58c0} fill="var(--fill-0, #133b34)" id="Vector_15" />
                    <path d={svgPaths.p10c4ca80} fill="var(--fill-0, #133b34)" id="Vector_16" />
                  </g>
                  <g id="outlines">
                    <path d={svgPaths.p128fdc40} id="Vector_17" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.pcab01c0} id="Vector_18" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1961ce00} id="Vector_19" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3b403380} id="Vector_20" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3b309e00} id="Vector_21" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3602bdc0} id="Vector_22" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p39691060} id="Vector_23" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p464c300} id="Vector_24" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p5715680} id="Vector_25" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p2546d092} id="Vector_26" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p233f2200} id="Vector_27" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p38537700} id="Vector_28" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.pdbc8b20} id="Vector_29" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p9e3d900} id="Vector_30" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p5da2840} id="Vector_31" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3476ac20} id="Vector_32" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3494c200} id="Vector_33" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p352c6600} id="Vector_34" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p388fd000} id="Vector_35" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p6211c80} id="Vector_36" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p2086bfc0} id="Vector_37" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p2c7f3b00} id="Vector_38" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p22bb7980} id="Vector_39" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3c60880} id="Vector_40" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1f10c200} id="Vector_41" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p11baf080} id="Vector_42" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p26d6c500} id="Vector_43" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1228ac0} id="Vector_44" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3609e780} id="Vector_45" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p18c81700} id="Vector_46" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p38e8088} id="Vector_47" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p25431c40} id="Vector_48" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3179e000} id="Vector_49" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p2daeb2c0} id="Vector_50" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.pb994880} id="Vector_51" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p2075ae00} id="Vector_52" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p370e9700} id="Vector_53" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1f76c100} id="Vector_54" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1b301380} id="Vector_55" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p10ff3940} id="Vector_56" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1bfa0800} id="Vector_57" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p36a5d880} id="Vector_58" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p96052c0} id="Vector_59" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1cac8940} id="Vector_60" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.pfeadac0} id="Vector_61" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1d3eb800} id="Vector_62" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.pcf63580} id="Vector_63" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p395fa100} id="Vector_64" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p7ac9100} id="Vector_65" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1f806a00} id="Vector_66" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p10480380} id="Vector_67" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1accb100} id="Vector_68" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.pa6f1000} id="Vector_69" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p10a07830} id="Vector_70" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1b975540} id="Vector_71" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1c2aa840} id="Vector_72" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p129e3700} id="Vector_73" stroke="var(--stroke-0, #133b34)" strokeLinejoin="round" />
                    <path d={svgPaths.p2ae1ac00} id="Vector_74" stroke="var(--stroke-0, #133b34)" strokeLinejoin="round" />
                    <path d={svgPaths.p1db3f580} id="Vector_75" stroke="var(--stroke-0, #133b34)" strokeLinejoin="round" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={handleDashboard}
            className="bg-[#133b34] relative rounded-[10px] shrink-0 hover:bg-[#0d2b25] active:bg-[#082019] transition-colors cursor-pointer"
            data-name="Next step button"
          >
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative">
                <p className="font-[Sofia_Pro,sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white">My dashboard</p>
                <div className="h-0 relative shrink-0 w-[15px]">
                  <div className="absolute inset-[-7.36px_-6.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.7279">
                      <path d={svgPaths.p39ccd2b2} fill="var(--stroke-0, white)" id="Arrow 1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}