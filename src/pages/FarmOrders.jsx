import Reach, {useState} from 'react';

export default function FarmOrders() {
    const initial_orders = new Array(10).fill(null).map((_, index) => ({
        date: '4/5/2025',
        orderNumber: 12345 + index,
        customerName: `Customer ${index + 1}`,
        pickupOrDelivery: index % 2 === 0 ? 'Pickup' : 'Delivery',
        status: 'Pending',
    }));

    const [orders, setOrders] = useState(initial_orders);

    const toggleComplete = (id) => {
        setOrders(
          orders.map((order) =>
            order.orderNumber === id ? { ...order, completed: !order.isCompleted } : order
          )
        );

        handleStatusChange(id);

      };

    const handleStatusChange = (orderNumber) => {
        const updatedOrders = [...orders];
        const order = updatedOrders.find(o => o.orderNumber === orderNumber);

        order.isCompleted = !order.isCompleted;
        order.status = order.isCompleted ? 'Completed' : 'Pending';

        // Instead of sorting directly, we can group orders by completed status
        const completedOrders = updatedOrders.filter(order => order.isCompleted).sort((a, b) => a.orderNumber - b.orderNumber);
        const pendingOrders = updatedOrders.filter(order => !order.isCompleted).sort((a, b) => a.orderNumber - b.orderNumber);

        const updatedPendingOrders = pendingOrders.map((order) => ({
            ...order,
            isCompleted: false, // Ensure isCompleted is false for pending orders
        }));


        // Combine the orders, with completed ones at the bottom
        setOrders([...updatedPendingOrders, ...completedOrders]);  // Update state with grouped orders
    }


    return (
        <>
            <div>
                <h1 className="text-2xl font-bold">Your Orders</h1>
            </div>
            <div className="grid grid-cols-5 font-semibold text-center border-b pb-2 mt-5.5">
                <div>Date</div>
                <div>Order #</div>
                <div>Customer Name</div>
                <div>Pickup/Delivery</div>
                <div>Status</div>
            </div>

            <div className="grid grid-cols-1">
                {orders.map((order, index) => (
                    <div key={index} className={`grid grid-cols-5 gap-4 items-center border-b pb-2 hover:bg-gray-500/30 ${
                        order.isCompleted ? 'bg-gray-300' : ''
                    }`}>
                        <div className="text-center">{order.date}</div>
                        <div className="text-center">{order.orderNumber}</div>
                        <div className="text-center">{order.customerName}</div>
                        <div className="text-center">{order.pickupOrDelivery}</div>
                        <div className="text-center flex items-center justify-center">
                            <input
                                type="checkbox"
                                checked={order.isCompleted}
                                onChange={() => toggleComplete(order.orderNumber)}
                                className="mr-3"
                            />
                        </div>
                    </div>
                ))}
            </div>


        </>


    )   
}