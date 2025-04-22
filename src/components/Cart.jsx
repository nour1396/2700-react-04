import { BsCartPlus, BsCartDash } from "react-icons/bs";


// 1
const Cart = () => {

    console.log('Cart rendered')

    const number = 2;

    const increase = () => {
        console.log('increase called')
    }


    // 3
    return (

        // 5
        <div>
            <h1>Cart</h1>

            <div className="flex gap-3 items-center justify-center my-4">

                <button onClick={increase} className={`${styles.btn} ${styles.btn_green} `}>
                    <BsCartPlus />
                </button>

                <span>{number}</span>

                <button className={`${styles.btn} ${styles.btn_red} `}>
                    <BsCartDash />
                </button>
            </div>

        </div>
    )
}

// 4
const styles = {
    btn: 'px-4 py-1 rounded-xl shadow border text-white cursor-pointer',
    btn_green: 'bg-green-800',
    btn_red: 'bg-red-800',
}

// 2
export default Cart;
