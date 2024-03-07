function CustomRender(reactElement, container) {
  const el = document.createElement(reactElement.type);
  el.innerHTML = reactElement.children;
  //   el.setAttribute("href", reactElement.props.href);
  //   el.setAttribute("target", reactElement.props.target);
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    el.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(el);
}

const GoogleButton = {
  type: "a",
  props: {
    href: "http://www.google.com",
    target: "_blank",
  },
  children: "Clicke me to visit Google",
};

const root = document.querySelector("#root");

CustomRender(GoogleButton, root);
