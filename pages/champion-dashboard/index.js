import Image from "next/image";
import React from "react";

import ProjectCard from "./ProjectCard";
import TeamMemberCard from "./TeamMemberCard";
import dummyUserImage from "../../public/dummy_user_1.jpg";

const DashboardSection = ({ children }) => (
  <section className=" p-8 bg-neutral-100 rounded-lg ">{children}</section>
);

const DashboardSectionTitle = ({ children }) => (
  <h2 className="mb-8 text-2xl font-bold">{children}</h2>
);

const DashboardSectionList = ({ children }) => (
  <ul className="grid gap-8 h-[32rem] overflow-y-scroll">{children}</ul>
);

const EngagedTalentList = ({ children }) => (
  <ul className="grid gap-8">{children}</ul>
);

const CommittedTeamList = ({ children }) => (
  <ul className="grid grid-cols-4 gap-2">{children}</ul>
);

const CommittedTeamMember = () => (
  <article className=" p-4 bg-white drop-shadow rounded-lg">
    <Image
      layout="responsive"
      className="w-full rounded-full lg:w-20 lg:h-20"
      src={dummyUserImage}
      alt=""
    />
  </article>
);

const ChampionDashboard = () => {
  return (
    <main className="p-8">
      <h1 className="text-4xl mb-8 font-bold">Hey there, champion!</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        {/* left col */}
        <div className="flex flex-col flex-wrap gap-4">
          <DashboardSection>
            <DashboardSectionTitle>Projects You Champion</DashboardSectionTitle>
            <DashboardSectionList>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </DashboardSectionList>
          </DashboardSection>
          <DashboardSection>
            <DashboardSectionTitle>Engaged Talent</DashboardSectionTitle>
            <EngagedTalentList>
              <TeamMemberCard />
              <TeamMemberCard />
              <TeamMemberCard />
              <TeamMemberCard />
            </EngagedTalentList>
          </DashboardSection>
        </div>
        {/* right col */}
        <div className="flex flex-col gap-4">
          <DashboardSection>
            <DashboardSectionTitle>Configure Team</DashboardSectionTitle>
            <div className="h-[28rem]"></div>
          </DashboardSection>
          <DashboardSection>
            <DashboardSectionTitle>Committed Team</DashboardSectionTitle>
            <CommittedTeamList>
              <CommittedTeamMember />
              <CommittedTeamMember />
              <CommittedTeamMember />
              <CommittedTeamMember />
              <CommittedTeamMember />
              <CommittedTeamMember />
              <CommittedTeamMember />
            </CommittedTeamList>
          </DashboardSection>
        </div>
      </div>
    </main>
  );
};

export default ChampionDashboard;
