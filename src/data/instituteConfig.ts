/**
 * Centralized Configuration & Data File for Dipti's Pro Abacus Institute
 * Edit this file to update institute details, contact numbers, programs, batches, FAQs, and testimonials.
 */

export interface ProgramItem {
  id: string;
  name: string;
  badge: string;
  suitableFor: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  popular?: boolean;
}

export interface BatchItem {
  id: string;
  name: string;
  days: string;
  time: string;
  mode: string;
  location: string;
  seatsStatus: string;
  isPlaceholderNote?: string;
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  childNameAndLevel: string;
  rating: number;
  quote: string;
  location: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Abacus Learning' | 'Activities' | 'Events' | 'Student Practice';
  description: string;
  accentColor: string;
  tag: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const INSTITUTE_CONFIG = {
  name: "Dipti's Pro Abacus Institute",
  shortName: "Dipti's Pro Abacus",
  founder: "Dipti",
  establishedYear: "2018",
  location: {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    addressDisplay: "Near City Center, Mumbai, Maharashtra 400001, India",
    addressNote: "Exact branch/studio address provided upon confirmed enquiry or visit appointment",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160982327!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Mumbai,Maharashtra,India",
  },
  contact: {
    phoneDisplay: "+91 98200 12345",
    phoneCallable: "+919820012345",
    email: "admissions@diptisproabacus.com",
    supportEmail: "info@diptisproabacus.com",
    whatsappNumber: "919820012345",
    whatsappDefaultMessage: "Hello Dipti's Pro Abacus Institute! I would like to enquire about Abacus & Mental Maths batches for my child.",
    officeHours: "Monday – Saturday: 9:00 AM – 7:00 PM (IST)",
    sundayHours: "Sunday: By Appointment for Batch Assessments",
  },
  social: {
    instagram: "https://instagram.com/diptisproabacus",
    facebook: "https://facebook.com/diptisproabacus",
    youtube: "https://youtube.com/@diptisproabacus",
    whatsapp: "https://wa.me/919820012345",
  },
  trustPillars: [
    {
      id: "trust-1",
      title: "Abacus Training",
      subtitle: "Structured Soroban Foundation",
      description: "Step-by-step master curriculum from physical bead handling to mental visualization.",
      metric: "Multi-Level",
      subtext: "Comprehensive System",
    },
    {
      id: "trust-2",
      title: "Mental Maths",
      subtitle: "Speed & Visualization",
      description: "Enables children to calculate multi-digit arithmetic mentally in mere seconds.",
      metric: "3x to 5x",
      subtext: "Faster Calculation",
    },
    {
      id: "trust-3",
      title: "Personal Attention",
      subtitle: "Small Focused Batches",
      description: "Dedicated mentor feedback ensuring every child learns at their optimal pace.",
      metric: "1:8 Max",
      subtext: "Student-Mentor Ratio",
    },
    {
      id: "trust-4",
      title: "Confidence Building",
      subtitle: "Eliminating Math Anxiety",
      description: "Transforming mathematics from a scary subject into an enjoyable brain sport.",
      metric: "100%",
      subtext: "Confidence Boost",
    },
  ],
  whyAbacus: [
    {
      id: "why-1",
      title: "Faster Calculations",
      description: "Children perform addition, subtraction, multiplication, and division at lightning speed without paper or calculators.",
    },
    {
      id: "why-2",
      title: "Better Concentration",
      description: "Moving beads with focused visual memory trains sustained attention spans and eliminates classroom distraction.",
    },
    {
      id: "why-3",
      title: "Improved Memory",
      description: "Dual-hemisphere mental imagery exercises photographic recall, helping children retain academic concepts effortlessly.",
    },
    {
      id: "why-4",
      title: "Mental Mathematics",
      description: "Translates abstract numbers into vivid bead pictures inside the mind's eye for instant mental arithmetic.",
    },
    {
      id: "why-5",
      title: "Logical Thinking",
      description: "Sharpens analytical reasoning, pattern identification, and step-by-step problem-solving capabilities.",
    },
    {
      id: "why-6",
      title: "Increased Confidence",
      description: "Mastering rapid calculations gives children high self-esteem that radiates into school exams and everyday life.",
    },
  ],
  programs: [
    {
      id: "foundation",
      name: "Abacus Foundation",
      badge: "Beginners",
      suitableFor: "Beginners (approx. 5–7 years)",
      ageGroup: "5 to 7 Years",
      description: "Build strong fundamentals of Abacus, numbers and basic calculations with tactile bead recognition.",
      highlights: [
        "Bead manipulation & number values",
        "Single-digit & double-digit addition/subtraction",
        "Finger gymnastics & coordination",
        "Fun arithmetic games and speed drills",
      ],
      popular: false,
    },
    {
      id: "level-program",
      name: "Abacus Level Program",
      badge: "Progressive Learners",
      suitableFor: "Progressive Learners (approx. 7–12 years)",
      ageGroup: "7 to 12 Years",
      description: "Structured level-based training designed to improve calculation speed and accuracy across multi-digit numbers.",
      highlights: [
        "Structured 8-tier progression system",
        "Multi-digit addition, subtraction & multiplication",
        "Division fundamentals on the Soroban frame",
        "Gradual transition to virtual mental abacus",
      ],
      popular: true,
    },
    {
      id: "mental-maths",
      name: "Mental Maths",
      badge: "Advanced Learners",
      suitableFor: "Advanced Learners (approx. 8–15 years)",
      ageGroup: "8 to 15 Years",
      description: "Develop mental calculation techniques and improve speed, accuracy and confidence without needing physical tools.",
      highlights: [
        "Anzan (mental calculation through imagination)",
        "Rapid flash calculation drills",
        "Competitive exam math shortcuts",
        "Dual-hemisphere cognitive stimulation",
      ],
      popular: false,
    },
    {
      id: "speed-calculation",
      name: "Speed Calculation",
      badge: "Skill Enhancement",
      suitableFor: "Skill Enhancement (approx. 9–15 years)",
      ageGroup: "9 to 15 Years",
      description: "Focused practice for faster calculations and improved problem-solving ability in timed competitive conditions.",
      highlights: [
        "Timed speed challenges & accuracy meters",
        "Complex problem decomposition",
        "Competition preparation & olympiad readiness",
        "Daily micro-practice routine strategies",
      ],
      popular: false,
    },
  ] as ProgramItem[],
  batches: [
    {
      id: "foundation-batch",
      name: "Foundation Batch",
      days: "Mon / Wed / Fri",
      time: "4:30 PM – 5:30 PM (TBA)",
      mode: "Offline & Online Hybrid",
      location: "Mumbai Center / Live Interactive",
      seatsStatus: "Admissions Open",
      isPlaceholderNote: "Timings & schedule are editable placeholders to suit parent preferences.",
    },
    {
      id: "weekend-batch",
      name: "Weekend Batch",
      days: "Saturday & Sunday",
      time: "10:30 AM – 12:00 PM (TBA)",
      mode: "Offline / Online",
      location: "Mumbai Center / Live Interactive",
      seatsStatus: "Fast Filling",
      isPlaceholderNote: "Ideal for school-going students looking for focused weekend sessions.",
    },
    {
      id: "weekday-batch",
      name: "Weekday Batch",
      days: "Tuesday & Thursday",
      time: "5:00 PM – 6:30 PM (TBA)",
      mode: "Offline / Online",
      location: "Mumbai Center",
      seatsStatus: "Admissions Open",
      isPlaceholderNote: "Balanced evening slot allowing ample time for school homework.",
    },
    {
      id: "personalized-batch",
      name: "Personalized Batch",
      days: "Flexible Weekdays / Weekends",
      time: "Custom Slots (TBA)",
      mode: "1-on-1 Dedicated Mentorship",
      location: "Mumbai Studio / Private Online",
      seatsStatus: "Limited Slots Available",
      isPlaceholderNote: "Tailored pacing for accelerated learning or specialized focus.",
    },
  ] as BatchItem[],
  learningSteps: [
    {
      step: "01",
      title: "Assessment",
      description: "Friendly diagnostic interaction to understand your child's current number familiarity, cognitive focus, and learning pace.",
    },
    {
      step: "02",
      title: "Foundation Training",
      description: "Tactile hands-on Soroban learning where children map numerical values to physical beads using bilateral finger movements.",
    },
    {
      step: "03",
      title: "Regular Practice",
      description: "Engaging 15-minute daily guided practice sheets and timed flash drills that turn arithmetic into an effortless reflex.",
    },
    {
      step: "04",
      title: "Progress & Advancement",
      description: "Level certifications, mental calculation milestones, and noticeable academic confidence reflected in school report cards.",
    },
  ],
  benefits: [
    {
      title: "Faster mental calculations",
      description: "Solve complex sums in seconds mentally before peers can write the question down.",
    },
    {
      title: "Improved concentration",
      description: "Deepens attention span by requiring total visual and auditory engagement during speed drills.",
    },
    {
      title: "Better number sense",
      description: "Transforms numbers from dry digits into tangible bead patterns that make arithmetic intuitive.",
    },
    {
      title: "Stronger memory",
      description: "Enhances photographic short-term and working memory through rapid bead image retention.",
    },
    {
      title: "Improved confidence",
      description: "Removes math phobia and instills a genuine sense of academic pride in the child.",
    },
    {
      title: "Better focus",
      description: "Builds laser focus that carries over positively to school subjects and extracurriculars.",
    },
    {
      title: "Logical thinking",
      description: "Stimulates structural problem solving, sequential deduction, and analytical discipline.",
    },
    {
      title: "Regular practice habits",
      description: "Fosters self-discipline through structured, bite-sized daily arithmetic exercises.",
    },
  ],
  testimonials: [
    {
      id: "test-1",
      parentName: "Pooja Mehta",
      childNameAndLevel: "Mother of Aarav (Age 8, Level 3)",
      rating: 5,
      quote: "My child has become much more confident with numbers and enjoys the practice sessions. His school teacher also noticed a remarkable jump in his calculation speed and attentiveness!",
      location: "Andheri, Mumbai",
    },
    {
      id: "test-2",
      parentName: "Rajesh Kulkarni",
      childNameAndLevel: "Father of Ananya (Age 7, Foundation)",
      rating: 5,
      quote: "Before joining Dipti's Pro Abacus, Ananya used to dread math homework. Now she enthusiastically calculates grocery totals in her head. The personal attention in small batches is wonderful.",
      location: "Dadar, Mumbai",
    },
    {
      id: "test-3",
      parentName: "Sneha Sharma",
      childNameAndLevel: "Mother of Vivaan (Age 10, Mental Maths)",
      rating: 5,
      quote: "The mental maths techniques taught here are extraordinary. Vivaan calculates double-digit multiplications without a piece of paper. The teaching method is very warm, structured and encouraging.",
      location: "Borivali, Mumbai",
    },
    {
      id: "test-4",
      parentName: "Vikram Deshmukh",
      childNameAndLevel: "Father of Riya (Age 9, Level 4)",
      rating: 5,
      quote: "What impressed us most is the improvement in memory and focus. Riya's concentration has improved not just in mathematics, but across all her subjects. Highly recommended to Mumbai parents!",
      location: "Ghatkopar, Mumbai",
    },
  ] as TestimonialItem[],
  gallery: [
    {
      id: "gal-1",
      title: "Active Abacus Classroom Session",
      category: "Classroom",
      description: "Students collaborating on speed arithmetic exercises in a focused, welcoming environment.",
      accentColor: "#1E3A8A",
      tag: "Interactive Learning",
    },
    {
      id: "gal-2",
      title: "Precision Finger Technique",
      category: "Abacus Learning",
      description: "Mastering the two-finger technique on the Soroban frame for rapid bead manipulation.",
      accentColor: "#D97706",
      tag: "Hands-on Mastery",
    },
    {
      id: "gal-3",
      title: "Brain Gym & Speed Drills",
      category: "Activities",
      description: "Energizing mental warmup activities designed to synchronize left and right brain lobes.",
      accentColor: "#0284C7",
      tag: "Brain Workout",
    },
    {
      id: "gal-4",
      title: "Annual Speed Arithmetic Showcase",
      category: "Events",
      description: "Proud students showcasing rapid mental calculations and receiving certificate honors.",
      accentColor: "#059669",
      tag: "Milestone Celebration",
    },
    {
      id: "gal-5",
      title: "Focused Mental Flash Practice",
      category: "Student Practice",
      description: "A student demonstrating intense concentration during an Anzan mental calculation test.",
      accentColor: "#7C3AED",
      tag: "Flash Math",
    },
    {
      id: "gal-6",
      title: "One-on-One Concept Coaching",
      category: "Classroom",
      description: "Individual attention provided to clarify carryover formulas and bead positioning.",
      accentColor: "#EA580C",
      tag: "Personal Attention",
    },
  ] as GalleryItem[],
  faqs: [
    {
      id: "faq-1",
      question: "What is Abacus?",
      answer: "An Abacus is a traditional Japanese counting instrument (Soroban) with vertical rods and movable beads. In our program, children first learn to manipulate physical beads to perform addition, subtraction, multiplication, and division. Gradually, they visualize the abacus frame in their mind, allowing them to solve complex calculations mentally at astonishing speeds without any calculator or paper.",
      category: "Basics",
    },
    {
      id: "faq-2",
      question: "At what age can children start Abacus?",
      answer: "Children can typically begin Abacus training from approximately 5 years of age up to 15 years. Between ages 5 and 12, the human brain undergoes its most rapid neuro-plastic development, making it the golden window to build spatial awareness, photographic memory, and cognitive reflexes.",
      category: "Admissions",
    },
    {
      id: "faq-3",
      question: "How does Abacus improve calculation skills?",
      answer: "Traditional math teaches numbers as abstract symbols on paper, which can be hard for young minds to grasp. Abacus translates abstract numbers into concrete, physical beads. By engaging visual, tactile, and auditory senses simultaneously, children form mental images of numbers and calculate by moving virtual beads in their mind's eye.",
      category: "Methodology",
    },
    {
      id: "faq-4",
      question: "How long is each session?",
      answer: "Each regular class session typically lasts between 60 to 90 minutes, depending on the child's level and whether it is a weekday or weekend batch. The sessions are carefully structured with concept teaching, hands-on abacus drills, mental maths games, and short brain-gym exercises so children never feel fatigued.",
      category: "Schedule",
    },
    {
      id: "faq-5",
      question: "Are weekend batches available?",
      answer: "Yes, we offer dedicated Saturday and Sunday weekend batches specially designed for students with busy weekday school and activity schedules. Weekend slots feature immersive interactive practice and guided homework reviews.",
      category: "Batches",
    },
    {
      id: "faq-6",
      question: "Is personal attention provided?",
      answer: "Absolutely. We maintain small student-to-mentor ratios (maximum 6 to 8 students per batch) to ensure that every single child receives personalized observation, immediate error correction, and encouraging individual feedback tailored to their unique pace.",
      category: "Teaching",
    },
    {
      id: "faq-7",
      question: "Do you provide online classes?",
      answer: "Yes! Alongside our in-person batches in Mumbai, we offer live, interactive online classes with digital visual abacus tools and real-time mentor supervision for students who prefer learning from the comfort of home.",
      category: "Batches",
    },
    {
      id: "faq-8",
      question: "How can I enroll my child?",
      answer: "Enrolling is simple: fill out the online enquiry form on this website, call or WhatsApp our admissions desk. We will arrange a friendly complimentary assessment session to evaluate your child's starting point and recommend the ideal batch and level.",
      category: "Admissions",
    },
    {
      id: "faq-9",
      question: "Where is the institute located?",
      answer: "Dipti's Pro Abacus Institute is centrally located in Mumbai, Maharashtra, accessible to students from surrounding neighborhoods. Detailed address guidance and visiting appointments are provided upon batch enquiry to maintain small, secure classroom spaces.",
      category: "Location",
    },
    {
      id: "faq-10",
      question: "How can parents track progress?",
      answer: "Parents receive regular milestone updates, monthly speed & accuracy assessments, level completion certificates, and personal parent-teacher discussions to celebrate their child's cognitive growth and school performance.",
      category: "Progress",
    },
  ] as FAQItem[],
};
