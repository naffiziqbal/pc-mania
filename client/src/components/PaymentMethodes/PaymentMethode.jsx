import React, { useState } from 'react';

const PaymentMethode = ({ selecCard, setSelectCard }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const handleCard = (index) => {
        setSelectedItem(index === selectedItem ? null : index);
        setSelectCard(index === selectedItem ? null : index)
    }
    console.log(selectedItem)
    const paymentCard = ["Daraz", "Nagad", "Bkash"]
    return (
        <div className={`min-h-24 p-2 *:p-2 grid grid-cols-3 gap-4  *:min-h-16 *:min-w-16 *:rounded-md *:shadow-xl shadow-blue-600  *:duration-300`}>

            {paymentCard?.map((index) => (
                <div
                    key={index}
                    className={` ${index === selectedItem ? 'shadow-3xl shadow-blue-600 bg-[#333] text-white  duration-300' : ''}`}
                    onClick={() => handleCard(index)}
                >
                    {/* Your item content goes here */}
                    <p>{index}</p>
                </div>
            ))
            }
        </div >
    );
};

export default PaymentMethode;
