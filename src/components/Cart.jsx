import { useState } from 'react'

import { BsCartPlus, BsCartDash } from "react-icons/bs";


// 1
const Cart = () => {

    const [number, setNumber] = useState(0);


    console.log('Cart rendered')
    console.log('number after render', number)

    const increase = () => {
        console.log('increase called');

        console.log('number before', number);

        setNumber(number + 1);

        console.log('number after', number);
    }




    const decrease = () => {
        console.log('Decrease called')
    }


    // 3
    return (

        // 5
        <div>
            <h1>Cart</h1>

            <div className="flex justify-center text-3xl font-black">
                <span>{number}</span>
            </div>

            <div className="flex gap-3 items-center justify-center my-4">
                <button onClick={increase} className={`${styles.btn} ${styles.btn_green} `}>
                    <BsCartPlus /> 1
                </button>


                <button onClick={decrease} className={`${styles.btn} ${styles.btn_red} `}>
                    <BsCartDash /> 1
                </button>
            </div>

            <div className='text-center'>
                <h2>Increase</h2>
                <div className="flex gap-3 flex-wrap items-center justify-center my-4">
                    <button className={`${styles.btn} ${styles.btn_green} `}>
                        <BsCartPlus /> 5
                    </button>

                    <button className={`${styles.btn} ${styles.btn_green} `}>
                        <BsCartPlus /> 10
                    </button>

                    <button className={`${styles.btn} ${styles.btn_green} `}>
                        <BsCartPlus /> 20
                    </button>

                    <button className={`${styles.btn} ${styles.btn_green} `}>
                        <BsCartPlus /> 30
                    </button>

                    <button className={`${styles.btn} ${styles.btn_green} `}>
                        <BsCartPlus /> 50
                    </button>
                </div>
            </div>

            <div className='text-center'>
                <h2>Decrease</h2>
                <div className="flex gap-3 flex-wrap items-center justify-center my-4">
                    <button className={`${styles.btn} ${styles.btn_red} `}>
                        <BsCartDash /> 5
                    </button>

                    <button className={`${styles.btn} ${styles.btn_red} `}>
                        <BsCartDash /> 10
                    </button>

                    <button className={`${styles.btn} ${styles.btn_red} `}>
                        <BsCartDash /> 20
                    </button>

                    <button className={`${styles.btn} ${styles.btn_red} `}>
                        <BsCartDash /> 30
                    </button>

                    <button className={`${styles.btn} ${styles.btn_red} `}>
                        <BsCartDash /> 50
                    </button>
                </div>
            </div>




        </div>
    )
}

// 4
const styles = {
    btn: 'px-4 py-1 rounded-xl shadow border text-white cursor-pointer flex items-center gap-3',
    btn_green: 'bg-green-800',
    btn_red: 'bg-red-800',
}

// 2
export default Cart;
