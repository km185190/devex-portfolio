import { describe, it, expect } from "vitest";
import { render } from "@testing-library/dom";
import Card from "./Card.astro";

describe("Card", () => {
  it("renders with default props", () => {
    const { container } = render(Card, { children: "Card content" });
    const card = container.firstChild;
    expect(card).toHaveClass("p-6"); // Default medium padding
    expect(card).toHaveClass("shadow-sm"); // Default small shadow
    expect(card).toHaveClass("border"); // Default bordered
  });

  it("renders with custom styles", () => {
    const { container } = render(Card, {
      padding: "lg",
      shadow: "lg",
      bordered: false,
      hoverable: true,
      children: "Card content",
    });
    const card = container.firstChild;
    expect(card).toHaveClass("p-8");
    expect(card).toHaveClass("shadow-lg");
    expect(card).not.toHaveClass("border");
    expect(card).toHaveClass("hover:shadow-md");
  });
});
