declare global {
  type UnwrapClass<T> = T extends { new (): infer U } ? U : T;
  type Handle<T = any> = T;
  type WeakHandle<T = any> = T;
  type ScriptRef<T = any> = T;
  type NodeRef<T = any> = T;
  type ResAsyncRef<T> = T;
  type CurveData<T> = T;
  type ResRef<T> = T;
  type MultiChannelCurve<T> = T;
}

export {};
