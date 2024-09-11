"use client";

import { useGlobalState } from "@/components/contexts/GlobalStateProvider";

const Courses = () => {
  const { data } = useGlobalState();
  console.log(data);
  return (
    <div>
      {/* Access and display specific fields from the object */}
      <p>Program: {data.program}</p>
      <p>Term: {data.term}</p>
    </div>
  );
};

export default Courses;
