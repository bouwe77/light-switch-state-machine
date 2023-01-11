"use strict";
class LightSwitch {
  _state;
  constructor() {
    this._state = "off";
  }
  switch() {
    if (this._state === "on")
      this._state = "off";
    else
      this._state = "on";
    return this._state;
  }
  switchOn() {
    if (this._state !== "on")
      this._state = "on";
    return this._state;
  }
  switchOff() {
    if (this._state !== "off")
      this._state = "off";
    return this._state;
  }
  get state() {
    return this._state;
  }
}
const lightSwitch = new LightSwitch();
console.log(lightSwitch.state);
lightSwitch.switchOff();
console.log(lightSwitch.state);
lightSwitch.switchOff();
console.log(lightSwitch.state);
//# sourceMappingURL=index.js.map
