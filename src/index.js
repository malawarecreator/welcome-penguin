const {Client, Events, GatewayIntentBits, EmbedBuilder} = require('discord.js')
const {token} = require("../config.json")

const client = new Client({intents: [GatewayIntentBits.Guilds]})

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`)
})
client.on('guildMemberAdd', async (member) => {
    try {
        const embed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle("Welcome!")
            .setDescription(`Welcome to the server ${member}`)
            .setImage("https://giphy.com/gifs/pudgypenguins-penguin-pudgy-youre-welcome-2md3hYn4d0LZUtdc9x")
        member.send({embeds: [embed]})
    } catch (err) {
        console.log(error)
    }
})
client.login(token)