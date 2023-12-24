// Page 1
# (GET) list of pc device
> http://localhost:3000/pcdevice
# (GET) list of mouse
> http://localhost:3000/mouse
# (GET) list of keyboard
> http://localhost:3000/keyboard
# (GET) list of webcam
> http://localhost:3000/webcam
# (GET) list of audio device
> http://localhost:3000/audiodevice
# (GET) list of xbox
> http://localhost:3000/xbox

<!-- (All device -> http://localhost:3000/alldevice) -->

// Page 2
# (GET) devices wrt average rating
> http://localhost:3000/alldevice?average_rating=4

// Page 3
# (GET) list of devices of selected category
> http://localhost:3000/devices/3

// Page 4
# (POST) Details of selected device
> http://localhost:3000/deviceDetails
# (POST) Place order
> http://localhost:3000/placeOrder

// Page 5
# (GET) List of all orders wrt user
> http://localhost:3000/orders?email=tony@gmail.com
# (PUT) Update order details
> http://localhost:3000/updateOrder
# (DELETE) Delete Orders
> http://localhost:3000/deleteOrder