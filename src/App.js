import './App.css';
import './pdfStyles.css';
import logo from './res/log_zomato.svg';
import zomato_log from './res/zomato_logo.svg';
import qr from './res/qr.png';
import play from './res/play.svg';
import { jsPDF } from "jspdf";
import "jspdf/dist/polyfills.es.js";
import { useRef } from "react";
import generatePDF from "react-to-pdf";

function App() {
    const reportTemplateRef = useRef(null);
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const targetRef = useRef();

    return (
        <div className="App">

            <button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Download PDF</button>
            <div ref={targetRef}>
                <div className="container-lg bg-light p-0">
                    <img src={zomato_log} alt="" style={{
                        position: "absolute",
                        width: "800px",
                        opacity: "0.2",
                        top: "25vh",
                        left: "50%",
                        transform: "translateX(-50%) rotate(330deg)"
                    }}/>
                    <div className="container-fluid d-flex justify-content-between align-items-center px-5"
                         style={{background: "pink"}}>
                        <img className="w-25" src={logo} alt=""/>
                        <div className="row pt-4 pb-4">
                            <h2 className="m-0">Kitchen King</h2>
                            <h4 className="m-0">Bargarh, Odisha 768040</h4>
                            <h7 className="m-0">Phone 123124125125125-125125 Email: contact@kitchenking.com</h7>
                        </div>
                        <img className="w-25" src={zomato_log} alt=""/>
                    </div>
                    <div className="container col-lg-10 pt-4">
                        <div className="d-flex justify-content-between fw-bold">
                            <p>Order Id : 1241521251</p>
                            <p>Order Date & Time ....................................</p>
                        </div>
                        <div className="d-flex justify-content-between fw-bold">
                            <p>Customer Name ......................</p>
                            <p>Mob No ....................................</p>
                        </div>
                        <p className="text-start fw-bold">Delivery
                            Address:.....................................................................................</p>
                        <p className="text-start fw-bold">Deliver Partner's
                            Name:..............................................................................</p>
                    </div>
                    <hr className="m-0 p-0"/>
                    <div className="container m-0 p-0" style={{height: "800px"}}>
                        <div className="row col-10 mx-auto">
                            <div className="col col-8 mt-4">
                                <h2 className="text-start mb-4">Order Details</h2>
                                <table className="w-100 text-start">
                                    <tr className="mb-5">
                                        <th className="w-25 pb-3">Item</th>
                                        <th className="pb-3 text-center">Quantity</th>
                                        <th className="pb-3 text-center">Unit Price</th>
                                        <th className="text-center pb-3 text-center">Total Price</th>
                                    </tr>
                                    {items.map((item, index) => (
                                        <tr key={index}>
                                            <td>Item {index}</td>
                                            <td className="text-center">1</td>
                                            <td className="text-center">₹100</td>
                                            <td className="text-center">100</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                            <div className="col col-4 border-start" style={{height: "800px"}}>
                                <h2 className="mt-4">Instructions</h2>
                                <ul className="m-0">
                                    {items.slice(0, 7).map((item, index) => (
                                        <li className="m-0 p-0" key={index}>
                                            <p className="m-0 text-start">This is the instruction for {index}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0 p-0"/>
                    <div className="container" style={{background: "pink"}}>
                        <div className="d-flex">
                            <div className="d-flex justify-content-center align-items-end flex-row w-100">
                                <p className="m-0 text-center">www.zomato.com || support@zomato.com</p>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex align-items-center justify-content-center flex-column m-2">
                                    <p className="m-0 text-center fw-bold" style={{width: "200px"}}>Download Zomato</p>
                                    <img className="h-50 pt-2" src={play} alt=""/>
                                </div>
                                <img src={qr} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;