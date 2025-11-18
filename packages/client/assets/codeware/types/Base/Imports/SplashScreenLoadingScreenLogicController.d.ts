export class SplashScreenLoadingScreenLogicController extends ILoadingLogicController {
  logoTrainWBBink?: ResourceAsyncRef;
  logoTrainNamcoBink?: ResourceAsyncRef;
  logoTrainStadiaBink?: ResourceAsyncRef;
  logoTrainNoRTXBink?: ResourceAsyncRef;
  logoTrainRTXBink?: ResourceAsyncRef;
  introMessageBink?: inkLocalizedBink;
  trailerBink?: ResourceAsyncRef;
  logosTrainAnimation?: string;
  localizedMessageAnimation?: string;
  gameIntroAnimation?: string;
  longLogosTrainAnimation?: string;
  stopIntroAudioEventName?: string;
  afterSkipAnimation?: string;
  videoPlayer?: inkVideoRef;
  skipButtonPanel?: inkCompoundRef;
}
