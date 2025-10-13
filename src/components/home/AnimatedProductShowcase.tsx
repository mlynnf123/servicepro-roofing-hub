import { useState, useEffect } from 'react';

const AnimatedProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = ['/dashboard-view.png', '/leads-view.png', '/workflow-view.png'];
  const labels = ['Dashboard View', 'Leads Management', 'Workflow Automation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 rounded-sm overflow-hidden">
      {/* Screenshots with fade transitions */}
      {screenshots.map((screenshot, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={screenshot}
            alt={labels[index]}
            className="w-full h-full object-cover object-top"
          />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`View ${labels[index]}`}
          />
        ))}
      </div>

      {/* Label overlay */}
      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-sm">
        <p className="text-white text-sm font-medium">{labels[currentIndex]}</p>
      </div>
    </div>
  );
};

export default AnimatedProductShowcase;
