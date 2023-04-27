function Drop() {
  return (
    <div className="dropdown d-block d-sm-none">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        menú
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li>
          <a className="dropdown-item" type="button">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" type="button">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" type="button">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Drop;
