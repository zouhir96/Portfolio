import { SectionHeading } from "../../components";

const Blog = ({ image, category, title, description, date }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border border-[#3C5065]">
      <img src="blog.png" alt={title} className="w-full aspect-[5/3]" />
      <div className="flex flex-col p-2">
        <p className="text-base">{category}</p>
        <p className="font-bold text-xl mt-2">{title}</p>
        <p className="text-sm font-light mt-2">{description}</p>
        <p className="text-sm font-light mt-6">{date}</p>
      </div>
    </div>
  );
};

const Blogs = () => {
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
  ];

  return (
    <div className="flex flex-col flex-wrap space-y-10 p-10" id="blog">
      <SectionHeading
        title="Blog"
        subtitle="I write some helpful articles"
        description=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
  );
};

export default Blogs;
