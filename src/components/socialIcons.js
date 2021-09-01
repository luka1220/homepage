/** @jsx jsx */
import { jsx } from "theme-ui"

import Icons from "../util/socialmedia.json"
import {
    RiTwitterFill,
    RiLinkedinBoxFill,
    RiGithubFill,
    RiMediumFill
  } from "react-icons/ri"

const socialIcons = Icons.socialIcons.map((icons, index) => {
    return (
      <div className="icon" key={"social icons" + index}>
        {icons.icon === "twitter" ? (
          <a href={icons.url}>
            <RiTwitterFill />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "linkedin" ? (
          <a href={icons.url}>
            <RiLinkedinBoxFill />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "github" ? (
          <a href={icons.url} >
            <RiGithubFill />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "medium" ? (
          <a href={icons.url}>
            <RiMediumFill />
          </a>
        ) : (
          ""
        )}
      </div>
    )
})

export default socialIcons