import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { classNames } from "./util";

const ProjectsNavigation = () => {
  const router = useRouter();
  const { _id } = router.query;
  const { projectsInspect } = useSelector((state) => state);

  const { isDataAvailable, projects } = projectsInspect;
  return (
    <div className="col-span-3 xl:col-span-2">
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className="pb-8 space-y-1">
          {!isDataAvailable && "Fetching projects..."}
          {isDataAvailable &&
            projects.map((project, i) => (
              <Link
                key={`project__${i}`}
                href={`/champion-dashboard/project/${project.info._id}`}
              >
                <a
                  className={classNames(
                    project.info._id === _id
                      ? "bg-gray-200 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50",
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                  )}
                  aria-current={project.info._id === _id ? "page" : undefined}
                >
                  <span className="truncate">{project.info.title}</span>
                </a>
              </Link>
            ))}
        </div>
      </nav>
    </div>
  );
};

export default ProjectsNavigation;
