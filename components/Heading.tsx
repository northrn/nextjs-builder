import { Builder } from "@builder.io/react";

export const Heading = (props: any) => <h1 style={{ color: props.color }}>{props.title}</h1>;

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: 'I am a custom heading!'
    },
    {
      name: "color",
      type: "color",
      defaultValue: 'black'
    },
  ],
});