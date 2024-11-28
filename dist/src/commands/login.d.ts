import { Command } from "@oclif/core";
export default class Login extends Command {
    static args: {
        uname: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static description: string;
    static examples: string[];
    run(): Promise<void>;
}
