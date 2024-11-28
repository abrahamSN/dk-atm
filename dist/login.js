import { Args, Command, Flags } from "@oclif/core";
export default class Login extends Command {
    static args = {
        file: Args.string({ description: "file to read" }),
        account: Args.string({ description: "account to login" }),
    };
    static description = "login to your account";
    static examples = ["<%= config.bin %> <%= command.id %>"];
    static flags = {
        // flag with no value (-f, --force)
        force: Flags.boolean({ char: "f" }),
        // flag with a value (-n, --name=VALUE)
        name: Flags.string({ char: "n", description: "name to print" }),
    };
    async run() {
        const { args, flags } = await this.parse(Login);
        const name = flags.name ?? "world";
        this.log(`hello ${name} from D:\\Projects\\github.com\\abrahamSN\\dk-atm\\src\\commands\\login.ts`);
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
