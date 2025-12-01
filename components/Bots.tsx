import React from 'react';

interface Props {
    go: (page: string) => void;
}

export default function Bots({ go }: Props) {
    return (
        <div className="min-h-screen bg-[#050510] text-white p-8">
            <button 
                onClick={() => go('landing')} 
                className="mb-8 px-4 py-2 bg-blue-900 rounded hover:bg-blue-600 transition-colors"
            >
                ← Назад
            </button>

            <h1 className="text-4xl font-bold mb-8 text-blue-500">Разработка Ботов</h1>

            <div className="space-y-6 max-w-3xl">
                <div className="p-6 border border-blue-900/50 bg-blue-900/10 rounded-xl">
                    <h2 className="text-xl font-bold text-white">Telegram Bots</h2>
                    <p className="text-zinc-400 mt-2">Магазины, админки, рассылки.</p>
                </div>

                <div className="p-6 border border-purple-900/50 bg-purple-900/10 rounded-xl">
                    <h2 className="text-xl font-bold text-white">Discord Bots</h2>
                    <p className="text-zinc-400 mt-2">Музыка, модерация, экономика.</p>
                </div>
            </div>
        </div>
    );
}
