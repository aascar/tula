import Storage from "../utils/storage";

export default class Service {
  _persistKey = "_a_t_data";
  data;
  userId;
  constructor(userId) {
    this.userId = userId;
    // this._persistKey = this.userId + this._persistKey;
    // this.data = data ?? this.retrieve();
  }

  isExists = (id) => !!this.data.find((en) => en.id === id);

  read = (queryFn) => {
    if (queryFn instanceof Function) {
      this.data.map((en) => queryFn(en));
    }
  };

  readById = (id) => {
    if (id) {
      return this.data.find((en) => en.id === id);
    }
  };

  update = (id, entityObj) => {
    if (entityObj instanceof Object) {
      for (let i = 0; i < this.data; i++) {
        const en = this.data[i];
        if (en.id === id) {
          this.data[i] = { ...en, ...entityObj };
          this.data = [...this.data];
          break;
        }
      }
    }
  };

  remove = (id) => {
    if (id) {
      this.data = this.data.filter((entity) => entity.id !== id);
    }
  };

  getAll = () => {
    return this.data;
  };

  persist = () => {
    Storage.set(this._persistKey, this.data);
  };

  retrieve = () => {
    console.info(this._persistKey);
    return Storage.get(this._persistKey) ?? [];
  };
}
