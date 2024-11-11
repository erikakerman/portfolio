import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="container mx-auto px-4 py-8">Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <main className="mb-16">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>

        <div className="flex items-center mb-4">
          <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2 py-0.5 rounded">
            {project.year}
          </span>
          <span className="text-gray-600">{project.category}</span>
        </div>

        <p className="text-gray-700 mb-8">{project.description}</p>

        <img
          src="/cupcake2.jpg"
          alt="Project Screenshot"
          className="w-full mb-8"
        />

        <h2 className="text-2xl font-bold mb-2">Heading 1</h2>
        <h3 className="text-xl mb-2">Heading 2</h3>

        <p className="text-gray-700 mb-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <img
          src="/screen.jpg"
          alt="Additional Project Image"
          className="w-full mb-8"
        />
      </main>
    </div>
  );
}

ProjectDetail.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ProjectDetail;
