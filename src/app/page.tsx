import Image from "next/image";
import { css } from "../../styled-system/css";
import { CoreButton as CoreB, StyledTestButton } from "@raoun/components";
import { divider, flex, hstack, vstack } from "@styled-system/patterns";
import { CoreHeader } from "@raoun/components";
import CoreButton from "@/components/button/CoreButton";
import "@raoun/components/dist/index.css";
import { token } from "@styled-system/tokens";
import TestButton from "@/components/TestButton";
import { styled } from "@styled-system/jsx";
import { Button } from "@/components/button/style";

export default function Home() {
  const a = token("colors.primary.10");
  const width = "500px";

  return (
    <>
      <main className={mainClass}>
        <div className={buttonsClass}>
          <CoreButton />
          <CoreButton isLoading />
        </div>
        <div className={buttonsClass}>
          <CoreButton
            buttonType="primary"
            styleType="tonal"
            css={{ width: "800px" }}
          />
          <CoreButton buttonType="primary" styleType="tonal" isLoading />
        </div>
        <div className={buttonsClass}>
          <CoreButton buttonType="primary" styleType="outlined" />
          <CoreButton buttonType="primary" styleType="outlined" isLoading />
        </div>
        <div className={buttonsClass}>
          <CoreButton buttonType="primary" styleType="text" />
          <CoreButton buttonType="primary" styleType="text" />
        </div>
        <Button buttonType="primary" styleType="filled">
          <span>테스트 버튼</span>
        </Button>
      </main>

      <div className={divider({ marginTop: "8px" })} />
    </>
  );
}

// const JsxButton = styled.button`
//   width: 300px;
//   height: 100px;

// `;

const mainClass = hstack({
  padding: "16px",
  gap: "8px",
});

const buttonsClass = vstack({
  gap: "8px",
});
