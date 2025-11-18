export class gsmGameDefinition extends CResource {
  mainQuests?: gsmMainQuest[];
  world?: ResourceAsyncRef;
  streamingWorld?: ResourceAsyncRef;
  worldName?: string;
  spawnPointTags?: redTagList;
}
