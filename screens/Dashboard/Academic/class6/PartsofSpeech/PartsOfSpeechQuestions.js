import QuestionItem from "./QuestionItem"

export const questions = [
    {
        id: 1,
        
        question: <QuestionItem question = "What did she ask you to do?" highlight = "she" />,
        options: ["conjunction",
           "preposition",
            "pronoun"],
        correctAnswer: 'preposition',
        year : "2010 DSC"
        
      },
      {
        id: 2,
        question: <QuestionItem question = "I left my shoes under the kitchen table." highlight='under'/>,
        options: ["adjective",
            "preposition",
            "pronoun"],
        correctAnswer: 'preposition',
        year : "2016 DSC"
      },
]
