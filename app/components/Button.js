import React from "react";

const Button = (props) => {
    const {mobile, classInfo} = props
  return (
    <a href="/" target="_blank">
      <button className={!mobile ? `${classInfo} invisible md:visible ` : `${classInfo} visible md:invisible`} >
        Call Now
      </button>
    </a>
  );
};

// not mobile: bg-gold-400 hover:bg-blue-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in font-semibold px-2 text-sm rounded-sm  hover:scale-110
//original mobile:  bg-gold-400 font-semibold px-8 py-2 mt-4 text-sm rounded-sm w-full text-black

export default Button;
