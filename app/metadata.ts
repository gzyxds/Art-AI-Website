import { Metadata } from 'next';
import { getTranslation } from '@/lib/translations';

type GenerateMetadataProps = {
  language: 'en' | 'zh';
};

export function generateMetadata({ language }: GenerateMetadataProps): Metadata {
  const title = getTranslation(language, 'metaTitle');
  const description = getTranslation(language, 'metaDescription');

  return {
    title,
    description,
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/logo.svg', sizes: 'any' }
      ],
      apple: '/logo.svg',
    },
    openGraph: {
      title,
      description,
      images: ['/logo.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.svg'],
    },
  };
}
