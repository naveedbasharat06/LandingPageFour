import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, Avatar, Rate } from "antd";
import { MutedOutlined } from "@ant-design/icons";
import "./testimonials.css"; // For any custom CSS that Tailwind can't handle
import Navbar from "../navbar/Navbar";

// Define TypeScript types
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Testimonial - Elixir Automation";
  }, []);
  // Testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechSolutions Inc.",
      content:
        "Working with this team has been transformative for our business. Their innovative approach and attention to detail resulted in a 40% increase in our customer engagement metrics.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateX",
      content:
        "The quality of work exceeded our expectations. They delivered ahead of schedule and were responsive to all our requests throughout the project lifecycle.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "David Wilson",
      role: "CEO",
      company: "StartUp Vision",
      content:
        "As a startup, we needed a partner who could understand our vision and constraints. This team not only understood but helped us refine our product strategy.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "UX Lead",
      company: "DesignHub",
      content:
        "The collaborative process was seamless. They incorporated user feedback at every stage, resulting in a product that truly resonates with our target audience.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 5,
      name: "James Peterson",
      role: "CTO",
      company: "CloudScale",
      content:
        "Technical expertise at its finest. They solved complex scalability issues that had been plaguing our platform for months.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/81.jpg",
    },
    {
      id: 6,
      name: "Lisa Wong",
      role: "Director of Operations",
      company: "GlobalConnect",
      content:
        "Exceptional service from start to finish. The team was professional, knowledgeable, and a pleasure to work with.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
  ];

  // Animation variants
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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-[Figtree] bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Testimonials
            </h2>
            <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What our clients say
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card
                  className="h-full cursor-pointer flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-200"
                  bodyStyle={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="flex-grow">
                    <MutedOutlined className="text-gray-300 text-4xl mb-4" />
                    <p className="text-gray-600 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center">
                      <Avatar
                        src={testimonial.avatar}
                        size={64}
                        className="mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500">
                          {testimonial.role}, {testimonial.company}
                        </p>
                        <Rate
                          disabled
                          defaultValue={testimonial.rating}
                          className="mt-1 text-yellow-400"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="px-6 py-12 sm:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="p-4">
                  <h3 className="text-4xl font-bold text-indigo-600">98%</h3>
                  <p className="mt-2 text-gray-500">Client satisfaction</p>
                </div>
                <div className="p-4">
                  <h3 className="text-4xl font-bold text-indigo-600">250+</h3>
                  <p className="mt-2 text-gray-500">Projects completed</p>
                </div>
                <div className="p-4">
                  <h3 className="text-4xl font-bold text-indigo-600">5.0</h3>
                  <p className="mt-2 text-gray-500">Average rating</p>
                </div>
                <div className="p-4">
                  <h3 className="text-4xl font-bold text-indigo-600">24/7</h3>
                  <p className="mt-2 text-gray-500">Support available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
