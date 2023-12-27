// Подключение библиотеки для работы с JSON Web Tokens (JWT)
const jwt = require('jsonwebtoken');

// Секретный ключ для подписи и верификации токенов
const secretKey = 'your-secret-key';

// Утилиты для работы с JWT
const jwtUtils = {
    // Метод генерации JWT-токена
    generateToken(payload) {
        return jwt.sign(payload, secretKey, { expiresIn: '24h' }); // Создание токена с сроком действия 24 часа
    },

    // Метод верификации JWT-токена
    verifyToken(token) {
        try {
            // Проверка и верификация токена с использованием секретного ключа
            return jwt.verify(token, secretKey);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
};

// Экспорт утилит для использования в других частях приложения
module.exports = jwtUtils;
