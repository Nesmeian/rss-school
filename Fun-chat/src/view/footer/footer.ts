import createElement, { Html } from "../../utils/createElems";
import "./footer.scss";
export class Footer {
  buildFooter(): Html {
    const footer = this.createFooter();
    const wrapper = this.createWrapper();
    const logo = this.createLinkLogo();
    const year = this.createYear();
    const gitHub = this.createLinkGithub();
    footer.append(wrapper);
    wrapper.append(logo);
    wrapper.append(year);
    wrapper.append(gitHub);
    return footer;
  }
  createFooter(): Html {
    const param = {
      tag: "footer",
      classes: ["footer", "footer--inactive"],
    };
    return new createElement(param).getElement();
  }
  createWrapper(): Html {
    const param = {
      tag: "div",
      classes: ["footer__wrapper"],
    };
    return new createElement(param).getElement();
  }
  createLogo(): Html {
    const param = {
      tag: "div",
      classes: ["footer__logo"],
    };
    const img = new createElement(param).getElement();
    return img;
  }
  createLinkLogo(): Html {
    const param = {
      tag: "a",
      classes: ["footer__git-hub_link", "link"],
    };
    const a = new createElement(param).getElement();
    const logo = this.createLogo();
    a.setAttribute("href", "https://rs.school/");
    a.append(logo);
    return a;
  }
  createYear(): Html {
    const param = {
      tag: "div",
      classes: ["footer__year"],
      text: "2024",
    };
    const button = new createElement(param).getElement();
    button.setAttribute("type", "button");
    return button;
  }
  createGitHub(): Html {
    const param = {
      tag: "div",
      classes: ["footer__git-hub"],
      text: "Nesmeian",
    };
    const result = new createElement(param).getElement();
    result.setAttribute("type", "button");
    return result;
  }
  createLinkGithub(): Html {
    const param = {
      tag: "a",
      classes: ["footer__git-hub_link", "link"],
    };
    const a = new createElement(param).getElement();
    const gitHub = this.createGitHub();
    a.setAttribute("href", "https://github.com/Nesmeian");
    a.append(gitHub);
    return a;
  }
}
