
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    content: "부모님 건강검진을 여기서 진행했는데, 의료진분들이 너무 친절하게 설명해주셔서 정말 안심이 되었습니다. 시설도 대학병원급으로 깨끗해서 믿음이 갑니다.",
    author: "박영희 환자 보호자",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
  },
  {
    content: "갑작스러운 사고로 정형외과를 찾았는데, 원장님의 빠르고 정확한 조치 덕분에 빠르게 회복할 수 있었습니다. 구리에 이런 훌륭한 병원이 있어 든든합니다.",
    author: "김철수 환자",
    rating: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  },
  {
    content: "아이 예방접종과 영유아 검진을 꾸준히 받고 있습니다. 소아과 대기 공간이 아이들이 좋아하게 꾸며져 있어 병원 오는 걸 무서워하지 않게 되었어요.",
    author: "이지은 환자 보호자",
    rating: 5,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-4xl font-bold text-slate-900">환자분들이 전해주신 감동의 후기</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-slate-100 relative">
              <div className="absolute top-[-20px] left-10 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Quote className="text-white w-6 h-6" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-8 italic">
                "{t.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-xs text-slate-400">구리 센트럴병원 이용객</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
