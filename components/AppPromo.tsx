
import React from 'react';
import { Smartphone, Download, Star } from 'lucide-react';

const AppPromo: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Mockup */}
          <div className="lg:w-1/2 relative flex justify-center">
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            
            <div className="relative z-10 w-full max-w-[320px] bg-slate-900 rounded-[3rem] p-4 border-8 border-slate-800 shadow-2xl shadow-blue-200">
               <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5] p-6">
                 {/* App UI Mockup */}
                 <div className="flex justify-between items-center mb-8">
                   <div className="flex items-center space-x-2">
                     <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                       <Smartphone className="w-4 h-4 text-blue-600" />
                     </div>
                     <span className="font-bold text-xs">Guri Hospital</span>
                   </div>
                   <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                 </div>
                 
                 <p className="text-xl font-black mb-6 leading-tight">어디서든<br />편리하게 예약하세요</p>
                 
                 <div className="space-y-4">
                   <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                     <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">다음 진료 일정</p>
                     <p className="font-bold text-sm">심장내과 검진</p>
                     <p className="text-[10px] text-blue-600">오늘 오후 2시 30분</p>
                   </div>
                   <div className="bg-blue-600 p-4 rounded-2xl text-white">
                     <p className="text-[10px] opacity-70 font-bold uppercase mb-1">빠른 서비스</p>
                     <p className="font-bold text-sm">비대면 수납하기</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Float Badge */}
            <div className="absolute top-20 right-0 md:right-20 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-slate-100 animate-bounce">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
              <div>
                <p className="text-sm font-bold">4.9/5.0</p>
                <p className="text-[10px] text-slate-500">사용자 만족도</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <p className="text-blue-600 font-bold uppercase tracking-wider mb-3">Download App</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              더 나은 사용자 경험을 위해<br />공식 앱을 사용해보세요
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              진료 예약부터 대기 순번 확인, 검사 결과 조회, 그리고 비대면 결제까지! 
              구리 센트럴병원 앱 하나로 모든 병원 서비스를 스마트하게 이용하실 수 있습니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all group">
                <div className="mr-4">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.523 15.341c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zm-4 0c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1zm6.5-12h-12c-1.378 0-2.5 1.122-2.5 2.5v12c0 1.378 1.122 2.5 2.5 2.5h12c1.378 0 2.5-1.122 2.5-2.5v-12c0-1.378-1.122-2.5-2.5-2.5zm0 15h-12v-12h12v12z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] opacity-70 font-bold uppercase">Get it on</p>
                  <p className="font-bold text-lg">Google Play</p>
                </div>
              </button>
              <button className="flex items-center bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all group">
                <div className="mr-4">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-2 1.12-3.14-1.18.05-2.31.79-2.9 1.48-.59.69-1.11 1.89-1 3.02 1.31.11 2.4-.64 2.78-1.36z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-[10px] opacity-70 font-bold uppercase">Download on the</p>
                  <p className="font-bold text-lg">App Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromo;
