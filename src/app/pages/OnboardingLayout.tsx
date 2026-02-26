import { Outlet, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import svgPaths from "../../imports/svg-dwgfvo1ubx";

export default function OnboardingLayout() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#eae8e3] relative size-full">
      <div className="absolute bg-white content-stretch flex flex-col gap-[10px] h-[720px] items-start left-[7px] overflow-y-auto px-[16px] py-[12px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(19,59,52,0.12)] top-[59px] w-[371px]">
        {/* Logo */}
        <div className="h-[33px] relative shrink-0 w-[120px] cursor-pointer" data-name="myplan_logo" onClick={() => navigate("/")}>
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="myplan">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 33">
                  <g clipPath="url(#clip0_1_132)" id="myplan">
                    <path d={svgPaths.p34a6dd00} fill="var(--fill-0, #133b34)" id="Vector" />
                    <path d={svgPaths.p2fb35d20} fill="var(--fill-0, #133b34)" id="Vector_2" />
                    <path d={svgPaths.p17d46b80} fill="var(--fill-0, #133b34)" id="Vector_3" />
                    <path d={svgPaths.p1edf6900} fill="var(--fill-0, #133b34)" id="Vector_4" />
                    <path d={svgPaths.p23214fc0} fill="var(--fill-0, #133b34)" id="Vector_5" />
                    <path d={svgPaths.p3dceb5f0} fill="var(--fill-0, #133b34)" id="Vector_6" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_132">
                      <rect fill="white" height="33" width="120" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#133b34] hover:text-[#0d2b25] transition-colors pt-4 cursor-pointer"
        >
          <ArrowLeft className="size-5" />
          <span className="font-[Sofia_Pro,sans-serif] font-semibold text-[14px]">Back to Persona Chooser</span>
        </button>

        {/* Main content */}
        <div className="pt-4 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
