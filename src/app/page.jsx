import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center gap-[50px] space-y-2">
      <div className="space-y-5">
        <h1 className="text-5xl bg-gradient-to-r from-green-300 bg-clip-text text-transparent">
          Better Design For Your Degital Products.
        </h1>
        <p className="font-medium">
          Turning your idea into reality. We bring Together the teams from the
          global tech industry.
        </p>
        <button className="mt-1 rounded-md  bg-green-400 text-black p-2 w-fit">
          See our works
        </button>
      </div>
      <Image src="/hero.png" width={500} height={500} alt="" />
    </div>
  );
}
