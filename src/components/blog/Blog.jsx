import React from "react";
import { useNavigation } from "react-router-dom";
import LoaderSpinner from "../loaderSpinner/LoaderSpinner";

const Blog = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoaderSpinner />;
  }
  return (
    <div className="md:px-36 md:my-10 p-2">
      <h1 className="text-5xl font-bold mb-10 text-center">Blog</h1>
      <article className="md:my-5">
        <h1 className="text-3xl font-bold">
          <span className="text-amber-600 text-3xl">Question: 1.</span> What is
          Context API and when is it used in React?
        </h1>
        <p className="my-8">
          <span className="text-2xl text-amber-600 font-bold ">Answer: </span>
          In the world of React Context API is a feature that allows us to share
          data between components without having to pass props down through
          multiple levels of the component tree. It provides a way to share data
          that can be considered "global" for a particular branch of the
          component hierarchy. In React, when a parent component has data that
          it needs to pass down to its child components, it can do so by using
          props. However, if there are many levels of nesting between the parent
          and child components, passing props down through every level can
          become tedious, cumbersome, boring and error-prone. This is where the
          Context API comes into play. With the Context API, you can create a
          "context" object that holds some data and functions, and then pass
          this context down to any components that need it.Thus components can
          then access the context data and functions directly from the context,
          without having to pass props down through the component tree.
        </p>
      </article>
      <article className="md:my-5">
        <h1 className="text-3xl font-bold">
          <span className="text-amber-600 text-3xl">Question: 2.</span> What is
          Custom Hook in React?
        </h1>
        <p className="my-8">
          <span className="text-2xl text-amber-600 font-bold ">Answer: </span>
          Custom hook is a programmer made hook for special purpose in her
          programming logic. Hooks are reusable functions. When a programmer has
          a component logic that needs to be used by multiple components in the
          project, he por she can extract that logic to a custom Hook. For
          example , a programmer is in need of fetching data from APIs. So, he
          or she will write a fetch logic in separate file/component and may use
          it when required.
        </p>
      </article>
      <article className="md:my-5">
        <h1 className="text-3xl font-bold">
          <span className="text-amber-600 text-3xl">Question: 3.</span> What is
          useRef Hook in React?
        </h1>
        <p className="my-8">
          <span className="text-2xl text-amber-600 font-bold ">Answer: </span>
          In the world of React useRef Hook allows us to persist values between
          renders. It can be used to store a mutable value that does not cause a
          re-render when updated. It can be used to access a DOM element
          directly.This useRef() hook only returns one item. It returns an
          Object called current. When we initialize useRef we set the initial
          value: useRef(0).The useRef Hook can also be used to keep track of
          previous state values. This is because we are able to persist useRef
          values between renders.So, useRef() is a very handy useful element in
          the world of React developers.
        </p>
      </article>
      <article className="md:my-5">
        <h1 className="text-3xl font-bold">
          <span className="text-amber-600 text-3xl">Question: 4.</span> What is
          the use of useMemo Hook in React?
        </h1>
        <p className="my-8">
          <span className="text-2xl text-amber-600 font-bold ">Answer: </span>I
          React useMemo Hook can be used to keep expensive, resource intensive
          functions from needlessly running. If we have a complex calculation or
          expensive function that needs to be called in component, we can wrap
          it with useMemo and pass in the dependencies it relies on. This way,
          if those dependencies don't change, the result of the function will be
          cached and returned from the previous invocation of useMemo, rather
          than being recalculated on each render. In this way useMemo hook can
          help improve the performance of application by reducing unnecessary
          re-renders in the DOM and brings a good experience for the programmer.
        </p>
      </article>
      <h4 className="text-2xl text-center font-bold"> -- Thanks -- </h4>
    </div>
  );
};

export default Blog;
