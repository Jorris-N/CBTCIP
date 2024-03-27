import React from 'react';
import { Box, Text, Progress, Flex } from '@chakra-ui/react';


export default function SkillsSection() {
  const skills = [
    { name: 'HTML', percentage: 98 },
    { name: 'CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 89 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'React', percentage: 78 },
    { name: 'Next', percentage: 87 },
    { name: 'Gatsby', percentage: 72 },
  ];

  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='text-center max-w-2xl mx-auto pb-12 space-y-4'>
        <h1 className='text-4xl capitalize font-bold text-[#0a0e27]'>
          my skills
        </h1>
        <div className='mt-9 pb-4'>
          <p className='text-neutral-600'>
            I believe in the fact that learning never stops.
          </p>
          <div className='w-32 h-[2px] bg-[#c51b23] items-center mx-auto mt-4 justify-center'></div>
        </div>
      </div>

      <div className='grid lg:grid-cols-2 gap-8'>
        <div className=''>
          <h1 className='text-2xl capitalize font-bold text-[#0a0e27]'>
            Web Developer
          </h1>
          <div className='w-32 h-[2px] bg-[#c51b23] items-start mt-2 justify-start'></div>
          <div className='py-4 space-y-6'>
            <p className='text-neutral-600 text-[15px] leading-7'>
            <strong>Front-End Expertise:</strong> Building visually stunning web applications with custom plugins, features, and animations. Crafting interactive layouts for seamless user experiences in small-to-medium projects. I leverage latest tech to create responsive interfaces that prioritize function and aesthetics.
            </p>
            <p className='text-neutral-600 text-[15px] leading-7'>
            <strong>Lifelong Learner:</strong> Continuously learning to stay ahead in the dynamic tech world. Exploring new languages and technologies to enhance skillset and deliver efficient, cutting-edge solutions. Adapting to industry changes and optimize development processes for faster, high-quality results.
            </p>
            <p className='text-neutral-600 text-[15px] leading-7'>
            <strong>Innovative & Efficient:</strong> Integrating latest tools and methodologies for innovation and efficiency. Staying ahead technologically to ensure future-proof solutions. Embracing cutting-edge tech and refine coding practices to consistently deliver robust, scalable, high-performance web applications exceeding industry standards.
            </p>
          </div>
        </div>

    <div className='h-full w-full'>
    {skills.map((skill) => (
      <Box key={skill.name} mb={6}>
        <Text mb={0.5} className='font-semibold text-[#1f2e4e]'>{skill.name}</Text>
        {/* Conditionally render the progress bar with animation based on inView */}
          <Progress
            value={skill.percentage}
            isAnimated
            colorScheme={'red'}
            bgColor={'#D1D5DB'}
            size={'lg'}
            className='rounded-full'
            transitionDuration={'0.5s'}
          >
            {/* ... positioning styles for percentage text */}
            <Text fontSize="sm" textAlign="center" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#1f2e4e" fontWeight="bold">{`${skill.percentage}%`}</Text>
          </Progress>
      </Box>
    ))}
  </div>
      </div>
    </div>
  );
}
