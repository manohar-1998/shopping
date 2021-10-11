import React, { useState, useEffect } from "react";
import './service.css';
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import bannerimage from "../banner.jpeg"
import logoimage from "../cyspaceglobalimage.jpeg"
const Service = () => {
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
    const servicesdisplayfunction = () => {
        return (
            // selectedservice.length>0 ?
            <div style={{ display: 'flex', fontSize: '15px', border: '1px solid rgba(0,0,0,0.1)', marginTop: '40px', fontWeight: '500', fontSize: '12px' }}>
                <span style={{ border: '1px solid rgba(0,0,0,0.1)', width: '100%' }}>{selectedservice.type}</span>
                <span style={{ border: '1px solid rgba(0,0,0,0.1)', width: '20%', marginLeft: '10px' }}>${selectedservice.price}</span>
            </div>
            // : <div></div>
        )
    }

    let finaltotal = Object.values(inputList).reduce((tt, { quantity, price }) => tt += quantity * price, 0);
    console.log("setCalcamount(sum)==", finaltotal)
    const gstcalculator = (value) => {
        console.log("Gst value=", value)
        let amount = finaltotal * value;
        let gst_total = amount / 100;
        console.log("gst_total==", gst_total)
        setCalcamount(gst_total)
    }
    let totalpayable_amount = finaltotal + calcamount;

    console.log("inputList=", inputList)
    async function handleToken(token, address) {
        console.log("Token==", token, address)
        const response = await axios.post(`http://localhost:5000/api/v1/checkout`, {
            // const response = await axios.post(`https://shopping-gm.herokuapp.com/api/v1/checkout`, {
            token,
            address,
            inputList,
            totalpayable_amount
        })
        const { status } = response.data;
        console.log(response, "RESPONSDATA==", response.data)
        if (status === "success") {
            alert("Your, Orders has been placed Successfully", { type: "success" });
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
        ])

    return (
        <div>
            <div>
                <img src={bannerimage} style={{ width: '100%' }} ></img>
            </div>
            <div class="row" style={{ float: 'left', display: window.innerWidth <= 768 ? 'block' : 'flex', width: window.innerWidth <= 768 ? '100%' : '80%', margin: window.innerWidth <= 768 ? '' : '10px 0px 0px 160px', justifyContent: 'center'}}>
                <div style={{ width: window.innerWidth <= 768 ? '100%' : '50%' }}>
                    <div style={{ display: window.innerWidth <= 768 ? 'block' : 'flex', }}>
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
                                        <span style={{ marginLeft: '210px' }}>${finaltotal === 0 ? 0 : finaltotal + calcamount}</span>
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
                                    <input style={inputstyle} name="email" type="text" />
                                </div>
                                <div style={{ textAlign: 'left', color: 'rgba(0,0,0,0.5)', marginTop: '15px' }}>
                                    <label>
                                        <span>Card information</span>
                                    </label>
                                </div>
                                <div class="form-group" >
                                    <input type="text" style={inputstyle} placeholder="1234 1234 1234 1234" value="" />
                                    <img style={{ position: 'absolute', right: '0', margin: window.innerWidth <= 768 ? '14px 60px 0px 0px' : '14px 315px 0px 0px' }} src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg" alt="amex" class="BrandIcon" />
                                    <img style={{ position: 'absolute', right: '0', margin: window.innerWidth <= 768 ? '14px 85px 0px 0px' : '14px 345px 0px 0px' }} src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg" alt="mastercard" class="BrandIcon" />
                                    <img style={{ position: 'absolute', right: '0', margin: window.innerWidth <= 768 ? '14px 110px 0px 0px' : '14px 375px 0px 0px' }} src="https://js.stripe.com/v3/fingerprinted/img/visa-365725566f9578a9589553aa9296d178.svg" alt="visa" class="BrandIcon" />
                                    <span >
                                        <input style={inputstylespan} type="text" inputmode="numeric" placeholder="MM / YY" />
                                        <input style={inputstylespan} type="text" inputmode="numeric" placeholder="CVC" />
                                    </span>
                                </div>
                                <div style={{ display: 'block', marginTop: '10px' }} >
                                    <div style={{ textAlign: 'left', color: 'rgba(0,0,0,0.5)' }}><b>Name on Card:</b></div>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <input style={inputstyle} name="email" type="text" />
                                </div>
                                <div style={{ display: 'block', marginTop: '10px' }} >
                                    <div style={{ textAlign: 'left', color: 'rgba(0,0,0,0.5)' }}><b>Billing Address:</b></div>
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <select name="country" style={{
                                        clear: 'left',
                                        lineHeight: '24px',
                                        padding: '12px 18px',
                                        width: '100%',
                                        borderRadius: '5px',
                                        border: ' 0.1px solid rgba(0,0,0,0.2)'
                                    }}><option value="">Select Country</option>
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
                                    <span >
                                        <input style={inputstyle} type="text" inputmode="numeric" placeholder={display1 ? 'Address Line1' : "Address"} />
                                    </span>
                                    <span onClick={() => setDisplay1(true)} style={{ fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', display: display1 ? 'none' : '' }}>Enter Address Manually</span>
                                    {display1 === true && (
                                        <div>
                                            <span>
                                                <input style={inputstyle} type="text" inputmode="numeric" placeholder="Address Line2" />
                                            </span>
                                            <span >
                                                <input style={inputstylespan} type="text" inputmode="numeric" placeholder="City" />
                                                <input style={inputstylespan} type="text" inputmode="numeric" placeholder="PIN" />
                                            </span>
                                            <span>
                                                <select style={{
                                                    clear: 'left',
                                                    lineHeight: '24px',
                                                    padding: '12px 18px',
                                                    width: '100%',
                                                    borderRadius: '5px',
                                                    border: ' 0.1px solid rgba(0,0,0,0.2)'
                                                }}>
                                                    <option value="" disabled="" hidden="">State</option>
                                                    <option value="Andaman and Nicobar Islands">Andaman &amp; Nicobar</option>
                                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                    <option value="Assam">Assam</option>
                                                    <option value="Bihar">Bihar</option>
                                                    <option value="Chandigarh">Chandigarh</option>
                                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                                    <option value="Dadra and Nagar Haveli">Dadra &amp; Nagar Haveli</option>
                                                    <option value="Daman and Diu">Daman &amp; Diu</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Goa">Goa</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Haryana">Haryana</option>
                                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                    <option value="Jammu and Kashmir">Jammu &amp; Kashmir</option>
                                                    <option value="Jharkhand">Jharkhand</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Lakshadweep">Lakshadweep</option>
                                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Manipur">Manipur</option>
                                                    <option value="Meghalaya">Meghalaya</option>
                                                    <option value="Mizoram">Mizoram</option>
                                                    <option value="Nagaland">Nagaland</option>
                                                    <option value="Odisha">Odisha</option>
                                                    <option value="Puducherry">Puducherry</option>
                                                    <option value="Punjab">Punjab</option>
                                                    <option value="Rajasthan">Rajasthan</option>
                                                    <option value="Sikkim">Sikkim</option>
                                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                                    <option value="Telangana">Telangana</option>
                                                    <option value="Tripura">Tripura</option>
                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                    <option value="Uttarakhand">Uttarakhand</option>
                                                    <option value="West Bengal">West Bengal</option>
                                                </select>
                                            </span>
                                        </div>
                                    )}
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
                                            onClick={() => setQuantity(quantity)}
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
                <div style={{float:'right',margin: '10px 30px 10px 0px' }}>Powered By <a href="https://www.cyspaceglobal.com" >CyspaceGlobal</a></div>
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