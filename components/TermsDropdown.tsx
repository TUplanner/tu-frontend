import Dropdown from "@/components/Dropdown";

interface Data {
  code: string;
  description: string;
}

const TermsDropdown = async () => {
  const response = await fetch(`${process.env.API_URL}/terms`);
  const data: Data[] = await response.json();
  const terms = data.map((item) => item.description);

  return <Dropdown name={"term"} items={terms} />;
};

export default TermsDropdown;
