import React from "react";

const Button = (props) => {
  const { mobile, classInfo, purpose } = props;

  if (purpose === `call`) {
    return (
      <a href="tel:4045965518" target="_blank" rel="noopener noreferrer">
        <button
          className={
            !mobile
              ? `${classInfo} invisible md:visible `
              : `${classInfo} visible lg:invisible`
          }
        >
          Call Now
        </button>
      </a>
    );
  }
  else if(purpose === `learn`){
    return(
      <button
              className="invisible group-hover:visible absolute inset-x-8 bottom-1/4 md:p-1
              
             bg-gold-400 text-black font-extrabold rounded-sm"
            >
              Learn More
            </button>
    )
  }
};

// not mobile: bg-gold-400 hover:bg-blue-600 hover:text-gray-100 transition duration-150 ease-out hover:ease-in font-semibold px-2 text-sm rounded-sm  hover:scale-110
//original mobile:  bg-gold-400 font-semibold px-8 py-2 mt-4 text-sm rounded-sm w-full text-black

export default Button;
