import { useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-go5gkpswy4";
import ProgressBar from "../components/ProgressBar";
import ProviderDetailsBottomSheet from "../components/ProviderDetailsBottomSheet";

// Professional doctor headshots
const imgDoc1 = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face";
const imgDoc2 = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face";
const imgDoc3 = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face";
const imgDoc4 = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face";
const imgImage1 = "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face";
const imgDoc5 = "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=200&h=200&fit=crop&crop=face";

type ProviderCardProps = {
  name: string;
  rating: string;
  specialty: string;
  address: string;
  distance: string;
  imageSrc: string;
  imageStyle: React.CSSProperties;
  onCall: () => void;
  onDetails: () => void;
};

function StarRating({ rating }: { rating: string }) {
  return (
    <div className="content-stretch flex gap-[3px] items-start overflow-clip py-[2px] relative shrink-0">
      <div className="h-[10.313px] relative shrink-0 w-[11px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10.3128">
          <path d={svgPaths.p92ce80} fill="var(--fill-0, #FFB700)" id="Vector" />
        </svg>
      </div>
      <div className="h-[10.313px] relative shrink-0 w-[11px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10.3128">
          <path d={svgPaths.p92ce80} fill="var(--fill-0, #FFB700)" id="Vector" />
        </svg>
      </div>
      <div className="h-[10.313px] relative shrink-0 w-[11px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10.3128">
          <path d={svgPaths.p92ce80} fill="var(--fill-0, #FFB700)" id="Vector" />
        </svg>
      </div>
      <div className="h-[10.313px] relative shrink-0 w-[11px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10.3128">
          <path d={svgPaths.p92ce80} fill="var(--fill-0, #FFB700)" id="Vector" />
        </svg>
      </div>
      <div className="h-[10.313px] relative shrink-0 w-[11px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0002 10.3133">
          <path d={svgPaths.p27174a80} fill="var(--fill-0, #FFB700)" id="Vector" />
        </svg>
      </div>
      <div className='flex flex-col font-[Sofia_Pro,sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-black whitespace-nowrap'>
        <p className="leading-[normal]">{rating}</p>
      </div>
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

function CallIcon() {
  return (
    <div className="h-[11px] relative shrink-0 w-[12px]">
      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 12 11" className="absolute block size-full">
        <path d={svgPaths.p117a5400} fill="var(--fill-0, #133b34)" id="Vector" />
      </svg>
    </div>
  );
}

function ProviderCard({ name, rating, specialty, address, distance, imageSrc, imageStyle, onCall, onDetails }: ProviderCardProps) {
  return (
    <div className="flex items-center gap-[10px] p-[10px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#eae8e3] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)]" />

      {/* Avatar */}
      <div className="overflow-clip relative rounded-full shrink-0 size-[56px]">
        <img alt={name} src={imageSrc} className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-[2px] flex-1 min-w-0">
        <p className='font-[Sofia_Pro,sans-serif] font-semibold text-[13px] text-[#133b34] leading-[16px] truncate'>{name}</p>
        <StarRating rating={rating} />
        <p className='font-[Sofia_Pro,sans-serif] font-normal text-[10px] text-[#133b34] truncate'>{specialty}</p>
        <div className="flex items-center gap-[4px]">
          <p className='font-[Sofia_Pro,sans-serif] font-normal text-[10px] text-[#133b34]'>{distance}</p>
          <LocationPin />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-[6px] shrink-0">
        <button onClick={onDetails} className="relative rounded-[16px] hover:opacity-80 active:scale-95 transition-all cursor-pointer px-[12px] py-[5px]">
          <span className='font-[Sofia_Pro,sans-serif] font-normal text-[11px] text-[#133b34]'>Details</span>
          <div aria-hidden="true" className="absolute border border-[#133b34] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </button>
        <button onClick={onCall} className="relative rounded-[16px] hover:opacity-80 active:scale-95 transition-all cursor-pointer px-[12px] py-[5px] bg-[#133b34]">
          <span className='font-[Sofia_Pro,sans-serif] font-normal text-[11px] text-white'>Call</span>
        </button>
      </div>
    </div>
  );
}

export default function SetUpCareScreen() {
  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState<{
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
  } | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleCall = (providerName: string) => {
    alert(`Calling ${providerName}...`);
  };

  const handleDetails = (provider: {
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
  }) => {
    setSelectedProvider(provider);
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
    setTimeout(() => setSelectedProvider(null), 300); // Clear after animation
  };

  const handlePrevious = () => {
    navigate("/onboarding/holly/health-goals");
  };

  const handleFinish = () => {
    navigate("/onboarding/holly/finished");
  };

  const primaryCareProviders = [
    {
      name: "Dr. Evelyn Wood, MD",
      rating: "4.0 (5)",
      specialty: "Family Medicine",
      address: "40 Avonwood Drive",
      city: "Boston",
      state: "MA",
      zipCode: "02101",
      distance: "1.7 miles away",
      imageSrc: imgDoc1,
      imageStyle: {},
      education: "Harvard Medical School, MD",
      residency: "Massachusetts General Hospital, Family Medicine",
      biography: "Dr. Wood is a board-certified family medicine physician with over 15 years of experience. She is passionate about preventive care and building long-term relationships with her patients.",
    },
    {
      name: "Alonso Hernandez, NP",
      rating: "4.5 (8)",
      specialty: "Internal Medicine",
      address: "65 Dale St. Suite 300",
      city: "Boston",
      state: "MA",
      zipCode: "02115",
      distance: "2.3 miles away",
      imageSrc: imgDoc2,
      imageStyle: {},
      education: "Boston University, MSN",
      residency: "Beth Israel Deaconess Medical Center",
      biography: "Alonso specializes in chronic disease management and takes a holistic approach to patient care. He is fluent in both English and Spanish.",
    },
    {
      name: "Nnedi Adebimpe, NP",
      rating: "4.0 (3)",
      specialty: "General Medicine",
      address: "62 Dale Rd., Ste 203",
      city: "Cambridge",
      state: "MA",
      zipCode: "02139",
      distance: "4.6 miles away",
      imageSrc: imgDoc3,
      imageStyle: {},
      education: "Northeastern University, MSN",
      residency: "Cambridge Health Alliance",
      biography: "Nnedi is dedicated to providing compassionate, patient-centered care with a focus on health education and wellness.",
    },
    {
      name: "Dr. Sarah Johnson, MD",
      rating: "4.5 (12)",
      specialty: "Family Practice",
      address: "200 Main St. Suite 5",
      city: "Boston",
      state: "MA",
      zipCode: "02118",
      distance: "3.2 miles away",
      imageSrc: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&h=200&fit=crop&crop=face",
      imageStyle: {},
      education: "Tufts University School of Medicine, MD",
      residency: "Boston Medical Center, Family Practice",
      biography: "Dr. Johnson provides comprehensive care for patients of all ages and has special interests in women's health and pediatrics.",
    },
    {
      name: "Dr. Michael Chen, DO",
      rating: "4.8 (15)",
      specialty: "Internal Medicine",
      address: "88 Park Avenue",
      city: "Brookline",
      state: "MA",
      zipCode: "02446",
      distance: "5.1 miles away",
      imageSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
      imageStyle: {},
      education: "New England College of Osteopathic Medicine, DO",
      residency: "Brigham and Women's Hospital, Internal Medicine",
      biography: "Dr. Chen focuses on evidence-based medicine and preventive care, with expertise in managing complex medical conditions.",
    },
  ];

  const dentists = [
    {
      name: "Dr. Eloise Carter, DMD",
      rating: "4.0",
      specialty: "General Dentist",
      address: "712 Scarborough Rd.",
      city: "Boston",
      state: "MA",
      zipCode: "02116",
      distance: "6.2 miles away",
      imageSrc: imgDoc4,
      imageStyle: {},
      education: "Boston University Henry M. Goldman School of Dental Medicine, DMD",
      residency: "Tufts Medical Center, General Dentistry",
      biography: "Dr. Carter believes in conservative, patient-centered dentistry. She focuses on preventive care and educating patients about optimal oral health practices.",
    },
    {
      name: "Dr. James Chen, DMD",
      rating: "4.0",
      specialty: "Dentist",
      address: "12 Medical Blvd.",
      city: "Cambridge",
      state: "MA",
      zipCode: "02142",
      distance: "2.3 miles away",
      imageSrc: imgImage1,
      imageStyle: {},
      education: "Harvard School of Dental Medicine, DMD",
      residency: "Massachusetts General Hospital, General Dentistry",
      biography: "Dr. Chen is committed to providing comprehensive dental care in a comfortable, welcoming environment. He stays current with the latest dental technologies and techniques.",
    },
    {
      name: "Dr. Harpreet Singh, DMD",
      rating: "4.5 (2)",
      specialty: "General Dentistry",
      address: "312 Main St. Ste 102",
      city: "Somerville",
      state: "MA",
      zipCode: "02144",
      distance: "1.3 miles away",
      imageSrc: imgDoc5,
      imageStyle: {},
      education: "Tufts University School of Dental Medicine, DMD",
      residency: "Boston Medical Center, General Dentistry",
      biography: "Dr. Singh provides compassionate dental care with a focus on patient comfort. He has extensive experience in restorative and cosmetic dentistry.",
    },
    {
      name: "Dr. Maya Patel, DDS",
      rating: "4.7 (10)",
      specialty: "Cosmetic Dentistry",
      address: "450 Oak Street",
      city: "Newton",
      state: "MA",
      zipCode: "02458",
      distance: "3.8 miles away",
      imageSrc: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=200&h=200&fit=crop&crop=face",
      imageStyle: {},
      education: "New York University College of Dentistry, DDS",
      residency: "UCLA School of Dentistry, Cosmetic Dentistry Fellowship",
      biography: "Dr. Patel specializes in creating beautiful, healthy smiles using the latest cosmetic techniques. She combines artistry with advanced dental science to achieve exceptional results.",
    },
    {
      name: "Dr. Robert Martinez, DMD",
      rating: "4.3 (6)",
      specialty: "Pediatric Dentistry",
      address: "75 Elm Ave Suite 2",
      city: "Brookline",
      state: "MA",
      zipCode: "02445",
      distance: "4.5 miles away",
      imageSrc: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face",
      imageStyle: {},
      education: "Columbia University College of Dental Medicine, DMD",
      residency: "Boston Children's Hospital, Pediatric Dentistry",
      biography: "Dr. Martinez is dedicated to making dental visits fun and comfortable for children. He emphasizes preventive care and creating positive dental experiences from an early age.",
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="bg-[#eae8e3] relative size-full" data-name="Screen 5 - Set up care">
      <div className="absolute bg-white flex flex-col h-[720px] left-[7px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(19,59,52,0.12)] top-[59px] w-[371px] overflow-hidden">
        {/* Fixed header */}
        <div className="shrink-0 px-[16px] pt-[12px] pb-[8px]">
          <div className="flex items-center justify-between w-full">
            <div className="h-[33px] relative shrink-0 w-[120px] cursor-pointer" onClick={() => navigate("/")}>
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 33">
                      <g clipPath="url(#clip0_1_477)" id="myplan">
                        <path d={svgPaths.p34a6dd00} fill="var(--fill-0, #133b34)" id="Vector" />
                        <path d={svgPaths.p2fb35d20} fill="var(--fill-0, #133b34)" id="Vector_2" />
                        <path d={svgPaths.p17d46b80} fill="var(--fill-0, #133b34)" id="Vector_3" />
                        <path d={svgPaths.p1edf6900} fill="var(--fill-0, #133b34)" id="Vector_4" />
                        <path d={svgPaths.p23214fc0} fill="var(--fill-0, #133b34)" id="Vector_5" />
                        <path d={svgPaths.p3dceb5f0} fill="var(--fill-0, #133b34)" id="Vector_6" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_477">
                          <rect fill="white" height="33" width="120" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className='font-[Sofia_Pro,sans-serif] font-semibold leading-[normal] shrink-0 text-[#133b34] text-[16px] text-right'>
              {"STEP 4 OF 4"}
            </p>
          </div>
          <div className="mt-[12px]">
            <ProgressBar currentStep={4} totalSteps={4} />
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 min-h-0 overflow-y-auto px-[16px]" style={{ scrollbarWidth: "none" }}>
          <div className="flex flex-col gap-[16px] pb-[16px]">
            <p className='font-[Sofia_Pro,sans-serif] font-normal leading-[normal] text-[#133b34] text-[20px] whitespace-pre-wrap'>
              Let's get you set up with your primary care provider and other key healthcare team members.
            </p>

            {/* Primary care providers */}
            <div className="flex flex-col gap-[8px]">
              <p className='font-[Sofia_Pro,sans-serif] font-medium text-[16px] text-black leading-[normal]'>Find a primary care provider</p>
              <div className="flex items-end justify-between">
                <p className='font-[Sofia_Pro,sans-serif] font-normal text-[#133b34] text-[12px] leading-[normal] w-[229px]'>We found three highly-rated PCPs within 15 miles of your zip code.</p>
                <p className='font-[Sofia_Pro,sans-serif] font-semibold text-[#133b34] text-[10px] underline cursor-pointer whitespace-nowrap'>View all providers</p>
              </div>
              <div className="flex flex-col gap-[10px] w-full">
                {primaryCareProviders.map((provider, index) => (
                  <ProviderCard
                    key={index}
                    name={provider.name}
                    rating={provider.rating}
                    specialty={provider.specialty}
                    address={provider.address}
                    distance={provider.distance}
                    imageSrc={provider.imageSrc}
                    imageStyle={provider.imageStyle}
                    onCall={() => handleCall(provider.name)}
                    onDetails={() => handleDetails(provider)}
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#133b34] h-[3px] rounded-[3px] w-full" />

            {/* Dentists */}
            <div className="flex flex-col gap-[8px]">
              <p className='font-[Sofia_Pro,sans-serif] font-medium text-[16px] text-black leading-[normal]'>Find a dentist</p>
              <div className="flex items-end justify-between">
                <p className='font-[Sofia_Pro,sans-serif] font-normal text-[#133b34] text-[12px] leading-[normal] w-[229px]'>We found three highly-rated dentists within 15 miles of your zip code.</p>
                <p className='font-[Sofia_Pro,sans-serif] font-semibold text-[#133b34] text-[10px] underline cursor-pointer whitespace-nowrap'>View all providers</p>
              </div>
              <div className="flex flex-col gap-[10px] w-full">
                {dentists.map((dentist, index) => (
                  <ProviderCard
                    key={index}
                    name={dentist.name}
                    rating={dentist.rating}
                    specialty={dentist.specialty}
                    address={dentist.address}
                    distance={dentist.distance}
                    imageSrc={dentist.imageSrc}
                    imageStyle={dentist.imageStyle}
                    onCall={() => handleCall(dentist.name)}
                    onDetails={() => handleDetails(dentist)}
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#133b34] h-[3px] rounded-[3px] w-full" />

            <button className="relative rounded-[21px] self-center hover:opacity-80 active:scale-95 transition-all cursor-pointer mb-[4px]">
              <div className="flex items-center justify-center px-[12px] py-[5px]">
                <p className='font-[Sofia_Pro,sans-serif] font-normal text-[#133b34] text-[12px] text-center whitespace-nowrap leading-[normal]'>Search for my existing providers</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#133b34] border-solid inset-0 pointer-events-none rounded-[21px]" />
            </button>
          </div>
        </div>

        {/* Fixed footer buttons */}
        <div className="shrink-0 flex items-center justify-between px-[16px] py-[10px]">
          <button
            onClick={handlePrevious}
            className="bg-white relative rounded-[10px] shrink-0 w-[155px] hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[28px] py-[12px] relative w-full">
                <div className="h-0 relative shrink-0 w-[15px]">
                  <div className="absolute inset-[-7.36px_-6.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.7279">
                      <path d={svgPaths.p3b463e00} fill="var(--stroke-0, #133b34)" id="Arrow 1" />
                    </svg>
                  </div>
                </div>
                <p className='font-[Sofia_Pro,sans-serif] font-medium leading-[20px] relative shrink-0 text-[#133b34] text-[16px]'>
                  Previous
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#133b34] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </button>
          <button
            onClick={handleFinish}
            className="bg-[#133b34] relative rounded-[10px] shrink-0 w-[155px] hover:bg-[#0d2b25] active:bg-[#082019] transition-colors cursor-pointer"
          >
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[12px] relative w-full">
                <p className='font-[Sofia_Pro,sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white'>
                  Finish
                </p>
                <div className="h-0 relative shrink-0 w-[15px]">
                  <div className="absolute inset-[-7.36px_-6.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.7279">
                      <path d={svgPaths.p39ccd2b2} fill="var(--stroke-0, white)" id="Arrow 1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        {/* Bottom sheet rendered INSIDE the card so it stays within the iPhone viewport */}
        <ProviderDetailsBottomSheet
          provider={selectedProvider}
          isOpen={isBottomSheetOpen}
          onClose={handleCloseBottomSheet}
          onCall={() => handleCall(selectedProvider!?.name ?? "")}
        />
      </div>
    </motion.div>
  );
}