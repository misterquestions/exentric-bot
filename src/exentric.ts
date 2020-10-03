import { Client } from 'discord.js';

export default class Exentric {
  private client = new Client();

  constructor() {
    this.initializeClient();
  }

  private initializeClient() {
    this.client.login(process.env.DISCORD_BOT_TOKEN);
  }
}
