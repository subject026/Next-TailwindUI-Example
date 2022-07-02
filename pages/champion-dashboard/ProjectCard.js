const ProjectCard = () => (
  <li className="px-4 py-5 bg-white drop-shadow rounded-lg hover:drop-shadow-md hover:cursor-pointer">
    <section className="flex">
      <h3 className="mb-2 text-xl font-bold flex-grow">Project Title</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </section>
    <dl className=" grid grid-cols-1 gap-5 sm:grid-cols-4 ">
      <div className="overflow-hidden sm:p-6 flex flex-col content-between">
        <dt className="text-sm font-medium text-gray-500">
          Days Until Kickoff
        </dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">99</dd>
      </div>
      <div className="overflow-hidden sm:p-6 flex flex-col justify-between">
        <dt className="text-sm font-medium text-gray-500">Total Shortlisted</dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">7</dd>
      </div>
      <div className="overflow-hidden sm:p-6 flex flex-col justify-between">
        <dt className="text-sm font-medium text-gray-500">
          Interest Confirmed
        </dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">5</dd>
      </div>
      <div className="overflow-hidden sm:p-6 flex flex-col justify-between">
        <dt className="text-sm font-medium text-gray-500"># Committed</dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">3</dd>
      </div>
    </dl>
  </li>
);

export default ProjectCard;
