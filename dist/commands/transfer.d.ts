import { Command } from "@oclif/core";
export default class Transfer extends Command {
    static args: {
        toUser: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
        amount: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static description: string;
    static examples: string[];
    run(): Promise<void>;
}
