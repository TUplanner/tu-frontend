import Image from "next/image";

const About = () => {
  return (
    <div className="bg-rose-50 w-full h-[calc(100vh-5rem)]">
      <h1 className="flex py-10 text-center justify-center text-5xl">
        Creators:
      </h1>
      <div className="flex h-3/5 justify-center items-center ">
        <div className="relative w-96 h-96">
          <a
            href="https://www.linkedin.com/in/victor-jimenez-lorenzo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin-profile.png"
              alt="Victor Jimenez-Lorenzo's LinkedIn QR Code"
              fill
              className="object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
