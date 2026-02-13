'use client';

import { useEffect, useState } from 'react';

// Hook to handle Zustand hydration safely
export function useHydration() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}
