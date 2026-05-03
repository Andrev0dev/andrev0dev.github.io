# 🟣 Andrev0 - Portfolio

Osobista strona wizytówkowa / portfolio w stylu **clean** z fioletowym akcentem kolorystycznym.

Statyczna strona HTML/CSS/JS - bez frameworków, bez buildów, zero zależności do instalacji.

---

## ✨ Funkcje

- **Wielojęzyczność (PL / EN)** - wszystkie teksty ładowane dynamicznie z `texts.json`, przełączanie jednym kliknięciem flagi
- **Sekcja Hero** - animowany badge dostępności, duży heading z akcentem, przyciski CTA
- **Usługi** - karty z ikonami, hover z fioletowym top-borderem i cieniem
- **Projekty** - placeholder „coming soon" gotowy do rozbudowy
- **Opinie klientów** - karty renderowane dynamicznie z JSON-a (gwiazdki, cytat, avatar z inicjałami, rola)
- **Kontakt** - email + linki do GitHub / Discord (clipboard copy)
- **Responsywność** - mobilny navbar z samymi ikonami, siatki przełączają się na jednokolumnowe
- **Animacje** - fade-in przy scrollu (IntersectionObserver), float glow, pulse dot

---

## 📂 Struktura projektu

```
.
├── index.html                    # Główny plik strony
├── assets/
│   ├── favicon.png               # Ikona strony
│   ├── app.js                    # (zarezerwowany)
│   ├── texts.json                # Wszystkie teksty PL/EN + dane opinii
│   ├── styles/
│   │   ├── static.css            # Kompletny arkusz stylów
│   │   └── animations.css        # (rozszerzenie - animacje w static.css)
│   ├── javascript/
│   │   └── language.js           # System języków + renderowanie opinii + scroll anim
│   └── flags/
│       ├── poland.png
│       └── usa.png
```

---

## 🚀 Uruchomienie

Strona wymaga serwera HTTP (ze względu na `fetch` do JSON). Najszybsze opcje:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Potem otwórz `http://localhost:8000` w przeglądarce.

> ⚠️ Otwarcie `index.html` bezpośrednio przez `file://` zablokuje ładowanie JSON-a (CORS).

---

## 🎨 Personalizacja

### Kolory

Zmienne CSS na górze `assets/styles/static.css`:

```css
:root {
    --purple: #8B5CF6;        /* kolor główny */
    --purple-light: #A78BFA;  /* jaśniejszy wariant */
    --purple-dark: #7C3AED;   /* ciemniejszy / hover */
    --bg: #F5F3F0;            /* tło strony */
    --bg-card: #FFFFFF;       /* tło kart */
    --text: #1A1A1A;          /* tekst główny */
    --text-secondary: #6B6B6B;/* tekst drugorzędny */
}
```

### Teksty i tłumaczenia

Edytuj `assets/texts.json`. Każdy klucz ma strukturę:

```json
{
    "$klucz": {
        "en": "English text",
        "pl": "Polski tekst"
    }
}
```

W HTML odwołujesz się przez atrybut `data-key="$klucz"`.

### Opinie klientów

W `texts.json` pod kluczem `$opinions_data` - tablica obiektów per język:

```json
{
    "name": "Imię Nazwisko",
    "role": "Stanowisko / Firma",
    "text": "Treść opinii...",
    "stars": 5
}
```

Dodaj/usuń wpisy - karty wyrenderują się automatycznie.

---

## 🛠️ Stack technologiczny

| Technologia | Zastosowanie |
|---|---|
| HTML5 | Struktura strony |
| CSS3 | Stylowanie, animacje, responsywność |
| Vanilla JS | System języków, dynamiczne opinie, scroll animations |
| Font Awesome | Ikony |
| Google Fonts (Outfit) | Typografia |

---

## 📬 Kontakt

- **Email:** loksy0.a@gmail.com
- **GitHub:** [Andrev0dev](https://github.com/Andrev0dev)
- **Discord:** andrev0

---

## 📄 Licencja

© 2026 Andrev0. Wszelkie prawa zastrzeżone.
