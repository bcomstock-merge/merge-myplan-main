import { createHashRouter } from "react-router";
import PersonaChooser from "./pages/PersonaChooser";
import OnboardingLayout from "./pages/OnboardingLayout";
import HollyOnboarding from "./pages/HollyOnboarding";
import StateOfMeScreen from "./pages/StateOfMeScreen";
import InterestsScreen from "./pages/InterestsScreen";
import HealthGoalsScreen from "./pages/HealthGoalsScreen";
import SetUpCareScreen from "./pages/SetUpCareScreen";
import FinishedScreen from "./pages/FinishedScreen";
import DashboardScreen from "./pages/DashboardScreen";
import PedroOnboarding from "./pages/PedroOnboarding";
import NatashaOnboarding from "./pages/NatashaOnboarding";

export const router = createHashRouter([
  {
    path: "/",
    Component: PersonaChooser,
  },
  {
    path: "/onboarding/holly",
    Component: HollyOnboarding,
  },
  {
    path: "/onboarding/holly/state-of-me",
    Component: StateOfMeScreen,
  },
  {
    path: "/onboarding/holly/interests",
    Component: InterestsScreen,
  },
  {
    path: "/onboarding/holly/health-goals",
    Component: HealthGoalsScreen,
  },
  {
    path: "/onboarding/holly/set-up-care",
    Component: SetUpCareScreen,
  },
  {
    path: "/onboarding/holly/finished",
    Component: FinishedScreen,
  },
  {
    path: "/dashboard",
    Component: DashboardScreen,
  },
  {
    path: "/onboarding",
    Component: OnboardingLayout,
    children: [
      {
        path: "pedro",
        Component: PedroOnboarding,
      },
      {
        path: "natasha",
        Component: NatashaOnboarding,
      },
    ],
  },
]);