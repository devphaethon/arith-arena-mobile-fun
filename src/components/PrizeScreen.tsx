
import React from 'react';
import { Gift, ShoppingCart, Zap, CreditCard, TrendingUp } from 'lucide-react';

interface PrizeScreenProps {
  onClose: () => void;
}

const PrizeScreen = ({ onClose }: PrizeScreenProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-6 text-center">
        <h1 className="text-xl font-medium text-gray-900 mb-6">
          Ура, а вот и ваш<br />приз!
        </h1>
        
        {/* Prize Card */}
        <div className="bg-gray-100 rounded-2xl p-6 mx-4 mb-6">
          <div className="flex justify-center mb-4 relative">
            <div className="w-24 h-24 flex items-center justify-center relative">
              <img 
                src="/lovable-uploads/1541bf71-d748-4b3f-9a15-bd6b2fc90d09.png" 
                alt="Альфа-Смарт приз" 
                className="w-20 h-20 object-contain"
              />
              <div className="absolute -top-2 -left-2 text-purple-400 text-2xl">✨</div>
              <div className="absolute -top-1 -right-3 text-yellow-400 text-xl">✨</div>
            </div>
            <div className="absolute right-16 top-8 text-green-400 text-lg">💸</div>
            <div className="absolute left-16 bottom-2 text-blue-500 text-xl">🎁</div>
            <div className="absolute right-20 bottom-0 text-green-400 text-sm">💎</div>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Альфа-Смарт</h2>
          <p className="text-base font-medium text-gray-900">1 мес. подписки</p>
          <p className="text-base font-medium text-gray-900">бесплатно</p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex-1 px-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 ml-2">В вашей подписке</h3>
        
        <div className="space-y-3">
          {/* Benefit 1 */}
          <div className="bg-gray-100 rounded-2xl p-4 flex items-center">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-1">Кэшбэк 5% в категории Продукты</h4>
              <p className="text-sm text-gray-600">Дополнительная категория</p>
              <p className="text-sm text-gray-600">каждый месяц</p>
            </div>
            <div className="ml-4">
              <ShoppingCart className="w-8 h-8 text-red-500" />
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-gray-100 rounded-2xl p-4 flex items-center">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-1">+1 попытка крутить барабан суперкэшбэка</h4>
              <p className="text-sm text-gray-600">Выше шанс выиграть до 100%</p>
              <p className="text-sm text-gray-600">в случайной категории</p>
            </div>
            <div className="ml-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 via-yellow-400 to-green-500"></div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-gray-100 rounded-2xl p-4 flex items-center">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-1">Эксклюзивный кэшбэк от партнёров</h4>
              <p className="text-sm text-gray-600">Доступ к особой подборке</p>
            </div>
            <div className="ml-4">
              <Zap className="w-8 h-8 text-red-500" />
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-gray-100 rounded-2xl p-4 flex items-center">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-1">Увеличенный лимит кэшбэка</h4>
              <p className="text-sm text-gray-600">7000 ₽ в месяц вместо</p>
              <p className="text-sm text-gray-600">5000 ₽ за покупки</p>
              <p className="text-sm text-gray-600">в категориях</p>
            </div>
            <div className="ml-4">
              <CreditCard className="w-8 h-8 text-red-500" />
            </div>
          </div>

          {/* Benefit 5 */}
          <div className="bg-gray-100 rounded-2xl p-4 flex items-center">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-1">+3% годовых</h4>
              <p className="text-sm text-gray-600">По накопительному Альфа-</p>
              <p className="text-sm text-gray-600">Счёту на ежедневный остаток</p>
            </div>
            <div className="ml-4">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">₽</span>
                <div className="absolute ml-4 mt-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6 px-2">
          Это только часть привилегий. Посмотреть все привилегии можно на следующей странице.
        </p>
      </div>

      {/* Bottom Button */}
      <div className="p-4">
        <button
          className="w-full bg-gray-900 text-white py-4 px-6 text-lg font-medium rounded-2xl hover:bg-gray-800 transition-colors"
          onClick={onClose}
        >
          Забрать подписку бесплатно
        </button>
      </div>
    </div>
  );
};

export default PrizeScreen;
