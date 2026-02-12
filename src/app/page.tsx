"use client"
import Hero from "@/components/Hero";
import WhatsHappening from "@/components/WhatsHappening";
import NotSelfHelp from "@/components/NotSelfHelp";
import QuizCTA from "@/components/QuizCTA";
import InternalDialogue from "@/components/InternalDialogue";
import WhatKeepsYouStuck from "@/components/WhatKeepsYouStuck";
import TheRealIssue from "@/components/TheRealIssue";
import WhatChanges from "@/components/WhatChanges";
import MomentOfChoice from "@/components/MomentOfChoice";
import TwoWaysForward from "@/components/TwoWaysForward";
import Footer from "@/components/Footer";
import { ReactLenis, useLenis } from 'lenis/react'

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // here we can use scroll value
    console.log(scroll)
  })
  return (
    <ReactLenis root>
      <Hero />
      <WhatsHappening />
      <WhatKeepsYouStuck />
      <NotSelfHelp />
      {/* <QuizCTA placement="first" />
      {/* <InternalDialogue />
      <TheRealIssue /> */} 
      <WhatChanges />
      <TwoWaysForward />
      <Footer />
    </ReactLenis>
  );
}
