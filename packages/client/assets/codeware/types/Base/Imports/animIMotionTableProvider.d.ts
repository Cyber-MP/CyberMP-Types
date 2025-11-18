export abstract class animIMotionTableProvider extends ISerializable {
  id?: number;
  parentId?: number;
  type?: animMotionTableType;
  action?: animMotionTableAction;
  parentStaticSwitchBranch?: animParentStaticSwitchBranch;
}
