import Dropdown from "@/components/Dropdown";
import { apiFetch } from "@/lib/utils";

interface Data {
  code: string;
  description: string;
}

interface ProgramTermData {
  programs: Data[];
  terms: Data[];
}

const QUERY = `
  query {
    programs {
      description
    }
    terms {
      description
    }
  }
`;

const Part1 = async () => {
  let programs: string[] = [];
  let terms: string[] = [];

  try {
    const data: ProgramTermData = await apiFetch(QUERY);
    programs = data.programs.map((item) => item.description);
    terms = data.terms.map((item) => item.description);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  return (
    <>
      <Dropdown name="program" items={programs} search classname="!w-96" />
      <Dropdown name="term" items={terms} />
    </>
  );
};

export default Part1;
