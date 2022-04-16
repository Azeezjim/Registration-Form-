import ProfileNavBar from "../../components/ProfileNavBar.jsx";
import {MdOutlineAutoDelete} from 'react-icons/md';
import {BsCreditCard2Front} from 'react-icons/gi';

function CardPayment() {
  const cardDetails = [
    {
      cardNumber: "xxxx xxxx xxxx 4242",
      type: "Visa",
      markAs: "marks As Default",
    },
  ];

  return (
    <div>
      <div className="flex p-2 rounded shadow">
        <ProfileNavBar className="w-24 mb-8" />
        <div className=" w-full px-1 mx-auto pt-3 mr-24  mt-12 bg-white rounded">
          <p className=" ml-10 mt-4 font-bold flex justify-center ">Your Card</p>
          {cardDetails.map((card, index) => (
            <div className="w-60 h-30 shadow-md shadow-gray-200  border border-gray-300 space-y-2" key={index}>
              <p className="text-[16px] font-bold ml-2">{card.cardNumber}</p>
              <p className="font-bold ml-2 text-[13px]">{card.type}</p>
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <p className="font-bold ml-2 text-[#3BB9FF] text-[13px] mt-1">{card.markAs}</p>
                  <MdOutlineAutoDelete className="text-[30px] " />
                </div>
                < BsCreditCard2Front className="text-[30px] " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardPayment;
