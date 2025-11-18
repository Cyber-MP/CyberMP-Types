export class VehicleWheelPressureEvent extends Event {
  contactPoint?: { x: number; y: number; z: number };
  impulse?: { x: number; y: number; z: number };
}
