export class ReactionComponent extends IComponent {
  reactions?: ReactionData[];
  triggerAutomatically?: boolean;
  GetReactionIndex(): void;
  GetRequiredItems(): void;
  PerformReaction(): void;
  PerformReactionWithIK(): void;
  SetCanceled(): void;
  SetFinished(): void;
}
