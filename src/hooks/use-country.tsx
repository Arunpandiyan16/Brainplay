
'use client';

import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

type CountryContextType = {
  country: string;
  setCountry: (country: string) => void;
};

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountryState] = useState('India');

  useEffect(() => {
    try {
        const savedCountry = localStorage.getItem('country');
        if (savedCountry) {
            setCountryState(savedCountry);
        }
    } catch (error) {
        console.error("Could not read country from localStorage", error);
    }
  }, []);

  const setCountry = (newCountry: string) => {
    try {
        localStorage.setItem('country', newCountry);
        setCountryState(newCountry);
    } catch (error) {
        console.error("Could not save country to localStorage", error);
    }
  };

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
