"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skill",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 lg:text-2xl xl:text-4xl h-16">
        All Beginner level entries in:
        <li>Java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Tailwind</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 lg:text-2xl xl:text-4xl h-16">
        <li>Pigkawayan Central Elementary School</li>
        <li>Pigkawayan National High School</li>
        <li>Holy Child College of Davao Senior High School</li>
        <li>Ateneo De Davao University</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2 lg:text-2xl xl:text-4xl h-16">
        <li>Badminton</li>
        <li>Coding</li>
        <li>Cooking</li>
        <li>Cleaning</li>
        <li>Gaming</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div
        id="aboutme"
        className="md:grid md:grid-cols-2 scroll-mt-12 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 xl:mr-60"
      >
        <Image src="/images/me.jpg" alt="MEEEEE" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 xl:text-5xl">
            About Me
          </h2>
          <p className="text-base lg:text-lg xl:text-3xl">
            Hello SysDev! I'm Kirby Josh O. Calong a second year Computer
            Science student 20 years old who lives in Pigkawayan North Cotabato.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hobbies")}
              active={tab === "hobbies"}
            >
              Hobbies
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
