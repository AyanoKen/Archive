const imageModules = import.meta.glob("../assets/images/**/*.{png,jpg,jpeg,avif}", {
  eager: true,
  import: "default",
})

const image = (path) => imageModules[`../assets/images/${path}`]

const projects = [
  {
    id: "isekai-knightfall",
    eyebrow: "Unreal Engine 5 | Real Time Strategy",
    title: "Isekai Knightfall",
    description:
      "A real time strategy game that blends commanding units with isekai fantasy, built with a focus on unit variety, resource management, and strategic depth.",
    summary:
      "Currently in development",
    role: "Solo Developer",
    teamSize: "1",
    duration: "In Development",
    category: "3d",
    featured: true,
    videoEmbed: "https://www.youtube.com/embed/j8cdrkfS2ZU",
    thumbnail: image("IsekaiKnightfall/GameScreenshot2.png"),
    thumbnailAlt: "Isekai Knightfall gameplay scene with units in play",
    gallery: [
      image("IsekaiKnightfall/GameScreenshot1.png"),
      image("IsekaiKnightfall/GameScreenshot2.png"),
      image("IsekaiKnightfall/GameScreenshot3.png"),
      image("IsekaiKnightfall/GameScreenshot4.png"),
      image("IsekaiKnightfall/GameScreenshot5.png"),
      image("IsekaiKnightfall/GameScreenshot6.png"),
      image("IsekaiKnightfall/GameScreenshot7.png"),
    ],
    overview: [
      "A real-time strategy combat prototype built in Unreal Engine 5 that focuses on dynamic AI behavior and scalable combat systems. The project features unit-based combat, upgradeable entities, and a modular UI system, with an emphasis on AI-driven decision-making, system design, and player interaction clarity.",
      "The core innovation lies in designing adaptive combat logic where units intelligently detect, engage, and respond to enemies based on range, roles (e.g., melee vs ranged), and battlefield context. The system is built to be extensible, supporting future integration of reinforcement learning–based difficulty adjustment and large-scale encounters.",  
    ],
    highlights: [
      "Designed a reusable parent unit architecture supporting multiple unit types (e.g., archers, melee units).",
      "Built a range-based detection system using collision channels and sphere colliders to improve performance",
      "Implemented a data-driven upgrade system using structs and arrays, supporting dynamic stat changes and progression.",
      "Developed an interactive minimap system with on click navigation and unit indicators.",
      "Developed multiple movement behaviors to support dynamic strategies and emergent combat scenarios.",
    ],
    techStack: ["Unreal Engine 5", "Blueprints", "AI Behavior", "Gameplay Systems", "UI Design"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/AyanoKen/EpicWarRE",
      },
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/watch?v=j8cdrkfS2ZU",
      },
    ],
  },
  {
    id: "tcg-engine",
    eyebrow: "Unity | Multiplayer Systems",
    title: "TCG Engine",
    description:
      "A data-driven Digimon TCG simulation focused on scalable card logic, multiplayer sync, and effect architecture.",
    summary:
      "Built as a non-commercial simulation to push modular game architecture, online turn flow, and reactive card systems.",
    role: "Solo Developer",
    teamSize: "1",
    duration: "8 Weeks",
    category: "2d",
    featured: true,
    videoEmbed: "https://www.youtube.com/embed/eHd1UCbCS3c",
    thumbnail: image("TCG/GameScreenshot1.png"),
    thumbnailAlt: "TCG Engine gameplay board with cards in play",
    gallery: [
      image("TCG/GameScreenshot1.png"),
      image("TCG/GameScreenshot2.png"),
      image("TCG/GameScreenshot3.png"),
      image("TCG/GameScreenshot4.png"),
    ],
    overview: [
      "This game is a non-commercial simulation of the Digimon Trading Card Game. The goal of the project was to push my skills in game architecture, modular system design, and multiplayer architecture.",
      "All rights belong to their respective owners. The focus here was building a flexible rules engine that could handle evolving cards, triggers, and networked game state without collapsing under edge cases.",
    ],
    highlights: [
      "Designed a functional TCG engine with interactive cards and dynamic gameplay.",
      "Built for online PvP with turn logic, memory management, card sync, and battle flow.",
      "Automated core mechanics including card plays, digivolution chains, triggered effects, inherited effects, and battle resolution.",
      "Used a modular parser to load card data from JSON instead of hard-coding card behaviors.",
      "Structured the effect system to support keywords, conditions, and passive behaviors at scale.",
    ],
    techStack: ["Unity", "C#", "JSON", "Netcode", "Gameplay Architecture"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/AyanoKen/DigimonTCG",
      },
      {
        label: "Itch.io Page",
        url: "https://ayanoken.itch.io/digimontcg",
      },
    ],
  },
  {
    id: "battle-chess",
    eyebrow: "Unity | Strategy Sandbox",
    title: "BattleChess",
    description:
      "A multiplayer strategy experiment that turns chess into an auto-battler with fusion, promotions, and synchronized phases.",
    summary:
      "A solo-built multiplayer prototype reimagining chess as automated combat with systemic unit upgrades and battle-state simulation.",
    role: "Solo Developer",
    teamSize: "1",
    duration: "2-3 Weeks",
    category: "3d",
    featured: false,
    videoEmbed: "https://www.youtube.com/embed/YfElz0JfVSs",
    thumbnail: image("BattleChess/GameScreenshot1.png"),
    thumbnailAlt: "BattleChess board with stylized units in combat",
    gallery: [
      image("BattleChess/GameScreenshot1.png"),
      image("BattleChess/GameScreenshot2.png"),
      image("BattleChess/GameScreenshot3.png"),
      image("BattleChess/GameScreenshot4.png"),
      image("BattleChess/GameScreenshot5.png"),
      image("BattleChess/GameScreenshot6.png"),
    ],
    overview: [
      "Battle Chess... Chess! is a multiplayer strategy game that reimagines classic chess as an automated battle system with unit fusion, promotions, and phase-based gameplay.",
      "The project focused on networking, board-state readability, and combat behaviors that still feel rooted in chess while becoming a spectacle once battle resolution begins.",
    ],
    highlights: [
      "Designed a server-authoritative multiplayer architecture using Unity Netcode for GameObjects.",
      "Implemented a synchronized Prep, Battle, and Resolution loop across clients.",
      "Built a unit fusion and promotion system with multiple upgrade tiers culminating in a Queen unit.",
      "Developed autonomous combat AI with targeting, movement, and ability-based attacks.",
      "Integrated VFX, camera transitions, and battle-state simulation for payoff during combat.",
    ],
    techStack: ["Unity", "C#", "Unity Netcode", "AI Behaviors", "Multiplayer"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/AyanoKen/BattleChess",
      },
      {
        label: "Itch.io Page",
        url: "https://ayanoken.itch.io/battle-chess-chess",
      },
    ],
  },
  {
    id: "dexters-game",
    eyebrow: "Unreal Engine | VR Horror",
    title: "Dexter's Game",
    description:
      "A narrative-driven VR escape room built around tension, environmental storytelling, and time pressure.",
    summary:
      "A solo VR project designed to turn escape-room puzzle solving into a threatening, story-driven horror experience.",
    role: "Solo Developer",
    teamSize: "1",
    duration: "1 Month",
    category: "xr",
    featured: true,
    videoEmbed: "https://www.youtube.com/embed/zGtszny-JAM",
    thumbnail: image("VREscapeRoom/GameScreenshot1.png"),
    thumbnailAlt: "Dexter's Game VR environment with puzzle objects",
    gallery: [
      image("VREscapeRoom/GameScreenshot1.png"),
      image("VREscapeRoom/GameScreenshot5.png"),
      image("VREscapeRoom/GameScreenshot2.png"),
      image("VREscapeRoom/GameScreenshot3.png"),
      image("VREscapeRoom/GameScreenshot4.png"),
    ],
    overview: [
      "Dexter's Game is a story-driven VR escape room where the danger is real, the clock is ticking, and the only way out is your mind.",
      "Unlike traditional escape rooms, this experience leans on narrative-driven puzzles, oppressive ambience, and a mounting sense of urgency to keep the player psychologically engaged.",
    ],
    highlights: [
      "Built a fully immersive VR escape room with a horror-forward atmosphere.",
      "Used environmental storytelling and audio-visual cues to sustain tension.",
      "Designed puzzle logic around time pressure and narrative escalation.",
    ],
    techStack: ["Unreal Engine", "VR Interaction", "Level Design", "Narrative Design"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/AyanoKen/VREscapeRoom",
      },
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/watch?v=zGtszny-JAM",
      },
    ],
  },
  {
    id: "purdue-arg",
    eyebrow: "Web Game | Full Stack Narrative",
    title: "Purdue Alternate Reality",
    description:
      "A web-based alternate reality game built for AI education, puzzle progression, and story-led investigation.",
    summary:
      "A full-stack narrative web game created for Purdue's AI education initiative and showcased at the Google AI Summit in Indianapolis.",
    role: "Full Stack Developer (Frontend, Backend, Database)",
    teamSize: "3",
    duration: "4 Months",
    category: "2d",
    videoEmbed: "https://www.youtube.com/embed/BeN-R7UKJyY",
    thumbnail: image("ARG/GameScreenshot1.png"),
    thumbnailAlt: "Purdue ARG interface with investigation and clues",
    gallery: [
      image("ARG/GameScreenshot1.png"),
      image("ARG/GameScreenshot2.png"),
      image("ARG/GameScreenshot3.png"),
      image("ARG/GameScreenshot4.png"),
      image("ARG/GameScreenshot5.png"),
      image("ARG/GameScreenshot6.png"),
      image("ARG/GameScreenshot7.png"),
      image("ARG/GameScreenshot8.png"),
      image("ARG/GameScreenshot9.png"),
    ],
    overview: [
      "A professor has mysteriously gone missing from campus. What starts as a simple investigation leads to a trail of AI conspiracies buried deep within Purdue's systems.",
      "Purdue ARG is a web-based alternate reality game developed to promote AI education at Purdue. It was showcased at the Google AI Summit in Indianapolis in 2024.",
    ],
    highlights: [
      "Built save-based progression with file decryption mechanics.",
      "Created multi-page puzzles and timed decision-making sequences.",
      "Shaped the story-driven level flow and the AI-themed clue structure.",
    ],
    techStack: ["JavaScript", "Frontend", "Backend", "Database", "Puzzle Design"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/AyanoKen/ARG-Game",
      },
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/watch?v=BeN-R7UKJyY",
      },
    ],
  },
  {
    id: "his-life",
    eyebrow: "Unreal Engine 5 | Narrative Adventure",
    title: "His Life",
    description:
      "A memory-driven adventure puzzler where each chapter introduces a new movement system and emotional rhythm.",
    summary:
      "A team-built narrative puzzle adventure focused on environmental pacing, movement variation, and emotional memory spaces.",
    role: "Creative Director, Programmer, Environment Artist",
    teamSize: "10",
    duration: "3 Months",
    category: "3d",
    videoEmbed: "https://www.youtube.com/embed/_0ek0nY1bs4",
    thumbnail: image("HisLife/GameScreenshot1.png"),
    thumbnailAlt: "His Life environment with cave exploration and stylized lighting",
    gallery: [
      image("HisLife/GameScreenshot1.png"),
      image("HisLife/GameScreenshot2.png"),
      image("HisLife/GameScreenshot3.png"),
      image("HisLife/GameScreenshot4.png"),
      image("HisLife/GameScreenshot5.png"),
      image("HisLife/GameScreenshot6.png"),
      image("HisLife/GameScreenshot7.png"),
      image("HisLife/GameScreenshot8.png"),
      image("HisLife/GameScreenshot9.png"),
      image("HisLife/GameScreenshot10.png"),
    ],
    overview: [
      "His Life is a narrative-driven adventure puzzler built in Unreal Engine 5. Players relive the memories of a grandfather, with each memory introducing a new movement system and interactive mechanic.",
      "The work centered on directing tone, pacing, and the relationship between environmental traversal and narrative beats.",
    ],
    highlights: [
      "Designed three distinct movement systems tied to narrative moments.",
      "Built open-world cave exploration with puzzle logic and staging.",
      "Directed the visual tone and moment-to-moment pacing of the experience.",
    ],
    techStack: ["Unreal Engine 5", "Blueprints", "Environment Art", "Narrative Design"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/dmwhittinghill/cgt555spr24final",
      },
      {
        label: "Itch.io Page",
        url: "https://ayanoken.itch.io/his-life",
      },
    ],
  },
  {
    id: "echoes-of-war",
    eyebrow: "Unity XR | Immersive Museum",
    title: "Echoes of War",
    description:
      "An empathetic VR museum experience built to reflect on conflict through atmosphere, symbolism, and guided spatial storytelling.",
    summary:
      "A solo-built VR museum that uses symbolic spaces, voiceover, and ambient audio to confront the human cost of war.",
    role: "Solo Developer (Design, Programming, Art, Audio Curation)",
    teamSize: "1",
    duration: "6 Weeks",
    category: "xr",
    videoEmbed: "https://www.youtube.com/embed/mHBEyzFZqeY",
    thumbnail: image("VrMuseum/GameScreenshot1.png"),
    thumbnailAlt: "Echoes of War VR museum interior with atmospheric lighting",
    gallery: [
      image("VrMuseum/GameScreenshot1.png"),
      image("VrMuseum/GameScreenshot2.png"),
      image("VrMuseum/GameScreenshot3.png"),
      image("VrMuseum/GameScreenshot4.png"),
      image("VrMuseum/GameScreenshot5.png"),
      image("VrMuseum/GameScreenshot6.png"),
      image("VrMuseum/GameScreenshot7.png"),
      image("VrMuseum/GameScreenshot8.png"),
      image("VrMuseum/GameScreenshot9.png"),
      image("VrMuseum/GameScreenshot10.png"),
    ],
    overview: [
      "Echoes of War is an immersive VR museum experience that confronts the human cost of conflict.",
      "Built using Unity XR, each corridor guides players through a haunting journey layered with voiceovers, symbolic props, and ambient soundscapes, all designed not to glorify war, but to reflect on its silent aftermath.",
    ],
    highlights: [
      "Designed and developed a fully immersive VR museum using Unity XR toolkits.",
      "Structured the experience around room-by-room symbolic progression.",
      "Created as part of the Games for Change initiative to evoke empathy and remembrance.",
    ],
    techStack: ["Unity XR", "Spatial Storytelling", "Audio Direction", "Environment Design"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/AyanoKen/VR_Museum",
      },
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/watch?v=mHBEyzFZqeY",
      },
    ],
  },
  {
    id: "vr-unpacking",
    eyebrow: "Unreal Engine | VR Interaction",
    title: "VR Unpacking",
    description:
      "A cozy yet spatially challenging VR object-customization project set inside a cryo-chamber on a space cruiser.",
    summary:
      "A fast solo VR prototype exploring object interaction, snap systems, and personal-space storytelling through room customization.",
    role: "Solo Developer",
    teamSize: "1",
    duration: "1 Week",
    category: "xr",
    videoEmbed: "https://www.youtube.com/embed/qxm1qLjEVRU",
    thumbnail: image("VRUnpacking/GameScreenshot1.png"),
    thumbnailAlt: "VR Unpacking cryo chamber with interactive props",
    gallery: [
      image("VRUnpacking/GameScreenshot1.png"),
      image("VRUnpacking/GameScreenshot2.png"),
      image("VRUnpacking/GameScreenshot3.png"),
      image("VRUnpacking/GameScreenshot4.png"),
      image("VRUnpacking/GameScreenshot5.png"),
    ],
    overview: [
      "Inspired by the game Unpacking, this project translates object placement and room personalization into VR.",
      "VR Unpacking places the player in a cryo-chamber aboard a space cruiser nearing a new planet. The room starts cold and empty, and the interaction design turns organization into storytelling.",
    ],
    highlights: [
      "Built VR grabbing, rotation, and snap-to-fit logic for object placement.",
      "Added a randomized item pool for varied room setups across playthroughs.",
      "Designed custom furniture and placement systems to support personal expression.",
    ],
    techStack: ["Unreal Engine", "VR Interaction", "Prop Systems", "Environment Design"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/AyanoKen/VRUnpacking",
      },
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/watch?v=qxm1qLjEVRU",
      },
    ],
  },
  {
    id: "pathways",
    eyebrow: "Unity | AI Storytelling",
    title: "PathWays",
    description:
      "A branching narrative prototype that pairs LLM-generated story paths with real-time AI illustration.",
    summary:
      "A collaborative interactive storybook that uses AI text and image generation to create reactive narrative branches.",
    role: "Tech Lead, Developer",
    teamSize: "3",
    duration: "1 Month",
    category: "2d",
    videoEmbed: "https://www.youtube.com/embed/ktMj86VMTqs",
    thumbnail: image("PathWays/GameScreenshot1.png"),
    thumbnailAlt: "PathWays interface with branching narrative panels",
    gallery: [
      image("PathWays/GameScreenshot1.png"),
      image("PathWays/GameScreenshot2.png"),
      image("PathWays/GameScreenshot3.png"),
      image("PathWays/GameScreenshot4.png"),
    ],
    overview: [
      "A magical storybook that writes itself as you play. Which path will you take?",
      "PathWays is a choose-your-own-adventure game built in Unity that dynamically generates branching narratives using large language models, paired with real-time AI-generated illustrations from Leonardo AI.",
    ],
    highlights: [
      "Integrated OpenAI GPT APIs for adaptive storytelling.",
      "Connected Leonardo AI for real-time artwork generation.",
      "Built a custom UI to keep branching choices readable and fluid.",
    ],
    techStack: ["Unity", "OpenAI API", "Leonardo AI", "Narrative Systems"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/AyanoKen/Pathways",
      },
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/watch?v=ktMj86VMTqs",
      },
    ],
  },
  {
    id: "get-out",
    eyebrow: "Unity | 2D Platformer",
    title: "Get Out",
    description:
      "A maze platformer built to test patience, memory, and route planning through loops, traps, and misdirection.",
    summary:
      "A deliberately punishing 2D platformer that leans into maze design, fake-outs, and cruel-but-readable challenge.",
    role: "Solo Developer",
    teamSize: "1",
    duration: "2 Weeks",
    category: "2d",
    videoEmbed: "https://www.youtube.com/embed/LwF2nFlZP40",
    thumbnail: image("Maze/GameScreenshot1.png"),
    thumbnailAlt: "Get Out maze level with character navigating hazards",
    gallery: [
      image("Maze/GameScreenshot1.png"),
      image("Maze/GameScreenshot2.png"),
      image("Maze/GameScreenshot3.png"),
      image("Maze/GameScreenshot4.png"),
    ],
    overview: [
      "Get Out is a devilishly difficult maze platformer built in Unity and designed to push patience, memory, and problem-solving to the edge.",
      "The level design leans on decoys, loops, and traps so heavily that even the developer needed a map to get through it cleanly.",
    ],
    highlights: [
      "Built a large multi-path maze structure with misdirection and red herrings.",
      "Created custom enemy and trap logic using animation states and hitboxes.",
      "Used Unity's native physics and collision tools to support a tight 2D platforming feel.",
    ],
    techStack: ["Unity", "2D Platforming", "Level Design", "Gameplay Scripting"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/AyanoKen/Impossible-Maze",
      },
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/watch?v=LwF2nFlZP40",
      },
    ],
  },
  {
    id: "budget-fall-guys",
    eyebrow: "Unreal Engine 5 | Obstacle Chaos",
    title: "Budget FallGuys",
    description:
      "A colorful obstacle-course prototype built from scratch in Unreal Engine 5 with a deliberately unfair streak.",
    summary:
      "A quick solo prototype focused on slapstick traversal, checkpoint flow, and chaotic obstacle timing.",
    role: "Solo Developer",
    teamSize: "1",
    duration: "1 Week",
    category: "3d",
    videoEmbed: "https://www.youtube.com/embed/Bzm6P4sLhBs",
    thumbnail: image("FallGuys/GameScreenshot1.png"),
    thumbnailAlt: "Budget FallGuys obstacle course with bright moving hazards",
    gallery: [
      image("FallGuys/GameScreenshot1.png"),
      image("FallGuys/GameScreenshot2.png"),
      image("FallGuys/GameScreenshot3.png"),
      image("FallGuys/GameScreenshot4.png"),
      image("FallGuys/GameScreenshot5.png"),
    ],
    overview: [
      "Budget FallGuys is a hilariously unforgiving obstacle course inspired by Fall Guys and built from scratch in Unreal Engine 5.",
      "The tone stays colorful and chaotic, but the production focus was on custom obstacle logic, checkpoint flow, and the satisfaction of surviving something that looks simple until it is not.",
    ],
    highlights: [
      "Created custom obstacle logic with physics-based triggers and ragdoll collisions.",
      "Implemented a third-person controller with respawn checkpoints and readable hazard timing.",
    ],
    techStack: ["Unreal Engine 5", "Gameplay Scripting", "Physics", "Level Design"],
    links: [
      {
        label: "GitHub Repo",
        url: "https://github.com/AyanoKen/BudgetFallguys",
      },
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/watch?v=Bzm6P4sLhBs",
      },
    ],
  },
]

export default projects
