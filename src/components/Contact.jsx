import React from "react";
import Fade from "react-reveal/Fade";
function Contact() {
  return (
    <Fade left>
      <div
        id="Contact"
        className="min-h-screen px-0 flex items-center justify-evenly "
      >
        <div className=" px-0 bg-white w-full rounded-lg shadow-xl">
          <div className="p-4 border-b">
            <h2 className="text-2xl ">Contact Me</h2>
            <p className="text-sm text-gray-500">Feel Free to contact</p>
          </div>
          <div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Full name</p>
              <p>Janhavi Alekar</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Major Area</p>
              <p>Full stack web developer</p>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Email Address</p>
              <p>Janhavialekar@gmail.com</p>
            </div>

            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
              <p className="text-gray-600">Attachments</p>
              <div className="space-y-2">
                <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
                  <div className="space-x-2 truncate">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current inline text-gray-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                    </svg>
                    <span>resume</span>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1wa1IYvH8GzSZuMuiUIXnPpama4tvWmC8/view?usp=sharing"
                    className="text-purple-700 hover:underline"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
export default Contact;
