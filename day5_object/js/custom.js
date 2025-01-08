import React, { Component } from "react";

class ComputerBazar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantities: { dell: 0, hp: 0, lenovo: 0 },
      delivery: "pickup",
      packing: [],
      location: "",
      summary: {},
    };

    this.prices = {
      dell: 20000,
      hp: 25000,
      lenovo: 30000,
    };

    this.packingPrices = {
      plastic: 1000,
      bag: 2000,
      giftbox: 5000,
    };
  }

  handleQuantityChange = (product, value) => {
    this.setState((prevState) => ({
      quantities: {
        ...prevState.quantities,
        [product]: parseInt(value) || 0,
      },
    }));
  };

  handleDeliveryChange = (value) => {
    this.setState({ delivery: value });
  };

  handlePackingChange = (value) => {
    this.setState((prevState) => {
      const packing = prevState.packing.includes(value)
        ? prevState.packing.filter((item) => item !== value)
        : [...prevState.packing, value];
      return { packing };
    });
  };

  handleLocationChange = (value) => {
    this.setState({ location: value });
  };

  calculateBill = () => {
    const { quantities, delivery, packing, location } = this.state;

    let productTotal =
      quantities.dell * this.prices.dell +
      quantities.hp * this.prices.hp +
      quantities.lenovo * this.prices.lenovo;

    let deliveryCharge = delivery === "home" ? 10000 : 0;

    let packingCharge = packing.reduce((total, item) => {
      return total + this.packingPrices[item];
    }, 0);

    let tax = 0;
    if (location === "13") {
      tax = (productTotal * 13) / 100;
    }

    let grandTotal = productTotal + deliveryCharge + packingCharge + tax;

    this.setState({
      summary: {
        productTotal,
        deliveryCharge,
        packingCharge,
        tax,
        grandTotal,
      },
    });
  };

  render() {
    const { quantities, delivery, packing, location, summary } = this.state;

    return (
      <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
        <h1 style={{ color: "#0078D7", textAlign: "center" }}>
          Computer Bazar
        </h1>
        <hr />
        <h3>Product Details</h3>
        {Object.keys(this.prices).map((product) => (
          <div key={product}>
            <label>
              {product.charAt(0).toUpperCase() + product.slice(1)}: (Rs:
              {this.prices[product]})
            </label>
            <input
              type="number"
              min="0"
              placeholder="Enter Quantity"
              value={quantities[product]}
              onChange={(e) =>
                this.handleQuantityChange(product, e.target.value)
              }
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        ))}

        <h3>Delivery Location</h3>
        <div>
          <input
            type="radio"
            name="delivery"
            value="home"
            checked={delivery === "home"}
            onChange={(e) => this.handleDeliveryChange(e.target.value)}
          />{" "}
          Home (Rs:10000)
          <br />
          <input
            type="radio"
            name="delivery"
            value="pickup"
            checked={delivery === "pickup"}
            onChange={(e) => this.handleDeliveryChange(e.target.value)}
          />{" "}
          Pickup (Free)
        </div>

        <h3>Packing</h3>
        {Object.keys(this.packingPrices).map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              value={item}
              checked={packing.includes(item)}
              onChange={(e) => this.handlePackingChange(e.target.value)}
            />
            {item.charAt(0).toUpperCase() + item.slice(1)} (Rs:
            {this.packingPrices[item]})
          </div>
        ))}

        <h3>Location</h3>
        <select
          value={location}
          onChange={(e) => this.handleLocationChange(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="">Select</option>
          <option value="13">KTM (13% tax)</option>
          <option value="0">LTP (Free)</option>
          <option value="0">BKT (Free)</option>
        </select>

        <button
          onClick={this.calculateBill}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#0078D7",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add Bill
        </button>
        <hr />

        {summary.grandTotal !== undefined && (
          <div>
            <h3>Summary</h3>
            <p>Product Total: Rs:{summary.productTotal}</p>
            <p>Delivery Charge: Rs:{summary.deliveryCharge}</p>
            <p>Packing Charge: Rs:{summary.packingCharge}</p>
            <p>Tax: Rs:{summary.tax}</p>
            <h3>Grand Total: Rs:{summary.grandTotal}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default ComputerBazar;
