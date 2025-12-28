
import React from 'react';
import { ArrowRight } from 'lucide-react';

const doctors = [
  {
    name: '김센트럴 원장',
    dept: '심혈관 센터 전문의',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: '이하나 과장',
    dept: '치과 전문의',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: '박대한 과장',
    dept: '소아청소년과 전문의',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: '최미래 과장',
    dept: '산부인과 전문의',
    img: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400'
  }
];

const Doctors: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-blue-600 font-bold uppercase tracking-wider mb-3">Our Medical Team</p>
            <h2 className="text-4xl font-bold text-slate-900">분야별 최고의 전문 의료진</h2>
          </div>
          <button className="text-blue-600 font-bold flex items-center hover:underline">
            전체 의료진 보기 <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h3>
                <p className="text-slate-500 text-sm">{doc.dept}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
