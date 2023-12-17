# Butik

## Opis Projektu
Projekt **Testowanie i Jakość Oprogramowania** jest realizowany przez zespół składający się z:

| Index  | Student        | 
|--------|----------------|
| 34326  | Daniel Sikora  | 
| 34275  | Adrain Ciochoń |

## Temat projektu:
**Testowanie aplikacji butik.**
## Opis projektu:
![Główna strona](./Home.png)
Aplikacja Butik to platforma umożliwiająca użytkownikom zakupy, publikowanie postów oraz interakcję w wirtualnym środowisku sklepowym.

Logowanie i Rejestracja:
Użytkownicy mają możliwość tworzenia konta i logowania się.

Stawianie Postów:
Zarejestrowani użytkownicy mogą dodawać posty, prezentujące buty wraz z opisem, który ma zachęcić użytkowników du zakupu produktu. Zawiera również cene oraz inne informacje na temat produktu.

Edycja postów:
Istnieje możliwość edycji, umożliwiajac aktualizację informacji, zdjęć czy cen.

Filtrowanie:
Użytkownicy mają dostęp do funkcji filtrowania, co umożliwia szybkie znalezienie interesujących produktów.
Filtrowanie dostępne jest po nazwie produktu,cenie oraz rozmiarze butów, co ułatwia precyzyjne wyszukiwanie.
## Uruchomienie projektu:
### Uruchomienie Api:
```cd Api```

```npm start```

Api jest dostępne pod adresem:```http://localhost:3001```
### Uruchomienie Api:
```cd butik```

```ng serve```

Api jest dostępne pod adresem:```http://localhost:4200```
### Uruchomienie testów jednostkowych:
```cd butik```

```ng test```

Wyniki testów odpalają się domyślnie w przeglądarce chrome:
![Testy](./Testy.png)

### Uruchomienie testów integracyjnych:
```cd Api```

```npm test```

![Testy](./itest.png)
## Scenariusze:

| Test Case ID | Opis                                                           | Kroki testowe                                                                                                                 | Oczekiwany wynik                                                                    |
|-------------|----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| TC_01       | Wejście na stronie /addPosts nie będąc zalogowanym.            | 1. Przy uruchomieniu aplikacji dopisz do linku /addPosts                                                                      | Strona nie zostanie przekierowana na podaną, ponieważ warunki nie zostału spełnione |
| TC_02       | Podanie niewłaściwych danych logowania.                        | 1. Kliknięcie w ikonkę w prawym górnym rogu "Zaloguj".<br/>2. Wpisanie niewłaściwych danych logowania.                        | Wyskoczy komunikat "Wystąpił błąd podczas logowania.                                |
| TC_03       | Próba rejestracji konta wpisując 2 różne hasła.                | 1. Kliknięcie w ikonkę w prawym górnym rogu "Zarejestruj".<br/> 2. Stwórz konto próbując wpisać błędnie potwierdzające hasło. | Konto użytkownika nie zostanie utworzone.                                           |
| TC_04       | Próba poprawnego zalogowania.                                  | 1. Podanie prawidłowych danych na ekranie logowania.<br/> 2. Kliknięcie przycisku "zaloguj".                                  | Użykownik zostanie zalogowany                                                       |
| TC_05       | Próba rejestracji konta.                                       | 1. Kliknięcie w ikonkę w prawym górnym rogi "Zarejestruj".<br/> 2. Wpisanie poprawnie danych                                  | Użytkownik zostanie utworzony                                                       |
| TC_06       | Dodanie ogłoszenia.                                            | 1. Zalogowanie się na konto.<br/> 2. Wejście w zakłądke "Dodaj ogłoszenie".<br/> 3. Wypełnienie danych.                       | Post zostanie utworzony.                                                            |
| TC_07       | Próba wpisania przy tworzenie ogłoszenia liter w rubryce cena. | 1. Zalogowanie się na konto.<br/> 2. Wejście w zakładkę "Dodaj ogłoszenie".<br/> 3. Próba wpisania liter w rubryce ogłoszenia | Nie jest możliwe wpisanie                                                           |
| TC_08       | Testowanie poprawnego działa czyszczenie filtru.               | 1. Wejście w ogłoszenia.<br/> 2. Wypełnienie rubryk danymi. 3.<br/> Kliknięcie przycisku "Wyczyść filtry"                     | Rubryki z danymi zostaną wyczyszczone.                                              |
| TC_09       | Zakupienie butów.                                              | 1. Wejście w ogłoszenia.<br/> 2. Wybranie butów.<br/> 3. Kliknięcie przycisku "zakup"                                         | Post zostanie usunięty z ogłoszeń                                                   |
| TC_10       | Edytowanie danych z ogłoszeń                                   | 1. Wybranie ogłoszenia.<br/> 2. Kliknięcie przycisk "Edytuj".<br/> 3. Zmiana danych. Potwierdzając przyciskiem aktualizuj.    | Konto użytkownika nie zostanie utworzone.                                           |
| TC_01       | Wejście na stronie /addPosts nie będąc zalogowanym.            | 1. Przy uruchomieniu aplikacji dopisz do linku /addPosts                                                                      | Strona nie zostanie przekierowana na podaną, ponieważ warunki nie zostału spełnione |
| TC_02       | Podanie niewłaściwych danych logowania.                        | 1. Kliknięcie w ikonkę w prawym górnym rogu "Zaloguj".<br/>2. Wpisanie niewłaściwych danych logowania.                        | Wyskoczy komunikat "Wystąpił błąd podczas logowania.                                |
| TC_03       | Próba rejestracji konta wpisując 2 różne hasła.                | 1. Kliknięcie w ikonkę w prawym górnym rogu "Zarejestruj".<br/> 2. Stwórz konto próbując wpisać błędnie potwierdzające hasło. | Konto użytkownika nie zostanie utworzone.                                           |
| TC_04       | Próba poprawnego zalogowania.                                  | 1. Podanie prawidłowych danych na ekranie logowania.<br/> 2. Kliknięcie przycisku "zaloguj".                                  | Użykownik zostanie zalogowany                                                       |
| TC_05       | Próba rejestracji konta.                                       | 1. Kliknięcie w ikonkę w prawym górnym rogi "Zarejestruj".<br/> 2. Wpisanie poprawnie danych                                  | Użytkownik zostanie utworzony                                                       |
| TC_06       | Dodanie ogłoszenia.                                            | 1. Zalogowanie się na konto.<br/> 2. Wejście w zakłądke "Dodaj ogłoszenie".<br/> 3. Wypełnienie danych.                       | Post zostanie utworzony.                                                            |
| TC_07       | Próba wpisania przy tworzenie ogłoszenia liter w rubryce cena. | 1. Zalogowanie się na konto.<br/> 2. Wejście w zakładkę "Dodaj ogłoszenie".<br/> 3. Próba wpisania liter w rubryce ogłoszenia | Nie jest możliwe wpisanie                                                           |
| TC_08       | Testowanie poprawnego działa czyszczenie filtru.               | 1. Wejście w ogłoszenia.<br/> 2. Wypełnienie rubryk danymi. 3.<br/> Kliknięcie przycisku "Wyczyść filtry"                     | Rubryki z danymi zostaną wyczyszczone.                                              |
| TC_09       | Zakupienie butów.                                              | 1. Wejście w ogłoszenia.<br/> 2. Wybranie butów.<br/> 3. Kliknięcie przycisku "zakup"                                         | Post zostanie usunięty z ogłoszeń                                                   |
| TC_10       | Edytowanie danych z ogłoszeń                                   | 1. Wybranie ogłoszenia.<br/> 2. Kliknięcie przycisk "Edytuj".<br/> 3. Zmiana danych. Potwierdzając przyciskiem aktualizuj.    | Konto użytkownika nie zostanie utworzone.                                           |


## Technologie użyte w projekcie:
* ###   JavaScript
* ###  Angular
* ###  Node.js
* ###  HTML
* ###  CSS
* ###  RxJS
* ###  Jest
* ###  Jasmin

