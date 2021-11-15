import React, { useState, useEffect } from "react";
import './service.css';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import bannerimage from "../banner.jpeg"
import logoimage from "../cyspaceglobalimage.jpeg"
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Service = () => {
    const history = useHistory();
    const [popup, setPopup] = useState(0);
    const [display1, setDisplay1] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [serviceamount, setServiceamount] = useState(0);
    const [inputList, setInputList] = useState([{ serivce1: "", quantity: "", price: "" }]);
    const [pricetolist, setPricetolist] = useState(0);
    const [selectedservice, setSelectedservice] = useState([]);
    const [calcamount, setCalcamount] = useState(0)
    const setpriceforselectedservice = (data) => {
        for (let i = 0; i < service.length; i++) {
            if (service[i].type === data) {
                setServiceamount(service[i].price);
                setSelectedservice(service[i])
            }
        }
    }
    const qunatitylist = (qty) => {
        // setCalcamount(serviceamount * qty)
    }
    let finaltotal = Object.values(inputList).reduce((tt, { quantity, price }) => tt += quantity * price, 0);
    const gstcalculator = (value) => {
        let amount = finaltotal * value;
        let gst_total = amount / 100;
        setCalcamount(gst_total)
    }
    let totalpayable_amount = finaltotal + calcamount;

    const validationfun = () => {
        if (totalpayable_amount > 10000) {
            alert("Amount can't exceed $10,000", { type: "error" });
            window.location.reload();
        }
        else if (totalpayable_amount == 0) {
            alert("Please Select Atleast One Service...", { type: "error" });
            window.location.reload();
        }
    }

    async function handleToken(token, address){
            const response = await axios.post(`http://localhost:5000/api/v1/checkout`, {
                // const response = await axios.post(`https://shopping-gm.herokuapp.com/api/v1/checkout`, {
                token,
                address,
                inputList,
                totalpayable_amount
            })
            const { status } = response.data;
            if (status === "success") {
                alert("Your, Services Noted Successfully", { type: "success" });
                window.location.reload();
            } else {
                alert("Something went wrong", { type: "error" });
                window.location.reload();
            }
    }
    
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        service.map((value, i) => {
            if (value.type === e.target.value) {
                list[index]['price'] = value.price;
            }
        })
    };
    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { serivce1: "", quantity: "", price: "" }]);
    };

    useEffect(() => {
    }, [])
    const [service, setService] = useState(
        [
            { type: "Vulnerability Management", price: "2500", id: 1 },
            { type: "Penetration testing", price: "2500", id: 2 },
            { type: "VAPT Serivices", price: "5000", id: 3 },
            { type: "Threat Management", price: "2000", id: 4 },
            { type: "Soc1 Services", price: "5000", id: 5 },
            { type: "Soc2 Services", price: "5000", id: 6 },
            { type: "Soc2 Services", price: "5000", id: 7 },
            { type: "Soc Services", price: "10000", id: 8 },
            { type: "Architecture Review & Deployments", price: "10000", id: 9 },
            { type: "Application security", price: "10000", id: 10 },
            { type: "RED Team Management and Deployment Services", price: "10000", id: 11 },
            { type: "Blue Team Management Deployment Services", price: "10000", id: 12 },
            { type: "Advanced malware protection", price: "5000", id: 13 },
            { type: "Data centre & perimeter protection", price: "10000", id: 14 },
            { type: "Network risk assessment", price: "10000", id: 15 },
            { type: "Security monitoring and management services (SIEM & SOC)", price: "20000", id: 16 },
            { type: "Host & end point security", price: "2500", id: 17 },
            { type: "Cloud & virtualization security", price: "3000", id: 18 },
            { type: "Security device management", price: "5000", id: 19 },
            { type: "Mobile security", price: "3000", id: 20 },
            { type: "Malware Analysis", price: "500", id: 21 },
            { type: "Test", price: "10", id: 22 },
        ])
    function homeredirectfunction() {
        history.push("/Product")
    }
    const customId = "custom-id-yes";
    const notify = () => {
        toast("Total amount can't be more than $10,000", {
            toastId: customId
          });
    }
    return (
        <div>
            <div>
                <img src={bannerimage} style={{ width: '100%' }} ></img>
            </div>
            <div><span class="w3-xxxlarge"><i style={{ cursor: 'pointer', marginLeft: '50px' }} onClick={() => homeredirectfunction()} class="fa fa-home"></i> </span></div>
            <div class="row" style={{ float: 'left', display: window.innerWidth <= 768 ? 'block' : 'flex', width: window.innerWidth <= 768 ? '100%' : '80%', margin: window.innerWidth <= 768 ? '' : '0px 0px 0px 160px', justifyContent: 'center' }}>
                <div style={{ width: window.innerWidth <= 768 ? '100%' : '70%' }}>
                    <div style={{ display: window.innerWidth <= 768 ? 'block' : 'flex', backgroundColor: 'rgba(100,206,90,.5)' }}>
                        <div style={{
                            padding: '20px',
                            border: '2px solid white',
                            width: '100%'
                        }}>
                            <h5 style={{ color: 'rgba(26,26,26,.5)' }} >Pay Cyspace Global Technology Private Limited</h5>
                            <h3>${finaltotal === 0 ? 0 : totalpayable_amount}</h3>
                            <div class="w3-card-4" style={{ width: window.innerWidth <= 768 ? '100%' : '92%', height: 'auto' }}>
                                <div class="w3-container">
                                    <div>
                                        <p style={{ display: window.innerWidth <= 768 ? '' : 'flex', marginTop: '10px', }}>
                                            <img src={logoimage} alt=""
                                                style={{ width: window.innerWidth <= 768 ? '10%' : '50px', borderRadius: '4px' }} />&nbsp;&nbsp;&nbsp;
                                            <span style={{ fontSize: '21px', fontWeight: '500', marginTop: '8px' }} >Cyspace Global Technology Private Limited</span><br />
                                        </p>
                                        <span><h4>Managed Security Service Provider</h4></span>
                                        <span><h6>Certified in ISO 9001:2015 (QMS) <span style={{ fontWeight: '1000' }} >|</span> ISO27001: 2013 (ISM) <span style={{ fontWeight: '1000' }} >|</span> ISO 22301: 2013 (SMC)</h6></span>
                                        <hr style={{ border: ' 0.1px solid rgba(0,0,0,0.2)' }} />
                                        <p>Your selected services here...</p>
                                    </div>
                                    {inputList.map((x, i) => {
                                        return (
                                            <div className="box">
                                                <select
                                                    style={{
                                                        width: '50%',
                                                        borderRadius: '5px',
                                                        border: ' 0.1px solid rgba(0,0,0,0.2)'
                                                    }}
                                                    name="service"
                                                    value={x.service}
                                                    onChange={(e) => { handleInputChange(e, i) }}
                                                    onClick={(e) => { setpriceforselectedservice(e.target.value) }}
                                                >
                                                    <option>Select Service</option>
                                                    {service.map((value, index) => (
                                                        <option key={index} value={value.type}>
                                                            {value.type}
                                                        </option>
                                                    ))}
                                                </select>&nbsp; &nbsp;
                                                <select
                                                    // class="dropdown-menu"
                                                    name="quantity"
                                                    value={x.quantity}
                                                    onChange={(e) => { handleInputChange(e, i) }}
                                                    onClick={(e) => qunatitylist(e.target.value)}
                                                >
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                    <option value="17">17</option>
                                                    <option value="18">18</option>
                                                    <option value="19">19</option>
                                                    <option value="20">20</option>
                                                </select>
                                                <span key={i} style={{ fontSize: '15px', marginTop: '13px', marginLeft: '10px' }}>${
                                                    inputList.length >= 0 ? inputList[i].price : 0}
                                                </span>
                                                <span style={{ marginLeft: '10px' }} className="btn-box">
                                                    {inputList.length !== 1 && <button
                                                        className="mr10"
                                                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                                                    {inputList.length - 1 === i && <button style={{ marginLeft: '10px' }} onClick={handleAddClick}>Add</button>}
                                                </span>
                                            </div>
                                        );
                                    })}

                                    <div style={{ display: 'flex', fontSize: '15px', marginTop: '40px', fontWeight: '500' }}>
                                        <span style={{ marginLeft: window.innerWidth <= 768 ? '' : '70px' }}>Subtotal</span>
                                        <span style={{ marginLeft: '212px' }}>${finaltotal === 0 ? 0 : finaltotal}</span>
                                    </div>
                                    <hr style={{ border: ' 0.1px solid rgba(0,0,0,0.2)', marginLeft: window.innerWidth <= 768 ? '' : '65px' }} />
                                    <div style={{ display: 'flex', fontSize: '15px', marginTop: '20px', fontWeight: '500' }}>
                                        <span style={{ marginLeft: window.innerWidth <= 768 ? '' : '70px' }}>Tax : </span>&nbsp;
                                        <span><select
                                            name="quantity"
                                            // value={x.quantity}
                                            // onChange={(e) => { handleInputChange(e) }}
                                            onClick={(e) => gstcalculator(e.target.value)}
                                        >
                                            <option value="0">0</option>
                                            <option value="18">18%</option>
                                            <option value="20">20%</option>
                                            <option value="24">24%</option>
                                        </select></span>
                                    </div>
                                    <hr style={{ border: ' 0.1px solid rgba(0,0,0,0.2)', marginLeft: window.innerWidth <= 768 ? '' : '65px' }} />
                                    <div style={{ display: 'flex', fontSize: '15px', margin: '30px 0px 20px 0px', fontWeight: '500' }}>
                                        <span style={{ marginLeft: window.innerWidth <= 768 ? '' : '70px' }}>Total Due</span>
                                        <span style={{ marginLeft: '210px' }}>${finaltotal === 0 ? 0 : finaltotal + calcamount > 10000 ?
                                            (notify()) : finaltotal + calcamount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: window.innerWidth <= 768 ? '100%' : '50%' }}>
                    <div style={{ display: window.innerWidth <= 768 ? '' : 'flex' }}>
                        <div style={{
                            padding: '20px',
                            border: '2px solid white',
                            width: window.innerWidth <= 768 ? '100%' : '80%'
                        }}>
                            <div class="w3-container">
                                <h5><b>Pay with card</b></h5>
                                <div style={{ display: 'block', marginTop: '10px' }} >
                                    <div style={{ textAlign: 'left', color: 'rgba(0,0,0,0.5)' }}><b>Email:</b></div>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <input
                                        // onBlur={() => validationfun()} 
                                        style={inputstyle} name="email" type="text" />
                                </div>
                                <StripeCheckout
                                    stripeKey="pk_test_51JJAHkSHEhusvEucppm0kRbhS1PrhYEGQAIKSQNoShXeh8R6M7HbcLXkEih9qvvrKzsGMjkAFkxqIGRlr5e1TyVy00UsriMcHz"
                                    token={handleToken}
                                    billingAddress
                                    shippingAddress
                                    amount={totalpayable_amount * 100}
                                >
                                    <div style={{ justifyContent: 'center', display: 'flex', marginTop: '20px' }}>
                                        <button
                                            // onClick={() => setQuantity(quantity)}
                                            onClick={() => validationfun()}
                                            style={{ width: '100%', textAlign: 'center', color: 'white', fontWeight: '450', fontSize: '18px', backgroundColor: 'rgb(0, 116, 212)', lineHeight: '33px', borderRadius: '5px' }}
                                        >Pay</button>
                                    </div>
                                </StripeCheckout>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="row" style={{ float: 'left', display: window.innerWidth <= 768 ? 'block' : 'flex', margin: window.innerWidth <= 768 ? '' : '20px 0px 0px 160px', width: window.innerWidth <= 768 ? '100%' : '80%', alignContent: 'center', }}>
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
                                <h3><b>100% Secured Service</b></h3>
                                <div>We stand behind our products 100%. If you are not satisfied with your purchase, please email admin@cyspaceglobal.com and we'll make sure you're happy!</div>
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
                                <h3><b>Secure Payment</b></h3>
                                <div>All orders are through a secure payment network. Your credit card information is never stored in any way. We respect your privacy.</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr style={{ border: ' border: 1px solid #f00', margin: '20px 0px 20px 0px' }} /> */}
            </div>
            <div><br />
                <div style={{ float: 'left', margin: window.innerWidth <= 768 ? '' : '0px 0px 0px 550px' }} data-bold="inherit" contenteditable="false">
                    <b>© 2020 ExtendYourAdventure.com</b>&nbsp;- &nbsp;All Rights Reserved -
                    <Link to="/Terms&conditions">Our Policies</Link>&nbsp;&nbsp;
                </div>
            </div>
            <div>
                <div style={{ float: 'right', margin: '10px 30px 10px 0px' }}>Powered By <a href="https://www.cyspaceglobal.com" >CyspaceGroups</a></div>
            </div>
        </div >
    )
                        }
export default Service;
const inputstyle = {
    width: '100%',
    fontSize: '1.5rem',
    lineHeight: '17px',
    padding: '12px 18px',
    borderRadius: '7px',
    border: ' 0.1px solid rgba(0,0,0,0.2)'
}
const inputstylespan = {
    width: '50%',
    fontSize: '1.4rem',
    lineHeight: '17px',
    padding: '12px 18px',
    borderRadius: '7px',
    border: ' 0.1px solid rgba(0,0,0,0.2)'
}