"use client";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import MeetCeleste from "@/components/MeetCeleste";
import WhatsHappening from "@/components/WhatsHappening";
import NotSelfHelp from "@/components/NotSelfHelp";
import QuizCTA from "@/components/QuizCTA";
import InternalDialogue from "@/components/InternalDialogue";
import WhatKeepsYouStuck from "@/components/WhatKeepsYouStuck";
import TheRealIssue from "@/components/TheRealIssue";
import WhatChanges from "@/components/WhatChanges";
import MomentOfChoice from "@/components/MomentOfChoice";
import TwoWaysForward from "@/components/TwoWaysForward";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <WhatsHappening />
      <WhatKeepsYouStuck />
      <AboutMe />
      <WhatChanges />
      <MeetCeleste />
      <TwoWaysForward />
    </ReactLenis>
  );
}
