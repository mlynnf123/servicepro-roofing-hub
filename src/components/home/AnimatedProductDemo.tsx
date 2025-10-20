import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mockup, MockupFrame } from '@/components/ui/mockup';
import { Glow } from '@/components/ui/glow';

const productScreens = [
  {
    image: '/dashboard-view.png',
    title: 'Dashboard Overview',
    description: 'Monitor your business at a glance'
  },
  {
    image: '/leads-view.png',
    title: 'Lead Management',
    description: 'Track and convert opportunities'
  },
  {
    image: '/workflow-view.png',
    title: 'Workflow Automation',
    description: 'Streamline your operations'
  }
];

const AnimatedProductDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productScreens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(ellipse at center, hsl(var(--accent) / 0.15) 0%, transparent 60%)',
            'radial-gradient(ellipse at center, hsl(var(--brand) / 0.15) 0%, transparent 60%)',
            'radial-gradient(ellipse at center, hsl(var(--ring) / 0.15) 0%, transparent 60%)',
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />

      {/* Main product showcase */}
      <div className="relative">
        <Glow variant="center" className="opacity-40" />
        
        <MockupFrame size="large" className="relative overflow-hidden">
          <Mockup className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="relative"
              >
                <img
                  src={productScreens[currentIndex].image}
                  alt={productScreens[currentIndex].title}
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />
              </motion.div>
            </AnimatePresence>
          </Mockup>
        </MockupFrame>

        {/* Animated text labels */}
        <div className="mt-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-brand text-foreground mb-2">
                {productScreens[currentIndex].title}
              </h3>
              <p className="text-muted-foreground">
                {productScreens[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {productScreens.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative h-2 w-12 rounded-full overflow-hidden bg-muted transition-all hover:bg-muted-foreground/30"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent via-brand to-ring"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{
                  scaleX: currentIndex === index ? 1 : 0
                }}
                transition={{
                  duration: currentIndex === index ? 4 : 0.3,
                  ease: 'linear'
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Floating feature badges */}
      <div className="absolute top-1/4 -left-12 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-card border border-border/50 rounded-lg px-4 py-2 shadow-lg"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-accent font-medium"
          >
            ✓ Real-time Updates
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 -right-12 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-card border border-border/50 rounded-lg px-4 py-2 shadow-lg"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="text-brand font-medium"
          >
            ✓ Mobile Friendly
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedProductDemo;
