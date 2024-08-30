import SearchDropdown from "@/components/SearchDropdown";

interface data {
  program: string;
  link: string;
}

const ProgramDropdown = async () => {
  const response = await fetch(`${process.env.API_URL}/academic-programs`);
  const data: data[] = await response.json();
  const programs = data.map((item) => item.program);

  return (
    <div>
      <SearchDropdown name={"Program"} items={programs} />
    </div>
  );
};

export default ProgramDropdown;
