import { blogPosts } from "../../data/blogPosts.js";
import PropTypes from "prop-types";

function BlogCard({ title, description, tags, date }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {date} | {tags.join(", ")}
      </p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

function Blogs() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Personal Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              tags={post.tags}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
