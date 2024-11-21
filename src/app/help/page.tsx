import React from "react";
import Details from "./component/Details";

const HelpPage = ({ searchParams }: any) => {
  return (
    <div>
      <Details title={searchParams.info} />
    </div>
  );
};

export default HelpPage;
