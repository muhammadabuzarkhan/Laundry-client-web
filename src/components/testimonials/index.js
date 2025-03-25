import React, { useEffect } from "react";
import { Col, Row, Image, Carousel } from "antd";
import { ImageUrl } from "../../config/helper";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

function Testimonials() {
  useEffect(() => {
    // Check if the widget container already exists to avoid duplication
    if (!document.querySelector('#ft69qhidv')) {
      // Create a new <div> element for the widget container
      const newDiv = document.createElement('div');
      newDiv.setAttribute('key', 'Google Reviews Playful Carousel');
      newDiv.setAttribute('class', 'ft');
      newDiv.setAttribute('id', 'ft69qhidv');

      // Add some padding and styling to the newDiv element
      newDiv.style.padding = '20px'; // Adjust padding as needed
      newDiv.style.backgroundColor = '#f0f0f0'; // Example background color
      newDiv.style.border = '1px solid #ccc'; // Example border
      newDiv.style.borderRadius = '8px'; // Example border radius
      newDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Example box shadow

      // Create a new <script> element for the widget script
      const newScript = document.createElement('script');
      newScript.setAttribute('src', 'https://cdn.fouita.com/widgets/0x17bcba.js');

      // Append the <script> element to the <div>
      newDiv.appendChild(newScript);

      // Append the <div> to the body
      //document.body.appendChild(newDiv);
      const qazElement = document.getElementById('qaz');
      if (qazElement) {
        qazElement.appendChild(newDiv);
      } else {
        console.error('Element with id "qaz" not found.');
      }
    
    }
  }, []); // Empty dependen

  return (
    // <div className="testimonials">
    //   <Row justify={"center"}>
    //     <Col xs={22} md={22} lg={18}>
    //       <h3>Excellent Rating by 10,000 Users</h3>
    //       <h2>Our happy customers</h2>

    //       <div className="testiinner">
    //         <Carousel autoplay>
    //           <div>
    //             <Image preview={false} src={ImageUrl("testi-top.png")} alt="" />
    //             <h4>
    //               Lorem Ipsum is simply dummy text of the printing and
    //               typesetting industry. Lorem Ipsum has been the industry's
    //               standard dummy text ever since the when an unknown printer
    //               took a galley of type and scrambled it to make a type specimen
    //               book. It has survived not only five centuries, but also the
    //               leap into electronic typesetting, remaining essentially
    //               unchanged.
    //             </h4>
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //             <FaRegStar />
    //             <h5>NATALIE JONES</h5>
    //             <span>CLIENT</span>
    //             <Image preview={false} src={ImageUrl("client.png")} alt="" />
    //           </div>
    //           <div>
    //             <Image preview={false} src={ImageUrl("testi-top.png")} alt="" />
    //             <h4>
    //               Lorem Ipsum is simply dummy text of the printing and
    //               typesetting industry. Lorem Ipsum has been the industry's
    //               standard dummy text ever since the when an unknown printer
    //               took a galley of type and scrambled it to make a type specimen
    //               book. It has survived not only five centuries, but also the
    //               leap into electronic typesetting, remaining essentially
    //               unchanged.
    //             </h4>
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //             <FaRegStar />
    //             <h5>NATALIE JONES</h5>
    //             <span>CLIENT</span>
    //             <Image preview={false} src={ImageUrl("client.png")} alt="" />
    //           </div>
    //           <div>
    //             <Image preview={false} src={ImageUrl("testi-top.png")} alt="" />
    //             <h4>
    //               Lorem Ipsum is simply dummy text of the printing and
    //               typesetting industry. Lorem Ipsum has been the industry's
    //               standard dummy text ever since the when an unknown printer
    //               took a galley of type and scrambled it to make a type specimen
    //               book. It has survived not only five centuries, but also the
    //               leap into electronic typesetting, remaining essentially
    //               unchanged.
    //             </h4>
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //             <FaRegStar />
    //             <h5>NATALIE JONES</h5>
    //             <span>CLIENT</span>
    //             <Image preview={false} src={ImageUrl("client.png")} alt="" />
    //           </div>
    //           <div>
    //             <Image preview={false} src={ImageUrl("testi-top.png")} alt="" />
    //             <h4>
    //               Lorem Ipsum is simply dummy text of the printing and
    //               typesetting industry. Lorem Ipsum has been the industry's
    //               standard dummy text ever since the when an unknown printer
    //               took a galley of type and scrambled it to make a type specimen
    //               book. It has survived not only five centuries, but also the
    //               leap into electronic typesetting, remaining essentially
    //               unchanged.
    //             </h4>
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //             <FaStar />
    //             <FaRegStar />
    //             <h5>NATALIE JONES</h5>
    //             <span>CLIENT</span>
    //             <Image preview={false} src={ImageUrl("client.png")} alt="" />
    //           </div>
    //         </Carousel>
    //       </div>

    //       <Link to="">Read more reviews</Link>
    //     </Col>
    //   </Row>
    // </div>
    <>
    <div style={{ paddingTop:'20px' , paddingBottom:'10px'}}>
      <div id="qaz">

      </div>
    </div>
    </>
  );
}

export default Testimonials;
