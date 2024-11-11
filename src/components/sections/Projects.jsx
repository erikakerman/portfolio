import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectCard({ id, title, year, category, description, image }) {
  return (
    <div className="flex flex-col md:flex-row mb-8 items-start">
      <div className="w-full md:w-1/3 h-48 mb-4 md:mb-0 md:mr-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/400x300";
          }}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="mb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {year}
          </span>
          <span className="text-blue-600">{category}</span>
        </p>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link to={`/project/${id}`} className="text-blue-500 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, // Changed from color to image
};

function Projects({ projects }) {
  return (
    <section className="py-10 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape(ProjectCard.propTypes))
    .isRequired,
};

export default Projects;
