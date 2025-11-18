export interface OpenWorldActivityRequest {
  kind?: string;
  districts?: gamedataDistrict[];
  cooldown?: number;
  force?: boolean;
}
