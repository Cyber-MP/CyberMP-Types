export class FunctionalTestsDataMemoryPoolStaticData extends ISerializable {
  poolName?: string;
  budget?: bigint;
  childrenBudget?: bigint;
  children?: string[];
  parent?: string;
}
