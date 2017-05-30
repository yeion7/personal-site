import Project from "./Project";
import { projects } from "../data.json";

export default () => (
  <div>
    {projects.map(project => <Project key={project.id} {...project} />)}
    <style jsx>{`
      div {
        align-self: center;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
      }
      `}</style>
  </div>
);
