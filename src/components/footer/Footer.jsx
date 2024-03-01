import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-between items-center">
      <div>&copy; Skool All-rights reserved</div>
      <div className="flex">
        <Image className="mx-2" src="/1.png" width={15} height={15} />
        <Image className="mx-2" src="/2.png" width={15} height={15} />
        <Image className="mx-2" src="/3.png" width={15} height={15} />
        <Image className="mx-2" src="/4.png" width={15} height={15} />
      </div>
    </div>
  );
};

export default Footer;
