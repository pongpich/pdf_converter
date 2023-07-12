import React, { Component } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./App.css";

export default class APP extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("TEST-FILE-NAME.pdf");
    });
  }

  render() {
    return (
      <div>
        <div className="mb5">
          <button onClick={this.printDocument}>Click me</button>
        </div>

        <div id="divToPrint" className="mt4 Box-detail">
          HELLO MY DETAIL
        </div>
      </div>
    );
  }
}
