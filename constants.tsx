
import React from 'react';
import { 
  Building2, 
  LineChart, 
  ShieldCheck, 
  RotateCcw, 
  Users, 
  Briefcase, 
  Cpu, 
  PieChart,
  Target,
  Search,
  PenTool,
  Zap,
  Repeat
} from 'lucide-react';
import { Service, LeadershipMember, Step, Testimonial, CaseStudy, BlogPost } from './types';

export const COLORS = {
  primary: '#1e3a8a', // Deep Blue
  secondary: '#64748b', // Slate Gray
  accent: '#0f172a', // Dark Navy
  bg: '#f8fafc' // Slate 50
};

export const SERVICES: Service[] = [
  {
    id: 'lifecycle',
    title: 'Corporate Lifecycle Advisory',
    description: 'Guiding your business through every stage of its evolution in the GCC market.',
    icon: <Building2 className="w-8 h-8" />,
    items: [
      'Company formation and market entry',
      'Ongoing compliance and governance',
      'Business restructuring and turnaround',
      'Insolvency and liquidation support'
    ]
  },
  {
    id: 'management',
    title: 'Management Consulting',
    description: 'Defining future-proof strategies and optimizing operational excellence.',
    icon: <Target className="w-8 h-8" />,
    items: [
      'Growth strategy development',
      'Operating model design',
      'Performance improvement',
      'Organizational transformation'
    ]
  },
  {
    id: 'financial',
    title: 'Accounting & Financial Advisory',
    description: 'Ensuring financial clarity and readiness for institutional investment.',
    icon: <LineChart className="w-8 h-8" />,
    items: [
      'Investor-ready reporting',
      'Audit preparation & support',
      'Financial planning & analysis',
      'Risk management framework'
    ]
  },
  {
    id: 'technology',
    title: 'Technology Advisory',
    description: 'Leveraging digital tools to create competitive advantages.',
    icon: <Cpu className="w-8 h-8" />,
    items: [
      'Workflow automation',
      'Digital enablement strategy',
      'Tech stack optimization',
      'Data-driven decision systems'
    ]
  }
];

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: 'Praveen Kumar',
    title: 'Co-Founder & Head of Strategy',
    bio: 'An expert in technology-led business consulting with over 15 years of experience scaling enterprises across the Middle East. Focused on operational design and digital transformation.',
    image: 'https://picsum.photos/seed/praveen/400/500'
  },
  {
    name: 'Dinesh',
    title: 'Co-Founder & Head of Financial Strategy',
    bio: 'A seasoned financial advisor specializing in capital structure, corporate governance, and regional compliance. Dinesh has led numerous successful restructurings in the UAE and Oman.',
    image: 'https://picsum.photos/seed/dinesh/400/500'
  }
];

export const PROCESS: Step[] = [
  {
    number: '01',
    title: 'Diagnose',
    description: 'We conduct a deep dive into your current operations, financials, and market positioning to identify core challenges and hidden opportunities.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Collaboratively, we craft a bespoke roadmap focused on resilient growth, governance, and technology integration tailored to the GCC landscape.'
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Our hands-on approach ensures strategies are implemented effectively. We work alongside your team to navigate hurdles and hit milestones.'
  },
  {
    number: '04',
    title: 'Transfer',
    description: 'We build sustainable internal capabilities, ensuring your team has the skills and systems to thrive long after our primary engagement.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Al-Mansoori',
    role: 'Founder & CEO',
    company: 'Nexus Tech Solutions (UAE)',
    quote: "Dillon & Bird were instrumental in our UAE market entry. Their combination of local regulatory knowledge and deep technology advisory helped us scale from a team of 5 to 50 within eighteen months.",
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Ahmed Bin Saeed',
    role: 'Managing Director',
    company: 'Saeed Family Conglomerate (Oman)',
    quote: "During a critical restructuring phase, Dinesh and his team provided the financial clarity and governance frameworks we desperately needed. They are true partners who stay until the work is done.",
    image: 'https://i.pravatar.cc/150?u=ahmed'
  },
  {
    id: '3',
    name: 'Mark Henderson',
    role: 'Chief Operating Officer',
    company: 'Global Retail Partners',
    quote: "The fractional CXO services provided by Dillon & Bird allowed us to access tier-one strategic leadership without the immediate cost of full-time hires. Their 'Transfer' philosophy is a game changer.",
    image: 'https://i.pravatar.cc/150?u=mark'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'retail-transformation',
    title: 'Digital Transformation for Regional Retail',
    industry: 'Consumer Goods & Retail',
    challenge: 'A legacy retail chain was struggling with fragmented supply chain data and manual reporting processes, leading to high operational costs and stockouts.',
    solution: 'We implemented a custom workflow automation suite and redesigned their operating model to prioritize data-driven inventory management.',
    results: [
      '35% reduction in operational overhead',
      'Inventory accuracy improved to 99%',
      'Successful rollout of real-time performance dashboards'
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070'
  },
  {
    id: 'manufacturing-restructuring',
    title: 'Financial Turnaround of a Tier-2 Manufacturer',
    industry: 'Manufacturing & Industrial',
    challenge: 'Declining margins and high debt leverage threatened the survival of a 20-year-old family-run manufacturing facility in Oman.',
    solution: 'Dillon & Bird Partners led a comprehensive financial restructuring, including debt renegotiation and the design of a leaner, growth-oriented strategy.',
    results: [
      'Debt successfully restructured with extended maturity',
      'Return to profitability within 10 months',
      'Secured $5M in growth capital following audit preparation'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'gcc-market-entry-2025',
    title: 'Navigating GCC Market Entry Strategies',
    category: 'Market Entry',
    date: 'May 12, 2025',
    author: 'Praveen Kumar',
    summary: 'The GCC region offers unparalleled growth opportunities, but success requires more than just capital. We explore the essential pillars of a resilient entry strategy.',
    content: `Entering the GCC market—specifically the UAE, Saudi Arabia, and Oman—presents a unique set of challenges and rewards. While the regulatory landscape has become significantly more investor-friendly, the nuances of local governance, cultural expectations, and digital maturity levels vary widely.

At Dillon & Bird Partners, we emphasize a 'Diagnose First' approach. Before committing capital, founders must understand the specific compliance requirements of their chosen jurisdiction. Whether it's choosing between a Free Zone or Onshore entity in the UAE, or navigating the Foreign Capital Investment Law in Oman, the right structure is the foundation of future growth.

Furthermore, digital enablement is no longer optional. A successful entry strategy must integrate technology from day one to ensure operational efficiency in high-cost environments. In this article, we break down the five critical steps every firm must take before their first day of regional operations.`,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070'
  }
];
