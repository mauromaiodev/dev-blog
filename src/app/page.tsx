'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const origin = window.location.origin;
    router.replace(`${origin}/posts`);
  }, [router]);

  return null;
}
