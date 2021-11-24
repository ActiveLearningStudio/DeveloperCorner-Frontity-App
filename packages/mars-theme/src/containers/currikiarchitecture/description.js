import React from "react";
function Description() {
  return (
    <>
      <div className="description-contaner">
        <div id="headings1" className="description-text">
          <div className="description-heading">
            <h2>1.</h2>
            <h2> Welcome</h2>
          </div>

          <h4 style={{ fontWeight: "400", color: "#084892" }}>User Manual</h4>
          <p>
            Use the menu on the left to navigate support materials depending on
            your role in using curriki studio. We welcome community contribution
            and aim to ensure curriki is an open and friendly environment. .{" "}
          </p>
          <h4 style={{ fontWeight: "400", color: "#084892" }}>
            Community help and Issue Reporting
          </h4>
          <p>
            If you need help, but can’t find it here, try asking members of the
            curriki studio community for curriki support. Similarly, issues and
            bugs can be reported to the forum as well.{" "}
          </p>
          <h3 style={{ fontWeight: "400", color: "#084892" }}>Contributing</h3>
          <h4 style={{ fontWeight: "400", color: "#084892" }}>
            a). Code Contribute Guide
          </h4>
          <p>
            If you need help, but can’t find it here, try asking members of the
            curriki studio community for curriki support. Similarly, issues and
            bugs can be reported to the forum as well.{" "}
          </p>
          <h4 style={{ fontWeight: "400", color: "#084892" }}>
            b). Curriki Developer Flow
          </h4>
          <p>
            If you want to get involved in the development process, check out
            our workflow and GitHub repository. Generally there will be a
            development branch with the latest code, as per our Development Road
            Map.{" "}
          </p>
          <h3 style={{ fontWeight: "400", color: "#084892" }}>
            Curriki Support{" "}
          </h3>
          <p>
            Members of the Curriki team are available to help you with your
            Curriki needs, via our Curriki.org Expert Support program. Please
            visit curriki.org to learn more.{" "}
          </p>
          <h3 style={{ fontWeight: "400", color: "#084892" }}>
            Curriki Parteners{" "}
          </h3>
          <p>
            Members of the Curriki team are available to help you with your
            Curriki needs, via our Curriki.org Expert Support program. Please
            visit curriki.org to learn more.{" "}
          </p>
        </div>
        <div id="headings2" className="description-text">
          <div className="description-heading">
            <h2>2.</h2>
            <h2> Curriki Developers </h2>
          </div>
          <h3 style={{ fontWeight: "400", color: "#084892" }}>
            Getting started with Curriki{" "}
          </h3>
          <h4 style={{ fontWeight: "400", color: "#084892" }}>
            a) Developer WorkFlow
          </h4>
          <p className="ordered-list">
            <ul>
              <li>
                Fork and Clone a copy of ActiveLearningStudio on your local
                machine.
              </li>
              <li>
                All the dependencies are installed in the package.json file. You
                don't have to worry about installing them one by one.
              </li>
              <li>Also take a look at the readme file in project directory</li>
              <li>
                Run npm install in cmd, if package.lock file present in project
                directory or run yarn install if yarn.lock file is present.
              </li>
              <li>
                Please check the readme file for running the project locally or
                if you face any problem.
              </li>
              <li>
                Write some code and push your changes to your repo using the
                command line or your favourite Git GUI.
              </li>
              <li>
                Create a new pull request and fill in the template provided to
                tell us about your changes.
              </li>
              <li>
                Be sure you’re submitting your pull request to the development
                branch (and not master). develop
              </li>
              <li>
                Submissions should have a changelog entry noting what was added,
                changed or fixed.
              </li>
              <li>
                After doing all above, submit your form to curriki.org for
                contributing your idea and development to the curriki studio
                organization.
              </li>
            </ul>
            .{" "}
          </p>
          <h5 style={{ fontWeight: "400", color: "#084892" }}>
            Release schedule
          </h5>
          <p>
            We aim to release a new version every 6 months, usually every
            January and June. There is a string freeze one month before each
            release, where all interface strings are fixed and shared with
            translators via POEditor. Each version, stable or development, is
            denoted with a major semantic version (e.g., v16.0.0). Updates to a
            stable version are only released in the case of a security concern,
            and are tagged as a patch version{" "}
          </p>
          <h5 style={{ fontWeight: "400", color: "#084892" }}>
            Branching strategy
          </h5>
          <p>
            Curriki studio uses a simple branching strategy. The current stable
            version is released and tagged on the Master branch. Development
            branches (develop) are setup after each release and incremented to
            the next major version (e.g., v2.0.00 to v2.1.0.00). The dev branch
            does not currently track semantic versioning, and a built-in updater
            handles database changes, this is only used for development
            purposes.{" "}
          </p>
          <h5 style={{ fontWeight: "400", color: "#084892" }}>
            Dependency management
          </h5>
          <p>
            Curriki studio depends on a number of libraries written and managed
            by other developers in Package.json. As of v2.0.00, developers will
            need to use the NPM dependencies manager, NPM, to install and update
            libraries in their Package.json. All the libraries will stay in the
            node modules folder and update every time when any package.json will
            update.{" "}
          </p>
          <h5 style={{ fontWeight: "400", color: "#084892" }}>
            Pull request & code review
          </h5>
          <p>
            <ul>
              <li>
                Each pull request should contain only one new feature or
                improvement. Ideally, split any larger changesets into multiple
                PRs if they involve more than a handful of files. Long running
                branches with breaking changes are unlikely to be merged into
                the core
              </li>
              <li>
                Pull requests can be submitted to the current development branch
                and not to Master (which is our stable release). Please take
                some time to describe your changes, there’s a PR template on
                GitHub to get you started.
              </li>
              <li>
                Each pull request is reviewed by at least one Curriki developer.
                Complex changes may require more than one set of eyes and some
                hearty discussion. Focus on code readability and bite-size
                commits and your PRs will be in good shape to merge.
              </li>
            </ul>
          </p>
          <h4 style={{ fontWeight: "400", color: "#084892" }}>
            b) Curriki Road Map
          </h4>
          <p>
            Shown below are some upcoming key dates in the Curriki Development
            Road Map. To request new features, please use the curriki.org/studio
            <ul>
              <li>v2.2.0</li>
              <ul>
                <li>String Freeze - December 20th 2021</li>
                <li>Release - January 20th 2022</li>
              </ul>
              <li>v3.0.2</li>
              <ul>
                <li>String Freeze - May 20th 2022</li>
                <li>Release - June 20th 2022</li>
              </ul>
            </ul>
          </p>
          <h4 style={{ fontWeight: "400", color: "#084892" }}>
            c) . Coding Standard
          </h4>
          <h5 style={{ fontWeight: "400", color: "#084892" }}>Security</h5>
          <p>
            <ul>
              <li>Never Trust User Input: Laravel Form Validation</li>
              <li>
                Sanitize User input before saving in DB: Laravel Eloquent ORM
              </li>
              <li>Escaping out responses: Eloquent: API Resources</li>
              <li>CSRF Protection</li>
            </ul>
          </p>
          <h5 style={{ fontWeight: "400", color: "#084892" }}>Coding Style</h5>
          <p>Will add a screenshot of curriki studio code</p>
          <h5 style={{ fontWeight: "400", color: "#084892" }}>
            Coding Structure
          </h5>
          <p>
            <ul>
              <li>Add a single space after each comma delimiter;</li>
              <li>
                Add a single space around binary operators (==, &&, …), with the
                exception of the concatenation (.) operator;
              </li>
              <li>
                Place unary operators (!, –, …) adjacent to the affected
                variable;
              </li>
              <li>
                Always use identical comparison unless you need type juggling;
              </li>
              <li>
                Do not use else, elseif, break after if and case conditions
                which return or throw something;
              </li>
              <li>
                Do not use spaces around [ offset accessor and before ] offset
              </li>
              <li>
                Do not use spaces around [ offset accessor and before ] offset
              </li>
            </ul>
          </p>
          <h5 style={{ fontWeight: "400", color: "#084892" }}>Core Concepts</h5>
          <p>
            <ul>
              <li>Build process</li>
              <li>Database structure adn changes</li>
              <li>Automating testing</li>
            </ul>
          </p>
        </div>
        <div id="headings2" className="description-text">
          <div className="description-heading">
            <h2>3.</h2>
            <h2> Why did we start ?</h2>
          </div>

          <p>
            The state of education went digital overnight as we faced the onset
            of a global pandemic. The world learned what educators knew
            instinctively; we were not prepared to support full digital learning
            programs at scale. The deficits are many; including the lack of
            comprehensive tools and dynamic curriculum. Today’s lessons are
            designed for a traditional classroom setting and are stuck in static
            PDFs. The result: Students report they are less engaged with online
            learning and teachers lack the ability to deliver interactive
            learning. With these current challenges, educators and
            administrators across all sectors are searching for ways to create
            interactive content designed for digital learning experiences. With
            over 200,000 education technology tools available, this task has
            proven to be time consuming and expensive. Online learning has shown
            significant growth over the last decade, as the internet and
            education combine to provide people with the opportunity to gain new
            skills. Since the COVID-19 outbreak, online learning has become more
            centric in people's lives. The pandemic has forced schools,
            universities, and companies to remote working and this booms the
            usage of online learning. Even before the pandemic, Research and
            Markets forecasts the online education market as $350 Billion by
            2025, so the numbers might be updated after analyzing the growth
            impacts of COVID-19 on the online learning market. Switching from
            traditional classroom and face to face instructor training to
            computer-based training in a virtual classroom makes the learning
            experience entirely different for students. Their resistance to
            change doesn’t allow them to adapt to the online learning
            environment, whereas it takes time for them to get accustomed to
            Course Management Systems (CMS) and the methods of computer-based
            education. While passive listening and notes taking are expected in
            a traditional classroom, online discussions or creating a web page
            demand springing into action. Students with a “traditional” mindset
            find it difficult to adapt; however, they need to accept the new
            learning circumstances with an open mind and heart. Understanding
            the benefits of eLearning and even discussing them with their peers
            may change this mindset and better prepare students for online
            classes.{" "}
          </p>
        </div>
        <div id="headings3" className="description-text">
          <div className="description-heading">
            <h2>3.</h2>
            <h2>Curriki User</h2>
          </div>

          <p>
            If you want to get involved in the development process, check out
            our workflow and GitHub repository. Generally there will be a
            development branch with the latest code, as per our Development Road
            Map.{" "}
          </p>
        </div>
        <div id="headings4" className="description-text">
          <div className="description-heading">
            <h2>4.</h2>
            <h2>Curriki Developer</h2>
          </div>
          <p>
            Members of the Curriki team are available to help you with your
            Curriki needs, via our Curriki.org Expert Support program. Please
            visit curriki.org to learn more.
          </p>
        </div>
        <div id="headings5" className="description-text">
          <div className="description-heading">
            <h2>5.</h2>
            <h2> Curriki Support</h2>
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
      </div>
    </>
  );
}

export default Description;
