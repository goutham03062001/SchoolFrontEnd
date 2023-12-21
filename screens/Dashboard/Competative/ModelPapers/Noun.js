// src/QuizApp.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  // Add more questions as needed
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    setUserAnswers([
      ...userAnswers,
      { questionId: currentQuestion + 1, selectedOption },
    ]);
    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetryQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    const correctAnswers = userAnswers.filter(
      (answer) =>
        answer.selectedOption === questions[answer.questionId - 1].correctAnswer
    );
    return (correctAnswers.length / questions.length) * 100;
  };

  const renderOptions = (options,correctAnswer,userSelectedOption) => {
    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.option,selectedOption === option && styles.selectedOption, quizCompleted && option===userSelectedOption && styles.userChooseOptionBackground]}
        onPress={() => handleOptionPress(option)}
        disabled={quizCompleted}
      >
     {quizCompleted ? <>
      <Text style={{ width: Dimensions.get('screen').width-100,color: option === userSelectedOption ? "yellow":"none"}}>{option}</Text>
      
     </> : <>
     <Text style={{ width: "80%" }}>{option}</Text>
     </>}
      </TouchableOpacity>
    ));
  };

  if (quizCompleted) {
    const score = calculateScore();
    return (
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text>Quiz Completed!</Text>
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/checked--v1.png",
              }}
              style={{ width: 30, height: 30 }}
            />
          </View>
          <Text
            style={{
              color: "green",
              fontWeight: "500",
              marginVertical: 30,
              fontSize: 20,
            }}
          >
            Your Score: {score.toFixed(2)}%
          </Text>
          {userAnswers.map((answer, index) => {
            const question = questions[index];
            const isCorrect = answer.selectedOption === question.correctAnswer;

            return (
              <View key={index} style={styles.resultContainer}>
                <Text style={{ marginTop: 15 }}>{question.question}</Text>
                {renderOptions(question.options, question.correctAnswer,answer.selectedOption)}
                <Text style={isCorrect ? styles.correctText : styles.wrongText}>
                  Your Answer: {answer.selectedOption}
                </Text>

                <Text style={styles.correctText}>
                  Correct Answer: {question.correctAnswer}
                </Text>
              </View>
            );
          })}
          <Button
            title="Retry Quiz"
            onPress={handleRetryQuiz}
            style={{ marginTop: 29 }}
          />
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>
          {questions[currentQuestion].question}
        </Text>
        {renderOptions(questions[currentQuestion].options)}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextQuestion}
        >
          <Text style={{ color: "white" }}>
            {currentQuestion + 1 < questions.length
              ? "Next Question"
              : "Finish Quiz"}
            {currentQuestion + 1 < questions.length ? (
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/000000/circled-chevron-right--v1.png",
                }}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              ""
            )}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 5,
    width: "80%",
  },
  selectedOption: {
    backgroundColor: "#a0a0a0", // Another unique color for selected option
  },
  nextButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
  },
  resultContainer: {
    marginVertical: 10,
  },
  correctText: {
    color: "green",
  },
  userChooseOptionBackground: {
    backgroundColor: "#363062",
  },
  wrongText:{
    color:'red'
  }
});

export default QuizApp;
