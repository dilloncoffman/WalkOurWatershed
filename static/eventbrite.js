var exampleCallback = function () {
  console.log("Order complete!")
}

if (typeof window !== undefined) {
  window.EBWidgets.createWidget({
    // Required
    widgetType: "checkout",
    eventId: "113162716732",
    iframeContainerId: "eventbrite-widget-container-113162716732",

    // Optional
    // iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
    onOrderComplete: exampleCallback, // Method called when an order has successfully completed
  })
}
