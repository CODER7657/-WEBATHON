import type { IconType } from 'react-icons';
import { FaLandmark, FaBookOpen, FaIndustry, FaMicrochip, FaBrain } from 'react-icons/fa';

export interface EventType {
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
}

export interface EraType {
  name: string;
  range: string;
  icon: IconType;
  color: string;
  events: EventType[];
}

export const eras: EraType[] = [
  {
    name: "Ancient History",
    range: "3500 BC – 476 AD",
    icon: FaLandmark,
    color: "#FFC700",
    events: [
      {
        title: "Invention of Writing",
        date: "c. 3500 BC",
        shortDescription: "Sumerians in Mesopotamia develop cuneiform, one of the earliest systems of writing.",
        fullDescription: "This monumental leap allowed for the recording of laws, history, and literature, fundamentally changing how information was stored and transmitted across generations.",
        icon: "📜"
      },
      {
        title: "Construction of the Pyramids",
        date: "c. 2580–2560 BC",
        shortDescription: "The Great Pyramid of Giza is completed, a testament to ancient Egyptian engineering.",
        fullDescription: "Built as a tomb for the Pharaoh Khufu, it remained the tallest man-made structure for over 3,800 years and is one of the Seven Wonders of the Ancient World.",
        icon: "🔺"
      },
      {
        title: "Birth of Democracy",
        date: "c. 507 BC",
        shortDescription: "Athenian democracy is established, giving citizens a voice in state affairs.",
        fullDescription: "Cleisthenes' reforms in Athens laid the groundwork for a system of direct democracy, a concept that would profoundly influence Western civilization.",
        icon: "🏛️"
      },
    ]
  },
  {
    name: "Middle Ages",
    range: "476 AD – 1450 AD",
    icon: FaBookOpen,
    color: "#A0522D",
    events: [
      {
        title: "Fall of Western Rome",
        date: "476 AD",
        shortDescription: "The collapse of the Western Roman Empire marks the beginning of the Middle Ages.",
        fullDescription: "This event led to a fragmentation of Europe into smaller kingdoms, the rise of feudalism, and a shift in power towards the Byzantine Empire in the east and the burgeoning Islamic Caliphate.",
        icon: "🛡️"
      },
      {
        title: "Invention of Printing Press",
        date: "c. 1440 AD",
        shortDescription: "Johannes Gutenberg's movable-type printing press revolutionizes communication.",
        fullDescription: "This invention made books widely available, fueling the Renaissance, Reformation, and the Age of Enlightenment by democratizing knowledge and allowing ideas to spread faster than ever before.",
        icon: "📖"
      },
    ]
  },
  {
    name: "Industrial Revolution",
    range: "1760 – 1840",
    icon: FaIndustry,
    color: "#808080",
    events: [
      {
        title: "Steam Engine Perfected",
        date: "1781",
        shortDescription: "James Watt patents a steam engine that produces continuous rotary motion.",
        fullDescription: "Watt's improvements on the Newcomen engine were a critical power source for the Industrial Revolution, driving machinery in factories, powering locomotives, and steamboats.",
        icon: "🚂"
      },
      {
        title: "First Public Railway",
        date: "1825",
        shortDescription: "The Stockton and Darlington Railway in England opens, the first to use steam locomotives.",
        fullDescription: "This event heralded a new era of mass transportation, making it possible to move goods and people over long distances efficiently, thereby shrinking the world and boosting global trade.",
        icon: "🛤️"
      },
    ]
  },
  {
    name: "Digital Age",
    range: "1970 – Present",
    icon: FaMicrochip,
    color: "#00F6FF",
    events: [
      {
        title: "Birth of the Internet",
        date: "1983",
        shortDescription: "ARPANET officially adopts the TCP/IP protocol, creating the internet as we know it.",
        fullDescription: "This transition marked the beginning of a global network of computers, leading to the World Wide Web and a complete transformation of communication, commerce, and culture.",
        icon: "🌐"
      },
     
    ]
  },
  {
    name: "Future Tech",
    range: "Tomorrow & Beyond",
    icon: FaBrain,
    color: "#FF00E5",
    events: [
      {
        title: "Artificial General Intelligence",
        date: "Speculative",
        shortDescription: "The hypothetical development of AI with human-like cognitive abilities.",
        fullDescription: "AGI represents a future where machines can understand, learn, and apply knowledge across a wide range of tasks, potentially solving humanity's greatest challenges or posing existential risks.",
        icon: "🤖"
      },
      {
        title: "Commercial Fusion Power",
        date: "Speculative",
        shortDescription: "Harnessing the power of the stars to provide clean, virtually limitless energy.",
        fullDescription: "Achieving net-positive energy from nuclear fusion would revolutionize our energy systems, combat climate change, and unlock new possibilities for space exploration and technology.",
        icon: "☀️"
      },
      {
        title: "World Wide Web Goes Public",
        date: "1993",
        shortDescription: "CERN puts the World Wide Web software in the public domain.",
        fullDescription: "Tim Berners-Lee's invention became freely available to all, sparking an explosion of websites and online services, and making the internet accessible to the general public.",
        icon: "🌍"
      },
      
    ]
  },
];
