import './style.css'
import React, { useState } from "react";
import { useHistory } from "react-router";
import logoimage from "../cyspaceglobalimage.jpeg"
const Termsandconditions = () => {
    const history = useHistory();
    function Redirecttoprivacyfunction() {
        var x = document.getElementById('Privacypolicy');
        if (x.style.display == 'none') {
            document.getElementById('termsconditions').style.display = 'none';
            document.getElementById('Refund').style.display = 'none';
            document.getElementById('Privacypolicy').style.display = 'block'
        }
    }
    function termsandconditionsfun() {
        var x = document.getElementById('termsconditions');
        if (x.style.display == 'none') {
            document.getElementById('termsconditions').style.display = 'block';
            document.getElementById('Refund').style.display = 'none';
            document.getElementById('Privacypolicy').style.display = 'none'
        }
    }
    function refundpolicyfun() {
        var x = document.getElementById('Refund');
        if (x.style.display == 'none') {
            document.getElementById('termsconditions').style.display = 'none';
            document.getElementById('Refund').style.display = 'block';
            document.getElementById('Privacypolicy').style.display = 'none'
        }
    }
    function homeredirectionfunction(){
        history.push("/")
    }
    return (
        <div>
            <section>
                <div>
                    <div class="container">
                        <p>
                            <span style={{cursor:'pointer'}} onClick={()=>homeredirectionfunction()}>
                                <img src={logoimage}  alt="logo" width="200px" />
                            </span>
                            <span>
                            <marquee width="80%" direction="right">
                                <span style={{fontSize:'50px'}} ><b>Cyspace Policies</b></span>
                            </marquee></span>
                        </p>
                        <span style={{ fontSize: '20px' }}>
                            <span>Welcome to Cyspace Group's.</span>
                            <p>These terms and conditions outline the rules and regulations for the use of Cyspace Global's.
                                Website,located at <a href="https://www.cyspaceglobal.com">https://www.cyspaceglobal.com</a>
                            </p>
                        </span>
                        <hr />
                        <div style={{ width: '100%', display: window.innerWidth <= 768 ? 'block' :'flex', fontSize:window.innerWidth <= 768 ? '18px' : '24px', justifyContent: 'space-between' }}>
                            <span class="menuitem1" style={{cursor: 'pointer'}}>
                            <div onClick={() => termsandconditionsfun()} class="hoverbtn">TERMS & CONDITIONS</div>
                            </span>
                            <span style={{cursor: 'pointer'}}>
                            <div onClick={() => Redirecttoprivacyfunction()} class="hoverbtn">PRIVACY POLICY</div>
                             </span>
                            <span style={{ cursor: 'pointer', marginRight: '30px' }}>
                                <div onClick={() => refundpolicyfun()} class="hoverbtn">REFUND & CANCELLATION POLICY</div>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-area ptb-100">
                <div style={{ display: 'block' }} id="termsconditions" class="container">
                    {/* <!-- <h2><strong>Terms and Conditions</strong></h2> --> */}
                    <div>
                        <h3><strong>TERMS AND CONDITIONS</strong></h3>

                        <p>PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY, AS IT CONTAINS IMPORTANT INFORMATION REGARDING
                            YOUR LEGAL RIGHTS AND REMEDIES.</p>

                        <ul>
                            <li>OVERVIEW
                                <p>This Terms of Service Agreement ("Agreement") is entered into by and between Return Policy,
                                    registered address plot no 237, Flat no 401, Gem motors Road, Raghavendra society, Kondapur,
                                    Hyderabad, India ("Company") and you, and is made effective as of the date of your use of
                                    this website https://www.cyspaceglobal.com or the date of electronic acceptance.
                                    This Agreement sets forth the general terms and conditions of your use of the
                                    https://www.cyspaceglobal.com as well as the products and/or services purchased or accessed through
                                    this Site (the "Services").Whether you are simply browsing or using this Site or purchase
                                    Services, your use of this Site and your electronic acceptance of this Agreement signifies
                                    that you have read, understand, acknowledge and agree to be bound by this Agreement our
                                    Privacy policy. The terms "we", "us" or "our" shall refer to Company. The terms "you",
                                    "your", "User" or "customer" shall refer to any individual or entity who accepts this
                                    Agreement, uses our Site, has access or uses the Services. Nothing in this Agreement shall
                                    be deemed to confer any third-party rights or benefits.
                                    Company may, in its sole and absolute discretion, change or modify this Agreement, and any
                                    policies or agreements which are incorporated herein, at any time, and such changes or
                                    modifications shall be effective immediately upon posting to this Site. Your use of this
                                    Site or the Services after such changes or modifications have been made shall constitute
                                    your acceptance of this Agreement as last revised.</p>
                                <p><strong>IF YOU DO NOT AGREE TO BE BOUND BY THIS AGREEMENT AS LAST REVISED, DO NOT USE (OR
                                    CONTINUE TO USE) THIS SITE OR THE SERVICES.</strong></p>
                            </li>

                            <li>ELIGIBILITY
                                <p>
                                    This Site and the Services are available only to Users who can form legally binding
                                    contracts under applicable law. By using this Site or the Services, you represent and
                                    warrant that you are (i) at least eighteen (18) years of age, (ii) otherwise recognized as
                                    being able to form legally binding contracts under applicable law, and (iii) are not a
                                    person barred from purchasing or receiving the Services found under the laws of the India or
                                    other applicable jurisdiction.
                                    If you are entering into this Agreement on behalf of a company or any corporate entity, you
                                    represent and warrant that you have the legal authority to bind such corporate entity to the
                                    terms and conditions contained in this Agreement, in which case the terms "you", "your",
                                    "User" or "customer" shall refer to such corporate entity. If, after your electronic
                                    acceptance of this Agreement, Company finds that you do not have the legal authority to bind
                                    such corporate entity, you will be personally responsible for the obligations contained in
                                    this Agreement.
                                </p>
                            </li>
                            <li>RULES OF USER CONDUCT
                                <p>By using this Site, you acknowledge and agree that:</p>
                                <ul>
                                    <li>
                                        Your use of this Site, including any content you submit, will comply with this Agreement
                                        and all applicable local, state, national and international laws, rules and regulations.
                                    </li>
                                    <li>
                                        Is illegal, or promotes or encourages illegal activity
                                    </li>
                                    <li>Promotes, encourages or engages in child pornography or the exploitation of children;
                                    </li>
                                    <li>
                                        Promotes, encourages or engages in terrorism, violence against people, animals, or
                                        property;
                                    </li>
                                    <li>Promotes, encourages or engages in any spam or other unsolicited bulk email, or computer
                                        or network hacking or cracking;</li>
                                    <li>Infringes on the intellectual property rights of another User or any other person or
                                        entity;</li>
                                    <li>Violates the privacy or publicity rights of another User or any other person or entity,
                                        or breaches any duty of confidentiality that you owe to another User or any other person
                                        or entity;</li>
                                    <li>Interferes with the operation of this Site;</li>
                                    <li>Contains or installs any viruses, worms, bugs, Trojan horses, Cryptocurrency Miners or
                                        other code, files or programs designed to, or capable of, using many resources,
                                        disrupting, damaging, or limiting the functionality of any software or hardware.</li>
                                </ul>
                                <p>You will not:</p>
                                <ul>
                                    <li>copy or distribute in any medium any part of this Site, except where expressly
                                        authorized by Company, </li>
                                    <li>copy or duplicate this Terms of Services agreement, which was created with the help of
                                        the TermsHub.io,</li>
                                    <li>modify or alter any part of this Site or any of its related technologies,</li>
                                    <li>access Companies Content (as defined below) or User Content through any technology or
                                        means other than through this Site itself.</li>
                                    <br />
                                </ul>
                            </li>
                            <li>INTELLECTUAL PROPERTY
                                <p>In addition to the general rules above, the provisions in this Section apply specifically to
                                    your use of Companies Content posted to Site. Companies Content on this Site, including
                                    without limitation the text, software, scripts, source code, API, graphics, photos, sounds,
                                    music, videos and interactive features and the trademarks, service marks and logos contained
                                    therein ("Companies Content"), are owned by or licensed to Return Policy in perpetuity, and
                                    are subject to copyright, trademark, and/or patent protection.
                                    Companies Content is provided to you "as is", "as available" and "with all faults" for your
                                    information and personal, non-commercial use only and may not be downloaded, copied,
                                    reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise
                                    exploited for any purposes whatsoever without the express prior written consent of Company.
                                    No right or license under any copyright, trademark, patent, or other proprietary right or
                                    license is granted by this Agreement.</p>
                            </li>
                            <li>DISCLAIMER OF REPRESENTATIONS AND WARRANTIES
                                <p>You specifically acknowledge and agree that your use of this site shall be at your own risk
                                    and that this site are provided "as is", "as available" and "with all faults". company, its
                                    officers, directors, employees, agents, disclaim all warranties, statutory, express or
                                    implied, including, but not limited to, any implied warranties of title, merchantability,
                                    fitness for a particular purpose and non-infringement. company, its officers, directors,
                                    employees, and agents make no representations or warranties about (i) the accuracy,
                                    completeness, or content of this site, (ii) the accuracy, completeness, or content of any
                                    sites linked (through hyperlinks, banner advertising or otherwise) to this site, and/or
                                    (iii) the services found at this site or any sites linked (through hyperlinks, banner
                                    advertising or otherwise) to this site, and company assumes no liability or responsibility
                                    for the same.
                                    in addition, you specifically acknowledge and agree that no oral or written
                                    information or advice provided by company, its officers, directors, employees, or agents,
                                    and third-party service providers will (i) constitute legal or financial advice or (ii)
                                    create a warranty of any kind with respect to this site or the services found at this site,
                                    and users should not rely on any such information or advice.
                                    the foregoing disclaimer of representations and warranties shall apply to
                                    the fullest extent permitted by law, and shall survive any termination or expiration of this
                                    Agreement or your use of this Site or the Services found at this Site.</p>
                            </li>
                            <li>LIMITATION OF LIABILITY
                                <p>
                                    In no event shall company, its officers, directors, employees, agents, and all third party
                                    service providers, be liable to you or any other person or entity for any direct, indirect,
                                    incidental, special, punitive, or consequential damages whatsoever, including any damages
                                    that may result from (i) the accuracy, completeness, or content of this site, (ii) the
                                    accuracy, completeness, or content of any sites linked (through hyperlinks, banner
                                    advertising or otherwise) to this site, (iii) the services found at this site or any sites
                                    linked (through hyperlinks, banner advertising or otherwise) to this site, (iv) personal
                                    injury or property damage of any nature whatsoever, (v) third- party conduct of any nature
                                    whatsoever, (vi) any interruption or cessation of services to or from this site or any sites
                                    linked (through hyperlinks, banner advertising or otherwise) to this site, (vii) any
                                    viruses, worms, bugs, trojan horses, or the like, which may be transmitted to or from this
                                    site or any sites linked (through hyperlinks, banner advertising or otherwise) to this site,
                                    (viii) any user content or content that is defamatory, harassing, abusive, harmful to minors
                                    or any protected class, pornographic, "x-rated", obscene or otherwise objectionable, and/or
                                    (ix) any loss or damage of any kind incurred as a result of your use of this site or the
                                    services found at this site, whether based on warranty, contract, tort, or any other legal
                                    or equitable theory, and whether or not company is advised of the possibility of such
                                    damages.
                                </p>
                                <p>In addition, You specifically acknowledge and agree that any cause of action arising out of
                                    or related to this Site or the Services found at this Site must be commenced within one (1)
                                    year after the cause of action accrues, otherwise such cause of action shall be permanently
                                    barred.</p>
                                <p>Thr forgoing limitaion of liability shall apply to the full extent
                                    permitted by law, and shall survive any termination or expiration of this Agreement or your
                                    use of this Site or the Services found at this Site.</p>
                            </li>
                            <li>INDEMNITY
                                <p>You agree to protect, defend, indemnify and hold harmless Company and its officers,
                                    directors, employees, agents from and against any and all claims, demands, costs, expenses,
                                    losses, liabilities and damages of every kind and nature (including, without limitation,
                                    reasonable attorneys’ fees) imposed upon or incurred by Company directly or indirectly
                                    arising from (i) your use of and access to this Site; (ii) your violation of any provision
                                    of this Agreement or the policies or agreements which are incorporated herein; and/or (iii)
                                    your violation of any third-party right, including without limitation any intellectual
                                    property or other proprietary right. The indemnification obligations under this section
                                    shall survive any termination or expiration of this Agreement or your use of this Site or
                                    the Services found at this Site.</p>
                            </li>
                            <li>DATA TRANSFER
                                <p>If you are visiting this Site from a country other than the country in which our servers are
                                    located, your communications with us may result in the transfer of information across
                                    international boundaries. By visiting this Site and communicating electronically with us,
                                    you consent to such transfers.</p>
                            </li>
                            <li>AVAILABILITY OF WEBSITE
                                <p>Subject to the terms and conditions of this Agreement and our policies, we shall use
                                    commercially reasonable efforts to attempt to provide this Site on 24/7 basis. You
                                    acknowledge and agree that from time to time this Site may be inaccessible for any reason
                                    including, but not limited to, periodic maintenance, repairs or replacements that we
                                    undertake from time to time, or other causes beyond our control including, but not limited
                                    to, interruption or failure of telecommunication or digital transmission links or other
                                    failures.
                                    You acknowledge and agree that we have no control over the availability of this Site on a
                                    continuous or uninterrupted basis, and that we assume no liability to you or any other party
                                    with regard thereto.</p>
                            </li>
                            <li>DISCONTINUED SERVICES
                                <p>
                                    Company reserves the right to cease offering or providing any of the Services at any time,
                                    for any or no reason, and without prior notice. Although Company makes great effort to
                                    maximize the lifespan of all its Services, there are times when a Service we offer will be
                                    discontinued. If that is the case, that product or service will no longer be supported by
                                    Company. In such case, Company will either offer a comparable Service for you to migrate to
                                    or a refund. Company will not be liable to you or any third party for any modification,
                                    suspension, or discontinuance of any of the Services we may offer or facilitate access to.
                                </p>
                            </li>
                            <li>FEES AND PAYMENTS
                                <p>You acknowledge and agree that your payment will be charged and processed by Return Policy.
                                    You agree to pay any and all prices and fees due for Services purchased or obtained at this
                                    Site at the time you order the Services.
                                    Company expressly reserves the right to change or modify its prices and fees at any time,
                                    and such changes or modifications shall be posted online at this Site and effective
                                    immediately without need for further notice to you.
                                    Except as expressly provided in these Terms, all charges and payments are non-refundable,
                                    non-cancellable, and non-creditable, even if your Services are suspended, terminated, or
                                    transferred prior to the end of the Services term.</p>
                            </li>
                            <li>NO THIRD-PARTY BENEFICIARIES
                                <p>Nothing in this Agreement shall be deemed to confer any third-party rights or benefits.</p>
                            </li>
                            <li>COMPLIANCE WITH LOCAL LAWS
                                <p>Company makes no representation or warranty that the content available on this Site are
                                    appropriate in every country or jurisdiction, and access to this Site from countries or
                                    jurisdictions where its content is illegal is prohibited. Users who choose to access this
                                    Site are responsible for compliance with all local laws, rules and regulations.</p>
                            </li>
                            <li>GOVERNING LAW
                                <p>This Agreement and any dispute or claim arising out of or in connection with it or its
                                    subject matter or formation shall be governed by and construed in accordance with the laws
                                    of India, Telangana, to the exclusion of conflict of law rules.This Agreement and any
                                    dispute or claim arising out of or in connection with it or its subject matter or formation
                                    shall be governed by and construed in accordance with the laws of India, Telangana, to the
                                    exclusion of conflict of law rules.</p>
                            </li>
                            <li>DISPUTE RESOLUTION
                                <p>Any controversy or claim arising out of or relating to these Terms of Services will be
                                    settled by binding arbitration. Any such controversy or claim must be arbitrated on an
                                    individual basis, and must not be consolidated in any arbitration with any claim or
                                    controversy of any other party. The arbitration must be conducted in India, Telangana, and
                                    judgment on the arbitration award may be entered into any court having jurisdiction thereof.
                                </p>
                            </li>
                            <li>TITLES AND HEADINGS
                                <p>The titles and headings of this Agreement are for convenience and ease of reference only and
                                    shall not be utilized in any way to construe or interpret the agreement of the parties as
                                    otherwise set forth herein.</p>
                            </li>
                            <li>SEVERABILITY
                                <p>Each covenant and agreement in this Agreement shall be construed for all purposes to be a
                                    separate and independent covenant or agreement. If a court of competent jurisdiction holds
                                    any provision (or portion of a provision) of this Agreement to be illegal, invalid, or
                                    otherwise unenforceable, the remaining provisions (or portions of provisions) of this
                                    Agreement shall not be affected thereby and shall be found to be valid and enforceable to
                                    the fullest extent permitted by law.</p>
                            </li>
                            <li>CONTACT INFORMATION
                                <p>If you have any questions about this Agreement, please contact us by email or regular mail at
                                    the following address: plot no 237, Flat no 401, Gem motors Road, Raghavendra society,
                                    Kondapur, Hyderabad, ,India | contact@cyspaceglobal.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div style={{ display: 'none' }} id="Privacypolicy" class="container">
                <h3><strong>PRIVACY POLICY</strong></h3>
                <p>Your privacy is important to us, so Return Policy, a India, has created the following Privacy Policy to let
                    you know what information we collect when you visit our Site <a
                        href="http://cyspaceglobal.com">http://cyspaceglobal.com </a>
                    why we collect it and how we use it.</p>
                <p>
                    The terms "You," "Your," "Yours" and "User" refer to the entity/person/organization using our Site.
                    When this Policy mentions "We", "Us," and "Our" it refers to Return Policy and its subsidiaries and
                    affiliates. This Privacy Policy is governed by our Terms of Services.
                    For any questions regarding this Policy or any requests regarding the processing of personal data, please
                    contact us at contact@cyspaceglobal.com.
                </p>
                <ul>
                    <li>INFORMATION WE COLLECT FROM YOU
                        <p>We collect the information You provide to us and this information is necessary for the adequate
                            performance of the contractual arrangement which is in place between You and us and allow us to
                            comply with our legal obligations.</p>
                        <ul>
                            <li>Account Signup Information. When You create the account, we ask You to provide the signup
                                information, such as Email, Name, Surname, Phone, Username, Passwords, Personal Number, Address.
                            </li>
                            <li>Communications, Chats, Messaging. When you communicate with us through email or any other way,
                                we collect information about your communication and any information You choose to provide or
                                disclose. In order to answer your request, we may access information provided by email, chats,
                                purchase history, etc. </li>
                            <li>Payment Information. To order and use features of Site, we may require you to provide certain
                                financial information in order to facilitate the processing of payments. We collect your Credit
                                or debit card number, Credit or debit card type, Credit or debit card expiration date, Billing
                                address, Tax number, Name and surname.</li>
                            <li>Login information. We collect Login information if You are logging to our account with
                                Authentication Data.</li>
                            <li>Other Personal Information Provided by You. We may collect other data provided by You from
                                surveys, feedback, financial information (purchase history), Website details and other similar
                                data.</li>
                        </ul>
                    </li>
                    <br />
                    <li>INFORMATION WE COLLECT AUTOMATICALLY
                        <p>When you use our Site or contact us directly, we may collect information, including your personal
                            information, about the way you act in our Site, the services You use and how You use them.
                            This information is necessary for the adequate performance of the contract between You and us, to
                            enable us to comply with legal obligations and given our legitimate interest in being able to
                            provide and improve the functionalities of the Site.</p>
                        <ul>
                            <li>Log data and Device information. We automatically collect log data and device information when
                                you
                                access and use the Site, even if you have not created an Account or logged in. That information
                                includes, among other things: Internet protocol (IP) addresses, Browser type, Internet service
                                provider (ISP), Referring/exit pages, Operating system, Date/time stamp, Clickstream data.</li>
                            <li>Tracking technologies and Cookies. We use Cookies, Beacons, Tags, CI codes (click tracking), ISC
                                (source tracking), ITC (item tracking codes), Phone model, Device ID, Customer number. We also
                                automatically collect information about device’s operating system,.</li>
                            <li>Geo-location data. We collect information about your approximate location as determined by data
                                such
                                as your IP address to offer you an improved user experience. Such data may be collected only
                                when
                                you access the Site using your device.</li>
                        </ul>
                    </li>
                    <br />
                    <li>THE WAY WE USE YOUR INFORMATION
                        <p>We process your information adhering to the general data processing principles.</p>
                        <p>We may use the information we collect through our Site for a number of reasons, including to:</p>
                        <ul>
                            <li>to create trusted environment</li>
                            <li>to create statistics and analyze market to stay connected</li>
                            <li>to customize marketing</li>
                            <li>to send billing information to manage user orders</li>
                            <li>to identify user to create account to contact user</li>
                            <li>to provide support</li>
                        </ul>
                        <p>We will normally collect personal information from you only where we have your consent to do so,
                            where we need the personal information to perform a contract with you, or where the processing is in
                            our legitimate business interests.</p>
                    </li>
                    <li>COOKIES
                        <p>Cookies are small text files stored by your browser on your computer when you visit our Site. We use
                            cookies to improve our Site and make it easier to use. Cookies permit us to recognize users and
                            avoid repetitive requests for the same information.Please check our Cookie Policy to find more
                            information about cookies we use.You may find more information about how to delete cookies, as well
                            as the other useful information
                            related to the use of the cookies, on the website <a
                                href="http://www.allaboutcookies.org/">http://www.allaboutcookies.org/</a>.</p>
                    </li>
                    <li>INFORMATION FROM MINORS
                        <p>This site and our Services are not intended for or directed to persons under the age of 18. We do not
                            knowingly collect or ask for information from minors. We do not knowingly allow minors to use our
                            Site or Services.
                            We will delete any information we discover is collected from a minor. Please contact us using the
                            contact details below if you believe we might have information about a minor.</p>
                    </li>
                    <li>SENSITIVE INFORMATION
                        <p>We do not collect sensitive information such as political opinions, religious or philosophical
                            beliefs, racial or ethnic origin, genetic data, biometric data, health data or data related a sexual
                            orientation.
                            Please do not send, upload, or provide us any sensitive data and contact us using the contact
                            details below if you believe that we might have such information. We have a right to delete any
                            information we believe it might contain sensitive data.</p>
                    </li>
                    <li>PAYMENT INFORMATION
                        <p>To order and use our services we may require you to provide certain financial information to
                            facilitate the processing of payments. We will not store or collect your payment card details. That
                            information is provided directly to our third-party payment processors whose use of your Personal
                            information is governed by their Privacy Policy. All payment data is stored by. You may find their
                            privacy policy link(s) here:.</p>
                    </li>
                    <li>RETENTION
                        <p>We retain your personal information to provide services to you and as otherwise necessary to comply
                            with our legal obligation, resolve disputes, and enforce our agreements.
                            We will retain your personal information as long as we need it to provide services to you, unless we
                            are otherwise required by law or regulations to retain your personal information longer.</p>
                    </li>
                    <li>SECURITY
                        <p>We have implemented security measures designed to protect the personal information you share with us,
                            including physical, electronic and procedural measures. Among other things, we regularly monitor our
                            systems for possible vulnerabilities and attacks.
                            Regardless of the measures and efforts taken by us, the transmission of information via internet,
                            email or text message is not completely secure. We do not guarantee the absolute protection and
                            security of your personal information.
                            We therefore encourage you to avoid providing us or anyone with any sensitive information of which
                            you believe its disclosure could cause you substantial or irreparable harm.
                            If you have any questions regarding the security of our Site or Services, you are welcome to contact
                            us at contact@cyspaceglobal.com.
                        </p>
                    </li>
                    <li>YOUR RIGHTS
                        <p>You are entitled to a range of rights regarding the protection of your personal information. Those
                            rights are:</p>
                        <ul>
                            <li>The right to access the information we have about you. If you wish to access your personal
                                information that we collect, you can do so at any time by contacting us using the contact
                                details provided below.</li>
                            <li>The right to rectify inaccurate information about you. You can correct, update or request
                                deletion of your personal information by contacting us using the contact details provided below.
                            </li>
                            <li>The right to object the processing. When we rely on your consent to process your personal
                                information, you may withdraw consent at any time by contacting us using the contact details
                                provided below. This will not affect the lawfulness of processing prior to the withdrawal of
                                your consent.</li>
                            <li>The right to lodge a complaint. You can raise questions or complaints to the national Data
                                Protection Agency in your country of residence in the event where your rights may have been
                                infringed. However, we recommend attempting to reach a peaceful resolution of the possible
                                dispute by contacting us first.</li>
                            <li>The right to erase any data concerning you. You may demand erasure of data without undue delay
                                for legitimate reasons, e.g., where data is no longer necessary for the purposes it was
                                collected, or where the data has been unlawfully processed.</li>
                        </ul>
                    </li>
                    <li>APPLICATION OF POLICY
                        <p>This Policy was created for the services offered by our Company. Our Policy does not apply to
                            services offered by other companies or individuals, including products or sites that may be
                            displayed to you in search results, sites that may include our services or other sites linked from
                            our Site or Services.</p>
                    </li>
                    <li>AMENDMENTS
                        <p>Our Policy may change from time to time. We will post any Policy changes on our Site and, if the
                            changes are significant, we may consider providing a more explicit notice (including, for certain
                            services, email notification of Policy changes).</p>
                    </li>
                    <li>ACCEPTANCE OF THIS POLICY
                        <p>We assume that all Users of this Site have carefully read this document and agree to its contents. If
                            someone does not agree with this Policy, they should refrain from using our Site. We reserve the
                            right to change our Policy at any time and inform by using the way as indicated in Section 12.
                            Continued use of this Site implies acceptance of the revised Policy.</p>
                    </li>
                    <li>FURTHER INFORMATION
                        <p>If you have any further questions regarding the data we collect, or how we use it, then please feel
                            free to contact us at the details as indicated above.</p>
                    </li>
                </ul>
            </div>
            <div id="Refund" class="container">
                <h3><strong>REFUND POLICY AND CANCELLATION POLICY</strong></h3>
                <p>All our clients are very important to us, that's why Return Policy ("Cyspace Global Technology Pvt Ltd"), has
                    created the following Refund Policy to let You know how we handle the refunds for the goods ordered and
                    bought on our website <a href="http://cyspaceglobal.com">http://cyspaceglobal.com</a></p>
                <p>The terms "You," "Your," and "Yours" refer to the entity/ person/ organization using our website. When this
                    Policy mentions "we", "us,", and "our" it refers to the Company and its subsidiaries or /and affiliates. The
                    term "goods" refer to any product or item bought on our Website by You.
                    This Refund Policy is governed by our Terms of Services.</p>
                <p>For any questions regarding this Refund Policy or any requests regarding the refunds and returns, please
                    contact us by email contact@cyspaceglobal.com, phone +91 8500018118 or other contacts provided below.</p>
                <p> You have the right, without giving a reason, to return the goods within 14, if it has not been used, damaged
                    or its appearance has not substantially changed, that is, the appearance of the product or its packaging has
                    been made only such alterations as were necessary to inspect the goods received.</p>
                <p>The right to withdraw from a distance contract within 14 without giving a reason does not apply to legal
                    persons (e.g., companies, entrepreneurs).</p>
                <p>This Return policy does not limit Your statutory rights to withdraw or rights You may have in relation to
                    incorrect, damaged or defective goods.</p>
                <ul>
                    <li>STANDARD RETURNS
                        <p>Any goods that You wish to return must be in the original packaging and unopened, in a condition fit
                            for resale. If the Goods to be returned do not meet these conditions, we will be unable to offer a
                            refund.
                            You must place your refund request within 14 of delivery of the item.
                            Please contact our Support to begin the return and refund process, Support team will walk you
                            through the process and help you.
                            Please fill in the Return form received with your order and send the goods back to the address
                            provided herein. In case of the return of the goods, you will be responsible for paying the return
                            shipping costs.
                            You must exercise return right responsibly and return the product in the original neat packaging, as
                            well as return all complete parts of the product. You are responsible for the complete set of the
                            returned goods. If the goods are not complete, we won't be able to accept the returned goods and
                            issue a refund.
                            Once the Goods and the Return form have been received and checked by our staff, a refund will be
                            authorized by the same method that the payment was made. Depending on your financial institution,
                            refunds can take up to 14 to be credited to your original payment method. In all cases we have the
                            right to suspend the refund until the good are received back and inspected.
                            If You fail to meet the deadlines of our Return policy, we will be unable to offer a refund.</p>
                    </li>
                    <li>DEFECTIVE GOODS
                        <p>In certain cases, such as defective, damaged or wrong goods, you may be required to provide evidence
                            of the issue, such as a photo or video, or to return the item to receive a refund.</p>
                        <p>You must contact our company at contact@cyspaceglobal.com within 14 upon purchase and service provide detailed
                            information, such as:</p>
                        <ul>
                            <li>Proof of purchase</li>
                            <li>Order number</li>
                            <li>Product name</li>
                            <li>Information about the defect, failure or missing part of the item</li>
                            <li>Defect evidence (e.g., a photo or video of the item, a photo of the defective area (if it is
                                possible to take a photo), a photo of the packaging, other).</li>
                        </ul>
                        <p>When submitting a complaint, you must indicate how You wish the claim to be resolved:</p>
                        <ul>
                            <li>To supplement the incomplete goods with missing components</li>
                            <li>To apply a discount to the goods, e.g., reduce the price of the goods accordingly</li>
                            <li>To refund the money paid</li>
                        </ul>
                        <p>In case You are required to return the goods back to us, you will be responsible for paying the
                            return shipping costs.
                            The goods must be returned in the original packaging (with instructions and/or warranty card, if
                            they were delivered with the product).</p>
                    </li>
                    <li>FURTHER INFORMATION
                        <p>This Policy was created for Cyspace groups and the and applies only to the refunds for the goods and
                            services sold by our Company. Our Policy does not apply to the refunds for the goods and services
                            offered by other companies or individuals.</p>
                    </li>
                    <li>CANCELLATION POLICY
                        <p> A cancellation fee may be levied on a customer on account of cancellation of orders by customer on
                            the Platform (“Cancellation Fee”). Such Cancellation Fee shall be charged based on the time during
                            which the customer opts to cancel the order upon placing/confirming the said order on the Platform.
                            It is clarified that there will be free cancellation of orders only for the initial few hours of
                            placing an order, as specifically provided on the product page. After such time frame, Cancellation
                            Fee will be levied on applicable products.</p>
                        <p>
                            <h3>Why is Cancellation Fee charged?</h3>
                        </p>
                        <p>Cancellation Fee is charged to compensate for the slot, time and effort incurred in processing an
                            order by the seller and to compensate the logistics service providers for incurring a cost when they
                            ship the order. The Cancellation fee charged by Cyspace global shall be either equivalent to or less
                            than the charges borne by Cyspace global on account of cancellation of an order by customers.</p>
                        <p>
                            <h3>How will the Cancellation Fee have charged?</h3>
                        </p>
                        <p>The Cancellation Fee shall be deducted from the amount paid by the customer for the said cancelled
                            order. Cyspace global reserves the right to modify/waive off the Cancellation fee from time to time.
                            The Cancellation fee shall be quoted in Indian Rupees. You shall be solely responsible for
                            compliance of all applicable laws for making payments to Cyspace global or the sellers (as the case
                            may be) on account of any cancellation of orders from Your end.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Termsandconditions;