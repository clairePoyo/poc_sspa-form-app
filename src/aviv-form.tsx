import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Form from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Form,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return <div>There is an error. {JSON.stringify(err)}</div>;
  },
});

export function bootstrap(props) {
  return lifecycles.mount(props);
}
export function mount(props) {
  return lifecycles.mount(props);
}
export function unmount(props) {
  return lifecycles.mount(props);
}
