import React from "react";

import {
  BellIcon,
  FireIcon,
  HomeIcon,
  MenuIcon,
  TrendingUpIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";

import ProjectsNavigation from "./ProjectsNavigation";
import ChampionDashboardLayout from "./ChampiondashboardLayout";

const ChampionDashboard = () => {
  return (
    <>
      <ProjectsNavigation />
      <main className="col-span-9">Projects Home</main>
    </>
  );
};

ChampionDashboard.getLayout = function getLayout(page) {
  return <ChampionDashboardLayout>{page}</ChampionDashboardLayout>;
};

export default ChampionDashboard;
