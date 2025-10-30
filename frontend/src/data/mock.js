// Mock data for FRW Global Ministries website

export const navigationItems = [
  { name: 'ABOUT US', path: '/about' },
  { name: 'MINISTRIES', path: '/ministries' },
  { 
    name: 'SCHOOLS', 
    path: '/schools',
    dropdown: [
      { name: 'Jesus Cares M. School', path: '/schools/jesus-cares' },
    ]
  },
  { name: 'STORIES', path: '/stories' },
  { name: 'BLOG', path: '/blog' },
];

export const heroContent = {
  title: 'LOVING GOD AND LOVING OTHERS',
  subtitle: 'For the grace of God has appeared that offers salvation to all people. - Titus 2:11',
  videoUrl: 'https://vimeo.com/1132107066',
  backgroundImage: 'https://www.frwglobalministries.org/cdn/shop/files/crossssbg.jpg',
};

export const statsData = {
  number: '30+',
  description: 'YEARS OF MINISTRY IMPACT SINCE 1993',
  images: [
    'https://www.frwglobalministries.org/cdn/shop/files/frwkids1.jpg',
    'https://www.frwglobalministries.org/cdn/shop/files/frwkids3.jpg',
    'https://www.frwglobalministries.org/cdn/shop/files/frwfood.jpg',
    'https://www.frwglobalministries.org/cdn/shop/files/frwAbout1.jpg',
  ],
};

export const missionContent = {
  title: 'THE MISSION',
  description: 'United under the visionary leadership of Florence, our group at Jesus Cares Evangelistic Ministry International and Florence R. White Global Ministries shares a collective mission to illuminate the path of salvation and discipleship. Rooted in unity, we aspire to reflect the love and teachings of CHRIST in our actions.',
  highlight: 'Loving God and Loving Others',
};

export const aboutContent = {
  title: 'About Florence R. White Global Ministries',
  mission: 'Florence R. White Global Ministries is dedicated to spreading the Gospel of Jesus Christ and serving communities worldwide through evangelism, education, and compassionate outreach.',
  vision: 'Our vision is to see transformed lives and thriving communities that reflect the love of Christ, with a special focus on empowering the next generation through spiritual and educational development.',
  values: [
    {
      title: 'Faith in Action',
      description: 'We believe faith without works is dead. Our ministry demonstrates God\'s love through tangible service and support.',
    },
    {
      title: 'Global Impact',
      description: 'From local communities to international missions, we are committed to making a difference wherever God calls us.',
    },
    {
      title: 'Empowering Education',
      description: 'We invest in education as a pathway to breaking cycles of poverty and building sustainable futures.',
    },
    {
      title: 'Unity in Christ',
      description: 'We work together as one body in Christ, united in purpose and love for all people.',
    },
  ],
  leadershipBio: 'Florence R. White is a passionate evangelist and educator who has dedicated her life to serving God and making a difference in the lives of others. With over 30 years of ministry experience, she continues to lead with vision, compassion, and unwavering faith.',
};

export const schoolsContent = {
  mainSchool: {
    name: 'Jesus Cares M. School',
    description: 'A Christ-centered educational institution providing quality education and spiritual formation for children and youth.',
    mission: 'To educate and empower the next generation with academic excellence and biblical values, preparing them to be leaders who impact their communities for Christ.',
    programs: [
      'Primary Education (Grades 1-6)',
      'Secondary Education (Grades 7-12)',
      'Biblical Studies & Character Formation',
      'Arts & Music Programs',
      'Sports & Physical Education',
      'Community Service Projects',
    ],
    image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids5-1.jpg',
  },
  impact: {
    studentsServed: '500+',
    yearsOperating: '15+',
    graduationRate: '95%',
    scholarshipsProvided: '100+',
  },
};

export const actionCards = [
  {
    id: 1,
    title: 'Join the Movement',
    description: 'Get updates from our ministry and see how God is moving.',
    image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids5-1.jpg',
    link: '#newsletter',
  },
  {
    id: 2,
    title: 'Support the Ministry',
    description: 'Join a like-minded community of givers making a difference.',
    image: 'https://www.frwglobalministries.org/cdn/shop/files/frwfood.jpg',
    link: 'https://www.paypal.com/donate/?business=7PUG78MDTCB8A&no_recurring=0&item_name=Thank+you+for+your+donation%2C+may+God+bless.&currency_code=USD',
  },
  {
    id: 3,
    title: 'Pray for the Mission',
    description: 'Join a community of prayer warriors supporting global ministry.',
    image: 'https://www.frwglobalministries.org/cdn/shop/files/frwAbout1.jpg',
    link: '#prayer',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'God is Moving Through This Ministry',
    excerpt: 'See the incredible ways God is working through our ministry to bring hope and salvation to communities around the world.',
    date: 'March 15, 2024',
    author: 'Florence R. White',
    image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids1.jpg',
    category: 'Ministry Update',
  },
  {
    id: 2,
    title: 'Feeding the Hungry, Nourishing Souls',
    excerpt: 'Our food ministry continues to provide physical and spiritual nourishment to those in need, demonstrating Christ\'s love in action.',
    date: 'March 10, 2024',
    author: 'Ministry Team',
    image: 'https://www.frwglobalministries.org/cdn/shop/files/frwfood.jpg',
    category: 'Outreach',
  },
  {
    id: 3,
    title: 'Children\'s Ministry: Building Future Leaders',
    excerpt: 'Investing in the next generation through biblical teaching, mentorship, and showing them the transformative power of God\'s love.',
    date: 'March 5, 2024',
    author: 'Children\'s Ministry',
    image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids3.jpg',
    category: 'Children',
  },
  {
    id: 4,
    title: 'Global Impact: Reaching Nations',
    excerpt: 'Through partnerships and dedication, we continue to spread the Gospel across borders, bringing salvation to all people.',
    date: 'February 28, 2024',
    author: 'Florence R. White',
    image: 'https://www.frwglobalministries.org/cdn/shop/files/frwAbout1.jpg',
    category: 'Global Ministry',
  },
  {
    id: 5,
    title: 'Unity in Christ: Our Foundation',
    excerpt: 'Discover how our ministry remains rooted in unity, reflecting Christ\'s love through collaborative efforts and shared vision.',
    date: 'February 20, 2024',
    author: 'Ministry Team',
    image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids5-1.jpg',
    category: 'Testimony',
  },
  {
    id: 6,
    title: 'The Power of Grace',
    excerpt: 'Exploring how God\'s grace transforms lives and opens doors for salvation, one heart at a time.',
    date: 'February 15, 2024',
    author: 'Florence R. White',
    image: 'https://www.frwglobalministries.org/cdn/shop/files/crossssbg.jpg',
    category: 'Teaching',
  },
];

export const paypalDonateLink = 'https://www.paypal.com/donate/?business=7PUG78MDTCB8A&no_recurring=0&item_name=Thank+you+for+your+donation%2C+may+God+bless.&currency_code=USD';