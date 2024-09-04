import React from "react";
import Saree_img from "/src/assets/images/saree_img/saree_1.svg";
// import "./App.css";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Razorpay() {
  async function showRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: "rzp_test_RIxryBp1JxZb7D",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Sri Vaari",
      description: "Thank you for nothing. Please give us some money",
      image: "http://localhost:1337/logo.svg",
      handler: function (response) {
        alert("Transaction successful");
      },
      prefill: {
        name: "",
        email: "",
        phone_number: "",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={Saree_img} className="App-logo" alt="logo" />
        <p>Razorpay payment portal</p>
        <a
          className="App-link"
          onClick={showRazorpay}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pay now
        </a>
      </header>
    </div>
  );
}

export default Razorpay;