// Существуют разные способы получить DOM-узел; здесь мы определяем саму форму и
// поле ввода email и элемент span, в который поместим сообщение об ошибке
const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", function (event) {
  // Каждый раз, когда пользователь что-то вводит,
  // мы проверяем, являются ли поля формы валидными

  if (email.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    emailError.textContent = ""; // Сбросить содержимое сообщения
    emailError.className = "error"; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    showError();
  }
});

form.addEventListener("submit", function (event) {
  // Если поле email валдно, позволяем форме отправляться

  if (!email.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showError();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // Если поле пустое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = "Please provide a valid email";
  } else if (email.validity.typeMismatch) {
    // Если поле содержит не email-адрес,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = "Please provide a valid email";
  }

  // Задаём соответствующую стилизацию
  emailError.className = "error active";
}
