'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import HomePage from '../page';

export default function LangHomePage() {
  // Use useParams for client components
  const params = useParams();
  const lang = params?.lang;
  
  // Return the HomePage with the language prop
  return <HomePage language={lang} />;
}