'use client';

import React, { createContext, useState, useContext, useMemo } from 'react';

type CountryContextType = {
  country: string;
  setCountry: (country: string) => void;
};

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountry] = useState('India');

  const value = useMemo(() => ({ country, setCountry }), [country]);

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
}
