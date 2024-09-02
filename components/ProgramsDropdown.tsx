import Dropdown from "@/components/Dropdown";

interface Data {
  program: string;
  link: string;
}

const ProgramsDropdown = async () => {
  const response = await fetch(`${process.env.API_URL}/academic-programs`);
  const data: Data[] = await response.json();
  const programs = data.map((item) => item.program);

  return (
    <Dropdown name={"program"} items={programs} search classname="!w-96" />
  );
};

export default ProgramsDropdown;
