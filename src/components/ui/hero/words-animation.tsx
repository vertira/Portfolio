import { useEffect, useState } from "react";
import { FlipWords } from "./flip-word-animation";

function Words() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  });
  return (
    <div
      className={`flex h-screen w-screen items-center  bg-neutral-100 dark:bg-black px-4 ${visible ? "block" : "hidden"}`}
    >
      <div className="mx-auto text-sm font-normal  lg:text-4xl ">
        <pre>
          <FlipWords words={["function hi() {", ""]} /> <br />
          <FlipWords
            words={[
              `
    const greeting = "Hi";`,
              "",
            ]}
          />
          <br />
          <FlipWords
            words={[
              `
    const name = "I'm Krystian Grala";`,
              "",
            ]}
          />{" "}
          <br />
          <FlipWords
            words={[
              `
    const role = "Front-end Developer";`,
              "",
            ]}
          />
          <br />
          <FlipWords
            words={[
              `
    return (
      `,
              "hi()",
            ]}
          />{" "}
          <br />
          <FlipWords
            words={[
              `<h1>{greeting}<br />{name}<br />{role}</h1>
            `,
            ]}
          />{" "}
          <br />
          <FlipWords
            words={[
              `
            );`,
            ]}
          />
          <br />
          <FlipWords
            words={[
              `
          }`,
            ]}
          />
        </pre>
      </div>
    </div>
  );
}

export default Words;
