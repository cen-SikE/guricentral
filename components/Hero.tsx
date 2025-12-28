
import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000"
          alt="Medical professional with patient"
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white mt-16">
        <div className="max-w-3xl">
          <p className="text-blue-400 font-bold mb-4 tracking-widest uppercase">Health Solutions</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            고객의 건강한 삶을<br />최우선으로 생각합니다
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
            구리 센트럴병원은 최첨단 의료 시설과 풍부한 경험을 갖춘 전문 의료진이 
            환자 한 분 한 분을 위해 정성을 다하는 명품 의료 서비스를 제공합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold flex items-center transition-all w-full sm:w-auto justify-center">
              자세히 보기 <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold flex items-center transition-all w-full sm:w-auto justify-center">
              상담 예약하기
            </button>
          </div>
        </div>
      </div>

      {/* Video Indicator */}
      <div className="absolute bottom-12 right-8 hidden md:flex items-center space-x-4">
        <button className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/20 transition-all group">
          <Play className="fill-white text-white group-hover:scale-110 transition-transform" />
        </button>
        <span className="text-white font-medium uppercase tracking-wider text-sm">홍보 영상 시청</span>
      </div>

      {/* Hero Navigation Indicator */}
      <div className="absolute bottom-12 left-8 hidden md:flex items-center space-x-2">
        <div className="w-10 h-0.5 bg-blue-600"></div>
        <div className="w-6 h-0.5 bg-white/30"></div>
        <div className="w-6 h-0.5 bg-white/30"></div>
      </div>
    </div>
  );
};

export default Hero;
