
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          {/* Logo & Intro */}
          <div className="lg:col-span-1">
             <div className="flex items-center space-x-2 mb-8">
                <div className="bg-blue-600 p-2 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="4" width="4" height="16" fill="white" />
                        <rect x="4" y="10" width="16" height="4" fill="white" />
                    </svg>
                </div>
                <span className="text-2xl font-bold tracking-tight">
                    구리 센트럴병원
                </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              구리 센트럴병원은 환자 중심의 의료 철학을 바탕으로 지역 사회의 건강을 책임지는 신뢰받는 동반자가 되겠습니다.
            </p>
            <div className="flex items-center space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-slate-400 hover:text-white">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="font-bold text-lg mb-8">병원 안내</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">병원 소개</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">진료 안내</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">의료진 소개</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">찾아오시는 길</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8">이용 서비스</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">온라인 예약</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">증명서 발급</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">비용 안내</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">고객의 소리</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-lg mb-8">연락처</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                 <div className="bg-slate-900 p-2 rounded-lg mt-1">
                    <Send className="w-4 h-4 text-blue-500" />
                 </div>
                 <div className="text-slate-400">
                   <p className="font-bold text-white mb-1">주소</p>
                   <p>경기도 구리시 센트럴대로 123 (수택동)</p>
                 </div>
              </div>
              <div className="flex items-start space-x-4">
                 <div className="bg-slate-900 p-2 rounded-lg mt-1">
                    <Send className="w-4 h-4 text-blue-500" />
                 </div>
                 <div className="text-slate-400">
                   <p className="font-bold text-white mb-1">전화</p>
                   <p>031-123-4567</p>
                   <p>031-123-4568 (응급실)</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 구리 센트럴병원. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white">환자권리장전</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
