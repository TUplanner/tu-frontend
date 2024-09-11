import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClientPathname } from "@/components/ClientPathname";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import ProgressStepper from "@/components/ProgressStepper";
import ClickableLink from "@/components/ClickableLink";

const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-row-reverse bg-tu-grey h-screen">
      <div className="hidden lg:flex min-w-[400px] mt-20 flex-col ">
        <ClientPathname />
      </div>

      <div className="flex flex-col w-full p-8">
        <div className="min-h-20 flex">
          <ProgressStepper />
        </div>
        <div className="py-10">
          <Card className="w-full ">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">{children}</div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-row-reverse ">
          <Button asChild size="lg">
            <ClickableLink href="/courses">
              Next
              <ArrowRightIcon />
            </ClickableLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FormLayout;
