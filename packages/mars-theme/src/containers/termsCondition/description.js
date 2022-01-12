import React from "react";
import { connect } from "frontity";
function Description({ data, state, libraries }) {
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
                  />
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
            <h2 className="heading-text">Policy privacy</h2>
          </div>

          <p>
            Your privacy is important to Curriki. Curriki’s Privacy Policy is
            hereby incorporated into these Terms by reference. Please read this
            notice carefully for information relating to Curriki’s collection,
            use, and disclosure of your personal information, which is provided
            through use of the Site, regardless of whether you use the Site as a
            user, donor or member.{" "}
          </p>
        </div> */}
      </div>
    </>
  );
}

export default connect(Description);
