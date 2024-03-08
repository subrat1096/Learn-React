import PropTypes from "prop-types";
import Subrat from "../assets/IMG_20211226_222138306.jpg";

const Card = ({ name, btnTxt, description }) => {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md my-4">
      <img
        src={Subrat}
        alt="Subrat Kumar Behera"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{name}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnTxt}
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  name: PropTypes.string.isRequired,
  btnTxt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Card;
