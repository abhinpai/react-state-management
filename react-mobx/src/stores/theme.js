import { observable, action, computed, decorate } from 'mobx';
export default class ThemeStore {
  isDarkTheme = true;

  get theme() {
    return this.isDarkTheme;
  }

  setTheme = () => (this.isDarkTheme = !this.isDarkTheme);
}
decorate(ThemeStore, {
  isDarkTheme: observable,
  theme: computed,
  setTheme: action,
});
