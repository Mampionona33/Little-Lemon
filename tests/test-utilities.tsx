import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions, RenderResult } from "@testing-library/react";

export const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BrowserRouter>{children}</BrowserRouter>
    </>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult =>
  render(ui, {
    wrapper: AllProviders,
    ...options,
  });

export * from "@testing-library/react";

export { customRender as render };
