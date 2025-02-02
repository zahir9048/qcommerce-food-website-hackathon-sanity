import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="pt-[150px] lg:pt-0 w-full bg-no-repeat bg-center flex justify-center"
        style={{
          backgroundImage: "url('/unsplash.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          height: "300px",
        }}
      >
        <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white text-center py-16">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Sign In
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/" className="text-xl sm:text-2xl md:text-3xl">
              Home
            </a>
            <div className="flex items-center">
              <Image
                src="/Vector.png"
                width={10}
                height={10}
                alt="Vector Icon"
              />
              <a
                href="/signin"
                className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-[1320px] mx-auto py-[50px] px-[20px] lg:px-[60px] relative bg-white">
        <div className="container mx-auto max-w-md bg-white rounded-md">
          <SignIn />
        </div>
      </section>
    </div>
  );
}
