/* ----------------------------------------------------------
          SECTION 1 — Element accessors
          Helper functions to locate DOM elements by field name.
          Use these in every handler instead of repeating
          document.getElementById / querySelector calls.
        ---------------------------------------------------------- */

function getInput(fieldName) {
    // TODO: Return the <input> element whose id matches fieldName.
    // Hint: document.getElementById(fieldName)
}

function getErrorSpan(fieldName) {
    // TODO: Return the .field-error <span> inside the
    //       .form-row[data-field="fieldName"] container.
    // Hint: querySelector on the row, then querySelector('.field-error')
}


/* ----------------------------------------------------------
  SECTION 2 — View updaters
  Functions that change what the user sees.
  They receive a DOM element and a value; they never
  query the DOM themselves.
---------------------------------------------------------- */

function applyInputState(inputElement, state) {
    // TODO: Remove 'fail' and 'success' classes from inputElement,
    //       then add the class matching state ('fail' | 'success').
    //       If state is null, just remove both (normal/reset).
    // Hint: inputElement.classList.remove(...)
    //       inputElement.classList.add(state)
}

function applyErrorState(errorSpan, message) {
    // TODO: Write message into errorSpan.textContent.
    //       If message is non-empty, add class 'fail' to errorSpan
    //       so CSS makes the text visible (red).
    //       If message is empty, remove class 'fail' to hide it.
}


/* ----------------------------------------------------------
  SECTION 3 — Validation rules
  Pure functions: take a field name and its trimmed value,
  return an error string if invalid or '' if valid.
  No DOM access here.
---------------------------------------------------------- */

function validateField(fieldName, value) {
    // TODO: Add a rule for 'username':
    //         - required (empty → 'Username is required.')
    //         - min 3 chars  (→ 'Username must be at least 3 characters.')
    //
    //       Add a rule for 'password':
    //         - required (empty → 'Password is required.')
    //         - min 8 chars  (→ 'Password must be at least 8 characters.')
    //
    //       Return '' if the value passes all rules for that field.
}
