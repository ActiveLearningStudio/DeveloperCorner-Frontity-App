import React from "react";
import { connect } from "frontity";
const Description = ({ data, state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  var counter = 0;
  return (
    <>
      <div className="description-contaner">
        {data.items &&
          data.items.map(({ type, id }) => {
            counter++;
            const item = state.source[type][id];
            var link = "headings" + counter;
            return (
              <div id={link} className="description-text">
                <div className="description-heading">
                  <h2>{counter}.</h2>
                  <h2
                    className="heading-text"
                    dangerouslySetInnerHTML={{
                      __html: item.title.rendered,
                    }}
                  ></h2>
                </div>
                <p>
                  <Html2React html={item.content.rendered} />
                </p>
              </div>
            );
          })}
        {/* <div id="headings2" className="description-text">
          <div className="description-heading">
            <h2>2.</h2>
            <h2 className="heading-text"> LTI Integration</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sodales, quam et blandit fermentum, arcu elit lacinia lectus, sit
            amet lobortis purus lacus scelerisque mauris. Aenean quis sagittis
            augue. Vivamus euismod pellentesque congue. Donec egestas elementum
            magna sit amet eleifend. Pellentesque interdum ex sed lobortis
            malesuada. Etiam lorem felis, tincidunt pellentesque lacus quis,
            sodales maximus neque. Quisque lacus turpis, sodales in sagittis
            eget, blandit quis sem. Vivamus consequat dui mauris, ac semper
            felis hendrerit in.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default connect(Description);
