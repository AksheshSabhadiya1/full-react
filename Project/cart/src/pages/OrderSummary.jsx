
export default function OrderSummary({ ...cartData }) {

    const tax = 8.32
    const shipping_charge = 5.00

    const total = cartData.props.reduce((count, item) => count + Number(item.price), 0)
    const subtotal = (total + tax + shipping_charge)



    return total !== 0 ? (
        <div className="flex flex-col justify-center items-center bg-blue-50 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <div className="mb-6 text-center">
                <p className="text-3xl font-bold text-blue-600">Order Summary</p>
            </div>
            <div className="w-full space-y-4">
                <div className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-lg">Subtotal</p>
                    <p className="text-lg font-medium">₹{total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-lg">Shipping charge</p>
                    <p className="text-lg font-medium">₹5.00</p>
                </div>
                <div className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-lg">Tax</p>
                    <p className="text-lg font-medium">₹8.32</p>
                </div>
                <div className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-lg">Order total</p>
                    <p className="text-lg font-medium">₹{subtotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    ) : <div className="flex flex-wrap flex-col items-center justify-center w-full min-h-52 sticky top-20">
        <img src="https://img.icons8.com/?size=100&id=wFlitpRAdn3I&format=png&color=000000" alt="image" />
        <span><h1>Your cart is empty</h1></span>
    </div>
}