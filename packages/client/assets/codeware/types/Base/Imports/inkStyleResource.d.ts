export class inkStyleResource extends CResource {
  styles?: inkStyle[];
  styleImports?: ResourceRef[];
  themes?: inkStyleTheme[];
  overrides?: inkStyleOverride[];
  hideInInheritingStyles?: boolean;
}
