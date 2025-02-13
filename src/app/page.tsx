"use client"

import React from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'

interface FeatureType {
  logo: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureType> = ({ logo, title, description }) => (
  <div className='relative w-64 md:w-72 p-6 my-4 bg-gray-200 shadow-xl rounded-3xl'>
    <div className='absolute flex items-center p-3 rounded-full shadow-xl bg-gradient-to-r from-[#016795] to-[#1E488F] left-4 -top-8'>
      <Image src={`/assets/home/${logo}`} height={50} width={50} quality={100} alt='img' />
    </div>
    <div className='mt-8 text-gray-800 text-left'>
      <h1 className='my-2 text-xl font-bold'>{title}</h1>
      <div className='flex space-x-2 font-medium'>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default function Page() {
  const features: FeatureType[] = [
    {
      logo: 'icons8-dataset-50.png',
      title: 'Model Collaboration',
      description: 'ChainModels enables seamless collaboration on machine learning models, allowing users to contribute to existing models and foster innovation.',
    },
    {
      logo: 'icons8-dataset-50.png',
      title: 'Dataset Sharing',
      description: 'ChainModels provides a platform for users to share and discover datasets, making it easier to find the right data for machine learning projects.',
    },
    {
      logo: 'icons8-dataset-50.png',
      title: 'Model Monetization',
      description: 'ChainModels allows users to monetize their machine learning models, enabling creators to earn revenue from their work and incentivizing innovation.',
    },
    {
      logo: 'icons8-dataset-50.png',
      title: 'Model Comparison',
      description: 'ChainModels enables users to compare and bet on different machine learning models, promoting healthy competition and driving progress in the field.',
    }
  ]

  return (
    <div>
      <div className='md:h-[30rem] w-full flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden'>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
        <div className='p-4 max-w-7xl mx-auto relative z-10 w-full pt-8 md:pt-0'>
          <h1 className='pb-3 text-4xl md:text-6xl font-bold text-center bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50'>
            Welcome to ChainModels <br /> <span className='italic'>where you can deploy, collaborate, monetize, and engage in model comparisons</span>
          </h1>
          <p className='py-2 font-normal text-lg max-w-4xl text-center mx-auto'>
            ChainModels is a collaborative platform where users can share their machine learning models and datasets, making it easier for others to discover, purchase, and contribute to innovative solutions. Join us in fostering a community that empowers developers and researchers to leverage shared resources for greater impact in the AI/ML landscape.
          </p>
          <div className='flex flex-col md:flex-row space-x-0 space-y-2 md:space-x-2 md:space-y-0 py-2 items-center justify-center'>
            <Button className='px-10 w-3/4 md:w-auto' asChild>
              <Link href='/ml-models'>
                Explore ML Models
              </Link>
            </Button>

            <Button variant='outline' className='px-10 w-3/4 md:w-auto' asChild>
              <Link href='/datasets'>
                Explore Datasets
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <MaxWidthWrapper>
        <div className='flex items-center justify-center py-6'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
