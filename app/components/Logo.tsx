export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative px-4 py-2 bg-[#1C2127] rounded-lg border border-gray-800/50 leading-none flex items-center">
          <div className="relative font-mono text-2xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              K9
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-light tracking-tight ml-[-2px]">TX</span>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-sm animate-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
