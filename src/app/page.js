"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";

// Function to fetch API users
const fetchApiUsers = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    return data.data.map((user) => ({
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
      picture: user.avatar,
      description: user.email,
    }));
  } catch (error) {
    console.error("Error fetching API users:", error);
    return [];
  }
};

// Function to generate 3 random additional users with unique IDs
const generateRandomUsers = () => {
  const names = ["Alex Johnson", "Samantha Lee", "Daniel Kim"];
  return names.map((name, index) => ({
    id: 13 + index,
    name,
    picture: `https://reqres.in/img/faces/${index + 1}-image.jpg`,
    description: `${name.toLowerCase().replace(" ", ".")}@reqres.in`,
  }));
};

export default function Home() {
  const [localUsers, setLocalUsers] = useState([]);
  const [apiUsers, setApiUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const localResponse = await fetch("data.json").then((res) =>
          res.json()
        );
        setLocalUsers(localResponse);
      } catch (error) {
        console.error("Error fetching local data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await fetchApiUsers();
      const randomUsers = generateRandomUsers();
      setApiUsers([...users, ...randomUsers]);
    };

    fetchUsers();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <NavBar />
      <div
        id="home"
        className="container mt-24 mx-auto py-4 px-12 scroll-mt-20"
      >
        <HeroSection />
        <AboutSection />

        {/* Project Section displays data fetched from Json file
        displays it in a box container with hover effects
        revealing a short description about the project*/}
        <section id="projects" className="mt-12 pt-24">
          <h2 className="text-white text-3xl font-bold text-center mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:mb-28 md:h-[50rem] lg:h-80">
            {localUsers.map((person, index) => (
              <div
                key={index}
                className="relative p-4 border rounded-lg shadow-md bg-gray-900 text-white overflow-hidden 
                transition-all duration-500 hover:shadow-[0_0_30px] hover:shadow-teal-500/100"
              >
                <Image
                  src={person.picture}
                  alt={person.name}
                  width={300}
                  height={300}
                  className="mx-auto lg:w-56 lg:h-60 sm:w-72 sm:h-80 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-xl font-semibold mt-4 text-center">
                  {person.name}
                </h3>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                  <p className="text-gray-300 text-center md:text-sm sm:text-base xl:text-base font-extrabold">
                    {person.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* API Users Sections displays the api fetched from an api file. 
        Storedbox type container that has hover effects to reveal the data of each user */}
        <section id="collabs" className="mt-12 pt-24">
          <h2 className="text-white text-3xl font-bold text-center mb-12">
            Collaborations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mb-28">
            {apiUsers.map((person, index) => (
              <div
                key={index}
                className="relative p-4 border rounded-2xl shadow-md bg-gray-900 text-white overflow-hidden 
        transition-all duration-500 hover:shadow-[0_0_30px] hover:shadow-teal-500/100"
              >
                <Image
                  src={person.picture}
                  alt={person.name}
                  width={200} // Smaller default size
                  height={200} // Smaller default size
                  className="mx-auto w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-60 transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <p className="text-gray-300 text-sm">ID: {person.id}</p>
                  <p className="text-gray-300 text-sm">{person.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
