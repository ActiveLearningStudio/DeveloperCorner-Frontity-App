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
                      className="heading-text"
                      dangerouslySetInnerHTML={{
                        __html: item.title.rendered,
                      }}
                    />
                  </div>
                </a>
              );
            })}
          {/* <a href="#headings2">
            <div className="heading">
              <p>2. </p>

              <p className="heading-text">API </p>
            </div>
          </a> */}
        </Scrollspy>
      </div>
    </>
  );
}

export default connect(Heading);
