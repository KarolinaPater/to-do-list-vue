# cd ToDoList-Vue

## Opis projektu
Aplikacja pozwalająca na utworzenie listy zadań z możliwością filtrowania wyświetlanych treści.

Zawiera:
* Formularz logowania <br>
Bez zalogowania inne podstrony aplikacji pozostają ukryte, możliwe jest przejście jedynie na podstronę z rejestracją.  

* Formularz rejestracji <br>
Zawiera walidacje wraz z utworzonym  cheackboxem - do zatwierdzenia zgody.

* Lista zadań <br>
Listę możemy filtrować wyświetlając zadania wykonane, niewykonane oraz wszystkie. Każde z zadań zawiera przycisk zmiany jego stanu na przeciwny oraz usunięcia.

* Formularz dodawania zadań <br> 
Pozwala do dodanie nowego zadania o domyślnym statusie: nieukończone.

* Wysuwane menu <br>
Wyświetla informacje o zalogowanym użytkowniku oraz zawiera przycisk wylogowania, kończący sesje.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
