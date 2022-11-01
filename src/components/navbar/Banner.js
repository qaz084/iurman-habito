import { Link } from "react-router-dom";
import HeaderImg1 from "../../images/header/banner_02.png";
export const Banner = () => {
  return (
    <>
      <Link to={"/product/detail/4baa1050-579a-11ed-9355-8fec499f657d"}>
        <div className="flex items-center overflow-hidden w-fit bg-grey-100">
          <img
            className="hidden sm:inline-block sm:scale-110  sm:mt-40"
            src={HeaderImg1}
            alt="Banner Habito HomePage"
          />
        </div>
      </Link>
    </>
  );
};
