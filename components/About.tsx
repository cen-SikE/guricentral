
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Images */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                alt="Hospital hallway"
                className="rounded-3xl shadow-lg mt-8 h-80 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
                alt="Medical tools"
                className="rounded-3xl shadow-lg h-80 object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-white p-6 rounded-3xl shadow-xl flex items-center space-x-4 border-l-4 border-blue-600 w-full max-w-[340px]">
              <div className="text-4xl font-black text-blue-600">15+</div>
              <div>
                <p className="font-bold text-slate-900 leading-tight">년의 신뢰와 경험</p>
                <p className="text-sm text-slate-500">구리 지역사회와 함께해 온 명성</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <p className="text-blue-600 font-bold uppercase tracking-wider mb-3">About Us</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              당신을 위한 최상의 의료 서비스와<br />품격 있는 공간
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              구리 센트럴병원은 단순한 치료를 넘어, 환자의 평온한 일상 회복을 위해 노력합니다. 
              최신식 입원실과 쾌적한 진료 환경, 그리고 환자의 마음까지 어루만지는 
              친절한 서비스를 제공합니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                '전문 의료진의 1:1 맞춤 진료',
                '대학병원급 첨단 장비 보유',
                '환자 중심의 쾌적한 입원실',
                '신속하고 정확한 검사 시스템',
                '철저한 감염 관리 시스템',
                '지역사회 연계 공공 의료'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-200 transition-all">
              병원 연혁 더보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
