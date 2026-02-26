import { RouterProvider } from "react-router";
import { router } from "./routes";

const ambientGlowKeyframes = `
@keyframes ambientGlow {
  0%, 100% {
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.08),
      0 50px 100px -20px rgba(0,0,0,0.7),
      0 30px 60px -30px rgba(0,0,0,0.5),
      inset 0 1px 0 rgba(255,255,255,0.05),
      0 0 60px -10px rgba(180,240,45,0.08),
      0 0 120px -20px rgba(19,59,52,0.12);
  }
  50% {
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.08),
      0 50px 100px -20px rgba(0,0,0,0.7),
      0 30px 60px -30px rgba(0,0,0,0.5),
      inset 0 1px 0 rgba(255,255,255,0.05),
      0 0 80px -5px rgba(180,240,45,0.14),
      0 0 160px -10px rgba(19,59,52,0.18);
  }
}
`;

function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
        overflow: "hidden",
        fontFamily: "'Sofia Pro', 'Work Sans', system-ui, sans-serif",
      }}
    >
      <style>{ambientGlowKeyframes}</style>
      {/* iPhone 15 Pro outer shell */}
      <div
        style={{
          position: "relative",
          width: 393,
          height: 852,
          borderRadius: 55,
          background: "#1a1a1a",
          padding: 4,
          animation: "ambientGlow 4s ease-in-out infinite",
        }}
      >
        {/* Titanium edge highlight */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 55,
            border: "1px solid rgba(255,255,255,0.12)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />

        {/* Screen area */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 51,
            overflow: "hidden",
            position: "relative",
            background: "#eae8e3",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 11,
              left: "50%",
              transform: "translateX(-50%)",
              width: 126,
              height: 37,
              borderRadius: 24,
              background: "#000",
              zIndex: 50,
            }}
          />

          {/* Status bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 59,
              zIndex: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 28px 0",
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 600, color: "#133b34", letterSpacing: 0.2 }}>
              9:41
            </span>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {/* Cellular */}
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <rect x="0" y="7" width="3" height="5" rx="0.5" fill="#133b34" />
                <rect x="4" y="5" width="3" height="7" rx="0.5" fill="#133b34" />
                <rect x="8" y="3" width="3" height="9" rx="0.5" fill="#133b34" />
                <rect x="12" y="0" width="3" height="12" rx="0.5" fill="#133b34" />
              </svg>
              {/* WiFi */}
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                <path d="M8 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="#133b34" transform="translate(0,-2)" />
                <path d="M4.5 8.5C5.5 7 6.7 6.2 8 6.2s2.5.8 3.5 2.3" stroke="#133b34" strokeWidth="1.3" strokeLinecap="round" fill="none" transform="translate(0,-2)" />
                <path d="M1.5 5.5C3.3 3 5.5 1.8 8 1.8s4.7 1.2 6.5 3.7" stroke="#133b34" strokeWidth="1.3" strokeLinecap="round" fill="none" transform="translate(0,-2)" />
              </svg>
              {/* Battery */}
              <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
                <rect x="0.5" y="0.5" width="22" height="12" rx="2.5" stroke="#133b34" strokeOpacity="0.35" />
                <rect x="2" y="2" width="19" height="9" rx="1.5" fill="#133b34" />
                <path d="M24 4.5v4a1.5 1.5 0 000-4z" fill="#133b34" fillOpacity="0.4" />
              </svg>
            </div>
          </div>

          {/* Screen content */}
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            {children}
          </div>

          {/* Home indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 134,
              height: 5,
              borderRadius: 100,
              background: "#133b34",
              opacity: 0.3,
              zIndex: 50,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <IPhoneFrame>
      <RouterProvider router={router} />
    </IPhoneFrame>
  );
}
