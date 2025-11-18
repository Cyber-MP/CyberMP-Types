export class worldDistantGINode extends worldNode {
  dataAlbedo?: ResourceAsyncRef;
  dataNormal?: ResourceAsyncRef;
  dataHeight?: ResourceAsyncRef;
  sectorSpan?: { x: number; y: number; z: number; w: number };
}
