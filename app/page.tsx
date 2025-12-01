"use client";

import React, { useState, useEffect } from 'react';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import Bots from '@/components/Bots';

export default function Home() {
  const [page, setPage] = useState('landing');

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      setPage(pageParam || 'landing');
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const go = (newPage: string) => {
    setPage(newPage);
    const url = newPage === 'landing' ? '/' : `?page=${newPage}`;
    window.history.pushState(null, '', url);
    window.scrollTo(0, 0);
  };

  return (
    <main>
      {page === 'landing' && <Landing go={go} />}
      {page === 'projects' && <Projects go={go} />}
      {page === 'bots' && <Bots go={go} />}
    </main>
  );
}
