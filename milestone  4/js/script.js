// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite 
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            contactIndex: 0,
            newTextMessage: '',
            contactSearch: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status:'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status:'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status:'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ]            
        },
        methods:{
            changeContactChat: function(clickedIndex){
                this.contactIndex = clickedIndex;
            },
            sendReply: function(){
                setTimeout(()=>{
                    this.contacts[this.contactIndex].messages.push({
                        text: 'ok',
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        status: 'received'
                    });
                }, 1000)
            },
            userSentNewMessage: function(){
                if (this.newTextMessage.trim().length > 0){
                    this.contacts[this.contactIndex].messages.push({
                        text: this.newTextMessage,
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        status: 'sent'
                    });
                    this.newTextMessage='';
                    this.sendReply();
                }
            },
            filterContact: function(){
                this.contacts.forEach(element => {
                    if (!element.name.toLowerCase().includes(this.contactSearch.toLowerCase())){
                        element.visible = false;
                    } else{
                        element.visible = true;
                    }
                });
                console.log(this.contactSearch)
            }
        }
    }
);