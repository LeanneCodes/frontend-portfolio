"use client";

import React, { useState, useEffect } from 'react';
import useBackgroundEffect from "@/hooks/useBackgroundEffect";
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Labels from '@/components/Labels/Labels';
import Link from 'next/link';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import OutlineButton from '@/components/Buttons/OutlineButton';
import { animateElements, animateProjectCards, projectCardScroll } from '@/utils/gsapAnimations';

const page = () => {
  useBackgroundEffect();

  useEffect(() => {
    animateProjectCards("project-card"); // Trigger scroll animations for project cards
  }, []);

  // Project data with unique images
  const projects = [
    {
      title: "Game Sync",
      image: "/project1.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "App", "React"]
    },
    {
      title: "Banner Ads",
      image: "/project2.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "App", "Gaming"]
    },
    {
      title: "Spellbound",
      image: "/project3.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "React", "Gaming"]
    },
    {
      title: "Silke",
      image: "/project4.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["API", "JavaScript", "Gaming"]
    },
    {
      title: "Budget App",
      image: "/project5.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["Mobile", "React", "Gaming"]
    },
    {
      title: "Password Generator",
      image: "/project6.png",
      desc: "I build display banner ads for esteemed clients and projects for a variety of audiences, gaming, natural hair community.",
      labels: ["API", "JavaScript", "Gaming"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
      if (currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
      }
  };   

  return (
    <div className='flex flex-col top-[149px] w-full'>
      <div className='bg-blurred-mantel bg-cover object-cover bg-no-repeat bg-bottom bg-fixed flex flex-col justify-center items-center w-full h-[450px] relative'>
        
        {/* Carousel */}
        <div className='xxs:w-4/5 lg:w-full h-full flex justify-around items-center'>
          <div className="xxs:hidden md:block">
            <OutlineButton onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`border-darkGrey text-darkGrey text-4xl py-1 hover:bg-darkGrey hover:text-white ${
                currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
            }`}>
              <HiOutlineArrowLongLeft /> 
            </OutlineButton>
          </div>

          {/* Main content */}
          <Link href={`/projects/${currentIndex + 1}`} className='cursor-pointer xxs:w-full lg:w-3/4 xl:w-1/2 flex justify-center'>
            <div className='xxs:w-full md:w-[90%] xxs:gap-0 sm:p-10 lg:gap-8 md:p-0 flex'>
              <div>
                <Image
                  alt={projects[currentIndex].title}
                  src={projects[currentIndex].image}
                  width={600}
                  height={600}
                  className='xxs:hidden lg:block'
                  priority
                />
              </div>
              <div className='flex flex-col justify-around xxs:items-center lg:items-start'>
                <h1 className='font-bold text-6xl xxs:mb-4 xxs:text-center lg:text-left lg:mb-0'>{projects[currentIndex].title}</h1>
                <p className='xxs:text-center lg:text-left'>{projects[currentIndex].desc}</p>
                <div className="flex gap-2 mt-4">
                  {projects[currentIndex].labels.map((label, labelIndex) => (
                    <Labels key={labelIndex}>{label}</Labels>
                  ))}
              </div>
              </div>
            </div>
          </Link>

          <div className="xxs:hidden md:block">
            <OutlineButton onClick={handleNext}
            disabled={currentIndex === projects.length - 1}
            className={`border-darkGrey text-darkGrey text-4xl py-1 hover:bg-darkGrey hover:text-white ${
                currentIndex === projects.length - 1
                    ? "opacity-50 pointer-events-none"
                    : ""
            }`}>
              <HiOutlineArrowLongRight /> 
            </OutlineButton>
          </div>
        </div>

        {/* Active bar indicator */}
        <div className="h-[50px] flex justify-center items-center space-x-2">
          {projects.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-6 rounded-full ${
                currentIndex === index
                  ? "bg-white w-12"
                  : "bg-white opacity-50 hover:bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Portfolio Image */}
      <div className='h-[200px] flex justify-center items-center relative'>
        <Image
          alt='Portfolio Logo'
          src={"/portfolio-logo.png"}
          width={200}
          height={200}
          priority
        />
      </div>

      {/* Project Cards */}
      <div className="relative max-h-fit w-full xxs:px-0 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-8 xxs:px-5 md:px-10 w-full justify-evenly items-center">
          {projects.length === 0 ? (
            <div>No projects found</div>
          ) : (
            projects.map((project, index) => (
              <Link href={`/projects/${index + 1}`} className='cursor-pointer' key={index}>
                <ProjectCard image={project.image} title={project.title} desc={project.desc}>
                  {project.labels.map((label, labelIndex) => (
                    <Labels key={labelIndex}>{label}</Labels>
                  ))}
                </ProjectCard>
              </Link>
            ))
          )}
        </div>
      </div>

    </div>
  )
}

export default page;
