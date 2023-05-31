import React from "react";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className="footer row">
      <button
        className="footer-icon large"
        href="https://github.com/jubernst"
        target="_blank"
      >
        <GitHubLogoIcon />
      </button>
      <button className="footer-icon large" href="twitter.com" target="_blank">
        <TwitterLogoIcon />
      </button>
      <button className="footer-icon large" href="linkedin.com" target="_blank">
        <LinkedInLogoIcon />
      </button>
    </div>
  );
}
