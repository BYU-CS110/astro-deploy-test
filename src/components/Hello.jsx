import * as hello from "../data/hello.md";

export default function Hello() {
  return <p>Hello from component, value: {hello.frontmatter.key}</p>;
}
