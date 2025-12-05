/// <reference path="../out/index.d.ts" />

import { describe, expectTypeOf, test } from "vitest";

describe("Core, basis functions", () => {
  test("Mp, MpGame", () => {
    expectTypeOf(mp).toEqualTypeOf<Mp>();
    expectTypeOf(mp.game).toEqualTypeOf<MpGame>();
    expectTypeOf(mp.game.ScriptGameInstance).toEqualTypeOf<
      typeof ScriptGameInstance
    >();
  });

  test("MpGame Functions", () => {
    expectTypeOf(mp.game.CanLog()).toEqualTypeOf<boolean>();
    expectTypeOf(mp.game.GetPlayer()).toEqualTypeOf<PlayerPuppet>();
    expectTypeOf(mp.game.GetPlayerObject()).toEqualTypeOf<gameObject>();
    expectTypeOf<Parameters<typeof mp.game.GetMountedVehicle>>().toEqualTypeOf<
      [object: gameObject]
    >();
    expectTypeOf<
      Parameters<vehicleBaseObject["GetSlotIdForMountedObject"]>
    >().toEqualTypeOf<[mountedObject: gameObject]>();
    expectTypeOf<
      ReturnType<worldWeatherScriptInterface["GetRainIntensity"]>
    >().toEqualTypeOf<number>();
  });

  test("Custom mp injeceted natives", () => {
    expectTypeOf<
      ReturnType<vehicleBaseObject["HasGravity"]>
    >().toEqualTypeOf<boolean>();

    expectTypeOf<
      ReturnType<worldWeatherScriptInterface["SetWeather"]>
    >().toEqualTypeOf<void>();
    expectTypeOf<
      Parameters<worldWeatherScriptInterface["SetWeather"]>
    >().toEqualTypeOf<
      [weahter: CyberEnums.WeatherState, blendTime?: number, priority?: number]
    >();
  });
});
