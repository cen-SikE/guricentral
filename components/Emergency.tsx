
import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

const Emergency: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200 overflow-hidden flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/2 p-12 lg:p-20">
            <p className="text-blue-600 font-bold uppercase tracking-wider mb-3">Emergency Help Line</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">24시간 언제나<br />도움이 필요할 때 연락주세요</h2>
            <p className="text-slate-600 mb-12">
              구리 센트럴병원은 긴급한 상황에 대비하여 24시간 전문 의료 인력이 상주하고 있습니다. 
              응급 상황 시 주저하지 말고 즉시 연락해 주시기 바랍니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Phone className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-tight mb-1">상담 전화</p>
                  <p className="text-xl font-black text-slate-900">031-123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Mail className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-tight mb-1">이메일 문의</p>
                  <p className="text-xl font-black text-slate-900">help@guri-central.kr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Map Placeholder Side */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1000"
              alt="Emergency room"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Quick Form Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50">
               <div className="flex items-center space-x-4 mb-4">
                 <div className="bg-blue-600 p-2 rounded-lg">
                    <Calendar className="text-white w-5 h-5" />
                 </div>
                 <h4 className="font-bold text-slate-900">간편 진료 예약</h4>
               </div>
               <p className="text-sm text-slate-600 mb-6">모바일로 예약하시면 대기 시간을 줄이실 수 있습니다.</p>
               <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                 지금 예약하기
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
