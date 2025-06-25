
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface StubScreenProps {
  onBack: () => void;
}

const StubScreen = ({ onBack }: StubScreenProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-6 flex items-center border-b border-gray-200">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-lg font-medium text-gray-900">
          Предложение от банка
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Moon emoji placeholder */}
        <div className="w-32 h-32 bg-gray-400 rounded-full flex items-center justify-center mb-8">
          <div className="text-6xl">🌚</div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Сервис ещё в работе
        </h2>

        <p className="text-base text-gray-600 text-center leading-relaxed max-w-sm">
          Мы выбираем лучшие {'{штучки}'}, чтобы вам точно понравилось. С нетерпением ждём, когда всё заработает, чтобы показать вам.
        </p>
      </div>

      {/* Bottom Button */}
      <div className="p-6">
        <button
          className="w-full bg-gray-900 text-white py-4 px-6 text-lg font-medium rounded-2xl hover:bg-gray-800 transition-colors"
          onClick={onBack}
        >
          Спасибо, понятно!
        </button>
      </div>
    </div>
  );
};

export default StubScreen;
