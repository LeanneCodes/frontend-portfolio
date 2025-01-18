import OutlineButton from "@/components/Buttons/OutlineButton";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Home() {
  return (
    <main
      id="homepage" className="md:mt-[80px] lg:mt-[60px] 2xl:mt-[200px]"
    >
      <div>
        <Image
          src="/logo.png"
          alt="Logo"
          width={780}
          height={64}
          className="xxs:w-4/5 xxs:mx-auto xs:w-3/5 lg:w-1/2 lg:ml-[100px] xl:mt-[80px] 4xl:w-2/5 4xl:ml-[200px] relative z-10"
        />

        <h1 className="xxs:w-4/5 xxs:mx-auto xxs:text-center xxs:text-sm xs:w-3/4 md:text-[16px] md:w-3/5 lg:text-left lg:ml-[100px] lg:w-1/2 2xl:w-1/2 mt-[50px] 4xl:ml-[200px] w-[40%] relative z-10 text-[20px]">
          I build display banner ads for esteemed clients and projects for a variety of audiences, including gamers, natural hair community and ecommerce for small businesses
        </h1>

        <Link href="/projects">
          <OutlineButton className="xxs:w-[60%] xxs:mx-auto xxs:text-sm xxs:h-[50px] xs:w-[38%] sm:w-[30%] md:w-[25%] lg:ml-[100px] lg:w-[19%] xl:w-[15%] 2xl:w-[15%] mt-[50px] 4xl:w-[13%] 4xl:ml-[200px] text-[20px] bg-white h-[60px] w-[230px] flex justify-around items-center relative z-10 group">
            View Portfolio
            <HiOutlineArrowLongRight className="text-4xl transition-transform duration-300 group-hover:translate-x-2" />
          </OutlineButton>
        </Link>

        <Image
          alt="Triangles"
          src={"/main-triangles.png"}
          width={1182}
          height={1170}
          id="main_triangles"
          className="fixed bottom-0 right-0"
        />

      </div>
      
    </main>
  );
}
