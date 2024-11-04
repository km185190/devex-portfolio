import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/dom";
import Button from "./Button.astro";

describe("Button", () => {
  it("renders with default props", () => {
    render(Button, { children: "Click me" });
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveClass("bg-indigo-600"); // Primary variant
  });

  it("renders with custom variant and color", () => {
    render(Button, {
      variant: "outline",
      color: "success",
      children: "Success",
    });
    const button = screen.getByRole("button");
    expect(button).toHaveClass("border-green-600");
    expect(button).toHaveClass("text-green-600");
  });

  it("renders in disabled state", () => {
    render(Button, {
      disabled: true,
      children: "Disabled",
    });
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("opacity-50");
  });

  it("renders loading state", () => {
    render(Button, {
      loading: true,
      children: "Loading",
    });
    const button = screen.getByRole("button");
    expect(button).toHaveClass("cursor-wait");
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
