// src/QuizApp.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { questions } from './PartsOfSpeechQuestions';

const QuizApp = ({questions}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    setUserAnswers([...userAnswers, { questionId: currentQuestion + 1, selectedOption }]);
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
    const answers = userAnswers.filter(
      (answer) =>
        answer.selectedOption === questions[answer.questionId - 1].answer
    );
    return (answers.length / questions.length) * 100;
  };

  const renderOptions = (options, answer) => {
    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.option,
          selectedOption === option && styles.selectedOption,
          selectedOption === option && option === answer && styles.correctOption,
          selectedOption === option && option !== answer && styles.wrongOption,
        ]}
        onPress={() => handleOptionPress(option)}
        disabled={selectedOption !== null}
      >
        <Text>{option}</Text>
      </TouchableOpacity>
    ));
  };

  if (quizCompleted) {
    const score = calculateScore();
    return (
     <ScrollView>
       <View style={styles.container}>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:5}}>
        <Text>Quiz Completed!</Text>
        <Image source={{uri:"https://img.icons8.com/color/48/checked--v1.png"}} style={{width:30,height:30}}/>
        </View>
        <Text style={{color:"green",fontWeight:"500",marginVertical:30,fontSize:20}}>Your Score: {score.toFixed(2)}%</Text>
        {userAnswers.map((answer, index) => {
          const question = questions[index];
          const isCorrect = answer.selectedOption === question.answer;

          return (
            <View key={index} style={styles.resultContainer}>
              <Text style={{marginTop:15}}>
                {question.question}
              </Text>
              {renderOptions(question.options, question.answer)}
              <Text style={isCorrect ? styles.correctText : styles.wrongText}>
                Your Answer: {answer.selectedOption}
              </Text>

              <Text style={ styles.correctText}>
                Correct Answer: {question.answer}
              </Text>
            </View>
          );
        })}
        <Button title="Retry Quiz" onPress={handleRetryQuiz} style={{marginTop:29}}/>
      </View>
     </ScrollView>
    );
  } else {
    return (
      <View style={{position:"relative",width:"100%",height:"100%"}}>
<View style={{height:"15%",marginTop:2,padding:10}}>
<Text style={{color:"#C683D7",fontWeight:"bold"}}>Select the type of parts of speech of the highlighted word.</Text>
</View>
<View style={styles.container}>
      
      <Text style={styles.question}>{questions[currentQuestion].questionName}</Text>
      <Text style={{marginLeft:"80%",color:"grey"}}>{questions[currentQuestion].year}</Text>
      {renderOptions(
        questions[currentQuestion].options,
        questions[currentQuestion].answer
      )}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
        <Text style={{color:"yellow"}}>
        {currentQuestion + 1 < questions.length ? 'Next Question  ' : 'Finish Quiz'}
        {currentQuestion+1<questions.length ? <Image source={{uri:"https://img.icons8.com/color/48/000000/circled-chevron-right--v1.png"}} style={{width:20,height:20}}/>:''}
        </Text>
      </TouchableOpacity>
    </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    height:"85%"
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 5,
    width:"80%"

  },
  selectedOption: {
    backgroundColor: 'yellow',
  },
  correctOption: {
    backgroundColor: 'green',
  },
  wrongOption: {
    backgroundColor: 'red',
  },
  nextButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  resultContainer: {
    marginVertical: 10,
    width:"80%"

  },
  correctText: {
    color: 'green',
  },
  wrongText: {
    color: 'red',
  },
});

export default QuizApp;
