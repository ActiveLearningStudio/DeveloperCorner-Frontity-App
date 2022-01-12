import React from "react";
import { Global, css, connect } from "frontity";
const Heading = ({ Scrollspy, data, state }) => {
  var counter = 0;
  return (
    <>
      <div className="heading-contaner">
        <Scrollspy
          items={["headings1", "headings2", "headings3", "headings4"]}
          style={{ padding: 0 }}
          currentClassName="is-current"
        >
          {data.items &&
            data.items.map(({ type, id }) => {
              counter++;
              const item = state.source[type][id];
              var link = "#headings" + counter;
              return (
                <a href={link}>
                  <div className="heading">
                    <p>{counter}.</p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.title.rendered,
                      }}
                      className="heading-text"
                    ></p>
                  </div>
                </a>
              );
            })}
          {/* <a href="#headings2">
            <div className="heading">
              <p>2.</p>
              <p className="heading-text">LTI Integration</p>
            </div>
          </a>
          */}
        </Scrollspy>
      </div>
    </>
  );
};
export default connect(Heading);
