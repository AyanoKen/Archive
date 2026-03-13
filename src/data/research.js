const research = [
  {
    id: "dynamic-difficulty-adjustment",
    eyebrow: "Publication",
    title: "Dynamic Difficulty Adjustment in Games using Reinforcement Learning",
    description:
      "A reinforcement-learning approach to dynamic difficulty adjustment that aims to sustain player engagement without relying on flat stat inflation.",
    abstract: [
      "Game difficulty is one of the core factors that impact player experience and thus is important to be included when designing a game. When a game is excessively difficult, players may experience frustration and disengagement and on the other hand, if it is too easy, players quickly lose interest (Hergenrather, 2020). Maintaining a balance between challenge and enjoyment is therefore essential for player engagement and satisfaction. Traditional difficulty adjustment methods primarily rely on altering enemy parameters such as hit points, attack power, or damage output. While these methods can extend gameplay duration and often increase risk, they also fail to provide a genuine sense of adaptive challenge or variation in player experience.",
      "This thesis explores the application of reinforcement learning (RL) as a framework for dynamic difficulty adjustment (DDA) in games. Instead of relying on static enemy stat modifications, the proposed approach enables the AI to learn optimal responses to player performance in real time. By modeling the interaction between player behavior and system feedback as a learning process, the game AI can adapt its difficulty level to sustain player engagement. The results of this research highlight the potential of reinforcement learning as a scalable, data-driven approach to personalized game difficulty, offering an alternative to traditional rule-based balancing techniques.",    
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
