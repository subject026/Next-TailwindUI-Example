import Image from "next/image";

import dummyUserImage from "../../public/dummy_user_1.jpg";

const TeamMemberCard = () => (
  <article className="px-4 py-5 bg-white drop-shadow rounded-lg grid grid-cols-2 gap-5 sm:grid-cols-5">
    <Image
      className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
      src={dummyUserImage}
      alt=""
    />
    <div className="overflow-hidden sm:p-6 flex flex-col content-between">
      <dt className="text-sm font-medium text-gray-500">Elizabeth Windsor</dt>
    </div>
    <div className="overflow-hidden sm:p-6 flex flex-col justify-between">
      <dt className="text-sm font-medium text-gray-500">Total Shortlisted</dt>
    </div>
    <div className="overflow-hidden sm:p-6 flex flex-col justify-between">
      <dt className="text-sm font-medium text-gray-500">Interest Confirmed</dt>
    </div>
    <div className="overflow-hidden sm:p-6 flex flex-col justify-between">
      <dt className="text-sm font-medium text-gray-500"># Committed</dt>
    </div>
  </article>
);

export default TeamMemberCard;
