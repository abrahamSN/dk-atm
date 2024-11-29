import { Command } from "@oclif/core";
export default class Withdraw extends Command {
    static args: {
        amount: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static description: string;
    static examples: string[];
    run(): Promise<void>;
}
