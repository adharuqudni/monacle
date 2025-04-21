import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Parallax effect for the background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Process steps data
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your business, goals, and challenges.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Strategy",
      description: "We create a tailored plan to achieve your objectives.",
      icon: "📝"
    },
    {
      number: "03",
      title: "Execution",
      description: "We implement the strategy with precision and care.",
      icon: "⚙️"
    },
    {
      number: "04",
      title: "Results",
      description: "We measure success and optimize for continued growth.",
      icon: "📈"
    }
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 bg-cover bg-center -z-10"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundBlendMode: "overlay",
          y: backgroundY 
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        {/* Animated heading section */}
        <div className="text-center mb-16 relative z-10">
          <motion.span 
            className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How We Make It Happen
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A simple, transparent process designed to help your brand grow
            efficiently.
          </motion.p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: A2 } }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-5xl">{step.icon}</span>
                <span className="text-3xl font-bold text-blue-400 opacity-80">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated process diagram */}
        <motion.div
          className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Our Process Workflow"
            className="w-full h-auto rounded-xl"
          />
          
          {/* Animated overlay elements */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-32 -left-4 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full opacity-30 blur-2xl -z-1"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute -bottom-16 -right-4 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full opacity-30 blur-2xl -z-1"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1 
          }}
        />
      </div>
    </section>
  );
}