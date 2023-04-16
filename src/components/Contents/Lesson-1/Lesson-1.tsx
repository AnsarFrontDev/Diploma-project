import './Lesson-1.scss';

const LessonOne = () => {
  return (
    <div className="main-content">
      <div className="left-content">
        <img width={700} height={240} src="./assets/lesson-1/img1.png" />
        <h1>Welcome!</h1>
        <br />
        <p>
          Hello, and welcome to the NDG Linux Unhatched Module! We are very excited to offer you
          this short introduction to the world of Linux. Before you get started, we would like to
          take the opportunity to explain the intent and scope of this module.
        </p>
        <br />
        <p>
          Do not be concerned if you have little or no Linux experience. This module is designed as
          an introduction for beginning learners without previous Linux training. If you find this
          material useful, you may consider continuing with our NDG Linux Essentials or NDG
          Introduction to Linux courses to build additional knowledge. Additional information
          regarding these courses can be found at the end of this module.
        </p>
        <br />
        <p>
          As you may already be aware, the Linux kernel has found its way into an incredible number
          of diverse systems. It can now be found in everything from automobiles to rockets, watches
          to televisions, and netbooks to the fastest supercomputers. Linux only accounts for a
          relatively small percentage of the operating systems found on desktop computers, but has
          gained widespread use in servers, Internet of Things (IoT) devices, networking equipment,
          smartphones, and many other devices you may not think of as even being computers. From the
          home router providing your Internet connection to the server this course is hosted on, it
          is likely that multiple Linux powered devices are currently enabling you to read this
          page.
        </p>
        <br />
        <p>
          We hope that you find the NDG Linux Unhatched Module helpful. Congratulations on taking
          your first steps into the world of Linux!
        </p>
        <br />
        <img width={700} height={470} src="./assets/lesson-1/img2.png" />
      </div>
      <div className="right-content">
        <h3>Terminal</h3>
      </div>
    </div>
  );
};

export default LessonOne;
