// Centralized school information and event image manifest.

export const school = {
  name: 'Clifton Public School',
  shortName: 'CPS',
  tagline: 'Each Child Is Our Concern',
  address: 'D-30, Block-2, Clifton, Karachi, Pakistan',
  phone: '+92 21 35371854',
  mobile: '0322 3395223',
  admission: '0333 3292131',
  email: 'clifton_public_school@hotmail.com',
  facebook: 'https://www.facebook.com/CliftonPublicSchoolKhi/',
  instagram: 'https://www.instagram.com/cliftonpublicschool/',
  whatsapp: '923223395223',
  mapsEmbed:
    'https://www.google.com/maps?q=D-30%20Block%202%20Clifton%20Karachi&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=D-30+Block+2+Clifton+Karachi',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'principal', label: 'Principal' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'academics', label: 'Academics' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'events', label: 'Events' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'social', label: 'Social' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

// Filenames live in /public/gallery/. They are converted into clean titles at render time.
export const galleryFiles = [
  { file: 'Independence_Day_Celebration.jpg', category: 'Celebrations' },
  { file: 'National_Anthem_Salute.jpg', category: 'Events' },
  { file: 'Cultural_Performance.jpg', category: 'Celebrations' },
  { file: 'Annual_Day_Function.jpg', category: 'Events' },
  { file: 'Tableau_Performance.jpg', category: 'Celebrations' },
  { file: 'Science_Exhibition.jpg', category: 'Academics' },
  { file: 'Sports_Day.jpg', category: 'Sports' },
  { file: 'Prize_Distribution.jpg', category: 'Events' },
  { file: 'Quaid_Day_Celebration.jpg', category: 'Celebrations' },
  { file: 'School_Assembly.jpg', category: 'Campus' },
];

// Convert "Sports_Day.jpg" -> "Sports Day"
export const titleFromFile = (file) =>
  file
    .replace(/\.[^/.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');

export const eventDescriptions = {
  default:
    'A glimpse of the vibrant spirit, creativity, and discipline that defines life at Clifton Public School.',
};

export const stats = [
  { label: 'Students', value: 850, suffix: '+' },
  { label: 'Teachers', value: 45, suffix: '+' },
  { label: 'Years of Excellence', value: 35, suffix: '+' },
  { label: 'Activities', value: 60, suffix: '+' },
];

export const notices = [
  'Admissions Open for Academic Year 2026–27',
  'Mid-Term Examinations begin from 12 June',
  'Annual Sports Day scheduled for 20 December',
  'Parent–Teacher Meeting on Saturday, 24 May',
  'Eid-ul-Adha holidays announced — see website for dates',
  'New Smart Classrooms now operational across all grades',
];

export const testimonials = [
  {
    name: 'Ayesha Rahim',
    role: 'Parent of Grade 5 Student',
    quote:
      'The teachers at Clifton Public School genuinely care. My daughter has grown in confidence, curiosity and character since joining.',
    rating: 5,
  },
  {
    name: 'Hamza Siddiqui',
    role: 'Alumni, Class of 2018',
    quote:
      'CPS gave me discipline and a love for learning that still guides me through university. The values stay with you for life.',
    rating: 5,
  },
  {
    name: 'Sana Tariq',
    role: 'Parent of Grade 2 Student',
    quote:
      'A safe, warm and beautifully run school. The admission process was smooth and the staff is wonderfully attentive.',
    rating: 5,
  },
  {
    name: 'Bilal Ahmed',
    role: 'Student, Grade 9',
    quote:
      'I love our science lab and the activities. Teachers push us to think, not just memorise. School feels like a second home.',
    rating: 5,
  },
];
