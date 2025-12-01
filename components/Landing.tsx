import React from 'react';
import { Github, ArrowRight, Terminal, Cpu, Globe, Code2 } from 'lucide-react';

interface Props {
    go: (page: string) => void;
}

export default function Landing({ go }: Props) {
    return (
        <div className="min-h-screen bg-[#030305] text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
                         style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}>
                </div>
                <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-teal-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
                <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-cyan-500/10 rounded-full blur-[150px] mix-blend-screen animate-pulse duration-[7000ms]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 h-20 flex items-center justify-between border-b border-white/5 bg-black/10 backdrop-blur-md supports-[backdrop-filter]:bg-black/5">
                <div className="text-xl font-bold flex items-center gap-2 tracking-tighter">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-black text-sm shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        R
                    </div>
                    <span className="hidden sm:inline">Roman Shore</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-6 text-sm font-medium text-zinc-300">
                    <button onClick={() => go('projects')} className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-all">Проекты</button>
                    <button onClick={() => go('bots')} className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition-all">Услуги</button>
                    <a href="https://t.me/romanshore_dev" target="_blank" className="ml-2 px-5 py-2 bg-white/10 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all flex items-center gap-2 backdrop-blur-sm">
                        Telegram <ArrowRight size={14} />
                    </a>
                </div>
            </nav>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-900/10 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                     <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                     AVAILABLE FOR CONTRACTS
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Создаю <br className="hidden md:block" />
                        <span className="text-blue-400 drop-shadow-[0_0_30px_rgba(34,197,94,0.25)]">Telegram-ботов</span> и <span className="text-green-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]">Web-системы</span> для бизнеса.
                </h1>
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
                    Я Fullstack-инженер, специализирующийся на создании <span className="text-white">отказоустойчивых систем</span>. 
                    Разрабатываю сложные WebApps, Telegram-ботов и архитектуру баз данных, которые масштабируются вместе с вашим бизнесом.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
                     <button 
                         onClick={() => go('projects')}
                         className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden hover:scale-105 transition-transform"
                     >
                         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                         <span className="relative flex items-center gap-2">Смотреть проекты <ArrowRight size={18} /></span>
                     </button>
                     <button 
                         onClick={() => go('bots')}
                         className="px-8 py-4 bg-black/30 border border-white/10 text-white font-bold rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2"
                     >
                         <Terminal size={18} className="text-cyan-400" /> Заказать решение
                     </button>
                </div>
                <div className="mt-24 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
                    <div className="md:col-span-2 p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-600/20 transition-colors"></div>
                         <div className="relative z-10">
                             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center mb-6 text-white">
                                 <Cpu size={24} />
                             </div>
                             <h3 className="text-2xl font-bold text-white mb-4">Инженерный подход</h3>
                             <p className="text-zinc-400 leading-relaxed">
                                 Мне важна не только красивая картинка, но и то, что "под капотом". 
                                 Чистый код, типизация (TypeScript/Python), оптимизация SQL-запросов и Docker-контейнеризация — 
                                 это стандарт, а не опция. Я строю продукты, которые легко поддерживать и развивать.
                             </p>
                         </div>
                    </div>
                    <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-2xl flex flex-col justify-between hover:border-white/20 transition-all group">
                         <div>
                             <div className="flex justify-between items-start mb-6">
                                 <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400">
                                     <Code2 size={24} />
                                 </div>
                                 <div className="text-xs font-mono text-zinc-500 border border-white/5 px-2 py-1 rounded">
                                        STACK
                                 </div>
                             </div>
                             <h3 className="text-xl font-bold text-white mb-4">Core Tech</h3>
                             <ul className="space-y-2 text-zinc-400 text-sm font-mono">
                                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span> Python (FastAPI, Aiogram)</li>
                                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> React / Next.js</li>
                                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span> PostgreSQL / Redis</li>
                                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Docker & CI/CD</li>
                             </ul>
                         </div>
                    </div>
                    <a href="https://github.com/Vladi2lav" target="_blank" className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-3xl shadow-2xl flex items-center justify-between hover:bg-white hover:text-black transition-all group cursor-pointer">
                         <div className="flex items-center gap-4">
                             <Github size={32} />
                             <div>
                                 <h3 className="font-bold text-lg">GitHub</h3>
                                 <p className="text-xs font-mono opacity-60">View Source Code</p>
                             </div>
                         </div>
                         <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </a>
                    <div className="md:col-span-2 p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-900/20 to-teal-900/20 backdrop-blur-3xl shadow-2xl flex items-center justify-between relative overflow-hidden group">
                         <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 w-full justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-300">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Based in Almaty</h3>
                                        <p className="text-zinc-400 text-sm">Работаю по всему миру (Remote)</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => go('bots')}
                                    className="px-6 py-3 bg-white/10 border border-white/10 rounded-xl text-white font-bold hover:bg-white hover:text-black transition-all"
                                >
                                    Начать сотрудничество
                                </button>
                         </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
