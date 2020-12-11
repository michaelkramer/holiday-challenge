import React, { useState } from "react";
import _ from "lodash";
import { QuestionBlockProps } from "./Types";
import { Card } from "antd";

const QuestionBlock: React.FC<QuestionBlockProps> = (props) => {
  const [state, setState] = useState("number");

  const block = () => {
    if (props.description) {
      return <div>{props.description}</div>;
    }
    if (state === "answer") {
      return <div>{props.answer}</div>;
    }
    if (state === "question") {
      return <div>{props.question}</div>;
    }
    return <div>{props.id}</div>;
  };

  const changeState = () => {
    if (state === "number") {
      return "question";
    }
    if (state === "question") {
      return "answer";
    }
    if (state === "answer") {
      props.onClose();
    }
    return "number";
  };

  return (
    <>
      <Card
        hoverable
        className="App-question-block"
        //   onClick={() => {
        //     console.log("click");
        //     props.onClick();
        //   }}
        onClick={() => setState(changeState())}
        title={state === "number" ? null : _.startCase(_.camelCase(state))}
      >
        {block()}
      </Card>
      {state === "answer" && props.followUpQuestion && (
        <QuestionBlock
          id={"Follow Up Question"}
          onClose={props.onClose}
          {...props.followUpQuestion}
          state={"number"}
        />
      )}
    </>
  );
};

export default QuestionBlock;
