import React, { useRef } from "react";
import { SectionHeading } from "../../components";

const blogs = [
  {
    image: "blog.png",
    category: "category",
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022. 5 min read",
  },
  {
    image: "blog.png",
    category: "category",
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022. 5 min read",
  },
  {
    image: "blog.png",
    category: "category",
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022. 5 min read",
  },
  ,
  {
    image: "blog.png",
    category: "category",
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022. 5 min read",
  },
  ,
  {
    image: "blog.png",
    category: "category",
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    date: "11 Jan 2022. 5 min read",
  },
];

const Blog = ({ image, category, title, description, date }) => {
  return (
    <div className="flex-none bg-white w-full sm:w-1/2 md:w-1/3 rounded-lg border border-[#3C5065] hover:drop-shadow-2xl">
      <div className="flex flex-col items-center">
        <img src="blog.png" alt={title} className="w-full aspect-[5/3]" />
        <div className="flex flex-col p-2">
          <p className="text-base">{category}</p>
          <p className="font-bold text-xl mt-2">{title}</p>
          <p className="text-sm font-light mt-2">{description}</p>
          <p className="text-sm font-light mt-6">{date}</p>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  const scrollContainerRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, // Adjust scroll distance here
      behavior: "smooth",
    });
  };

  // Scroll right function
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, // Adjust scroll distance here
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col flex-wrap space-y-2 p-10" id="blog">
      <SectionHeading
        title="Blog"
        subtitle="I write some helpful articles"
        description=""
      />
      <div ref={scrollContainerRef} className="w-full overflow-x-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div className="flex space-x-4 p-10">
          {blogs.map((blog) => (
            <Blog
              category={blog.category}
              image={blog.icon}
              title={blog.title}
              description={blog.description}
              date={blog.date}
            />
          ))}
        </div>
      </div>
      {/* Scroll buttons */}
      <div className="flex justify-center space-x-2 mt-4">
        <button
          onClick={scrollLeft}
          className="text-white bg-[#3C5065] hover:bg-[#65717E] font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className="text-white bg-[#3C5065] hover:bg-[#65717E] font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Blogs;
