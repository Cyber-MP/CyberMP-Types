import type { Project, SourceFile } from 'ts-morph';
import { headerComment } from '../config/constants';

export abstract class BaseGenerator<TArgs extends any[] = []> {
  protected project: Project;

  constructor(project: Project) {
    this.project = project;
  }

  protected createSourceFile(path: string): SourceFile {
    return this.project.createSourceFile(path, '', { overwrite: true });
  }

  protected addHeader(file: SourceFile) {
    file.insertStatements(0, headerComment);
  }

  abstract generate(...args: TArgs): void;
}
