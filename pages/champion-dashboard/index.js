import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  BellIcon,
  FireIcon,
  HomeIcon,
  MenuIcon,
  TrendingUpIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";
import { findProjects } from "../../redux/slices/projectsInspectSlice";

const projects = [
  { name: "Project 1", href: "#", icon: HomeIcon, current: true },
  { name: "Project 2", href: "#", icon: FireIcon, current: false },
  { name: "Project 3", href: "#", icon: UserGroupIcon, current: false },
  { name: "Project 4", href: "#", icon: TrendingUpIcon, current: false },
];

const tabs = [
  { name: "Overview", href: "#", current: true },
  { name: "# engaged", href: "#", current: false },
  { name: "# Committed", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ChampionDashboard = () => {
  const { projectsInspect } = useSelector((state) => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(findProjects());
  }, [dispatch]);

  console.log(projectsInspect);
  return (
    <>
      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <div className="py-10">
          <div className="mx-auto sm:px-6 lg:max-w-7xl lg:px-8 grid grid-cols-12 lg:gap-8">
            <div className="col-span-3 xl:col-span-2">
              <nav
                aria-label="Sidebar"
                className="sticky top-4 divide-y divide-gray-300"
              >
                <div className="pb-8 space-y-1">
                  {projects.map((project) => (
                    <a
                      key={project.name}
                      href={project.href}
                      className={classNames(
                        project.current
                          ? "bg-gray-200 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50",
                        "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                      )}
                      aria-current={project.current ? "page" : undefined}
                    >
                      <span className="truncate">{project.name}</span>
                    </a>
                  ))}
                </div>
              </nav>
            </div>
            <main className="col-span-9">
              <div className="px-4 sm:px-0">
                <h2 className="p-8 text-2xl font-bold text-gray-900">
                  Project 1
                </h2>
                <div className="sm:hidden">
                  <label htmlFor="question-tabs" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="question-tabs"
                    className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    defaultValue={tabs.find((tab) => tab.current).name}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <nav
                    className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
                    aria-label="Tabs"
                  >
                    {tabs.map((tab, tabIdx) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        aria-current={tab.current ? "page" : undefined}
                        className={classNames(
                          tab.current
                            ? "text-gray-900"
                            : "text-gray-500 hover:text-gray-700",
                          tabIdx === 0 ? "rounded-l-lg" : "",
                          tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                          "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                        )}
                      >
                        <span>{tab.name}</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            tab.current ? "bg-rose-500" : "bg-transparent",
                            "absolute inset-x-0 bottom-0 h-0.5"
                          )}
                        />
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChampionDashboard;
