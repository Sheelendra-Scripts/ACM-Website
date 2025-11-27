"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TextFillOnScroll from "@/components/TextFillOnScroll";

const faqs = [
  {
    question: "Do I need coding experience to join?",
    answer:
      "Absolutely not! ACM welcomes members from all backgrounds. Whether you're a seasoned programmer or have never written a line of code, you'll find a place here. Our creative wing also offers opportunities in design, content, and more.",
  },
  {
    question: "What's the time commitment?",
    answer:
      "ACM is flexible by design. You can participate as much or as little as you'd like. Most events are standalone, and project teams accommodate various schedules. Typically, active members spend 2-5 hours per week.",
  },
  {
    question: "How do I join a project team?",
    answer:
      "Project teams form organically around ideas and interests. Watch for announcements about new initiatives, or propose your own project! We help connect people with complementary skills.",
  },
  {
    question: "Are there membership fees?",
    answer:
      "Membership is completely free. We believe in making tech education and community accessible to everyone.",
  },
  {
    question: "Can non-CS majors join?",
    answer:
      "Yes! Some of our most valuable contributors come from non-CS backgrounds. Diverse perspectives—from design and business to humanities—enrich our projects and community.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-black px-4 py-20 md:px-12 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-acm-blue/5 blur-[100px] md:h-96 md:w-96 md:blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-12 text-center md:mb-16">
          <TextFillOnScroll className="mb-4 font-display text-3xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
            FAQ
          </TextFillOnScroll>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="mx-auto max-w-xl text-base text-gray-400 md:max-w-2xl md:text-xl"
          >
            Common questions about ACM GGSIPU EDC
          </motion.p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/20 md:rounded-2xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-800/30 md:p-6"
              >
                <span className="pr-4 text-base font-medium text-white md:pr-8 md:text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-acm-blue" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-gray-800 px-4 pb-4 pt-4 md:px-6 md:pb-6">
                      <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
