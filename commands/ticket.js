    const disbut = require('discord-buttons');
    const { MessageButton, MessageActionRow } = require('discord-buttons');

    module.exports = {
        name: 'ticket',
        description: 'ticket command!',
        async execute(message, args, Discord, helper){
            if(message.member.permissions.has('ADMINISTRATOR')){

            
            const button = new disbut.MessageButton()
            .setLabel("Donate") 
            .setStyle("blurple")
            .setEmoji("💎")
            .setID("donate")

            const button2 = new disbut.MessageButton()
            .setLabel("Support")
            .setStyle("blue")
            .setEmoji("📕")
            .setID("support")

            const button3 = new disbut.MessageButton()
            .setLabel("Other")
            .setStyle("red")
            .setEmoji("❓")
            .setID("oth")

            const button4 = new disbut.MessageButton()
            .setLabel("Report Member/staff")
            .setStyle("#8B0000")
            .setEmoji("🚫")
            .setID("rpr")

            const developer = new disbut.MessageButton()
            .setLabel("Developer")
            .setStyle("url")
            .setURL("https://discord.com/users/792447701027127306")


            let row = new MessageActionRow()
            .addComponent(button)
            .addComponent(button2)
            .addComponent(developer);


            const info = new Discord.MessageEmbed()
            .setAuthor('📩Better Ticket')
            .setDescription('__**Για την εξυπηρέτηση σας ορίστε την επιλογή που παρουσιάζει το θέμα του ticket σας.**')
            .setColor('#00b8ff')
            .setFooter(message.guild.name)
            message.channel.send({
                component: row,
                embed: info
            });




        

    helper.on('clickButton', async (button) => {
        if(button.id === 'donate'){
            await button.defer(); //nothing
            
            
            var donate = await message.guild.channels.create(`💎donate-${button.clicker.user.username}`, {
                permissionOverwrites: [
                    {
                        id: button.clicker.user.id,
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    },
                    {
                        id: message.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ],
                type: 'text'
            })      }

            const dbutton = new disbut.MessageButton()
            .setLabel("Close")
            .setStyle("red")
            .setEmoji("📛")
            .setID("close")
            
            const dinfo = new Discord.MessageEmbed()
            .setAuthor('Omen Ticket')
            .setDescription('**It seems you opened a donate ticket. Please be patient! Our support team will help you as soon as possible.**')
            .setColor('#00b8ff')
            .setFooter(message.guild.name)
            donate.send({
                component: dbutton,
                embed: dinfo
            });

            helper.on('clickButton', async (button) => {
                if(button.id === 'close'){
                await donate.delete();
                }
            })

    })

    
    helper.on('clickButton', async (button) => {
        if(button.id === 'support'){
            await button.defer(); //nothing
        
        
        var support = await message.guild.channels.create(`📕support-${button.clicker.user.username}`, {
            permissionOverwrites: [
                {
                    id: button.clicker.user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        })      }

        const sbutton = new disbut.MessageButton()
        .setLabel("Close")
        .setStyle("red")
        .setEmoji("📛")
        .setID("close")
        
        const sinfo = new Discord.MessageEmbed()
        .setAuthor('Omen Ticket')
        .setDescription('**It seems you opened a support ticket. Please be patient! Our support team will help you as soon as possible.**')
        .setColor('#00b8ff')
        .setFooter(message.guild.name)
        support.send({
            component: sbutton,
            embed: sinfo
        });

        helper.on('clickButton', async (button) => {
            if(button.id === 'close'){
                await support.delete();
            }
        })

    })
    helper.on('clickButton', async (button) => {
        if(button.id === 'oth'){
            await button.defer(); //nothing
            
            
            var donate = await message.guild.channels.create(`❓Other-${button.clicker.user.username}`, {
                permissionOverwrites: [
                    {
                        id: button.clicker.user.id,
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    },
                    {
                        id: message.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ],
                type: 'text'
            })      }

            const dbutton = new disbut.MessageButton()
            .setLabel("Close")
            .setStyle("red")
            .setEmoji("📛")
            .setID("close")
            
            const dinfo = new Discord.MessageEmbed()
            .setAuthor('Omen Ticket')
            .setDescription('**It seems you opened a donate ticket. Please be patient! Our support team will help you as soon as possible.**')
            .setColor('#00b8ff')
            .setFooter(message.guild.name)
            donate.send({
                component: dbutton,
                embed: dinfo
            });

            helper.on('clickButton', async (button) => {
                if(button.id === 'close'){
                await donate.delete();
                }
            })

    })
    helper.on('clickButton', async (button) => {
        if(button.id === 'rpr'){
            await button.defer(); //nothing
            
            
            var donate = await message.guild.channels.create(`🚫Report-${button.clicker.user.username}`, {
                permissionOverwrites: [
                    {
                        id: button.clicker.user.id,
                        allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                    },
                    {
                        id: message.guild.roles.everyone,
                        deny: ["VIEW_CHANNEL"]
                    }
                ],
                type: 'text'
            })      }

            const dbutton = new disbut.MessageButton()
            .setLabel("Close")
            .setStyle("red")
            .setEmoji("📛")
            .setID("close")
            
            const dinfo = new Discord.MessageEmbed()
            .setAuthor('Omen Ticket')
            .setDescription('**It seems you opened a donate ticket. Please be patient! Our support team will help you as soon as possible.**')
            .setColor('#00b8ff')
            .setFooter(message.guild.name)
            donate.send({
                component: dbutton,
                embed: dinfo
            });

            helper.on('clickButton', async (button) => {
                if(button.id === 'close'){
                await donate.delete();
                }
            })

    })

    }

        }
    }

