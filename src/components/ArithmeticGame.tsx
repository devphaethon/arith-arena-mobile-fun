
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface Question {
  numbers: number[];
  correctAnswer: number;
  options: number[];
}

const ArithmeticGame = () => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const generateQuestion = (): Question => {
    // Generate 4 random numbers between 1-99
    const numbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 99) + 1);
    const correctAnswer = numbers.reduce((sum, num) => sum + num, 0);
    
    // Generate 3 wrong answers
    const wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      const offset = Math.floor(Math.random() * 20) - 10; // -10 to +10
      const wrongAnswer = correctAnswer + offset;
      if (wrongAnswer !== correctAnswer && wrongAnswer > 0 && !wrongAnswers.includes(wrongAnswer)) {
        wrongAnswers.push(wrongAnswer);
      }
    }
    
    // Shuffle options
    const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    
    return {
      numbers,
      correctAnswer,
      options
    };
  };

  const handleAnswerSelect = (answer: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    const correct = answer === question?.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    setShowResult(true);
  };

  const nextQuestion = () => {
    setQuestion(generateQuestion());
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowResult(false);
  };

  const collectPrize = () => {
    // Reset game
    setScore(0);
    nextQuestion();
    setShowResult(false);
  };

  useEffect(() => {
    setQuestion(generateQuestion());
  }, []);

  if (!question) return null;

  const isWinning = score >= 3; // Win after 3 correct answers

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-6 text-center border-b border-gray-200">
        <h1 className="text-lg font-medium text-gray-900 mb-2">
          {isWinning ? 'Поздравляем,' : 'Сложите все числа и'}
        </h1>
        <h2 className="text-lg font-medium text-gray-900">
          {isWinning ? 'вы выиграли приз!' : 'выиграйте приз'}
        </h2>
      </div>

      {/* Game Content */}
      <div className="flex-1 px-6 py-8">
        {!isWinning ? (
          <>
            {/* Question */}
            <div className="text-center mb-8">
              <div className="text-2xl font-normal text-gray-900 mb-8">
                {question.numbers.join(' + ')} =
              </div>
            </div>

            {/* Answer Options */}
            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === question.correctAnswer;
                
                let buttonClass = "w-full py-4 px-6 text-xl font-medium rounded-lg border transition-all duration-200 ";
                
                if (selectedAnswer === null) {
                  buttonClass += "bg-white border-gray-300 text-gray-900 hover:bg-gray-50 active:bg-gray-100";
                } else if (isSelected && isCorrect) {
                  buttonClass += "bg-green-500 border-green-500 text-white";
                } else if (isSelected && !isCorrect) {
                  buttonClass += "bg-red-500 border-red-500 text-white";
                } else if (isCorrect) {
                  buttonClass += "bg-green-500 border-green-500 text-white";
                } else {
                  buttonClass += "bg-white border-gray-300 text-gray-400";
                }

                return (
                  <button
                    key={index}
                    className={buttonClass}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showResult && (
              <div className="text-center mb-8">
                {isCorrect ? (
                  <div className="flex items-center justify-center text-green-600 mb-4">
                    <Check className="w-6 h-6 mr-2" />
                    <span className="text-lg font-medium">Правильно!</span>
                  </div>
                ) : (
                  <div className="text-red-600 mb-4">
                    <p className="text-lg font-medium">Близко, но нет.</p>
                    <p className="text-sm">Попробуйте еще раз!</p>
                  </div>
                )}
                <p className="text-gray-600">Правильных ответов: {score}/3</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <div className="flex items-center justify-center text-green-600 mb-6">
              <Check className="w-12 h-12" />
            </div>
            <div className="text-6xl font-bold text-gray-900 mb-4">
              {score}
            </div>
            <p className="text-lg text-gray-600">правильных ответов!</p>
          </div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="p-6">
        <button
          className="w-full bg-gray-900 text-white py-4 px-6 text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
          onClick={isWinning ? collectPrize : (showResult ? nextQuestion : undefined)}
          disabled={!showResult && !isWinning}
        >
          {isWinning ? 'Забрать приз' : (showResult ? 'Ответить' : 'Ответить')}
        </button>
      </div>
    </div>
  );
};

export default ArithmeticGame;
