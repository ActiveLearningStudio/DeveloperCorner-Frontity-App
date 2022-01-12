import React from "react";
import { connect } from "frontity";
function Heading({ Scrollspy, data, state }) {
  var counter = 0;
  return (
    <>
      <div className="heading-contaner">
        <Scrollspy
          items={[
            "headings1",
            "headings2",
            "headings3",
            "headings4",
            "headings5",
            "headings6",
            "headings7",
            "headings8",
            "headings9",
            "headings10",
            "headings11",
            "headings12",
            "headings13",
            "headings14",
            "headings15",
            "headings16",
            "headings17",
            "headings18",
            "headings19",
            "headings20",
            "headings21",
            "headings22",
            "headings23",
            "headings24",
            "headings25",
          ]}
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
                    />
                  </div>
                </a>
              );
            })}

          {/* <a href="#headings2">
            <div className="heading">
              <p>2. </p>

              <p className="heading-text">Information we collect</p>
            </div>
          </a>
          <a href="#headings3">
            <div className="heading">
              <p>3.</p>

              <p className="heading-text">
                How we use the information we collect
              </p>
            </div>
          </a>
          <a href="#headings4">
            <div className="heading">
              <p>4.</p>

              <p className="heading-text">
                How we share the information we collect
              </p>
            </div>
          </a>
          <a href="#headings5">
            <div className="heading">
              <p>5.</p>

              <p className="heading-text">Your Choices</p>
            </div>
          </a>
          <a href="#headings6">
            <div className="heading">
              <p>6.</p>

              <p className="heading-text">Other</p>
            </div>
          </a> */}
        </Scrollspy>
      </div>
    </>
  );
}

export default connect(Heading);
