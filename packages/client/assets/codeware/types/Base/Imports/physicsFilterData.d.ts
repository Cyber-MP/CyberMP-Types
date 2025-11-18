export class physicsFilterData extends ISerializable {
  simulationFilter?: SimulationFilter;
  queryFilter?: QueryFilter;
  preset?: string;
  customFilterData?: physicsCustomFilterData;
}
