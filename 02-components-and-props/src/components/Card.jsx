import Subrat from "../assets/IMG_20211226_222138306.jpg";
const Card = () => {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md my-4">
      <img
        src={Subrat}
        alt="Subrat Kumar Behera"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">
          Subrat Kumar Behera
        </h1>
        <p className="mt-2 text-sm text-gray-300">
          I&apos;m a full-stack web developer. I am a senior programmer with
          good knowledge of fron-end adnd back-end techniques.
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile →
        </button>
      </div>
    </div>
  );
};

export default Card;
