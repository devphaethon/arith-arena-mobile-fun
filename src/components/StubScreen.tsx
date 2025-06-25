
import React from 'react';

interface StubScreenProps {
  onBack: () => void;
}

const StubScreen = ({ onBack }: StubScreenProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
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
