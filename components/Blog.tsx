
import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    category: '건강 정보',
    title: '심혈관 건강을 위한 5가지 생활 습관',
    author: '김센트럴 원장',
    date: '2024. 03. 20',
    img: 'https://images.unsplash.com/photo-1505751172107-573225a94206?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: '병원 소식',
    title: '최첨단 3D 구강 스캐너 도입 안내',
    author: '홍보팀',
    date: '2024. 03. 15',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: '의학 뉴스',
    title: '환절기 면역력 관리를 위한 영양 가이드',
    author: '박대한 과장',
    date: '2024. 03. 10',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="py-24 bg-white" id="blog">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-blue-600 font-bold uppercase tracking-wider mb-3">Blog & Articles</p>
            <h2 className="text-4xl font-bold text-slate-900">전문 의료진의 건강 칼럼</h2>
          </div>
          <button className="text-blue-600 font-bold flex items-center hover:underline">
            전체 보기 <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-video rounded-[32px] overflow-hidden mb-6">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-3 text-slate-400 text-sm">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                자세히 보기 <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
