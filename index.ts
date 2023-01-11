type LightSwitchState = "on" | "off";

class LightSwitch {
  private _state: LightSwitchState;

  constructor() {
    this._state = "off";
  }

  public switch() {
    if (this._state === "on") this._state = "off"
    else this._state = "on"
    return this._state
  }
  
  public switchOn() {
    if (this._state !== "on") this._state = "on";
    return this._state
  }

  public switchOff() {
    if (this._state !== "off") this._state = "off";
    return this._state
  }

  public get state() {
    return this._state;
  }
}

// Example 1
// ===
// const lightSwitch = new LightSwitch()
// console.log(lightSwitch.state) // OFF

// Example 2
// ===
// const lightSwitch = new LightSwitch()
// console.log(lightSwitch.state) // OFF

// // Let's send the "switch" event:
// lightSwitch.switch()

// console.log(lightSwitch.state) // ON

// // Of course we can call it again:
// lightSwitch.switch()
// console.log(lightSwitch.state) // OFF

// Example 3
// ===
// const lightSwitch = new LightSwitch()
// console.log(lightSwitch.state) // OFF

// // Let's turn the switch on:
// lightSwitch.switchOn()

// console.log(lightSwitch.state) // ON

// // Of course we can switch it off again:
// lightSwitch.switchOff()
// console.log(lightSwitch.state) // OFF

// Example 4
// ===
const lightSwitch = new LightSwitch()
console.log(lightSwitch.state) // OFF

// Let's turn the switch off:
lightSwitch.switchOff()
console.log(lightSwitch.state) // OFF

// Let's turn the switch off:
lightSwitch.switchOff()
console.log(lightSwitch.state) // OFF


