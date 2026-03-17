import { BatteryCharging, Zap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-dark sticky top-0 z-[2000] w-full px-6 py-4 flex items-center justify-between border-b border-white/10 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="bg-emerald-500 p-2 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
          <Zap className="text-white w-6 h-6" />
        </div>
        <h1 className="text-white font-bold text-xl tracking-tight hidden lg:block">
          EV Charging Station Locator India
        </h1>
        <h1 className="text-white font-bold text-xl tracking-tight lg:hidden">
          EV Locator India
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-white/80 hover:text-emerald-400 transition-colors text-sm font-semibold">Home</a>
        <a href="#" className="text-white/80 hover:text-emerald-400 transition-colors text-sm font-semibold border-b-2 border-emerald-500 pb-1">Explore Stations</a>
        <a href="#" className="text-white/80 hover:text-emerald-400 transition-colors text-sm font-semibold">EV Guide</a>
        <a href="#" className="text-white/80 hover:text-emerald-400 transition-colors text-sm font-semibold">Contact</a>
      </div>

      <div className="flex items-center gap-4 text-emerald-400 text-sm font-medium">
        <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Live India Data
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
