import { CardBody, CardContainer, CardItem } from "../../ui/3Dcard";
import PropTypes from "prop-types";
export function ProjectCard({ projects, openGithub, openLive }) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-10 px-4">
      {projects?.map((project) => (
        <CardContainer key={project.id} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto 2xl:w-[21rem] sm:w-[20rem] h-auto rounded-xl p-6 border ">
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-neutral-600 dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={project.thumbnail}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center gap-2 pt-6">
              <h1 className="text-lg font-bold">Tech Stack:</h1>
              <div className="flex gap-2">
              {project?.tech?.map((tech) => (
                <img src={tech} alt="tech" width="40" height="40" key={tech} />
              ))}
              </div>
            </div>
            <div className="flex justify-around items-center mt-10">
              <CardItem
                translateZ={20}
                onClick={() => openGithub(project.Githublink)} // Invoke openGithub with project link
                className="px-4 py-2 -mt-4 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                View Code
              </CardItem>
              <CardItem
                translateZ={20}
                onClick={() => openLive(project.Demolink)} // Invoke openLive with project link
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white  -mt-4 text-xs font-bold"
              >
                Go Live
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

ProjectCard.propTypes = {
  projects: PropTypes.array,
  openGithub: PropTypes.func,
  openLive: PropTypes.func,
}
