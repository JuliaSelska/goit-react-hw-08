import PageTitle from '../../components/PageTitle/PageTitle';

export default function HomePage() {
    return (
        <div>
            <PageTitle>
                Contacts manager welcome page{" "}
                <span role="img" aria-label="Greeting icon">
                    💁‍♀️
                </span>
            </PageTitle>

            <p><strong>👋 Привіт, користувачу!</strong></p>
            <p>Ти на сайті, де можна зручно керувати своїми контактами 📱
                Тут ти можеш:</p>
            <ul>
                <li>➕ додати свій персональний контакт</li>
                <li>✏️ редагувати його</li>
                <li>🗑 видалити, якщо вже неактуальний</li>
                <li>🔍 скористатися пошуком, щоб швидко знайти потрібну людину</li>
            </ul>
            <p>💡 Згодом ми додамо можливість:</p>
            <ul>
                <li>залишати нотатки до контактів</li>
                <li>зберігати дати народження й отримувати нагадування 🎂</li>
            </ul>
            <p><strong>Почувайся як вдома та приємного користування сайтом! 💙</strong></p>
        </div>
    );
}