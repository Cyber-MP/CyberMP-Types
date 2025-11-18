export class entMarketingAnimationComponent extends IPlacedComponent {
  freezeAnimations?: boolean;
  animations?: entMarketingAnimationEntry[];
  enableLookAt?: boolean;
  lookAtSettings?: animLookAtPreset_FullControl;
  lookAtCamera?: boolean;
  lookAtOrbitDistance?: number;
  lookAtTargetPitch?: number;
  lookAtTargetYaw?: number;
}
