class StaticConfiguration {
  static base_url = 'https://localhost:9000';
  static max_retries = 3;
  static api_key = 'abc123';
  static admin_username = 'cj';
}

class SingletonConfiguration {
  base_url = 'https://localhost:9000';
  max_retries = 3;
  api_key = 'abc123';
  admin_username = 'cj';
  static #_instance = null;

  static get instance() {
    if (this.#_instance === null) {
      this.#_instance = new SingletonConfiguration();
    }
    return this.#_instance;
  }
}

function doTheThing() {
  // fetch(StaticConfiguration.base_url);
  // fetch(SingletonConfiguration.instance.base_url);
}