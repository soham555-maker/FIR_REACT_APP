import React from "react";
import { Form, useOutletContext } from "react-router-dom";


export default function About(props) {
  const [mainStyle] = useOutletContext();
  return (
    <div >
      <div className="accordion container" id="accordionExample" >
        <div className="accordion-item" style={mainStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mainStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mainStyle}>
              <strong>This is the first item's accordion body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias natus provident dolore suscipit porro maxime, quisquam perspiciatis itaque ex esse quidem sint commodi deleniti, tenetur autem excepturi minus expedita.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum amet nesciunt doloribus, ullam perferendis earum a dolor ipsa atque corrupti inventore porro alias, beatae ducimus quis debitis facere voluptates saepe incidunt quasi deserunt. Quos ea unde blanditiis optio quis!<code>.accordion-body</code>,
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptas molestias, nisi facere ratione dignissimos nam quo fugit hic tempora.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mainStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mainStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mainStyle}>
              <strong>This is the second item's accordion body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias natus provident dolore suscipit porro maxime, quisquam perspiciatis itaque ex esse quidem sint commodi deleniti, tenetur autem excepturi minus expedita.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad tempora accusantium hic quod voluptatibus dolor ipsum ut numquam quo dolorem esse, natus molestias eos quibusdam reprehenderit! Labore molestiae totam ipsum ex, fugit cupiditate odit, assumenda nisi aspernatur pariatur eaque.<code>.accordion-body</code>,
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptas molestias, nisi facere ratione dignissimos nam quo fugit hic tempora.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mainStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mainStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mainStyle}>
              <strong>This is the third item's accordion body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias natus provident dolore suscipit porro maxime, quisquam perspiciatis itaque ex esse quidem sint commodi deleniti, tenetur autem excepturi minus expedita.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur magnam veritatis voluptatibus sit ad in obcaecati quia dicta tempore corporis perspiciatis sapiente aut optio, deserunt dolorem fugit, accusamus nobis commodi modi laudantium exercitationem. Velit porro similique atque nisi? Dolorum?<code>.accordion-body</code>,
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptas molestias, nisi facere ratione dignissimos nam quo fugit hic tempora.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }