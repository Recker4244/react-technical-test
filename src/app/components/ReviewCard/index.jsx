import Image from "next/image";

export default function ReviewCard(props) {
  const { stars, review, image, name, designation } = props;
  return (
    <div className="bg-white w-80 border-2 border-black flex flex-wrap p-3 m-3">
      <div className="flex flex-row w-full h-12">
        <div className="flex flex-row">
          {[...Array(stars)].map((e, i) => {
            return (
              <Image
                src="/icons/Full_Star.svg"
                width={20}
                height={20}
                key={i}
              />
            );
          })}
        </div>
        <div className="flex flex-row">
          {[...Array(5 - stars)].map((e, i) => {
            return (
              <Image
                src="/icons/Empty_Star.svg"
                width={20}
                height={20}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full">
        <p>{review}</p>
      </div>

      <div className="flex flex-row w-full h-12 items-center">
        <div className="pr-3">
          <Image src={image} width={50} height={50} />
        </div>

        <div className="flex flex-col ">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
}
