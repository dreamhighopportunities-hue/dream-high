import { useState } from 'react';

export default function DreamHighHomepage() {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('EN');

  const dark = theme === 'dark';

  const filters = {
    levels: ['9th Grade', 'High School', 'Gap Year', 'Undergraduate', 'Graduate'],
    categories: ['Scholarships', 'Summer Programs', 'Olympiads', 'Volunteering'],
    countries: ['USA', 'UK', 'Canada', 'Germany', 'Global']
  };

  const opportunities = [
    {
      title: 'Yale Young Global Scholars',
      country: 'United States',
      funding: 'Partial Scholarship',
      days: 8,
      category: 'Summer Program'
    },
    {
      title: 'UWC Scholarship Program',
      country: 'Global',
      funding: 'Fully Funded',
      days: 14,
      category: 'Scholarship'
    },
    {
      title: 'Harvard Pre-College Program',
      country: 'United States',
      funding: 'Partial Scholarship',
      days: 21,
      category: 'Academic Program'
    }
  ];

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        dark
          ? 'bg-black text-white'
          : 'bg-[#f5f7fb] text-black'
      }`}
    >
      {/* Glow Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
          dark
            ? 'bg-black/50 border-white/10'
            : 'bg-white/70 border-black/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Dream <span className="text-purple-500">High</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Home', 'Opportunities', 'Blog', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-purple-400 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage('PT')}
              className={`px-3 py-1 rounded-full text-sm border ${
                language === 'PT'
                  ? 'bg-purple-500 text-white border-purple-500'
                  : dark
                  ? 'border-white/10 bg-white/5'
                  : 'border-black/10 bg-black/5'
              }`}
            >
              PT
            </button>

            <button
              onClick={() => setLanguage('EN')}
              className={`px-3 py-1 rounded-full text-sm border ${
                language === 'EN'
                  ? 'bg-purple-500 text-white border-purple-500'
                  : dark
                  ? 'border-white/10 bg-white/5'
                  : 'border-black/10 bg-black/5'
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setTheme(dark ? 'light' : 'dark')}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium hover:scale-105 transition"
            >
              {dark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-sm mb-6">
              ✨ International Academic Opportunities
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover your next
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {' '}global opportunity
              </span>
            </h2>

            <p
              className={`text-lg mt-8 max-w-xl leading-relaxed ${
                dark ? 'text-white/70' : 'text-black/70'
              }`}
            >
              Scholarships, exchange programs, olympiads and international opportunities curated for ambitious students from 9th grade to graduate level.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition">
                Explore Opportunities
              </button>

              <button
                className={`px-8 py-4 rounded-2xl border transition ${
                  dark
                    ? 'border-white/10 bg-white/5 hover:bg-white/10'
                    : 'border-black/10 bg-black/5 hover:bg-black/10'
                }`}
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              {[
                ['250+', 'Opportunities'],
                ['30+', 'Countries'],
                ['10k+', 'Students Reached']
              ].map(([number, label]) => (
                <div key={label}>
                  <h3 className="text-3xl font-bold">{number}</h3>
                  <p className={`${dark ? 'text-white/60' : 'text-black/60'} text-sm mt-1`}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Card */}
          <div>
            <div
              className={`rounded-3xl border backdrop-blur-xl p-8 shadow-2xl ${
                dark
                  ? 'border-white/10 bg-white/5'
                  : 'border-black/10 bg-white/70'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                  Open Applications
                </span>

                <span className={`${dark ? 'text-white/50' : 'text-black/50'} text-sm`}>
                  🇺🇸 United States
                </span>
              </div>

              <h3 className="text-3xl font-bold leading-tight">
                Yale Young Global Scholars
              </h3>

              <p className={`${dark ? 'text-white/70' : 'text-black/70'} mt-4 leading-relaxed`}>
                Prestigious academic enrichment program for high school students around the world.
              </p>

              {/* Countdown */}
              <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                <p className={`${dark ? 'text-white/60' : 'text-black/60'} text-sm mb-2`}>
                  Application Deadline
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-3xl">⏳</span>

                  <div>
                    <h4 className="text-2xl font-bold text-purple-400">
                      08 Days Left
                    </h4>

                    <p className={`${dark ? 'text-white/50' : 'text-black/50'} text-sm mt-1`}>
                      Closes on October 3
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition">
                View Opportunity
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <div
          className={`rounded-3xl border p-8 ${
            dark
              ? 'border-white/10 bg-white/5'
              : 'border-black/10 bg-white/70'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8">Explore Opportunities</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Academic Levels */}
            <div>
              <h3 className="text-lg font-semibold mb-4">🎓 Academic Level</h3>

              <div className="flex flex-wrap gap-3">
                {filters.levels.map((level) => (
                  <button
                    key={level}
                    className={`px-4 py-2 rounded-full text-sm border transition ${
                      dark
                        ? 'border-white/10 bg-white/5 hover:bg-white/10'
                        : 'border-black/10 bg-black/5 hover:bg-black/10'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4">📚 Categories</h3>

              <div className="flex flex-wrap gap-3">
                {filters.categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm border transition ${
                      dark
                        ? 'border-white/10 bg-white/5 hover:bg-white/10'
                        : 'border-black/10 bg-black/5 hover:bg-black/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div>
              <h3 className="text-lg font-semibold mb-4">🌍 Countries</h3>

              <div className="flex flex-wrap gap-3">
                {filters.countries.map((country) => (
                  <button
                    key={country}
                    className={`px-4 py-2 rounded-full text-sm border transition ${
                      dark
                        ? 'border-white/10 bg-white/5 hover:bg-white/10'
                        : 'border-black/10 bg-black/5 hover:bg-black/10'
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">Trending Opportunities</h2>

          <button className="text-purple-400 hover:text-purple-300 transition">
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.title}
              className={`group rounded-3xl border p-7 transition hover:-translate-y-2 ${
                dark
                  ? 'border-white/10 bg-white/5 hover:bg-white/10'
                  : 'border-black/10 bg-white/70 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
                  {opportunity.category}
                </span>

                <span className={`${dark ? 'text-white/50' : 'text-black/50'} text-sm`}>
                  🇺🇸
                </span>
              </div>

              <h3 className="text-2xl font-bold leading-tight group-hover:text-purple-400 transition">
                {opportunity.title}
              </h3>

              <p className={`${dark ? 'text-white/60' : 'text-black/60'} mt-3`}>
                {opportunity.country}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs">
                  {opportunity.funding}
                </span>
              </div>

              {/* Countdown */}
              <div className="mt-8 p-4 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                <p className="text-purple-400 font-semibold text-lg">
                  ⏳ {opportunity.days} Days Remaining
                </p>
              </div>

              <button className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-[1.02] transition">
                View Opportunity
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${dark ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">
              Dream <span className="text-purple-500">High</span>
            </h3>

            <p className={`${dark ? 'text-white/50' : 'text-black/50'} mt-2 text-sm`}>
              Connecting ambitious students with global opportunities.
            </p>
          </div>

          <div className={`flex items-center gap-6 text-sm ${dark ? 'text-white/60' : 'text-black/60'}`}>
            <a href="#" className="hover:text-purple-400 transition">
              Instagram
            </a>

            <a href="#" className="hover:text-purple-400 transition">
              TikTok
            </a>

            <a href="#" className="hover:text-purple-400 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
