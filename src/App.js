import './App.css';
import headerimage from "./logo192.png";
import cyspacelogo from "./cyspaceglobalimage.jpeg"
import leftimage from "./khakibombshell2.0.jpg";
import headerimg from "./appheaderimg.jpg";
import rightimage from "./greenpant.jpg";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Drawer, Button } from '@material-ui/core';
import service from './Pages/Service';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { loadStripe } from '@stripe/stripe-js';
import { useHistory } from "react-router";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function App() {
  const history = useHistory();
  const stripePromise = loadStripe('pk_test_51JJAHkSHEhusvEucppm0kRbhS1PrhYEGQAIKSQNoShXeh8R6M7HbcLXkEih9qvvrKzsGMjkAFkxqIGRlr5e1TyVy00UsriMcHz');
  const [open1, setOpen1] = useState(false);
  var filtered = [];
  const displaytotalbill = () => {
    var sum = 0;
    filtered = data.filter((value) => value.qty > 0);
    filtered.map((value, id) => {
      if (value.qty > 0) {
        sum = sum + value.qty * value.price;
      }
    })
    return sum
  }
  const [product, setProduct] = useState({
    qty: 0,
    price: "89.95",
    name: '',
    size: '',
    finalqty: '',
    finalbill: '',
    description: ''
  });
  const { qty, price, name, size, finalqty, description, finalbill } = product;
  const [hideval, setHideval] = useState(0);
  console.log("Hideval value==", hideval)
  const [finalprice, setFinalprice] = useState(0);
  const setHidefunction = (data) => {
    setHideval(data.value);
    setFinalprice(data.value * price)
    setProduct({ ...product, [qty]: data.value });
  }
  const [checked, setChecked] = useState(false)
  const [data, setData] = useState(
    [
      { size: "Charcoal Grey 28 x 30", price: "89.97", id: 1 },
      { size: "Charcoal Grey 30 x 28", price: "89.97", id: 2 },
      { size: "Charcoal Grey 30 x 30", price: "89.97", id: 3 },
      { size: "Charcoal Grey 30 x 32", price: "89.97", id: 4 },
      { size: "Charcoal Grey 32 x 30", price: "89.97", id: 5 },
      { size: "Charcoal Grey 32 X 32", price: "89.97", id: 6 },
      { size: "Charcoal Grey 32 X 34", price: "89.97", id: 7 },
      { size: "Charcoal Grey 32 X 36", price: "89.97", id: 8 },
      { size: "Charcoal Grey 33 x 30", price: "89.97", id: 9 },
      { size: "Charcoal Grey 34 x 30", price: "89.97", id: 10 },
      { size: "Charcoal Grey 34 x 31", price: "89.97", id: 11 },
      { size: "Charcoal Grey 34 X 32", price: "89.97", id: 12 },
      { size: "Charcoal Grey 34 X 34", price: "89.97", id: 13 },
      { size: "Charcoal Grey 34 x 36", price: "89.97", id: 14 },
      { size: "Charcoal Grey 35 x 31", price: "89.97", id: 15 },
      { size: "Charcoal Grey 34 x 38", price: "89.97", id: 16 },
      { size: "Charcoal Grey 36 X 30", price: "89.97", id: 17 },
      { size: "Charcoal Grey 36 X 32", price: "89.97", id: 18 },
      { size: "Charcoal Grey 36 X 34", price: "89.97", id: 19 },
      { size: "Charcoal Grey 36 x 36", price: "89.97", id: 20 },
      { size: "Charcoal Grey 37 x 31", price: "89.97", id: 21 },
      { size: "Charcoal Grey 38 X 32", price: "89.97", id: 22 },
      { size: "Charcoal Grey 38 X 34", price: "89.97", id: 23 },
      { size: "Charcoal Grey 38 x 36", price: "89.97", id: 24 },
      { size: "Charcoal Grey 40 x 30", price: "89.97", id: 25 },
      { size: "Charcoal Grey 40 x 32", price: "89.97", id: 26 },
      { size: "Charcoal Grey 42 x 32", price: "89.97", id: 27 },
      { size: "Charcoal Grey 42 x 36", price: "89.97", id: 28 },
      { size: "Charcoal Grey 44 x 32", price: "89.97", id: 29 },
      { size: "Charcoal Grey 46 x 30", price: "89.97", id: 30 },
      { size: "Charcoal Grey 46 x 32", price: "89.97", id: 31 },
      { size: "Charcoal Grey 46 x 34", price: "89.97", id: 32 },
      { size: "Charcoal Grey 46 x 36", price: "89.97", id: 33 },
      { size: "Charcoal Grey 48 x 30", price: "89.97", id: 34 },
      { size: "Charcoal Grey 48 x 32", price: "89.97", id: 35 },
      { size: "Charcoal Grey 48 x 34", price: "89.97", id: 36 },
      { size: "Dark Grey 30 x 28", price: "75.97", id: 37 },
      { size: "Dark Grey 30 x 30", price: "75.97", id: 38 },
      { size: "Dark Grey 30 X 32", price: "75.97", id: 39 },
      { size: "Dark Grey 32 x 30", price: "75.97", id: 40 },
      { size: "Dark Grey 32 x 32", price: "75.97", id: 41 },
      { size: "Dark Grey 32 X 34", price: "75.97", id: 42 },
      { size: "Dark Grey 33 x 30", price: "75.97", id: 43 },
      { size: "Dark Grey 34 x 31", price: "75.97", id: 44 },
      { size: "Dark Grey 34 x 32", price: "75.97", id: 45 },
      { size: "Dark Grey 34 X 34", price: "75.97", id: 46 },
      { size: "Dark Grey 34 x 36", price: "75.97", id: 47 },
      { size: "Dark Grey 35 x 31", price: "75.97", id: 48 },
      { size: "Dark Grey 36 x 32", price: "75.97", id: 49 },
      { size: "Dark Grey 36 x 34", price: "75.97", id: 50 },
      { size: "Dark Grey 37 x 31", price: "75.97", id: 51 },
      { size: "Dark Grey 38 x 32", price: "75.97", id: 52 },
      { size: "Dark Grey 38 x 34", price: "75.97", id: 53 },
      { size: "Dark Grey 38 x 36", price: "75.97", id: 54 },
      { size: "Dark Grey 42 x 33", price: "75.97", id: 55 },
      { size: "Army Green 30 x 28", price: "75.97", id: 56 },
      { size: "Army Green 30 x 30", price: "75.97", id: 57 },
      { size: "Army Green 30 X 32", price: "75.97", id: 58 },
      { size: "Army Green 32 x 30", price: "75.97", id: 59 },
      { size: "Army Green 32 x 32", price: "75.97", id: 60 },
      { size: "Army Green 32 X 34", price: "75.97", id: 61 },
      { size: "Army Green 33 x 30", price: "75.97", id: 64 },
      { size: "Army Green 34 x 31", price: "75.97", id: 65 },
      { size: "Army Green 34 x 32", price: "75.97", id: 66 },
      { size: "Army Green 34 X 34", price: "75.97", id: 67 },
      { size: "Army Green 34 x 36", price: "75.97", id: 68 },
    ])
  const [updatelist, setUpdatelist] = useState(false);
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setProduct({ ...product, [name]: value });
  };
  console.log("filtered==", filtered)
  useEffect(() => {
    let total = Object.values(filtered).reduce((acc, { qty, price }) => acc += qty * price, 0);
    setProduct({ ...product, finalbill: total })
  }, [updatelist]);
  console.log("product==",product)
  async function handleToken(token, address) {
    console.log("Token==", token, address)
    const response = await axios.post(`http://localhost:5000/api/v1/shopcheckout`, {
      token,
      product,
    })
    const { status } = response.data;
    console.log(response)
    if (status === "success") {
      alert("Your, Orders has been placed Successfully", { type: "success" });
      window.location.reload();
    } else {
      alert("Something went wrong", { type: "error" });
    }
  }

  const qunatitylist = (individuallist, qty) => {
    data.map((val, id) => {
      if (individuallist.id === val.id) {
        console.log("lists======", val);
        val.qty = qty;
        setUpdatelist(!updatelist);
      }
    })
  }
  const updateaddressstatus = (data) => {
    setChecked(true);
  }
  const Sameaddressfunction = (data) => {
    if (document.getElementById('chechboxid').checked === true) {
      document.getElementById("billingfulladdress").value = document.getElementById("shippingfulladdress").value;
      document.getElementById("billingcityname").value = document.getElementById("shippingcityname").value;
      document.getElementById("billingstate").value = document.getElementById("shippingstate").value;
      document.getElementById("billingzipcode").value = document.getElementById("shippingzipcode").value;
      document.getElementById("billingcountry").value = document.getElementById("shippingcountry").value;
    }
    else {
      setChecked(false);
      document.getElementById("billingfulladdress").value = '';
      document.getElementById("billingcityname").value = '';
      document.getElementById("billingstate").value = '';
      document.getElementById("billingzipcode").value = '';
      document.getElementById("billingcountry").value = '';
    }
  }


  const list = (anchor) => (
    <div style={{ height: 150 }} onClick={() => setOpen1(false)}>
      <header style={{
        textAlign: 'center', fontSize: '22px',
      }}><b style={{ color: "ButtonShadow" }}>Upload New Product Here</b></header>
      <div>
        <div id="prodmenu">
          <div class="prodmenuitem1" style={{ marginTop: '10px' }}>
            <label>Name : </label>&nbsp;&nbsp;
            <input placeholder="Product Name..." name="name" type="text" />
          </div>
          <div class="prodmenuitem2" style={{ marginTop: '10px' }}>
            <label>Type : </label>&nbsp;&nbsp;
            <input placeholder="Full Name..." name="name" type="text" />
          </div>
          <div class="prodmenuitem3" style={{ marginTop: '10px', display: 'block' }}>
            <input type="file" id="img" name="img" />
          </div>
        </div>
      </div>
    </div>
  );




  const displayfunction = () => {
    return data.map((value, id) => {
      if (value.qty > 0) {
        return (
          <div id="menu" style={{ marginTop: '10px', display: 'flex', fontSize: '16px' }}>
            <div class="menuitem1">{value.qty}</div>
            <div class="menuitem2" >{value.size}</div>
            <div class="menuitem3" onChange={() => setFinalprice(hideval * price)}
            > ${value.qty * value.price}</div>
          </div>
        )
      }
    })
  }

  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
      <div>
        <div style={{ backgroundColor: 'rgb(22,155,215', width: '100%' }}>
          <img src={cyspacelogo} alt style={{width: window.innerWidth<=786 ? '100%' : '257px' }} height='200' tabIndex="0"></img>
          <img src={headerimg} alt style={{display: window.innerWidth<=786 ? 'none' : '' }} width='83%' height='200' tabIndex="0"></img>
        </div>

      </div>
      <div style={{ border: ' 0.1px solid rgba(34, 36, 38, 0.3)', padding: '15px' }}>
        <div style={{ padding: '10px', display: window.innerWidth <= 768 ? 'block' : 'flex' }}>
          <div style={{ width: '10%', marginTop: '10px', marginBottom: '10px', display: window.innerWidth <= 768 ? 'flex' : '' }}>
            <div><Button style={{ border: ' 0.1px solid rgba(34, 36, 38, 0.3)', margin: '3px' }} onClick={service} >
              <Link to="/service">Services</Link></Button>
            </div>
            <div>
              <Button style={{ border: ' 0.1px solid rgba(34, 36, 38, 0.3)', margin: '3px' }} onClick={() => setOpen1(true)} >Product</Button>
              <Drawer open={open1} anchor={"top"} onClose={() => setOpen1(false)}>
                {list()}
              </Drawer>
            </div>
            <div><Button style={{ border: ' 0.1px solid rgba(34, 36, 38, 0.3)', margin: '3px' }}>Others</Button></div>
          </div>
          <div style={{ width: window.innerWidth <= 768 ? '100%' : '80%' }}>
            <div style={{ borderStyle: 'dashed', fontSize: '30px', borderRadius: '5px' }}>
              <div style={{ textAlign: 'center' }}><i>Supply in some sizes may sell out.</i></div>
              <div style={{ margin: '10px 40px 20px 40px' }}><i>As of <span style={{ color: 'orange' }}><b>TODAY BUY 2 Pants Get 1 Pants 50% off FREE Shipping&nbsp;</b></span>we do have a limited supply of the sizes below  <span style={{ color: 'orange' }}><b>IN</b><b>STOCK</b></span> and ready to ship out in the next 24 hours.</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginTop: '20px' }}>
          <div>
            <div>
              <div >
                <div style={{ textAlign: 'center', fontSize: '24px', color: 'orange' }}>
                  <b>Select your 2 pants to purchase on this page, then on the NEXT 3page you will choose your 1 FREE pair of pants!</b>
                </div>
              </div>
              <div>
                <div style={{ textAlign: 'center', fontSize: '20px' }}>Enter your details below before time runs out to get your Versa pants.&nbsp;<div></div>
                  <div style={{ padding: "10px" }}>Order Now get <span style={{ color: 'orange' }}><b>2 Pants Get 1 Pants 50%offOFF</b></span>&nbsp;while supplies last-Regularly <strike><span style={{ color: 'orange' }}><b>$179.74</b></span></strike> For a Limited Time Just&nbsp;<span style={{ color: 'orange' }}><b>only for $89.95</b></span>
                  </div>
                  <div>
                    <div>**Orders ship quickly via USPS Priority Mail, FEDEX or UPS**&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Images display part */}
      <div>

        <div
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'flex',
            width: '80%',
            alignContent: window.innerWidth <= 768 ? 'center' : 'center',
            margin: window.innerWidth <= 768 ? '' : '20px 0px 20px 140px'
          }}
        >
          <div class="frame"><img class="imagestyle" src={leftimage} /><div class="imagename" style={{ fontSize: '20px' }}>Trekking Pants</div></div>
          <div class="frame"><img class="imagestyle" src={rightimage} /><div class="imagename" style={{ fontSize: '20px' }}>Trekking Pants</div></div>
        </div>

      </div>

      <div>
        <div>
          <div style={table1div}>
            <div class="left" style={left}>
              <div style={{ padding: '20px' }}>
                <div style={{ textAlign: 'left', fontSize: '20px' }} >
                  <b>Step #1:</b>&nbsp;Tell us how many pair of pants you'd like</div><hr style={{ border: ' 0.1px solid rgba(0,0,0,0.2)' }} />
              </div>
              <div style={{ display: window.innerWidth <= 768 ? 'flex' : 'flex' }}>
                <div style={{ fontSize: '22px' }}><b>Qty</b></div>
                <div style={{ marginLeft: window.innerWidth <= 768 ? '280px' : '380px', fontSize: '22px' }}><b>Each</b></div>
              </div>
              <hr style={{ border: ' 0.1px solid rgba(0,0,0,0.2)' }} />
              {data.map((value, id) => {
                return (
                  <div key={id} >
                    <div>
                      <div id="menu" style={{ fontSize: '20px' }}>
                        <span class="menuitem1">
                          <select
                            onChange={handleChange("qty")}
                            onChange={(e) => qunatitylist(value, e.target.value)}
                          >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select></span>&nbsp;
                        <span class="menuitem2" onChange={handleChange("size")}>{value.size}</span>
                        <span class="menuitem3" onChange={handleChange("finalprice")}>${value.price}</span>
                      </div>
                      {/* <div style={{ marginLeft: window.innerWidth <= 768 ? '200px' : '310px', fontSize: '20px' }}>{value.price}</div> */}
                    </div>
                  </div>
                )
              })}

              <hr style={{ border: ' 0.1px solid rgba(0,0,0,0.2)' }} />
              <div>
                <div id="menu">
                  <div class="menuitem1"><b>Qty</b></div>
                  <div class="menuitem2" ><b>Item</b></div>
                  <div class="menuitem3"><b>Amount</b></div>
                </div>
                <hr style={{ border: '1px solid rgba(0,0,0,0.1)' }} />
                <div>{displayfunction()}</div>
                <hr style={{ border: ' 1px solid rgba(0,0,0,0.1)' }} />
                <div style={{ marginTop: '20px', display: 'flex' }}>
                  <div><b>Order Total: </b></div>
                  <div style={{ marginLeft: window.innerWidth <= 768 ? '220px' : '328px' }}><b>${displaytotalbill()}</b></div>
                </div>
                <hr style={{ border: ' 0.1px solid rgba(0,0,0,0.2)' }} />
              </div>
            </div>

            <div class="right" style={right}>
              <div style={{ padding: '20px' }}>
                <div>
                  <div style={{ textAlign: 'left', fontSize: '23px' }} >
                    <b>Step #2:</b>&nbsp;Enter Your Contact Information</div><hr style={{ border: ' 0.1px solid rgba(0,0,0,0.2)' }} />
                </div>
                <div style={{ display: 'block', marginTop: '10px' }} >
                  <div style={{ textAlign: 'left', color: 'rgba(0,0,0,0.5)' }}><b>Full Name:</b></div>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <input style={inputstyle} placeholder="Full Name..." name="name" type="text" />
                </div>
                <div style={{ display: 'block', marginTop: '20px' }}>
                  <div style={{ textAlign: 'left', color: 'rgba(47, 47, 47, 0.8)' }}><b>Email Address:</b></div>
                </div>
                <div style={{ marginTop: '10px' }} type="email" >
                  <input style={inputstyle} placeholder="Best Email Address..." name="email" type="text" />
                </div>
                <div style={{ display: 'block', marginTop: '40px' }}>
                  <div style={{ textAlign: 'left', fontSize: '22px' }}>
                    <b>Step #2:</b> Enter Your Shipping Address</div><hr style={{ border: ' 0.1px solid rgba(0,0,0,0.2)' }} />
                </div>
                <div style={{ marginTop: '30px' }} type="shipping_address">
                  <div class="togglerTopShipping">
                    <input id="shippingfulladdress" type="text" placeholder="Full Address..." name="shipping_address" style={inputstyle} />
                    <input id="shippingcityname" type="text" placeholder="City Name..." name="shipping_city" style={{
                      marginTop: '20px', width: '100%',
                      fontSize: '16px',
                      lineHeight: '24px',
                      padding: '12px 18px',
                      borderRadius: '5px',
                      border: ' 0.1px solid rgba(0,0,0,0.2)'
                    }} />
                    <select id="shippingstate" name="shipping_state" style={{
                      float: 'left', width: '65%', marginTop: '20px',
                      fontSize: '16px',
                      lineHeight: '24px',
                      padding: '12px 18px',
                      borderRadius: '5px',
                      border: ' 0.1px solid rgba(0,0,0,0.2)'
                    }}  ><option value="">Select State</option>
                      <option value="">Select State</option>
                      <option value="">------------------------------</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                    <input id="shippingzipcode" type="text" placeholder="Zip Code..." style={{
                      float: 'left', width: '30%', marginLeft: '5%', marginTop: '20px', fontSize: '16px',
                      lineHeight: '24px',
                      padding: '12px 18px',
                      borderRadius: '5px',
                      border: ' 0.1px solid rgba(0,0,0,0.2)'
                    }} />
                    <select id="shippingcountry" name="country" style={{
                      marginTop: '20px',
                      lineHeight: '24px',
                      padding: '12px 18px',
                      width: '100%',
                      borderRadius: '5px',
                      border: ' 0.1px solid rgba(0,0,0,0.2)'
                    }}>
                      <option value="">Select Country</option>
                      <option value=""></option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="IE">Ireland</option>
                      <option value="AU">Australia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Aland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BQ">Bonaire, Saint Eustatius and Saba </option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="VG">British Virgin Islands</option>
                      <option value="BN">Brunei</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curacao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="CD">Democratic Republic of the Congo</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="TL">East Timor</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">Heard Island and McDonald Islands</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="CI">Ivory Coast</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="XK">Kosovo</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Laos</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">Macedonia</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia</option>
                      <option value="MD">Moldova</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="KP">North Korea</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestinian Territory</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="CG">Republic of the Congo</option>
                      <option value="RE">Reunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russia</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthelemy</option>
                      <option value="SH">Saint Helena</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">Saint Vincent and the Grenadines</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">South Georgia and the South Sandwich Islands</option>
                      <option value="KR">South Korea</option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syria</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania</option>
                      <option value="TH">Thailand</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="VI">U.S. Virgin Islands</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UM">United States Minor Outlying Islands</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VA">Vatican</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Vietnam</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginTop: '14px', backgroundColor: 'rgba(0, 0, 0, 0.09)' }} >
                  <div style={{ textAlign: 'left', fontSize: '18px', backgroundColor: 'rgba(0, 0, 0, 0.09)', borderRadius: '5px', padding: '12px 18px', border: ' 0.1px solid rgba(0,0,0,0.2)' }}>
                    <input id="chechboxid" type="checkbox" checked={checked === false ? false : true} value="false" onClick={(e) => { updateaddressstatus(e.target.value) }}
                      onChange={(e) => Sameaddressfunction(e.target.value)} name="same_as_shipping" style={{ marginRight: '.5em' }} />
                    <b>Yes, My Billing Address Is The Same!</b></div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <div style={{ textAlign: 'left', fontSize: '22px' }}>
                    <b>Step #3: </b>Enter Your Billing Address</div>
                </div><hr style={{ border: ' 0.1px solid rgba(0,0,0,0.2)' }} />
                <div style={{ marginTop: '30px' }} type="address">
                  <div>
                    <input id="billingfulladdress" type="text" placeholder="Full Address..." name="address" style={inputstyle} />
                    <input id="billingcityname" type="text" placeholder="City Name..." name="city"
                      style={{
                        marginTop: '20px', width: '100%',
                        fontSize: '16px',
                        lineHeight: '24px',
                        padding: '12px 18px',
                        borderRadius: '5px',
                        border: ' 0.1px solid rgba(0,0,0,0.2)'
                      }} />
                    <select id="billingstate" name="state" style={{
                      float: 'left', width: '65%', marginTop: '20px', fontSize: '16px',
                      lineHeight: '24px',
                      padding: '12px 18px',
                      borderRadius: '5px',
                      border: ' 0.1px solid rgba(0,0,0,0.2)'
                    }} ><option value="">Select State</option>
                      <option value="">Select State</option>
                      <option value="">------------------------------</option>
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                    <input id="billingzipcode" type="text" placeholder="Zip Code..." style={{
                      float: 'left', width: '30%', marginLeft: '5%', marginTop: '20px', fontSize: '16px',
                      lineHeight: '24px',
                      padding: '12px 18px',
                      borderRadius: '5px',
                      border: ' 0.1px solid rgba(0,0,0,0.2)'
                    }} />
                    <select id="billingcountry" name="country" style={{
                      clear: 'left', marginTop: '20px',
                      lineHeight: '24px',
                      padding: '12px 18px',
                      width: '100%',
                      borderRadius: '5px',
                      border: ' 0.1px solid rgba(0,0,0,0.2)'
                    }}><option value="">Select Country</option><option value="">------------------------------</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="IE">Ireland</option>
                      <option value="AU">Australia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="">------------------------------</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Aland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BQ">Bonaire, Saint Eustatius and Saba </option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="VG">British Virgin Islands</option>
                      <option value="BN">Brunei</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curacao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="CD">Democratic Republic of the Congo</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="TL">East Timor</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">Heard Island and McDonald Islands</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="CI">Ivory Coast</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="XK">Kosovo</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Laos</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">Macedonia</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia</option>
                      <option value="MD">Moldova</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="KP">North Korea</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestinian Territory</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="CG">Republic of the Congo</option>
                      <option value="RE">Reunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russia</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthelemy</option>
                      <option value="SH">Saint Helena</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">Saint Vincent and the Grenadines</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">South Georgia and the South Sandwich Islands</option>
                      <option value="KR">South Korea</option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syria</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania</option>
                      <option value="TH">Thailand</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="VI">U.S. Virgin Islands</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UM">United States Minor Outlying Islands</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VA">Vatican</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Vietnam</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                    <StripeCheckout
                      stripeKey="pk_test_51JJAHkSHEhusvEucppm0kRbhS1PrhYEGQAIKSQNoShXeh8R6M7HbcLXkEih9qvvrKzsGMjkAFkxqIGRlr5e1TyVy00UsriMcHz"
                      token={handleToken}
                      billingAddress
                      shippingAddress
                      amount={displaytotalbill() * 100}

                    >
                      <div style={{ marginTop: '20px', width: '100%' }}>
                        <button style={{
                          width: '100%', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(255, 156, 0)', fontSize: '16px',
                          lineHeight: '24px',
                          padding: '12px 18px',
                          border: ' 0.1px solid rgba(0,0,0,0.2)',
                          borderRadius: '5px',
                        }}>YES!SEND MY COLLECTION</button>
                      </div>
                    </StripeCheckout>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row" style={{ float: 'left', display: window.innerWidth <= 768 ? 'block' : 'flex', margin: window.innerWidth <= 768 ? '' : '20px 0px 0px 160px', width: window.innerWidth <= 768 ? '100%' : '80%', alignContent: 'center', backgroundColor: 'lavenderblush' }}>
          <div style={{ width: window.innerWidth <= 768 ? '100%' : '50%' }}>
            <div style={{ display: window.innerWidth <= 768 ? 'block' : 'flex' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
                border: '2px solid white'
              }}>
                <img src="https://assets.clickfunnels.com/images/seal1.png" width="70" height="auto" />
              </div>
              <div style={{
                // float: 'right',
                textAlign: 'center',
                padding: '20px',
                border: '2px solid white',
              }}>
                <h3><b>100% Money Back Guarantee</b></h3>
                <div>We stand behind our products 100%. If you are not satisfied with your purchase, please email support@extendyouradventure.com and we'll make sure you're happy!</div>
              </div>
            </div>
          </div>
          <div style={{ width: window.innerWidth <= 768 ? '100%' : '50%' }}>
            <div style={{ display: window.innerWidth <= 768 ? '' : 'flex' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
                border: '2px solid white'
              }}>
                <img src="https://assets.clickfunnels.com/images/grey-lock.png" style={{ justifyContent: 'center', display: 'flex ' }} width="70" height="auto" />
              </div>
              <div style={{
                textAlign: 'center',
                padding: '20px',
                border: '2px solid white',
              }}>
                <h3 ><b>Secure Payment</b></h3>
                <div>All orders are through a secure payment network. Your credit card information is never stored in any way. We respect your privacy.</div>
              </div>
            </div>
          </div>
        </div>
        {/* <hr style={{ border: ' border: 1px solid #f00', margin: '20px 0px 20px 0px' }} /> */}
      </div>
      <hr style={{ border: ' border: 1px solid #f00', margin: '20px 0px 20px 0px' }} />
      <div><br />
        <div style={{float:'left', margin: window.innerWidth <= 768 ? '':'0px 0px 0px 550px' }} data-bold="inherit" contenteditable="false">
          <b>© 2020 ExtendYourAdventure.com</b>&nbsp;- All Rights Reserved -
          <Link to="/Terms&conditions">Our Policies</Link>&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}

export default App;
const left = {
  width: window.innerWidth <= 768 ? '100%' : '50%',
  float: 'left',
  padding: '20px',
  border: '2px solid white',
  backgroundColor: 'white',
}
const right = {
  width: window.innerWidth <= 768 ? '100%' : '50%',
  float: 'left',
  padding: '20px',
  border: '2px solid white',
  backgroundColor: 'white',
}
const inputstyle = {
  width: '100%',
  // fontSize: '1rem',
  lineHeight: '24px',
  padding: '12px 18px',
  borderRadius: '5px',
  border: ' 0.1px solid rgba(0,0,0,0.2)'
}
const table1div = {
  float: 'left',
  margin: window.innerWidth <= 768 ? '0px' : '0px 0px 0px 160px',
  width: window.innerWidth <= 768 ? '100%' : '80%',
  alignContent: 'center',
  backgroundColor: 'lavenderblush',
  padding: window.innerWidth <= 768 ? '' : '30px',
  display: window.innerWidth <= 768 ? 'block' : 'flex',
  boxSizing: window.innerWidth <= 768 ? '' : 'inherit'
}