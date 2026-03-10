const research = [
  {
    id: "dynamic-difficulty-adjustment",
    eyebrow: "Publication",
    title: "Dynamic Difficulty Adjustment in Games using Reinforcement Learning",
    description:
      "A reinforcement-learning approach to dynamic difficulty adjustment that aims to sustain player engagement without relying on flat stat inflation.",
    abstract: [
      "Game difficulty is one of the core factors that shapes player experience. If challenge spikes too high, players disengage from frustration. If it drops too low, interest fades just as quickly.",
      "This publication explores reinforcement learning as a framework for dynamic difficulty adjustment. Instead of only tweaking enemy hit points or damage values, the proposed approach allows the AI to learn responses to player performance in real time and adapt difficulty in a more systemic way.",
      "The work positions reinforcement learning as a scalable, data-driven alternative to traditional rule-based balancing for personalized challenge.",
    ],
    focusAreas: [
      "Player engagement",
      "Adaptive AI",
      "Reinforcement learning",
      "Difficulty tuning",
    ],
    link: {
      label: "Read the Paper",
      url: "https://doi.org/10.25394/PGS.30790583",
    },
  },
  {
    id: "bioinspired-neural-network",
    eyebrow: "",
    title: "Grey Wolf Optimizer for Multi-Layered Perceptron",
    description:
      "",
    abstract: [
      "Bio-inspired algorithms are algorithms which are inspired from how nature solves a lot of its problems. A neural network needs proper weights on its neurons to efficiently solve a problem. This optimization of the weights can be a tedious task.", 
      "In this paper we are discussing a Bio-inspired algorithm called Grey wolf algorithm for training a neural network and optimizing its weights. Our results show how the Grey wolf optimizer is accurate and how it does not get stagnant at local minimas.",
    ],
    focusAreas: [
      "Neural Networks",
      "Bio-inspired algorithms",
    ],
    link: {
      label: "Source Code and paper",
      url: "https://github.com/AyanoKen/Bioinspired-Neural-Network",
    },
  }
]

export default research
