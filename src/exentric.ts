import { Client, Message } from 'discord.js';

export default class Exentric {
  private client = new Client();

  constructor() {
    this.initializeClient();
  }

  private initializeClient() {
    this.client.on('ready', () => this.handleReadyEvent);
    this.client.on('message', (message) => this.handleMessageEvent(message));
    this.client.login(process.env.DISCORD_BOT_TOKEN);
  }

  private handleReadyEvent() {
    console.log(`Logged in as ${this.client.user?.tag}`);
  }

  private async handleMessageEvent(message: Message) {
    const args = message.content.split(' ');
    const command = args.shift();

    if (command !== '!ex') {
      return;
    }

    const action = args.shift();

    if (action === 'massive') {
      // Check if user has permissions
      if (!message.member?.permissions.has('BAN_MEMBERS', true)) {
        message.reply('No tienes permiso para realizar esta acción!');
        return;
      }

      // Just go ahead and kick members that dont have a role
      const members = await message.guild?.members.fetch();

      if (members) {
        const kickMessage = args.length > 0
          ? args.join(' ')
          : 'Automatic kick';

        members.forEach((member) => {
          if (!member.user.bot && member.roles.cache.size === 1) {
            const everyone = member.roles.cache.first();

            if (everyone && everyone.name === '@everyone' && member.kickable) {
              member.kick(kickMessage);
            }
          }
        });
      }
    }
  }
}
