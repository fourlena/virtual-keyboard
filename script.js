const Keyboard = {
    keyLayoutEng: [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
      "caps","q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
      "shift", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
      "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
       "language", "space", "<", ">"
    ],
    keyShiftEng: [
      "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "backspace",
      "caps","Q", "W", "E", "R", "T", "Y", "U", "I", "O", "p", "{", "}",
      "shift", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "enter",
      "done", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "/",
      "language", "space", "<", ">"
    ],
    keyLayoutRus:[
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
      "caps","й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
      "shift", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
      "done", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
      "language", "space", "<", ">"
    ],
    keyShiftRus: [
      "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "backspace",
      "caps","Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ",
      "shift", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "enter",
      "done", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "\,",
       "language", "space", "<", ">"
    ],
    insertLineBreakEng: ["backspace", "]", "enter", "?"],
    insertLineBreakEngShift: ["backspace", "}", "enter", "/"],
    insertLineBreakRus: ["backspace", "Ъ", "enter", "."],
    insertLineBreakRusShift: ["backspace", "Ъ", "enter", ","],
  
    elements: {
      main: null,
      keysContainer: null,
      keys: []
    },
  
    eventHandlers: {
      oninput: null,
      onclose: null
    },
  
    properties: {
      value: "",
      capsLock: false,
      shift: false,
      english: true,
      curentCursor: 0
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
    
        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());
    
        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");
    
        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    
        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
          element.addEventListener("focus", () => {
            this.open(element.value, currentValue => {
              element.value = currentValue;
            });
          });
          element.addEventListener("click", () => {
            element.selectionStart = this.properties.curentCursor;
            element.selectionEnd = this.properties.curentCursor;
          });
        });
      },
}

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
  }); 