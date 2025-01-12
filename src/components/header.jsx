import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row justify-center gap-4 pb-8">
        <Link href="/">
          <div className="text-base font-medium">Home</div>
        </Link>
        <Link href="/work">
          <div className="text-base font-medium">Work</div>
        </Link>
        <Link href="/projects">
          <div className="text-base font-medium">Projects</div>
        </Link>
        <Link href="/volunteering">
          <div className="text-base font-medium">Volunteering</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
