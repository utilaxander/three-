import React from 'react';

// Inline Icons for Footer
const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const SocialIconX = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);
const SocialIconFB = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.651-2.797 3.593v1.237h4.906l-.25 3.667h-4.656v7.98H9.101z"></path></svg>
);
const SocialIconInsta = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"></path></svg>
);
const SocialIconYT = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
);


const Footer = () => {
    return (
        <footer className="footer-three">
            {/* Top Bar: Store Locator */}
            <div className="footer-top-bar">
                <div className="footer-container">
                    <div className="store-locator-wrapper">
                        <div className="store-search-box">
                            <input type="text" placeholder="Find your nearest store" />
                            <button><SearchIcon /></button>
                        </div>
                        <a href="#" className="check-coverage-link">Check coverage and network status</a>
                    </div>
                </div>
            </div>

            {/* Main Links Columns */}
            <div className="footer-main-links">
                <div className="footer-container grid-layout">
                    {/* Column 1 */}
                    <div className="footer-column">
                        <h3>Explore Three</h3>
                        <ul>
                            <li><a href="#">Mobile Phones</a></li>
                            <li><a href="#">Broadband</a></li>
                            <li><a href="#">Tablets</a></li>
                            <li><a href="#">Top-up</a></li>
                            <li><a href="#">SIM Only deals</a></li>
                            <li><a href="#">Pay As You Go</a></li>
                            <li><a href="#">Three+</a></li>
                            <li><a href="#">Three app</a></li>
                            <li><a href="#">Three Community</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="footer-column">
                        <h3>Popular phones</h3>
                        <div className="footer-sub-grid">
                            <ul>
                                <li><a href="#">iPhone 16 Pro</a></li>
                                <li><a href="#">iPhone 16 Pro Max</a></li>
                                <li><a href="#">iPhone 16</a></li>
                                <li><a href="#">Samsung Galaxy S24 Ultra</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Samsung Galaxy Z Fold6</a></li>
                                <li><a href="#">Samsung Galaxy Z Flip6</a></li>
                                <li><a href="#">Google Pixel 9 Pro</a></li>
                                <li><a href="#">Motorola Razr 50 Ultra</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="footer-column">
                        <h3>Popular products</h3>
                        <ul>
                            <li><a href="#">iPhone</a></li>
                            <li><a href="#">Samsung</a></li>
                            <li><a href="#">HONOR</a></li>
                            <li><a href="#">Xiaomi</a></li>
                            <li><a href="#">Google Pixel</a></li>
                            <li><a href="#">Motorola</a></li>
                            <li><a href="#">HMD</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Social Icons */}
            <div className="footer-socials">
                <div className="footer-container">
                    <div className="social-icons-row">
                        <a href="#"><SocialIconX /></a>
                        <a href="#"><SocialIconFB /></a>
                        <a href="#"><SocialIconInsta /></a>
                        <a href="#"><SocialIconYT /></a>
                    </div>
                </div>
            </div>

            {/* Legal & Corporate */}
            <div className="footer-legal">
                <div className="footer-container">
                    <h3 className="company-heading">Our company</h3>
                    <div className="company-links">
                        <a href="#">About us</a>
                        <a href="#">Social commitment</a>
                        <a href="#">Codes of practice</a>
                        <a href="#">Customer complaints code</a>
                        <a href="#">Wholesale</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact us</a>
                        <a href="#">Media centre</a>
                        <a href="#">Price guide</a>
                        <a href="#">SMARTY</a>
                        <a href="#">VodafoneThree</a>
                        <a href="#">Vodafone</a>
                        <a href="#">VOXI</a>
                        <a href="#">Talkmobile</a>
                        <a href="#">Terms and conditions</a>
                        <a href="#">Business</a>
                        <a href="#">Affiliates</a>
                        <a href="#">Modern slavery statement</a>
                        <a href="#">Gender pay gap report</a>
                        <a href="#">Accessibility</a>
                        <a href="#">Vulnerable customer policy</a>
                        <a href="#">Help with your monthly payments</a>
                        <a href="#">Privacy & Safety</a>
                        <a href="#">PSTI</a>
                        <a href="#">Delivery information</a>
                        <a href="#">Site map</a>
                        <a href="#">Cookie preferences</a>
                    </div>

                    <div className="legal-text">
                        <p className="legal-address">
                            Hutchison 3G UK Ltd<br />
                            Registered address: 450 Longwater Avenue, Green Park, Reading, Berkshire, RG2 6GF<br />
                            Registered in England & Wales | Registered company number: 03885486<br />
                            Authorised & Regulated by the Financial Conduct Authority for consumer credit (registration number: 738670)
                        </p>
                        <p className="legal-copyright">© Hutchison 3G UK Limited 2002 - Present.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Graphic */}
            <div className="three-footer-graphic">
                <svg viewBox="0 0 1440 290" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>THREEFOOTERCROP</title>
                    <g id="SVG" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Three-crop-SVG" fill="#000000" fillRule="nonzero">
                            <path d="M198,290 L198.363103,70.5728398 L312.78279,70.5728398 L312.78279,0 L0,0 L0,70.5728398 L114.419687,70.5728398 L114,290 L198,290 Z M425,290 L424.536111,236.846728 C424.536111,208.688877 429.161078,188.461561 438.411012,176.164778 C447.660946,163.867995 462.603146,157.719604 483.237614,157.719604 C501.381715,157.719604 514.011432,163.333353 521.126766,174.56085 C528.2421,185.788347 531.799767,202.807807 531.799767,225.61923 L532,290 L608,290 L607.578071,211.718519 C607.578071,194.609952 606.066062,179.016206 603.042046,164.937281 C600.018029,150.858356 594.77047,138.918002 587.29937,129.116218 C579.828269,119.314435 569.599977,111.651223 556.614493,106.126581 C543.629009,100.60194 526.996917,97.8396188 506.718215,97.8396188 C492.487548,97.8396188 477.901114,101.493011 462.958913,108.799795 C448.016712,116.106579 435.742762,127.779611 426.137061,143.818893 L424.536111,143.818893 L424.536111,0 L348.757807,0 L349,290 L425,290 Z M740,290 L740.389744,255.643562 C740.389744,243.216536 741.636126,231.677155 744.128889,221.025418 C746.621653,210.373681 750.805934,201.053412 756.681734,193.064609 C762.557533,185.075807 770.302905,178.773529 779.91785,174.157776 C789.532794,169.542024 801.284393,167.234148 815.172647,167.234148 C819.802064,167.234148 824.609537,167.500441 829.595063,168.033028 C834.58059,168.565615 838.853899,169.186966 842.41499,169.897082 L842.41499,99.5956198 C836.361136,97.8203304 830.841445,96.9326856 825.855918,96.9326856 C816.240974,96.9326856 806.982138,98.3529172 798.079412,101.19338 C789.176685,104.033843 780.808122,108.028245 772.973723,113.176584 C765.139324,118.324923 758.195197,124.538437 752.141343,131.817123 C746.087489,139.09581 741.280017,146.995848 737.718926,155.517237 L736.650599,155.517237 L736.650599,104.388901 L664.538515,104.388901 L665,290 L740,290 Z M937.186434,290 C934.609359,281.68471 933.079702,272.091114 932.597463,261.041148 L1132.7361,261.041148 C1134.16694,239.658938 1132.37839,219.167653 1127.37045,199.567294 C1122.36252,179.966935 1114.22462,162.504797 1102.95676,147.180879 C1091.6889,131.856962 1077.29108,119.651284 1059.7633,110.563845 C1042.23552,101.476405 1021.6672,96.9326856 998.058358,96.9326856 C976.953479,96.9326856 957.726577,100.674572 940.377651,108.158346 C923.028726,115.642119 908.094341,125.887762 895.574498,138.895273 C883.054655,151.902784 873.39649,167.315794 866.600004,185.134302 C859.803517,202.952811 856.405274,222.1968 856.405274,242.866269 C856.405274,254.635091 860.552014,276.413619 863.535981,290 C864,290 937,290 937.186434,290 Z M1056.26648,213.851492 L933.351839,213.851492 C933.706571,208.491578 934.85945,202.417008 936.810476,195.627784 C938.761502,188.838559 942.131456,182.406662 946.920339,176.332093 C951.709221,170.257523 958.094397,165.165605 966.075867,161.056337 C974.057338,156.94707 984.078517,154.892436 996.139405,154.892436 C1014.58547,154.892436 1028.33134,159.895022 1037.377,169.900196 C1046.42267,179.905369 1052.71916,194.555801 1056.26648,213.851492 Z M1243.944,290 C1241.38468,281.705992 1239.86482,272.049054 1239.38442,261.041148 L1439.52305,261.041148 C1440.95389,239.658938 1439.16534,219.167653 1434.15741,199.567294 C1429.14947,179.966935 1421.01157,162.504797 1409.74371,147.180879 C1398.47585,131.856962 1384.07803,119.651284 1366.55025,110.563845 C1349.02247,101.476405 1328.45416,96.9326856 1304.84531,96.9326856 C1283.74043,96.9326856 1264.51353,100.674572 1247.1646,108.158346 C1229.81568,115.642119 1214.88129,125.887762 1202.36145,138.895273 C1189.84161,151.902784 1180.18344,167.315794 1173.38696,185.134302 C1166.59047,202.952811 1163.19223,222.1968 1163.19223,242.866269 C1163.19223,259.733977 1165.25134,275.35002 1169.36956,290 C1169,290 1244,290 1243.944,290 Z M1361.05482,213.851492 L1238.14018,213.851492 C1238.49491,208.491578 1239.64779,202.417008 1241.59882,195.627784 C1243.54984,188.838559 1246.9198,182.406662 1251.70868,176.332093 C1256.49756,170.257523 1262.88274,165.165605 1270.86421,161.056337 C1278.84568,156.94707 1288.86686,154.892436 1300.92775,154.892436 C1319.37381,154.892436 1333.11968,159.895022 1342.16534,169.900196 C1351.21101,179.905369 1357.5075,194.555801 1361.05482,213.851492 Z" id="THREEFOOTERCROP"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;
