import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Home = () => {
  return (
    <main className="bg-tu-grey h-[calc(100vh-5rem)]">
      <div className="py-10 px-8 lg:px-28 ">
        <h1 className="text-6xl">
          Your go-to tool for effortless academic scheduling.
        </h1>
        <p className="py-8">
          Search for degree programs like Computer Science B.S. or Accounting
          B.A., view detailed curricula, and dynamically manage your course
          schedule. Customize your availability, set credit limits, and select
          semesters and campuses to fit your needs. With a graphical display of
          up to five potential schedules, TUplanner makes planning your academic
          journey simpler and more efficient.
        </p>
        <Button asChild size="lg">
          <Link href="/setup" className="gap-1">
            Get Started
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default Home;
