'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    icon: '/images/Elements/Digital Campaign Logo.png',
    title: 'Digital Campaign',
    description:
      'Strategic and data-driven campaigns executed across digital platforms to build awareness, engagement, and conversions.',
    detailedDescription:
      'Our digital campaigns combine strategic planning, creative execution, and data-driven optimization to deliver measurable results. We handle everything from concept development to implementation across multiple platforms.',
    backgroundImage: '/images/bg/about.png',
  },
  {
    icon: '/images/Elements/Social Activation Logo.png',
    title: 'Social Activation',
    description:
      'Creative social media initiatives that spark real-time engagement, including influencer collaborations, interactive content, and live commerce experiences to boost visibility and drive conversions',
    detailedDescription:
      'Our social activation services help brands create authentic connections with their audience through strategic content and community management. We develop tailored social strategies that align with your brand voice.',
    backgroundImage: '/images/bg/about.png',
  },
  {
    icon: '/images/Elements/Tech & Development Logo.png',
    title: 'Tech & Development',
    description:
      'Develop cutting-edge websites and applications with seamless user experiences and robust functionality.',
    detailedDescription:
      'Our development team creates digital experiences that combine stunning design with powerful functionality. From responsive websites to custom applications, we build solutions that meet your specific business needs.',
    backgroundImage: '/images/bg/about.png',
  },
  {
    icon: '/images/Elements/Performance Marketing.png',
    title: 'Performance',
    description:
      'Design and development of digital platforms such as websites, apps, microsites, blockchain-based solutions, and interactive tools tailored for functionality and user experience',
    detailedDescription:
      'Our performance marketing services focus on maximizing your return on investment through data-driven strategies and continuous optimization. We analyze user behavior, conversion paths, and campaign performance.',
    backgroundImage: '/images/bg/about.png',
  },
  {
    icon: '/images/Elements/SEO Logo.png',
    title: 'SEO',
    description:
      'Optimization of website structure, content, and authority to improve organic visibility and search engine rankings including article development, media publishing, and comprehensive site audits',
    detailedDescription:
      'Optimization of website structure, content, and authority to improve organic visibility and search engine rankings including article development, media publishing, and comprehensive site audits.',
    backgroundImage: '/images/bg/about.png',
  },
];

const FlipCard = ({
  service,
}: {
  service: {
    icon: string;
    title: string;
    description: string;
    detailedDescription: string;
    backgroundImage: string;
  };
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-[250px] w-full max-w-[240px] perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute w-full h-full bg-black bg-opacity-50 border border-gray-800 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            backgroundImage: `url(${service.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4">
            <img src={service.icon} alt={service.title} className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white text-center">{service.title}</h3>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-3 sm:p-4 flex flex-col justify-center"
          style={{
            backfaceVisibility: 'hidden',
            rotateY: 180,
            transformStyle: 'preserve-3d',
          }}
        >
          <h3 className="text-base sm:text-lg font-bold mb-2 text-neon-blue">{service.title}</h3>
          <p className="text-xs sm:text-sm text-gray-300">{service.detailedDescription}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="services"
      className="section-padding bg-black bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/bg/1.png)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="tag mb-4">Our Services</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-8">
            Smart Solutions for Brands
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            We combine creative strategy, smart execution, and data-driven optimization to help you thrive in the digital world.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-4">Hover over a service to learn more</p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="flex justify-center">
              <FlipCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
