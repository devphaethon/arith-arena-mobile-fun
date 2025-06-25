
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import PrizeScreen from './PrizeScreen';

interface Question {
  numbers: number[];
  correctAnswer: number;
  options: number[];
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const ArithmeticGame = () => {
  const [question] = useState<Question>(() => {
    const numbers = [75, 39, 8, 36];
    const correctAnswer = numbers.reduce((sum, num) => sum + num, 0);
    
    // New answer options from user request
    const options = [164, 113, 158, 141];
    
    return {
      numbers,
      correctAnswer,
      options
    };
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showPrizeScreen, setShowPrizeScreen] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswerSelect = (answer: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    setHasAnswered(true);
    const correct = answer === question.correctAnswer;
    setIsCorrect(correct);
  };

  const resetGame = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const collectPrize = () => {
    // Send Google Analytics event
    if (window.gtag) {
      window.gtag('event', 'test_5584', {
        event_category: 'button_click',
        event_label: 'collect_prize'
      });
    }
    setShowPrizeScreen(true);
  };

  const closePrizeScreen = () => {
    setShowPrizeScreen(false);
    resetGame();
  };

  if (showPrizeScreen) {
    return <PrizeScreen onClose={closePrizeScreen} />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-6 text-center border-b border-gray-200">
        <h1 className="text-lg font-medium text-gray-900 mb-2">
          Сложите все числа и
        </h1>
        <h2 className="text-lg font-medium text-gray-900">
          выиграйте приз
        </h2>
      </div>

      {/* Game Content */}
      <div className="flex-1 px-6 py-8">
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
            const isCorrectOption = option === question.correctAnswer;
            
            let buttonClass = "w-full py-4 px-6 text-xl font-medium rounded-lg border transition-all duration-200 ";
            
            if (selectedAnswer === null) {
              buttonClass += "bg-white border-gray-300 text-gray-900 hover:bg-gray-50 active:bg-gray-100";
            } else if (isSelected && isCorrectOption) {
              buttonClass += "bg-green-500 border-green-500 text-white";
            } else if (isSelected && !isCorrectOption) {
              buttonClass += "bg-red-500 border-red-500 text-white";
            } else {
              buttonClass += "bg-white border-gray-300 text-gray-900";
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
        {selectedAnswer !== null && (
          <div className="text-center mb-8">
            {isCorrect ? (
              <div className="flex items-center justify-center text-green-600 mb-4">
                <Check className="w-6 h-6 mr-2" />
                <span className="text-lg font-medium">Правильно!</span>
              </div>
            ) : (
              <div className="text-red-600 mb-4">
                <p className="text-lg font-medium">Неправильно.</p>
                <p className="text-sm">Попробуйте еще раз!</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="p-6">
        {isCorrect ? (
          <button
            className="w-full bg-gray-900 text-white py-4 px-6 text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
            onClick={collectPrize}
          >
            Забрать приз
          </button>
        ) : hasAnswered ? (
          <button
            className="w-full bg-gray-900 text-white py-4 px-6 text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
            onClick={resetGame}
          >
            Попробовать снова
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ArithmeticGame;
