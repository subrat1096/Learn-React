const GoogleButton = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>hello World</h1>);
root.render(GoogleButton);
