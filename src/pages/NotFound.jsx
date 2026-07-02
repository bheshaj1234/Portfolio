import React from 'react';
import { Home } from 'lucide-react';
import StarBackground from '../components/StarBackground';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Background stars and meteors */}
      <StarBackground />

      <div className="z-10 text-center max-w-lg space-y-6">
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest text-primary animate-pulse-subtle">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-glow">
          Lost in Space?
        </h2>
        
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          The page you are looking for has drifted into deep space. Let's get you back to safety.
        </p>

        <div className="pt-6">
          <a
            href="/"
            className="cosmic-button inline-flex items-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
