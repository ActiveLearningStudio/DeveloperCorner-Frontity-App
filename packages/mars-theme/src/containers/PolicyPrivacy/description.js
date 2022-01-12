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
                    dangerouslySetInnerHTML={{
                      __html: item.title.rendered,
                    }}
                    className="description-text"
                  />
                </div>
                <p className="description-text">
                  <Html2React html={item.content.rendered} />
                </p>
              </div>
            );
          })}

        {/* <div id="headings2" className="description-text">
          <div className="description-heading">
            <h2>2.</h2>
            <h2 className="description-text">Scope of this privacy policy</h2>
          </div>

          <p>
            Curriki (“Curriki,” “we,” “our,” and/or “us”) values your privacy.
            This privacy policy governs all of types of data we collect through
            the Services. It explains what information we collect, use, and
            share in connection with our website at library.curriki.org (the
            “Services”). Please take the time to familiarize yourself with our
            policies. Your use of the Services is also governed by Curriki’s
            Terms of Use.
          </p>
        </div>
        <div id="headings3" className="description-text">
          <div className="description-heading">
            <h2>3.</h2>
            <h2 className="description-text">Information we collect</h2>
          </div>
          <h5>Registration information</h5>
          <p>
            When you register for the services, you provide personal
            information, such as your name, email address, city, state, zip
            code, and gender. You can also register for Curriki through or
            otherwise grant access to a third party social networking or
            authentication service, such as Facebook or Google, we will receive
            information from that service such as your name, email address, and
            other information you may make available via the service. You can
            manage what information you share with us through such services by
            updating your preferences through those services.
          </p>
          <p>
            If you sign up to receive newsletters or other communications from
            us or otherwise contact us, you may also provide us with your name,
            email address, role or position, country, and information about your
            interests.
          </p>
          <p>
            We do not verify users’ identities before collecting personal
            information. Please note that we do not offer different classes of
            user accounts or managed accounts for educators, parents, or others.
          </p>
          <h5>Profile and contributions</h5>
          <p>
            Once you register for the Services, you may fill out an account
            profile. We receive any profile information that you provide
            including your bio, photograph, organization, language, and
            interests; links to your social media pages, websites, or blogs; and
            community Contributions. Contributions include posting resources to
            your profile or groups, posting information on forums, and providing
            reviews of resources other users post. We also collect information
            about which friends you are following, groups you have joined, and
            resources you have saved to your library on our Services. Curriki
            (not a third party) receives and stores this user content. When you
            choose to add or upload this information to the Services, we do not
            seek any additional opt-in consent before storing this information.
          </p>
          <h5>Donations</h5>
          <p>
            You can make donations to us online through our payment vendors.
            When you make an online donation, we do not receive or store your
            payment information, but we will receive your name, mailing address,
            email address, and donation amount based on the form you fill out.
            If you make an offline donation, we receive your name, mailing
            address, email address, donation amount, and payment information,
            but we do not store or process credit card information.
          </p>
          <h5>Log files</h5>
          <p>
            As is true of most websites, we gather certain information
            automatically and store it in log files. This information includes
            internet protocol (“IP”) addresses, browser type, internet service
            provider (“ISP”), referring/exit pages, operating system, date/time
            stamp, and your use of our Services.
          </p>
          <p>
            We use this information, on an aggregated, de-identified basis, to
            analyze trends, administer the site, track users’ movements around
            the site, and gather demographic information about our user base as
            a whole.
          </p>
          <h5>Cookies</h5>
          <p>
            When you visit our homepage, we provide notice that our website uses
            cookies. A cookie is a small text file that is stored on a user’s
            computer for record-keeping purposes. We use both session cookies
            and/or persistent cookies. A session cookie expires when you close
            your browser. We use session cookies to make it easier for you to
            navigate our site.
          </p>
          <p>
            A persistent cookie remains on your hard drive for an extended
            period of time. We set a persistent cookie for authentication
            purposes. We use persistent cookies to collect behavioral data,
            i.e., information about your interests as you browse the web. We use
            this information to enhance your experience on our site. We also use
            analytics providers such as Google Analytics who use cookies for
            analytics purposes. You can find more information on how Google uses
            data from these cookies at google.com/policies/privacy/partners/.
            These analytics providers may collect or have access to information
            about you which they may collect over time and across different
            websites.
          </p>
          <p>
            You can make decisions about cookies through your browser settings.
            If your web browser rejects cookies, you may still use our Services,
            but your ability to use some areas of our Services may be limited.
          </p>
          <h5>Combining information</h5>
          <p>
            If we combine any information with your personal information, such
            as your registration information, we will treat all of that
            information as personal information.
          </p>
          <h5>Information we don’t collect</h5>
          <p>
            We limit our collection of information to only data that are
            necessary to provide or help improve the Services. We do not receive
            information about users from any third parties, or combine, augment,
            extend the information that we collect with data from third party
            sources. We do not collect sensitive information such as health,
            financial, biometric, or geolocation data on the Services. Because
            the Services are directed to teachers and parents, we also do not
            knowingly collect personal information (including educational
            records and information about free or reduced lunch status) from
            preschool or K-12 students or children under the age of 12. Please
            see the section on Children’s Information below for more
            information.
          </p>
        </div>
        <div id="headings4" className="description-text">
          <div className="description-heading">
            <h2>4.</h2>
            <h2 className="description-text">
              How we share the information we collect
            </h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sodales, quam et blandit fermentum, arcu elit lacinia lectus, sit
            amet lobortis purus lacus scelerisque mauris. Aenean quis sagittis
            augue. Vivamus euismod pellentesque congue. Donec egestas elementum
            magna sit amet eleifend. Pellentesque interdum ex sed lobortis
            malesuada. Etiam lorem felis, tincidunt pellentesque lacus quis,
            sodales maximus neque.
          </p>
        </div>
        <div id="headings5" className="description-text">
          <div className="description-heading">
            <h2>5.</h2>
            <h2 className="description-text">Your Choices</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sodales, quam et blandit fermentum, arcu elit lacinia lectus, sit
            amet lobortis purus lacus scelerisque mauris. Aenean quis sagittis
            augue. Vivamus euismod pellentesque congue. Donec egestas elementum
            magna sit amet eleifend. Pellentesque interdum ex sed lobortis
            malesuada. Etiam lorem felis, tincidunt pellentesque lacus quis,
            sodales maximus neque.
          </p>
        </div>
        <div id="headings6" className="description-text">
          <div className="description-heading">
            <h2>6.</h2>
            <h2 className="description-text">Other</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sodales, quam et blandit fermentum, arcu elit lacinia lectus, sit
            amet lobortis purus lacus scelerisque mauris. Aenean quis sagittis
            augue. Vivamus euismod pellentesque congue. Donec egestas elementum
            magna sit amet eleifend. Pellentesque interdum ex sed lobortis
            malesuada. Etiam lorem felis, tincidunt pellentesque lacus quis,
            sodales maximus neque.
          </p>
        </div> */}
      </div>
    </>
  );
}

export default connect(Description);
