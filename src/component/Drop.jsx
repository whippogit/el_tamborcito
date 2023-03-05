function Drop() {
  return (
    <div class="dropdown d-block d-sm-none">
      <button
        class="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        menú
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li>
          <a class="dropdown-item" type="button">
            Action
          </a>
        </li>
        <li>
          <a class="dropdown-item" type="button">
            Another action
          </a>
        </li>
        <li>
          <a class="dropdown-item" type="button">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Drop;
