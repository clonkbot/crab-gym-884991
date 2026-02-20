import { useState, useEffect } from 'react';
import './styles.css';

// Animated Crab SVG Component
const CrabMascot = () => (
  <svg viewBox="0 0 200 160" className="crab-mascot w-48 h-40 md:w-64 md:h-52 lg:w-80 lg:h-64">
    {/* Body */}
    <ellipse cx="100" cy="90" rx="55" ry="40" fill="#E85D4C" />
    <ellipse cx="100" cy="85" rx="45" ry="32" fill="#F47564" />

    {/* Eyes */}
    <g className="crab-eyes">
      <circle cx="75" cy="55" r="12" fill="#E85D4C" />
      <circle cx="125" cy="55" r="12" fill="#E85D4C" />
      <circle cx="75" cy="52" r="8" fill="#1a1a1a" />
      <circle cx="125" cy="52" r="8" fill="#1a1a1a" />
      <circle cx="77" cy="50" r="3" fill="#fff" />
      <circle cx="127" cy="50" r="3" fill="#fff" />
    </g>

    {/* Left Claw (Flexing!) */}
    <g className="crab-left-claw">
      <path d="M45 90 Q20 70 15 50 Q10 35 25 30 Q40 25 50 45 Q55 60 45 90" fill="#E85D4C" stroke="#C94A3B" strokeWidth="2"/>
      <path d="M25 30 Q15 20 5 25 Q-5 35 10 45 Q20 50 25 45" fill="#E85D4C" stroke="#C94A3B" strokeWidth="2"/>
      {/* Dumbbell */}
      <rect x="-15" y="18" width="30" height="8" rx="2" fill="#FFD93D" className="dumbbell"/>
      <rect x="-20" y="12" width="10" height="20" rx="3" fill="#FFD93D"/>
      <rect x="10" y="12" width="10" height="20" rx="3" fill="#FFD93D"/>
    </g>

    {/* Right Claw (Flexing!) */}
    <g className="crab-right-claw">
      <path d="M155 90 Q180 70 185 50 Q190 35 175 30 Q160 25 150 45 Q145 60 155 90" fill="#E85D4C" stroke="#C94A3B" strokeWidth="2"/>
      <path d="M175 30 Q185 20 195 25 Q205 35 190 45 Q180 50 175 45" fill="#E85D4C" stroke="#C94A3B" strokeWidth="2"/>
      {/* Dumbbell */}
      <rect x="185" y="18" width="30" height="8" rx="2" fill="#FFD93D" className="dumbbell"/>
      <rect x="180" y="12" width="10" height="20" rx="3" fill="#FFD93D"/>
      <rect x="210" y="12" width="10" height="20" rx="3" fill="#FFD93D"/>
    </g>

    {/* Legs */}
    <g fill="#C94A3B">
      <path d="M55 115 Q40 130 25 140" stroke="#C94A3B" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path d="M50 105 Q30 115 15 120" stroke="#C94A3B" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path d="M145 115 Q160 130 175 140" stroke="#C94A3B" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path d="M150 105 Q170 115 185 120" stroke="#C94A3B" strokeWidth="6" strokeLinecap="round" fill="none"/>
    </g>

    {/* Smile */}
    <path d="M80 100 Q100 115 120 100" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);

// Wave Background Component
const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="wave-svg absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        fill="rgba(14, 116, 144, 0.1)"
        d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        className="wave-1"
      />
      <path
        fill="rgba(14, 116, 144, 0.15)"
        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        className="wave-2"
      />
    </svg>
  </div>
);

// Pricing Card Component
const PricingCard = ({
  title,
  price,
  features,
  popular = false,
  delay = 0
}: {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}) => (
  <div
    className={`pricing-card relative p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
      popular
        ? 'bg-gradient-to-br from-coral to-coral-dark text-white shadow-2xl scale-105 md:scale-110'
        : 'bg-white/90 backdrop-blur shadow-xl'
    }`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-ocean-dark text-xs font-bold px-4 py-1 rounded-full">
        MOST POPULAR
      </div>
    )}
    <h3 className={`font-display text-xl md:text-2xl mb-2 ${popular ? 'text-white' : 'text-ocean-dark'}`}>
      {title}
    </h3>
    <div className="mb-6">
      <span className={`text-4xl md:text-5xl font-display ${popular ? 'text-white' : 'text-coral'}`}>
        {price}
      </span>
      <span className={`text-sm ${popular ? 'text-white/70' : 'text-gray-500'}`}>/month</span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-sm md:text-base">
          <span className={`text-lg ${popular ? 'text-gold' : 'text-teal'}`}>&#10003;</span>
          {feature}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 md:py-4 rounded-xl font-bold transition-all duration-300 text-sm md:text-base ${
        popular
          ? 'bg-white text-coral hover:bg-sand'
          : 'bg-ocean-dark text-white hover:bg-ocean'
      }`}
    >
      START CRUSHING
    </button>
  </div>
);

// Class Card Component
const ClassCard = ({
  name,
  time,
  icon,
  delay = 0
}: {
  name: string;
  time: string;
  icon: string;
  delay?: number;
}) => (
  <div
    className="class-card group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
    style={{ animationDelay: `${delay}ms` }}
  >
    <span className="text-3xl md:text-4xl mb-3 block group-hover:scale-110 transition-transform">
      {icon}
    </span>
    <h4 className="font-display text-lg md:text-xl text-white mb-1">{name}</h4>
    <p className="text-teal-light text-sm">{time}</p>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const classes = [
    { name: 'Shell Shred', time: '6:00 AM', icon: '🦀' },
    { name: 'Pincer Power', time: '8:00 AM', icon: '💪' },
    { name: 'Tide HIIT', time: '12:00 PM', icon: '🌊' },
    { name: 'Deep Dive Yoga', time: '5:00 PM', icon: '🧘' },
    { name: 'Coral Cardio', time: '6:30 PM', icon: '❤️‍🔥' },
    { name: 'Midnight Crawl', time: '9:00 PM', icon: '🌙' },
  ];

  return (
    <div className="min-h-screen bg-sand font-body text-ocean-dark overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ocean-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl">🦀</span>
            <span className={`font-display text-xl md:text-2xl ${scrolled ? 'text-white' : 'text-ocean-dark'}`}>
              CRAB GYM
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Classes', 'Pricing', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors hover:text-coral ${
                  scrolled ? 'text-white/80 hover:text-coral' : 'text-ocean-dark hover:text-coral'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-coral text-white px-6 py-2 rounded-full font-bold hover:bg-coral-dark transition-colors">
              JOIN NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-white' : 'bg-ocean-dark'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 mb-1.5 transition-all ${scrolled ? 'bg-white' : 'bg-ocean-dark'} ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-white' : 'bg-ocean-dark'} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-ocean-dark/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="px-4 py-6 flex flex-col gap-4">
            {['Classes', 'Pricing', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-coral text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-coral text-white px-6 py-3 rounded-full font-bold hover:bg-coral-dark transition-colors mt-2">
              JOIN NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 md:px-8">
        <div className="grain-overlay" />
        <WaveBackground />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="hero-content">
            <div className="flex justify-center mb-6 md:mb-8">
              <CrabMascot />
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-ocean-dark mb-4 md:mb-6 leading-none">
              GET <span className="text-coral">SHELL</span>
              <br />
              SHOCKED
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-ocean/70 max-w-2xl mx-auto mb-8 md:mb-12 px-4">
              The only gym where crustacean meets cardio.
              Build your shell, crush your goals, walk sideways into success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button className="bg-coral text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-display text-lg md:text-xl hover:bg-coral-dark transition-all hover:scale-105 shadow-lg hover:shadow-coral/30">
                START FREE TRIAL
              </button>
              <button className="border-2 border-ocean-dark text-ocean-dark px-8 md:px-12 py-4 md:py-5 rounded-full font-display text-lg md:text-xl hover:bg-ocean-dark hover:text-white transition-all">
                TAKE A TOUR
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-8 h-12 border-2 border-ocean-dark/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-ocean-dark/30 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-24 bg-ocean-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { number: '2,500+', label: 'Active Members' },
              { number: '50+', label: 'Weekly Classes' },
              { number: '24/7', label: 'Access' },
              { number: '100%', label: 'Crab Energy' },
            ].map((stat, i) => (
              <div key={i} className="stat-item" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-coral mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-ocean-dark to-ocean">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              DAILY <span className="text-coral">CLASSES</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
              From sunrise shell shreds to midnight crawls, we've got your fitness journey covered.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {classes.map((cls, i) => (
              <ClassCard key={i} {...cls} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-16 md:py-24 lg:py-32 bg-sand overflow-hidden">
        <div className="grain-overlay" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ocean-dark mb-4">
              MEMBERSHIP <span className="text-coral">TIERS</span>
            </h2>
            <p className="text-ocean/60 text-base md:text-lg max-w-xl mx-auto">
              Choose your shell size. All plans include access to our state-of-the-art underwater-themed facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="SOFT SHELL"
              price="$29"
              features={[
                'Gym floor access',
                '5 classes/month',
                'Locker room access',
                'Mobile app',
              ]}
              delay={0}
            />
            <PricingCard
              title="HARD SHELL"
              price="$59"
              features={[
                'Everything in Soft Shell',
                'Unlimited classes',
                'Personal training session',
                'Nutrition planning',
                'Sauna & pool access',
              ]}
              popular
              delay={100}
            />
            <PricingCard
              title="KING CRAB"
              price="$99"
              features={[
                'Everything in Hard Shell',
                '4 PT sessions/month',
                'Premium recovery zone',
                'Guest passes (2/month)',
                'Exclusive merch',
              ]}
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-coral overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white mb-6">
            READY TO GET<br />
            <span className="text-gold">CRABBY?</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 md:mb-12 max-w-xl mx-auto">
            Join the crustacean revolution. Your first week is on us — no strings attached, just claws.
          </p>
          <button className="bg-white text-coral px-10 md:px-16 py-4 md:py-5 rounded-full font-display text-lg md:text-2xl hover:bg-sand transition-all hover:scale-105 shadow-2xl">
            CLAIM FREE WEEK
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🦀</span>
                <span className="font-display text-2xl text-white">CRAB GYM</span>
              </div>
              <p className="text-white/50 text-sm">
                Where every rep counts and every crab walks tall.
              </p>
            </div>

            {[
              { title: 'Quick Links', items: ['Classes', 'Pricing', 'About', 'Contact'] },
              { title: 'Hours', items: ['Mon-Fri: 5AM-11PM', 'Sat-Sun: 7AM-9PM', 'Holidays: 8AM-6PM'] },
              { title: 'Contact', items: ['hello@crabgym.com', '(555) 123-CRAB', '123 Coral Reef Blvd'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-display text-white mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-white/50 text-sm hover:text-coral cursor-pointer transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              &copy; 2024 Crab Gym. All rights reserved. Stay salty.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'TikTok'].map((social) => (
                <a key={social} href="#" className="text-white/30 hover:text-coral text-sm transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Attribution Footer */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-white/20 text-xs">
              Requested by @OxPaulius · Built by @clonkbot
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
