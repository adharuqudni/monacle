"use client"

import { motion } from "framer-motion"
import { BarChart, Smartphone, Code, LineChart } from "lucide-react"

const services = [
  {
    icon: <BarChart className="h-10 w-10 text-neon-blue" />,
    title: "Digital Campaign",
    description:
      "Create impactful campaigns that drive awareness, engagement, and conversions across digital touchpoints.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-neon-purple" />,
    title: "Social Activation",
    description:
      "Build meaningful connections with your audience through strategic social media management and content.",
  },
  {
    icon: <Code className="h-10 w-10 text-neon-blue" />,
    title: "Tech & Development",
    description:
      "Develop cutting-edge websites and applications with seamless user experiences and robust functionality.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-neon-purple" />,
    title: "Performance",
    description:
      "Optimize your digital presence for maximum ROI through data-driven insights and continuous improvement.",
  },
]

export function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="tag mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold my-4">Smart Solutions for Brands</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine creative strategy, smart execution, and data-driven optimization to help you thrive in the
            digital world.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-black to-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-neon transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
