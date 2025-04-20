'use client';

import { motion } from 'framer-motion';
import { BarChart, Smartphone, Code, LineChart } from 'lucide-react';
import { JSX, useState } from 'react';

const services = [
  {
    icon: <BarChart className="h-10 w-10 text-neon-blue" />,
    title: 'Digital Campaign',
    description:
      'Create impactful campaigns that drive awareness, engagement, and conversions across digital touchpoints.',
    detailedDescription:
      'Our digital campaigns combine strategic planning, creative execution, and data-driven optimization to deliver measurable results. We handle everything from concept development to implementation across multiple platforms.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-neon-purple" />,
    title: 'Social Activation',
    description:
      'Build meaningful connections with your audience through strategic social media management and content.',
    detailedDescription:
      'Our social activation services help brands create authentic connections with their audience through strategic content and community management. We develop tailored social strategies that align with your brand voice.',
  },
  {
    icon: <Code className="h-10 w-10 text-neon-blue" />,
    title: 'Tech & Development',
    description:
      'Develop cutting-edge websites and applications with seamless user experiences and robust functionality.',
    detailedDescription:
      'Our development team creates digital experiences that combine stunning design with powerful functionality. From responsive websites to custom applications, we build solutions that meet your specific business needs.',
  },
  {
    icon: <LineChart className="h-10 w-10 text-neon-purple" />,
    title: 'Performance',
    description:
      'Optimize your digital presence for maximum ROI through data-driven insights and continuous improvement.',
    detailedDescription:
      'Our performance marketing services focus on maximizing your return on investment through data-driven strategies and continuous optimization. We analyze user behavior, conversion paths, and campaign performance.',
  },
];

// Card component with flip animation
const FlipCard = ({
  service,
}: {
  service: {
    icon: JSX.Element;
    title: string;
    description: string;
    detailedDescription: string;
  };
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-[320px] perspective-1000 cursor-pointer"
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
          className="absolute w-full h-full bg-gradient-to-b from-black to-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-neon transition-shadow duration-300 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div
            className={`bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl w-24 h-24 flex items-center justify-center mb-6`}
          >
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-white text-center">
            {service.title}
          </h3>
          {/* <p className="text-gray-300">{service.description}</p> */}
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-6 hover:shadow-neon transition-shadow duration-300"
          style={{
            backfaceVisibility: 'hidden',
            rotateY: 180,
            transformStyle: 'preserve-3d',
          }}
        >
          <h3 className="text-xl font-bold mb-3 text-neon-blue">
            {service.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            {service.detailedDescription}
          </p>
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
    <section id="services" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="tag mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-8">
            Smart Solutions for Brands
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine creative strategy, smart execution, and data-driven
            optimization to help you thrive in the digital world.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Hover over a service to learn more
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FlipCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
