import React from "react";
import "./css/head.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Head = () => {
  return (
    <div className="head-container">
      <div className="head">
        <div className="head-1">
          <div className="head-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              {" "}
              <path
                d="M13.5938 1.875C13.9844 1.875 14.3164 2.01172 14.5898 2.28516C14.8633 2.55859 15 2.89062 15 3.28125V11.7188C15 12.1094 14.8633 12.4414 14.5898 12.7148C14.3164 12.9883 13.9844 13.125 13.5938 13.125H1.40625C1.01562 13.125 0.683594 12.9883 0.410156 12.7148C0.136719 12.4414 0 12.1094 0 11.7188V3.28125C0 2.89062 0.136719 2.55859 0.410156 2.28516C0.683594 2.01172 1.01562 1.875 1.40625 1.875H13.5938ZM13.5938 3.28125H1.40625V4.48242C2.08984 5.0293 3.4082 6.06445 5.36133 7.58789C5.36133 7.60742 5.49805 7.72949 5.77148 7.9541C6.04492 8.17871 6.25 8.33496 6.38672 8.42285C6.52344 8.51074 6.7041 8.61328 6.92871 8.73047C7.15332 8.84766 7.34375 8.90625 7.5 8.90625C7.65625 8.90625 7.84668 8.84766 8.07129 8.73047C8.2959 8.61328 8.47656 8.51074 8.61328 8.42285C8.75 8.33496 8.95508 8.17871 9.22852 7.9541C9.50195 7.72949 9.63867 7.60742 9.63867 7.58789C11.5918 6.06445 12.9102 5.0293 13.5938 4.48242V3.28125ZM1.40625 11.7188H13.5938V6.26953C12.9102 6.81641 11.8848 7.62695 10.5176 8.70117C10.4785 8.7207 10.3369 8.83789 10.0928 9.05273C9.84863 9.26758 9.6582 9.42383 9.52148 9.52148C9.38477 9.61914 9.18945 9.74121 8.93555 9.8877C8.68164 10.0342 8.4375 10.1416 8.20312 10.21C7.96875 10.2783 7.73438 10.3125 7.5 10.3125C7.26562 10.3125 7.02637 10.2783 6.78223 10.21C6.53809 10.1416 6.29395 10.0293 6.0498 9.87305C5.80566 9.7168 5.61523 9.58984 5.47852 9.49219C5.3418 9.39453 5.15137 9.24316 4.90723 9.03809C4.66309 8.83301 4.52148 8.7207 4.48242 8.70117C3.11523 7.62695 2.08984 6.81641 1.40625 6.26953V11.7188Z"
                fill="#F68712"
              />{" "}
            </svg>
            <p>info@example.com</p>
          </div>
          <div className="head-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
            >
              {" "}
              <g clip-path="url(#clip0_61_411)">
                {" "}
                <path
                  d="M5.87903 14.707C5.41028 14.0234 4.87805 13.252 4.28235 12.3926C3.68665 11.5332 3.26184 10.9277 3.00793 10.5762C2.75403 10.2246 2.46106 9.79004 2.12903 9.27246C1.797 8.75488 1.57727 8.38867 1.46985 8.17383C1.36243 7.95898 1.24524 7.68555 1.11829 7.35352C0.991333 7.02148 0.913208 6.7334 0.883911 6.48926C0.854614 6.24512 0.839966 5.95703 0.839966 5.625C0.839966 4.0625 1.38684 2.73438 2.48059 1.64062C3.57434 0.546875 4.90247 0 6.46497 0C8.02747 0 9.35559 0.546875 10.4493 1.64062C11.5431 2.73438 12.09 4.0625 12.09 5.625C12.09 5.95703 12.0753 6.24512 12.046 6.48926C12.0167 6.7334 11.9386 7.02148 11.8116 7.35352C11.6847 7.68555 11.5675 7.95898 11.4601 8.17383C11.3527 8.38867 11.1329 8.75488 10.8009 9.27246C10.4689 9.79004 10.1759 10.2246 9.922 10.5762C9.66809 10.9277 9.24329 11.5332 8.64758 12.3926C8.05188 13.252 7.51965 14.0234 7.0509 14.707C6.91418 14.9023 6.71887 15 6.46497 15C6.21106 15 6.01575 14.9023 5.87903 14.707ZM4.80969 7.28027C4.80969 7.28027 4.92444 7.39502 5.15393 7.62451C5.38342 7.854 5.82043 7.96875 6.46497 7.96875C7.1095 7.96875 7.66125 7.73926 8.12024 7.28027C8.57922 6.82129 8.80872 6.26953 8.80872 5.625C8.80872 4.98047 8.57922 4.42871 8.12024 3.96973C7.66125 3.51074 7.1095 3.28125 6.46497 3.28125C5.82043 3.28125 5.26868 3.51074 4.80969 3.96973C4.35071 4.42871 4.12122 4.98047 4.12122 5.625C4.12122 6.26953 4.35071 6.82129 4.80969 7.28027Z"
                  fill="#F68712"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_61_411">
                  {" "}
                  <rect
                    width="11.25"
                    height="15"
                    fill="white"
                    transform="matrix(1 0 0 -1 0.839966 15)"
                  />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <p>55 Main Street, 2nd block, Malborne ,Australia</p>{" "}
          </div>{" "}
        </div>
        <div className="head-social">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </div>
      </div>
      <div className="head-bottom">
        <button style={{display: 'flex', height: '20px', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#FFF', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '28px', background: 'none', border: 'none'}}>Help</button>
        <button style={{display: 'flex', height: '20px', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#FFF', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '28px', background: 'none', border: 'none'}}>Support</button>
        <button style={{display: 'flex', height: '20px', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#FFF', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '28px', background: 'none', border: 'none'}}>FAQ's</button>      </div>
    </div>  );
};
export default Head;