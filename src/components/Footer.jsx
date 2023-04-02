import React from "react";
import InlineList from "./link";
function Footer() {
  return (
    <footer
      id="footer"
      className="h-64 bg-black text-black flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl font-bold">Get In Touch</h1>

      <div className="flex flex-wrap">
        <a href="https://github.com/JanhaviAlekar" className="cursor-pointer">
          <div className="w-9 mx-2 h-9 rounded-full bg-white flex items-center justify-center my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="48px"
              height="48px"
              fill-rule="evenodd"
            >
              <path
                fill-rule="evenodd"
                d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
              />
            </svg>
          </div>
        </a>
        <a
          href="https://in.linkedin.com/in/janhavi-alekar-72864b22a"
          className="cursor-pointer"
        >
          <div className="w-9 h-9 mx-2 rounded-full bg-white flex items-center justify-center my-4">
            <svg
              height="48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <g fill="none">
                <path
                  d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                  fill="#069"
                />
                <path
                  d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </a>
        <a
          href="mailto:https://janhavialekar@gmail.com"
          className="cursor-pointer"
        >
          <div className="w-9 h-9 mx-2 rounded-full bg-white flex items-center justify-center my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="-13.2 -16.50405 114.4 99.0243"
            >
              <path
                fill="#4285f4"
                d="M6 66.0162h14v-34l-20-15v43c0 3.315 2.685 6 6 6z"
              />
              <path
                fill="#34a853"
                d="M68 66.0162h14c3.315 0 6-2.685 6-6v-43l-20 15z"
              />
              <path
                fill="#fbbc04"
                d="M68 6.0162v26l20-15v-8c0-7.415-8.465-11.65-14.4-7.2z"
              />
              <path fill="#ea4335" d="M20 32.0162v-26l24 18 24-18v26l-24 18z" />
              <path
                fill="#c5221f"
                d="M0 9.0162v8l20 15v-26l-5.6-4.2c-5.935-4.45-14.4-.215-14.4 7.2z"
              />
            </svg>
          </div>
        </a>
      </div>
      <ul className="flex flex-wrap justify-center space-x-4">
        <li>
          <a href="#home" className="text-gray-400 hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#Project" className="text-gray-400 hover:text-white">
            Projects
          </a>
        </li>
        <li>
          <a href="#About" className="text-gray-400 hover:text-white">
            About Me
          </a>
        </li>
        <li>
          <a href="#Contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
