export interface Project {
  id: number;
  title: string;
  brand: string;
  category: string[];
  image: string;
  description: string;
  tags: string[];
  color: string;
}

export interface CaseStudy {
  id: number;
  brand: string;
  projectType: string;
  objective: string;
  solution: string;
  projects: Project[];
}

export const categories = [
  'All',
  'Social Media',
  'Branding',
  'Logo Design',
  'Advertising',
  'YouTube',
  'Print Design',
];

export const services = [
  {
    title: "Logo Design",
    description: "Premium logo design and brand identity solutions."
  },
  {
    title: "Social Media Design",
    description: "Creative social media posts and advertising designs."
  },
  {
    title: "UI/UX Design",
    description: "Modern website and mobile app interface designs."
  },
  {
    title: "Video Editing",
    description: "Professional video editing and motion graphics."
  }
];
export const projects: Project[] = [
  {
    id: 1,
    title: 'Instagram Promotional Post',
    brand: 'NOIR ELEGANCE',
    category: ['Social Media', 'Advertising'],
    image: '/images/fashion-post.jpg',
    description: 'Luxury fashion brand social media campaign with dark moody aesthetic and gold accents.',
    tags: ['Fashion', 'Instagram', 'Social Media'],
    color: '#C9A84C',
  },
  {
    id: 2,
    title: 'Food Promotional Post',
    brand: 'SAFFRON BISTRO',
    category: ['Social Media', 'Advertising'],
    image: '/images/restaurant-post.jpg',
    description: 'Premium restaurant social media design featuring gourmet food photography with warm amber tones.',
    tags: ['Restaurant', 'Food', 'Social Media'],
    color: '#D4883A',
  },
  {
    id: 3,
    title: 'AI Product Launch Post',
    brand: 'NEXUS AI',
    category: ['Social Media', 'Advertising'],
    image: '/images/tech-post.jpg',
    description: 'Futuristic technology brand launch campaign with neural network visuals and holographic elements.',
    tags: ['Technology', 'AI', 'Product Launch'],
    color: '#6C5CE7',
  },
  {
    id: 4,
    title: 'Gym Promotional Post',
    brand: 'APEX FITNESS',
    category: ['Social Media', 'Advertising'],
    image: '/images/fitness-post.jpg',
    description: 'High-energy fitness brand campaign with dramatic lighting and bold motivational typography.',
    tags: ['Fitness', 'Gym', 'Social Media'],
    color: '#E74C3C',
  },
  {
    id: 5,
    title: 'Property Advertisement',
    brand: 'SKYLINE PROPERTIES',
    category: ['Social Media', 'Advertising'],
    image: '/images/realestate-post.jpg',
    description: 'Luxury real estate marketing visual with premium architectural photography and gold typography.',
    tags: ['Real Estate', 'Luxury', 'Advertising'],
    color: '#C9A84C',
  },
  {
    id: 6,
    title: 'Service Promotion Post',
    brand: 'PULSE DIGITAL',
    category: ['Social Media', 'Advertising'],
    image: '/images/agency-post.jpg',
    description: 'Digital marketing agency brand campaign with data visualization and modern gradient design.',
    tags: ['Agency', 'Marketing', 'Social Media'],
    color: '#5B3DF6',
  },
  {
    id: 7,
    title: 'Product Launch Post',
    brand: 'SONIQ AUDIO',
    category: ['Social Media', 'Advertising'],
    image: '/images/ecommerce-post.jpg',
    description: 'Premium e-commerce product launch design with minimalist Apple-inspired product photography.',
    tags: ['E-commerce', 'Product', 'Launch'],
    color: '#00B4D8',
  },
  {
    id: 8,
    title: 'YouTube Thumbnail',
    brand: 'Creative Pro',
    category: ['YouTube', 'Social Media'],
    image: '/images/youtube-thumbnail.jpg',
    description: 'High-impact YouTube thumbnail design with bold typography and vibrant colors for maximum CTR.',
    tags: ['YouTube', 'Thumbnail', 'Creator'],
    color: '#FF0000',
  },
  {
    id: 9,
    title: 'Brand Identity Package',
    brand: 'AURORA STUDIO',
    category: ['Branding', 'Logo Design'],
    image: '/images/brand-identity.jpg',
    description: 'Complete brand identity including logo, business cards, letterhead, color palette and typography.',
    tags: ['Branding', 'Logo', 'Identity'],
    color: '#D4883A',
  },
  {
    id: 10,
    title: 'Personal Branding Post',
    brand: 'Personal Brand',
    category: ['Social Media', 'Branding'],
    image: '/images/personal-brand.jpg',
    description: 'Professional personal branding social media design with modern geometric elements.',
    tags: ['Personal Brand', 'Social Media', 'Coaching'],
    color: '#5B3DF6',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    brand: 'NOIR ELEGANCE',
    projectType: 'Luxury Fashion Brand Campaign',
    objective: 'Create a complete social media presence for a luxury fashion brand launching their 2025 collection. The brand needed Instagram posts, carousel designs, story templates, and product advertisements that conveyed exclusivity and premium quality.',
    solution: 'Developed a dark moody visual identity with gold accents, sophisticated serif typography, and high-contrast imagery. Created a cohesive set of templates including promotional posts, multi-slide carousels, story formats, and product-focused advertisements. The designs maintained brand consistency while adapting to each format\'s unique requirements.',
    projects: [projects[0]],
  },
  {
    id: 2,
    brand: 'NEXUS AI',
    projectType: 'Technology Brand Launch',
    objective: 'Design launch materials for an AI technology startup entering the market. Required futuristic, cutting-edge visuals that communicate innovation while remaining approachable and professional.',
    solution: 'Created a visual system using deep blue-to-purple gradients, neural network visualizations, and glass morphism design elements. The typography combined bold geometric headlines with clean body text. Each design piece—from product launch posts to feature announcements—maintained the futuristic aesthetic while clearly communicating product benefits.',
    projects: [projects[2]],
  },
  {
    id: 3,
    brand: 'SAFFRON BISTRO',
    projectType: 'Premium Restaurant Branding',
    objective: 'Develop social media and print materials for an upscale restaurant that wanted to attract food enthusiasts and establish their brand as a premium dining destination.',
    solution: 'Used warm amber tones against dark backgrounds to create an intimate, luxurious feel. Food photography was styled with dramatic lighting and professional plating. Typography paired elegant scripts with modern sans-serifs. Created promotional posts, offer posters, menu designs, and Instagram stories that made the dining experience feel exclusive.',
    projects: [projects[1]],
  },
  {
    id: 4,
    brand: 'AURORA STUDIO',
    projectType: 'Complete Brand Identity',
    objective: 'Build a comprehensive brand identity from scratch for a creative studio, including logo design, visual system, business materials, and brand guidelines.',
    solution: 'Designed a minimal geometric logo mark in gold/amber that represents creativity and precision. Extended the identity into a complete brand package: business cards, letterhead, color palette system, typography hierarchy, and presentation mockups. The warm metallic accent against dark backgrounds created a premium yet approachable brand presence.',
    projects: [projects[8]],
  },
  {
    id: 5,
    brand: 'PULSE DIGITAL',
    projectType: 'Digital Marketing Agency Campaign',
    objective: 'Create marketing materials for a digital agency looking to attract new clients through social media. Needed designs that demonstrated their expertise in digital growth and data-driven marketing.',
    solution: 'Built a visual system featuring data visualization elements, growth charts, and modern gradient transitions from purple to blue. Glass morphism cards and clean iconography communicated professionalism and technical expertise. The campaign included service promotion posts, statistics carousels, client acquisition ads, and story templates.',
    projects: [projects[5]],
  },
];

export const services = [
  {
    icon: '📱',
    title: 'Social Media Post Design',
    description: 'Eye-catching posts for Instagram, Facebook, LinkedIn, and Twitter that drive engagement and build brand awareness.',
  },
  {
    icon: '🎨',
    title: 'Brand Identity Design',
    description: 'Complete brand packages including logo, color palette, typography, and brand guidelines for a cohesive visual identity.',
  },
  {
    icon: '📐',
    title: 'UI/UX Design',
    description: 'Intuitive mobile app and web interfaces designed with user experience at the forefront, from wireframe to final mockup.',
  },
  {
    icon: '🎯',
    title: 'Advertisement Design',
    description: 'High-converting ad creatives for digital and print campaigns that grab attention and drive results.',
  },
  {
    icon: '🎬',
    title: 'YouTube Design',
    description: 'Thumbnails, banners, end screens, and channel branding that increase click-through rates and subscriber growth.',
  },
  {
    icon: '📋',
    title: 'Print Design',
    description: 'Professional flyers, menus, posters, brochures, and business cards designed for maximum visual impact.',
  },
  {
    icon: '✏️',
    title: 'Logo Design',
    description: 'Memorable, versatile logos that capture brand essence—from minimal wordmarks to detailed emblems.',
  },
  {
    icon: '📊',
    title: 'Carousel Design',
    description: 'Multi-slide carousel posts for Instagram and LinkedIn that tell your brand story and educate your audience.',
  },
];

export const skills = [
  { name: 'Graphic Design', level: 95 },
  { name: 'Brand Identity', level: 92 },
  { name: 'Social Media Design', level: 97 },
  { name: 'Adobe Photoshop', level: 94 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'Figma', level: 88 },
  { name: 'Typography', level: 93 },
  { name: 'Visual Branding', level: 91 },
  { name: 'Marketing Design', level: 89 },
];

export const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'Bloom Beauty Co.',
    text: 'Fayaz completely transformed our brand identity. The social media designs he created doubled our engagement within the first month. His attention to detail is unmatched.',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Marketing Director',
    company: 'TechVault Inc.',
    text: 'Working with Faizu Design Studio was an incredible experience. The designs are not just beautiful—they convert. Our ad click-through rate increased by 340%.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'Aura Fitness Studio',
    text: 'From logo to complete social media branding, Fayaz delivered everything with premium quality. The designs look like they came from a top agency. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Content Creator',
    company: 'Chen Creates',
    text: 'The YouTube thumbnails and channel branding Fayaz designed for me are next level. My CTR went from 4% to 12%. Every creator needs a designer like this.',
    rating: 5,
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your brand, goals, target audience, and vision through detailed consultation.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Concept',
    description: 'Developing initial concepts, mood boards, and design directions that align with your brand strategy.',
    icon: '💡',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Crafting pixel-perfect designs with professional typography, composition, and visual hierarchy.',
    icon: '🎨',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Refining based on feedback and delivering production-ready files in all required formats.',
    icon: '🚀',
  },
];
