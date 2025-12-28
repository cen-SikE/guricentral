
import React from 'react';
import { 
  Heart, 
  Baby, 
  Smile, 
  UserRound, 
  Trees, 
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    title: '치과 센터',
    desc: '임플란트, 교정, 치주 질환 등 정밀한 치과 전문 진료를 제공합니다.',
    icon: <Smile className="text-blue-600" />,
    link: '#'
  },
  {
    title: '소아청소년과',
    desc: '우리 아이들의 건강한 성장을 위해 체계적인 검진과 치료를 진행합니다.',
    icon: <Baby className="text-blue-600" />,
    link: '#'
  },
  {
    title: '심혈관 센터',
    desc: '고혈압, 심부전 등 심장 질환의 조기 발견과 집중 케어를 제공합니다.',
    icon: <Heart className="text-blue-600" />,
    link: '#'
  },
  {
    title: '피부과 센터',
    desc: '메디컬 스킨케어와 레이저 클리닉을 통해 건강하고 아름다운 피부를 유지합니다.',
    icon: <UserRound className="text-blue-600" />,
    link: '#'
  },
  {
    title: '산부인과',
    desc: '여성의 생애 주기별 맞춤형 진료와 안전한 분만 환경을 제공합니다.',
    icon: <Trees className="text-blue-600" />,
    link: '#'
  },
  {
    title: '정형외과',
    desc: '관절, 척추 질환의 비수술적 치료부터 첨단 수술까지 토탈 케어를 실현합니다.',
    icon: <ShieldCheck className="text-blue-600" />,
    link: '#'
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-wider mb-3">Healthcare Solutions</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">최상의 의료 서비스를 경험하세요</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 transition-colors">
                {/* Fixed TypeScript error by casting to React.ReactElement with any props to allow className property in cloneElement */}
                {React.cloneElement(service.icon as React.ReactElement<any>, {
                  className: "w-7 h-7 group-hover:text-white transition-colors"
                })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href={service.link} className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
