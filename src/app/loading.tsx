import React from "react";
import Loader from '@/components/Loader/Loader';

const Loading: React.FC = () => {
  return (
    <div  style={{backgroundColor: "var(--background-color) !important"}}>
      <Loader />
    </div>
  );
};

export default Loading;
