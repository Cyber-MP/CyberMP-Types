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

  const policeRadioSystem =
    mp.game.ScriptGameInstance.GetScriptableSystemsContainer().Get(
      "HUDManager",
    );

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

  test("Observers and Overrides", () => {
    expectTypeOf(mp.game.override).toEqualTypeOf<OverrideFunction>();

    mp.game.override("PlayerPuppet", "GetDisplayName", (self, ...args) => {
      expectTypeOf(self).toEqualTypeOf<PlayerPuppet>();

      const [origin] = args.slice(-1);
      expectTypeOf(origin).toEqualTypeOf<PlayerPuppet["GetDisplayName"]>();

      expectTypeOf<Parameters<typeof origin>>().toEqualTypeOf<
        Parameters<PlayerPuppet["GetDisplayName"]>
      >();
    });

    expectTypeOf(mp.game.observe).toEqualTypeOf<ObserveFunction>();
    expectTypeOf(mp.game.observeBefore).toEqualTypeOf<ObserveFunction>();
    expectTypeOf(mp.game.observeAfter).toEqualTypeOf<ObserveFunction>();

    mp.game.observe("PlayerPuppet", "Kill", (self, ...args) => {
      expectTypeOf(self).toEqualTypeOf<PlayerPuppet>();
      expectTypeOf(args).toEqualTypeOf<Parameters<PlayerPuppet["Kill"]>>();
    });

    expectTypeOf(mp.game.observeRaw).toEqualTypeOf<ObserveFunction>();
    expectTypeOf(mp.game.observeBeforeRaw).toEqualTypeOf<ObserveFunction>();
    expectTypeOf(mp.game.observeAfterRaw).toEqualTypeOf<ObserveFunction>();

    mp.game.observeRaw(
      "vehicleBaseObject",
      "AddCollisionForce",
      (self, ...args) => {
        expectTypeOf(self).toEqualTypeOf<vehicleBaseObject>();
        expectTypeOf(args).toEqualTypeOf<
          Parameters<vehicleBaseObject["AddCollisionForce"]>
        >();
      },
    );

    mp.game.override(
      "worldWeatherScriptInterface",
      "SetWeather",
      (self, weather, blendTime, priority, origin) => {
        expectTypeOf(self).toEqualTypeOf<worldWeatherScriptInterface>();

        expectTypeOf(origin).toEqualTypeOf<
          worldWeatherScriptInterface["SetWeather"]
        >();
      },
    );

    mp.game.observeAfter(
      "worldWeatherScriptInterface",
      "GetRainIntensity",
      (self, ...args) => {
        expectTypeOf(self).toEqualTypeOf<worldWeatherScriptInterface>();
        expectTypeOf(args).toEqualTypeOf<
          Parameters<worldWeatherScriptInterface["GetRainIntensity"]>
        >();
      },
    );
  });
});
