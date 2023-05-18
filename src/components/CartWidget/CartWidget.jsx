import "./_CartWidget.scss";
import { BsFillCartFill } from "react-icons/bs";

const CardWidget = () => {
  return (
    <div className="Cart">
      <div className="Cart__Icon">
        <BsFillCartFill />
      </div>
      <strong className="Cart__Num">1</strong>
    </div>
  );
};

export default CardWidget;
