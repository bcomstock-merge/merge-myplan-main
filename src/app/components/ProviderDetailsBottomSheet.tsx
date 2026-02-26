import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-7wzkpxp93z";

type Provider = {
  name: string;
  rating: string;
  specialty: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  distance: string;
  imageSrc: string;
  imageStyle: React.CSSProperties;
  education?: string;
  residency?: string;
  biography?: string;
};

type ProviderDetailsBottomSheetProps = {
  provider: Provider | null;
  isOpen: boolean;
  onClose: () => void;
  onCall: () => void;
};

function StarStreamlineHeroiconsVector() {
  return (
    <div className="h-[10.313px] relative shrink-0 w-[11px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10.3128">
        <path d={svgPaths.p92ce80} fill="var(--fill-0, #FFB700)" id="Vector" />
      </svg>
    </div>
  );
}

function LocationPin() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[3.57%]">
        <div className="absolute inset-[-3.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="location-pin-3--navigation-map-maps-pin-gps-location">
              <path d={svgPaths.pfe4b200} id="Vector" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p3265fd70} id="Vector_2" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p31b07ac0} id="Vector_3" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ProviderDetailsBottomSheet({
  provider,
  isOpen,
  onClose,
  onCall,
}: ProviderDetailsBottomSheetProps) {
  if (!provider) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay — stays within the parent container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/40 z-40 rounded-[10px]"
            onClick={onClose}
          />

          {/* Bottom sheet — slides up from bottom within the iPhone viewport */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
            className="absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-[20px] shadow-[0_-4px_30px_rgba(0,0,0,0.15)]"
            style={{ maxHeight: "85%", display: "flex", flexDirection: "column" }}
          >
            {/* Drag handle */}
            <div className="shrink-0 pt-[10px] pb-[6px] flex justify-center cursor-grab" onClick={onClose}>
              <div className="w-[40px] h-[4px] rounded-full bg-gray-300" />
            </div>

            {/* Scrollable content */}
            <div className="flex-1 min-h-0 overflow-y-auto px-[24px] pb-[24px]" style={{ scrollbarWidth: "none" }}>
              {/* Avatar */}
              <div className="overflow-clip relative rounded-full shrink-0 size-[88px] mb-5 shadow-lg mt-[8px]">
                <img alt={provider.name} src={provider.imageSrc} className="w-full h-full object-cover pointer-events-none" />
              </div>

              {/* Name */}
              <h2 className='font-[Sofia_Pro,sans-serif] font-semibold text-[22px] text-[#133b34] leading-normal mb-3'>
                {provider.name}
              </h2>

              {/* Star Rating */}
              <div className="flex gap-[3px] items-center mb-3">
                <StarStreamlineHeroiconsVector />
                <StarStreamlineHeroiconsVector />
                <StarStreamlineHeroiconsVector />
                <StarStreamlineHeroiconsVector />
                <div className="h-[10.313px] relative shrink-0 w-[11px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0002 10.3133">
                    <path d={svgPaths.p27174a80} fill="var(--fill-0, #FFB700)" id="Vector" />
                  </svg>
                </div>
                <div className='font-[Sofia_Pro,sans-serif] font-medium text-[13px] text-black ml-1'>
                  {provider.rating}
                </div>
              </div>

              {/* Specialty */}
              <p className='font-[Sofia_Pro,sans-serif] font-normal text-[14px] text-[#133b34] leading-normal mb-2'>
                {provider.specialty}
              </p>

              {/* Address */}
              <p className='font-[Sofia_Pro,sans-serif] font-normal text-[14px] text-[#133b34] leading-normal mb-1'>
                {provider.address}
              </p>

              {/* City, State, Zip */}
              <p className='font-[Sofia_Pro,sans-serif] font-normal text-[14px] text-[#133b34] leading-normal mb-2'>
                {provider.city}, {provider.state} {provider.zipCode}
              </p>

              {/* Distance */}
              <div className="flex gap-[5px] items-center mb-6">
                <p className='font-[Sofia_Pro,sans-serif] font-normal text-[13px] text-[#133b34]'>
                  {provider.distance}
                </p>
                <LocationPin />
              </div>

              {/* Call Button */}
              <button
                onClick={onCall}
                className="w-full relative rounded-[21px] shrink-0 bg-[#133b34] hover:opacity-80 active:scale-95 transition-all cursor-pointer"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[20px] py-[10px] relative">
                    <div className="h-[11px] relative shrink-0 w-[12px]">
                      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 12 11" className="absolute block size-full">
                        <path d={svgPaths.p117a5400} fill="var(--fill-0, #FFFFFF)" id="Vector" />
                      </svg>
                    </div>
                    <div className='flex flex-col font-[Sofia_Pro,sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-white text-[14px] text-center whitespace-nowrap'>
                      <p className="leading-[normal]">Call</p>
                    </div>
                  </div>
                </div>
              </button>

              {/* Education Section */}
              {provider.education && (
                <div className="mt-6">
                  <h3 className='font-[Sofia_Pro,sans-serif] font-semibold text-[16px] text-[#133b34] leading-normal mb-2'>
                    Education
                  </h3>
                  <p className='font-[Sofia_Pro,sans-serif] font-normal text-[14px] text-[#133b34] leading-normal'>
                    {provider.education}
                  </p>
                </div>
              )}

              {/* Residency Section */}
              {provider.residency && (
                <div className="mt-5">
                  <h3 className='font-[Sofia_Pro,sans-serif] font-semibold text-[16px] text-[#133b34] leading-normal mb-2'>
                    Residency
                  </h3>
                  <p className='font-[Sofia_Pro,sans-serif] font-normal text-[14px] text-[#133b34] leading-normal'>
                    {provider.residency}
                  </p>
                </div>
              )}

              {/* Biography Section */}
              {provider.biography && (
                <div className="mt-5 mb-4">
                  <h3 className='font-[Sofia_Pro,sans-serif] font-semibold text-[16px] text-[#133b34] leading-normal mb-2'>
                    Biography
                  </h3>
                  <p className='font-[Sofia_Pro,sans-serif] font-normal text-[14px] text-[#133b34] leading-[1.5]'>
                    {provider.biography}
                  </p>
                </div>
              )}

              {/* Close button at the bottom */}
              <button
                onClick={onClose}
                className="w-full mt-4 mb-2 relative rounded-[10px] shrink-0 border border-[#133b34] hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-center px-[20px] py-[10px]">
                  <p className='font-[Sofia_Pro,sans-serif] font-medium text-[14px] text-[#133b34]'>Close</p>
                </div>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
