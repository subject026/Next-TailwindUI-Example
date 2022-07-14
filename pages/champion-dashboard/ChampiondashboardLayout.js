import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { findProjects } from "../../redux/slices/projectsInspectSlice";

export const ChampionDashboardLayout = ({ children }) => {
  const { projectsInspect } = useSelector((state) => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (projectsInspect.isDataAvailable) return;
    dispatch(findProjects());
  }, [dispatch, projectsInspect]);

  return (
    <div className="min-h-full">
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <div className="py-10">
        <div className="mx-auto sm:px-6 lg:max-w-7xl lg:px-8 grid grid-cols-12 lg:gap-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ChampionDashboardLayout;
