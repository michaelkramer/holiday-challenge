import React, { useState } from "react";
import _ from "lodash";
import "./App.less";
import data from "./data/question";
import { Layout, Row, Col, Button, Card } from "antd";
import { QuestionBlockProps, Question } from "./Types";
import QuestionBlock from "./QuestionBlock";

function App() {
  const [question, setQuestion] = useState<QuestionBlockProps | null>();

  const defaultState = "number";

  const questionData = {
    questions: data.questions.map((quiz, index) => {
      return {
        ...{ id: index + 1, state: defaultState },
        ...quiz,
      };
    }),
  };

  const onQuestion = (question: Question) => {
    //const newQuiz = { state: "number", ...rest };
    setQuestion({ ...question });
  };
  const onCloseQuestion = () => {
    setQuestion(null);
  };

  return (
    <Layout>
      <div className="App">
        <div className="App-body">
          {!question && (
            <Layout.Content>
              <Row>
                {questionData.questions.map((quiz, index) => {
                  return (
                    <Col
                      key={index}
                      onClick={() => onQuestion(quiz)}
                      className={"App-questions"}
                    >
                      <Card hoverable className="App-question-block">
                        {index + 1}
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Layout.Content>
          )}
          {question && (
            <Layout.Content>
              <QuestionBlock
                {...question}
                state={"number"}
                onClose={onCloseQuestion}
              />
            </Layout.Content>
          )}

          <Layout.Footer>
            {question && (
              <Button onClick={() => setQuestion(null)}>Reset </Button>
            )}
          </Layout.Footer>
        </div>
      </div>
    </Layout>
  );
}

export default App;
