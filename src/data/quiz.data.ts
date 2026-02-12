export const questions = [
    {
        id: 1,
        text: "When someone asks for help, your first reaction is:",
        options: [
            { value: 'A', text: "I automatically say yes, even when I’m exhausted" },
            { value: 'B', text: "I help but feel resentful" },
            { value: 'C', text: "I pause and check in with myself" },
            { value: 'D', text: "I comfortably say no" }
        ]
    },
    {
        id: 2,
        text: "In your closest relationships, you usually feel:",
        options: [
            { value: 'A', text: "Drained and emotionally responsible" },
            { value: 'B', text: "Needed but not supported" },
            { value: 'C', text: "Mostly balanced" },
            { value: 'D', text: "Safe and respected" }
        ]
    },
    {
        id: 3,
        text: "How often do you put your own needs last?",
        options: [
            { value: 'A', text: "Almost always" },
            { value: 'B', text: "Often" },
            { value: 'C', text: "Sometimes" },
            { value: 'D', text: "Rarely" }
        ]
    },
    {
        id: 4,
        text: "Which statement feels most true?",
        options: [
            { value: 'A', text: "I don’t know who I am outside of being useful" },
            { value: 'B', text: "I’m questioning my role" },
            { value: 'C', text: "I’m rediscovering myself" },
            { value: 'D', text: "I feel aligned" }
        ]
    },
    {
        id: 5,
        text: "When conflict arises, you:",
        options: [
            { value: 'A', text: "Stay silent" },
            { value: 'B', text: "Apologize even when not wrong" },
            { value: 'C', text: "Speak up but anxious" },
            { value: 'D', text: "Express myself clearly" }
        ]
    },
    {
        id: 6,
        text: "Your love history feels like:",
        options: [
            { value: 'A', text: "Repeated toxic patterns" },
            { value: 'B', text: "Giving more than receiving" },
            { value: 'C', text: "Learning boundaries" },
            { value: 'D', text: "Mutual respect" }
        ]
    },
    {
        id: 7,
        text: "Your current life focus is:",
        options: [
            { value: 'A', text: "Survival" },
            { value: 'B', text: "Healing" },
            { value: 'C', text: "Growth" },
            { value: 'D', text: "Purpose" }
        ]
    },
    {
        id: 8,
        text: "When you imagine your future, you feel:",
        options: [
            { value: 'A', text: "Afraid" },
            { value: 'B', text: "Curious" },
            { value: 'C', text: "Hopeful" },
            { value: 'D', text: "Empowered" }
        ]
    },
    {
        id: 9,
        text: "What drains you most?",
        options: [
            { value: 'A', text: "People-pleasing" },
            { value: 'B', text: "Guilt" },
            { value: 'C', text: "Fear of disappointing" },
            { value: 'D', text: "Very little" }
        ]
    },
    {
        id: 10,
        text: "Which sentence resonates?",
        options: [
            { value: 'A', text: "I lived my life for others" },
            { value: 'B', text: "I’m waking up" },
            { value: 'C', text: "I choose myself" },
            { value: 'D', text: "I live a life led by me" }
        ]
    }
];

export const resultsData: Record<string, { title: string; subtitle?: string; corePattern: string[]; whatsHappening: string[]; hiddenCost: string[]; rebirth: string[] }> = {
    'A': {
        title: "The Silent Anchor",
        subtitle: "(Chronic Over-Giver Pattern)",
        corePattern: [
            "You are the one everyone leans on.",
            "The stabilizer.",
            "The dependable one.",
            "You don’t fall apart.",
            "You hold everything together.",
            "And you’re exhausted."
        ],
        whatsHappening: [
            "You learned early that: Being useful = being safe, Being needed = being valued, Being strong = being loved.",
            "Your nervous system is wired for responsibility.",
            "Rest feels foreign.",
            "Slowing down triggers guilt.",
            "You don’t ask for much.",
            "But internally, you’re running on fumes."
        ],
        hiddenCost: [
            "You’ve built a life where: Everyone else gets regulated, You stay composed, Your needs stay quiet.",
            "You’re not breaking down.",
            "You’re tightening up."
        ],
        rebirth: [
            "Learning that support does not equal weakness",
            "Releasing roles that were never yours to carry",
            "Letting your home and schedule serve you",
            "Your next step isn’t collapse.",
            "It’s recalibration."
        ]
    },
    'B': {
        title: "The Pattern Breaker",
        subtitle: "(Healing from Toxic / Draining Relationships)",
        corePattern: [
            "You’ve loved hard.",
            "You’ve endured.",
            "You’ve rationalized red flags because you believed in potential.",
            "You don’t run from pain.",
            "You try to heal it."
        ],
        whatsHappening: [
            "You were conditioned to: Earn love through tolerance, Over-function in relationships, Confuse chemistry with compatibility.",
            "You’ve attracted intensity more than stability.",
            "And now? You’re tired of emotional chaos disguised as connection."
        ],
        hiddenCost: [
            "Even after leaving toxic dynamics, part of you still asks: “Was it really that bad?” “Maybe I expected too much.”",
            "You don’t trust your perception fully — yet."
        ],
        rebirth: [
            "Rebuilding trust in your own discernment",
            "Choosing calm over chemistry",
            "Ending the cycle of self-abandonment",
            "You are not too much.",
            "You were just under-protected."
        ]
    },
    'C': {
        title: "The Quiet Awakener",
        subtitle: "(Rediscovering Passion & Identity)",
        corePattern: [
            "Your life looks stable from the outside.",
            "But inside? There’s a low-grade dissatisfaction you can’t ignore anymore.",
            "You’ve done what was expected.",
            "You’ve fulfilled roles.",
            "You’ve kept things running.",
            "Now you’re asking: “Is this it?”"
        ],
        whatsHappening: [
            "You’ve outgrown a version of yourself.",
            "Not dramatically.",
            "Not impulsively.",
            "Just truthfully.",
            "You don’t need escape.",
            "You need alignment."
        ],
        hiddenCost: [
            "You struggle to answer: “What do I want now?”",
            "Because for decades, the question was: “What do they need?”"
        ],
        rebirth: [
            "Reclaiming dormant desires",
            "Making decisions from identity, not obligation",
            "Designing a chapter that reflects who you are now",
            "You’re not lost.",
            "You’re emerging."
        ]
    },
    'D': {
        title: "The Quiet Awakener",
        subtitle: "(Rediscovering Passion & Identity)",
        corePattern: [
            "Your life looks stable from the outside.",
            "But inside? There’s a low-grade dissatisfaction you can’t ignore anymore.",
            "You’ve done what was expected.",
            "You’ve fulfilled roles.",
            "You’ve kept things running.",
            "Now you’re asking: “Is this it?”"
        ],
        whatsHappening: [
            "You’ve outgrown a version of yourself.",
            "Not dramatically.",
            "Not impulsively.",
            "Just truthfully.",
            "You don’t need escape.",
            "You need alignment."
        ],
        hiddenCost: [
            "You struggle to answer: “What do I want now?”",
            "Because for decades, the question was: “What do they need?”"
        ],
        rebirth: [
            "Reclaiming dormant desires",
            "Making decisions from identity, not obligation",
            "Designing a chapter that reflects who you are now",
            "You’re not lost.",
            "You’re emerging."
        ]
    }
};