import Image from "next/image";

const Background = (props) => {
  return (
    <Image
      className="page-bg"
      src={props.src}
      alt="page background"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      position="fixed"
    />
  );
};
export default Background;
