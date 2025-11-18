export class LanguageSpecificVideoController extends inkLogicController {
  isLooped?: boolean;
  specificVideoForLanguage?: ResourceAsyncRef;
  languages?: inkLanguageId[];
  fallbackVideo?: ResourceAsyncRef;
}
