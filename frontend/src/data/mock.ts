// Mock data for FRW Global Ministries website
import type {
  NavigationItem,
  HeroContent,
  StatsData,
  MissionContent,
  AboutContent,
  SchoolsContent,
  ActionCard,
  BlogPost,
} from '../types';

export const navigationItems: NavigationItem[] = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about' },
  { 
    name: 'SCHOOLS', 
    path: '/schools',
    dropdown: [
      { name: 'Jesus Cares Montessori School', path: '/schools/jesus-cares' },
    ]
  },
  { name: 'BLOG', path: '/blog' },
];

export const heroContent: HeroContent = {
  title: 'LOVING GOD AND LOVING OTHERS',
  subtitle: 'For the grace of God has appeared that offers salvation to all people. - Titus 2:11',
  videoUrl: 'https://vimeo.com/1132107066',
  backgroundImage: 'https://www.frwglobalministries.org/cdn/shop/files/crossssbg.jpg',
};

export const statsData: StatsData = {
  number: '30+',
  description: 'YEARS OF MINISTRY IMPACT SINCE 1993',
  images: [
    'https://images.unsplash.com/photo-1761208663994-5d8aac0f9276',
    'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e',
    'https://images.unsplash.com/photo-1694286068611-d0c24cbc2cd5',
    'https://images.unsplash.com/photo-1584365060375-146b264bbdb5',
  ],
};

export const missionContent: MissionContent = {
  title: 'THE MISSION',
  description: 'United under the visionary leadership of Florence, our group at Jesus Cares Evangelistic Ministry International and Florence R. White Global Ministries shares a collective mission to illuminate the path of salvation and discipleship. Rooted in unity, we aspire to reflect the love and teachings of CHRIST in our actions.',
  highlight: 'Loving God and Loving Others',
};

export const aboutContent = {
  title: 'About Florence R. White Global Ministries',
  founderName: 'Florence R. White',
  founderImage: 'https://www.frwglobalministries.org/cdn/shop/files/frw.png',
  founderBio: 'Florence is a mother, an international evangelist, church-planter, and Bible school director. Her goal is to evangelize the unsaved and to disciple them into reflections of Jesus Christ. Born and raised in Ghana, Florence is intimately aware of the harsh conditions many live through on a daily basis. Her ministry began with feeding people in her restaurant which quickly became a church. She officially founded Jesus Cares Evangelistic Ministry International in 1996.',
  usJourney: 'Florence came to the United States in 1999. She graduated from Rhema Bible Training Center in Tulsa, OK in 2001. She also completed the Ministry-In-Training Institute at Oral Roberts University, also in Tulsa.',
  ourMission: 'United under the visionary leadership of Florence, our group at Jesus Cares Evangelistic Ministry International shares a collective mission to illuminate the path of salvation and discipleship. Hailing from diverse backgrounds, we are bound by a common goal inspired by the compassionate spirit of our founder.',
  expansion: 'Born and raised in the challenging landscapes of Ghana, Florence\'s journey began with a simple act of kindness in her restaurant, evolving into a vibrant church and, in 1996, the official establishment of Jesus Cares Evangelistic Ministry International. Having expanded our reach to the United States in 1999, we are a community of believers propelled by the teachings of Jesus Christ.',
  commitment: 'Our collective mission is to reach the lost, extending our hands in both practical assistance and spiritual guidance. As a group, we are dedicated to embodying the love, compassion, and transformative power of the Gospel. Rooted in unity, we aspire to reflect the love and teachings of Christ in our actions.',
};

export const schoolsContent = {
  mainSchool: {
    name: 'Jesus Cares Montessori School',
    tagline: 'Nurturing Minds, Transforming Lives',
    description: 'An educational haven founded by Apostle Florence White and supported by Jesus Cares Ministry, embodying the transformative power of love, education, and community impact in Ghana.',
    mission: 'Dedicated to providing not just academic excellence but also a nurturing environment that caters to the unique needs of each child, fostering intellectual, emotional, and spiritual growth.',
    guidance: 'Guided by Christian values, the school instills a sense of moral purpose and compassion, shaping future leaders with a strong moral compass.',
    commitment: 'With a commitment to community upliftment, the school extends its positive influence beyond the classroom, offering support and educational outreach to families.',
    founded: '2008',
    location: 'Ghana, West Africa',
    image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids9.jpg',
  },
  verses: [
    {
      verse: 'GALATIANS 6:2',
      text: '"Bear one another\'s burdens, and so fulfill the law of Christ."',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/jcmsdp.png',
    },
    {
      verse: 'PHILIPPIANS 2:4',
      text: '"Let each of you look not only to his own interests, but also to the interests of others."',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/IMG_2452.jpg',
    },
    {
      verse: 'HEBREWS 13:16',
      text: '"And do not forget to do good and to share with others, for with such sacrifices God is pleased."',
      image: 'https://www.frwglobalministries.org/cdn/shop/files/frwkids7.jpg',
    },
  ],
  galleryImages: [
    'https://www.frwglobalministries.org/cdn/shop/files/frwkids9.jpg',
    'https://www.frwglobalministries.org/cdn/shop/files/frwkids10.jpg',
    'https://www.frwglobalministries.org/cdn/shop/files/IMG_2453.jpg',
    'https://images.unsplash.com/photo-1761208663994-5d8aac0f9276',
    'https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg',
    'https://images.pexels.com/photos/5428265/pexels-photo-5428265.jpeg',
  ],
};

export const actionCards = [
  {
    id: 1,
    title: 'Join the Movement',
    description: 'Get updates from our ministry and see how God is moving.',
    image: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e',
    link: '#newsletter',
  },
  {
    id: 2,
    title: 'Support the Ministry',
    description: 'Join a like-minded community of givers making a difference.',
    image: 'https://images.unsplash.com/photo-1694286068611-d0c24cbc2cd5',
    link: 'https://www.paypal.com/donate/?business=7PUG78MDTCB8A&no_recurring=0&item_name=Thank+you+for+your+donation%2C+may+God+bless.&currency_code=USD',
  },
  {
    id: 3,
    title: 'Pray for the Mission',
    description: 'Join a community of prayer warriors supporting global ministry.',
    image: 'https://images.unsplash.com/photo-1626197626028-46c0cf75813f',
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
    image: 'https://images.unsplash.com/photo-1584365060375-146b264bbdb5',
    category: 'Ministry Update',
    content: `
      <p>In the heart of Ghana, transformation is happening daily. What began as a simple act of feeding hungry souls in a restaurant has blossomed into a global movement touching thousands of lives.</p>
      
      <p>Over the past 30 years, we've witnessed God's faithfulness in remarkable ways. From establishing churches in remote villages to educating hundreds of children through Jesus Cares Montessori School, every step has been ordered by the Lord.</p>
      
      <h3>Recent Testimonies</h3>
      <p>This month alone, we've seen 50 souls come to Christ through our evangelistic outreach programs. Families are being restored, communities are being transformed, and the light of the Gospel continues to spread across West Africa and beyond.</p>
      
      <p>One mother shared how her life changed after attending our Bible study: "I was lost, hopeless, and didn't know where to turn. Through this ministry, I found Jesus and my life has never been the same. Now I'm helping others find that same hope."</p>
      
      <h3>Looking Forward</h3>
      <p>As we continue this journey, we're expanding our reach to new regions, establishing more schools, and training local leaders to carry on this vital work. The harvest is plentiful, and we're committed to being faithful laborers in God's kingdom.</p>
    `,
  },
  {
    id: 2,
    title: 'Feeding the Hungry, Nourishing Souls',
    excerpt: 'Our food ministry continues to provide physical and spiritual nourishment to those in need, demonstrating Christ\'s love in action.',
    date: 'March 10, 2024',
    author: 'Ministry Team',
    image: 'https://images.unsplash.com/photo-1694286068611-d0c24cbc2cd5',
    category: 'Outreach',
    content: `
      <p>Food insecurity remains a critical challenge in many communities we serve. But through our feeding programs, we're not just providing meals – we're sharing the love of Christ in the most practical way.</p>
      
      <h3>Monthly Food Distribution</h3>
      <p>Every month, our team distributes food packages to over 500 families. These packages include rice, beans, cooking oil, and other essentials that help families stay nourished for weeks.</p>
      
      <p>But the impact goes beyond physical nourishment. As we serve, we pray with families, share the Gospel, and build lasting relationships that open doors for discipleship.</p>
      
      <h3>Community Impact</h3>
      <p>"Before this ministry came to our village, we often went to bed hungry," shares one village elder. "Now, not only are our stomachs full, but our hearts are full of hope. We've learned that God cares about every aspect of our lives."</p>
      
      <p>Through this simple act of feeding, we've seen entire communities come to know Jesus. Churches have been planted, Bible studies established, and a culture of generosity has taken root.</p>
    `,
  },
  {
    id: 3,
    title: 'Children\'s Ministry: Building Future Leaders',
    excerpt: 'Investing in the next generation through biblical teaching, mentorship, and showing them the transformative power of God\'s love.',
    date: 'March 5, 2024',
    author: 'Children\'s Ministry',
    image: 'https://images.unsplash.com/photo-1761208663994-5d8aac0f9276',
    category: 'Children',
    content: `
      <p>Children are not just the church of tomorrow – they are the church of today. At Jesus Cares Montessori School and through our various children's programs, we're investing in young lives who will shape the future of their communities.</p>
      
      <h3>Education with Purpose</h3>
      <p>Our school provides more than academic education. Every day begins with prayer and Bible study. Students learn that they are fearfully and wonderfully made, created for a purpose by a loving God.</p>
      
      <p>The curriculum integrates biblical principles with academic subjects, teaching children to think critically while maintaining a Christian worldview. Math, science, language arts, and social studies all point back to the Creator.</p>
      
      <h3>Character Development</h3>
      <p>Beyond academics, we focus heavily on character formation. Students learn values like integrity, compassion, leadership, and service. Through community service projects, they put these values into action.</p>
      
      <p>One graduate recently shared: "Jesus Cares Montessori School didn't just prepare me for university – it prepared me for life. The biblical foundation I received shapes every decision I make today."</p>
      
      <h3>Scholarships and Support</h3>
      <p>We provide scholarships to students from families who cannot afford tuition. No child is turned away due to financial constraints. Education is a pathway out of poverty, and we're committed to making it accessible to all.</p>
    `,
  },
  {
    id: 4,
    title: 'Global Impact: Reaching Nations',
    excerpt: 'Through partnerships and dedication, we continue to spread the Gospel across borders, bringing salvation to all people.',
    date: 'February 28, 2024',
    author: 'Florence R. White',
    image: 'https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e',
    category: 'Global Ministry',
    content: `
      <p>The Great Commission knows no boundaries. From our roots in Ghana to our expansion across West Africa and beyond, we're committed to taking the Gospel to every nation, tribe, and tongue.</p>
      
      <h3>Cross-Cultural Ministry</h3>
      <p>Operating in multiple countries requires cultural sensitivity and adaptability. We partner with local churches and leaders who understand their communities' unique needs and challenges.</p>
      
      <p>In each region, we establish sustainable ministries led by indigenous leaders. This ensures that the work continues long after our team moves on to new frontiers.</p>
      
      <h3>Current Reach</h3>
      <p>Today, our ministry operates in 15 countries across Africa, with growing partnerships in Asia and South America. We've trained over 200 pastors and church leaders who are now planting churches and making disciples in their own communities.</p>
      
      <h3>Partnership Opportunities</h3>
      <p>This global work is only possible through faithful partners who pray, give, and go. Whether you're called to support financially, pray consistently, or join us on a mission trip, there's a place for you in this great work.</p>
      
      <p>Together, we're fulfilling the vision of seeing every nation hear the good news of Jesus Christ. The harvest is ready – will you join us?</p>
    `,
  },
  {
    id: 5,
    title: 'Unity in Christ: Our Foundation',
    excerpt: 'Discover how our ministry remains rooted in unity, reflecting Christ\'s love through collaborative efforts and shared vision.',
    date: 'February 20, 2024',
    author: 'Ministry Team',
    image: 'https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg',
    category: 'Testimony',
    content: `
      <p>"How good and pleasant it is when God's people live together in unity!" (Psalm 133:1). This scripture guides everything we do at Florence R. White Global Ministries.</p>
      
      <h3>Diverse Yet United</h3>
      <p>Our team comes from different backgrounds, cultures, and denominations. Yet we're bound together by our love for Jesus and commitment to His mission. This diversity strengthens us, bringing varied perspectives and gifts to the table.</p>
      
      <h3>Working Together</h3>
      <p>Every project, from feeding programs to evangelistic crusades, involves collaboration. Teachers, evangelists, administrators, and volunteers all work together seamlessly because we share a common vision.</p>
      
      <p>This unity extends to our partnerships with local churches and other ministries. We believe the body of Christ is stronger when we work together rather than in isolation.</p>
      
      <h3>The Power of Agreement</h3>
      <p>Jesus said, "Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven" (Matthew 18:19).</p>
      
      <p>We've witnessed the power of this principle. When we pray together in agreement, miracles happen. Sick bodies are healed, financial provision arrives just in time, and doors open that seemed permanently closed.</p>
    `,
  },
  {
    id: 6,
    title: 'The Power of Grace',
    excerpt: 'Exploring how God\'s grace transforms lives and opens doors for salvation, one heart at a time.',
    date: 'February 15, 2024',
    author: 'Florence R. White',
    image: 'https://images.unsplash.com/photo-1626197626028-46c0cf75813f',
    category: 'Teaching',
    content: `
      <p>"For the grace of God has appeared that offers salvation to all people" (Titus 2:11). This verse forms the foundation of everything we do. Grace – unmerited favor – is at the heart of the Gospel message.</p>
      
      <h3>Understanding Grace</h3>
      <p>Grace means receiving what we don't deserve. While we were still sinners, Christ died for us. Not because we earned it, but because of His infinite love and mercy.</p>
      
      <p>This message transforms lives. In communities where people have grown up believing they must earn God's favor through rituals and works, the message of grace brings incredible freedom and joy.</p>
      
      <h3>Living in Grace</h3>
      <p>Grace doesn't just save us – it empowers us to live righteously. Paul wrote, "The grace of God teaches us to say 'No' to ungodliness and worldly passions, and to live self-controlled, upright and godly lives" (Titus 2:12).</p>
      
      <p>We teach believers that grace provides both forgiveness for past sins and power to overcome present temptations. It's not a license to sin, but an invitation to holiness.</p>
      
      <h3>Grace in Action</h3>
      <p>Every feeding program, every scholarship, every medical clinic – these are expressions of God's grace flowing through us to others. We freely received, so we freely give.</p>
      
      <p>This is the message that will continue to guide our ministry: God's grace is sufficient, His power is made perfect in weakness, and His love never fails.</p>
    `,
  },
];

export const paypalDonateLink = 'https://www.paypal.com/donate/?business=7PUG78MDTCB8A&no_recurring=0&item_name=Thank+you+for+your+donation%2C+may+God+bless.&currency_code=USD';