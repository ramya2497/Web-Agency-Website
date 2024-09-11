import { useEffect, useState } from "react";

const Copyrights = () => {
  const [currentYear, getCurrentYear] = useState();

  useEffect(() => {
    const d = new Date();
    let year = d.getFullYear();
    getCurrentYear(year);
  }, [currentYear]);

  return (
    <>
      <div className="col copy_div">Copyrights &copy; 2004 - {currentYear}</div>
      <div className="col copy_div">
        <a href="">Privacy policy</a>
      </div>
      <div className="col copy_div">
        <a href="">Terms and conditions</a>
      </div>
      <div className="col">
        <a href="">Help</a>
      </div>
    </>
  );
};

export default Copyrights;
