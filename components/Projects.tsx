import React from 'react';

interface Props {
    go: (page: string) => void;
}

export default function Projects({ go }: Props) {
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-8">
            <button 
                onClick={() => go('landing')} 
                className="mb-8 px-4 py-2 bg-zinc-800 rounded hover:bg-white hover:text-black transition-colors"
            >
                ← Назад на главную
            </button>

            <h1 className="text-4xl font-bold mb-8 text-green-500">Мои Проекты</h1>

            <div className="grid gap-4">
                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <h3 className="text-2xl font-bold">1. Telegram Crypto Bot</h3>
                    <p className="text-zinc-400">Бот для отслеживания курсов криптовалют.</p>
                </div>

                <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                    <h3 className="text-2xl font-bold">2. Portfolio Site</h3>
                    <p className="text-zinc-400">Сайт портфолио на Next.js (этот сайт).</p>
                </div>
            </div>
        </div>
    );
}
