export class gameDamageSystemSharedState extends gameIGameSystemReplicatedState {
  hitHistory?: ServerHitData[];
  killHistory?: ServerKillData[];
}
