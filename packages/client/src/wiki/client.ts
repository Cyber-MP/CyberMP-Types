import { Octokit } from "@octokit/rest";
import { WikiFileDto, WikiFileEntryDto } from "./dtos";

export class WikiClient {
  private client = new Octokit({});
  private cache = new Map<string, WikiFileDto>();
  classes: WikiFileEntryDto[] = [];

  async loadClasses() {
    this.classes = await this.getClasses();
  }

  public async getClass(name: string): Promise<WikiFileDto> {
    if (this.cache.get(name)) {
      return this.cache.get(name);
    }

    const { data: file } = await this.client.repos.getContent({
      owner: "CDPR-Modding-Documentation",
      repo: "NativeDB-wiki",
      path: `classes/${name.toLowerCase()}.md`,
    });

    if (Array.isArray(file) || file.type !== "file") {
      return;
    }

    let markdown: string = atob(file.content);

    markdown = markdown.replaceAll(/^---(.*\n)*---\n\n/gm, "");

    const res = {
      sha: file.sha,
      fileName: file.name,
      className: WikiClient.getClassName(file.name),
      path: file.path,
      markdown: markdown,
    };

    this.cache.set(name, res);

    return res;
  }

  public async getClasses(): Promise<WikiFileEntryDto[]> {
    const { data } = await this.client.repos.getContent({
      owner: "CDPR-Modding-Documentation",
      repo: "NativeDB-wiki",
      path: `classes`,
    });

    if (!Array.isArray(data)) {
      return;
    }

    return data.map((file) => {
      return {
        sha: file.sha,
        fileName: file.name,
        className: WikiClient.getClassName(file.name),
        path: file.path,
      };
    });
  }

  // public getGlobals(): Observable<WikiFileDto> {
  //   return this.getFileFrom("globals.md").pipe(
  //     map((file: GitHubFileDto) => {
  //       if (file.encoding !== "base64") {
  //         throw new WikiEncodingError(file.encoding);
  //       }
  //       let markdown: string = atob(file.content);

  //       markdown = markdown.replaceAll(/^---(.*\n)*---\n\n/gm, "");
  //       return {
  //         sha: file.sha,
  //         fileName: file.name,
  //         className: "GLOBALS",
  //         path: file.path,
  //         markdown: markdown,
  //       };
  //     }),
  //   );
  // }

  static getClassName(fileName: string): string {
    return fileName.substring(0, fileName.indexOf(".md"));
  }
}

export const wikiClient = new WikiClient();
