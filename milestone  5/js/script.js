// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti.


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
                            status:'sent',
                            dropDownVisible: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status:'sent',
                            dropDownVisible: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status:'received',
                            dropDownVisible: false,
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
                            status: 'sent',
                            dropDownVisible: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropDownVisible: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            dropDownVisible: false,
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
                            status: 'received',
                            dropDownVisible: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropDownVisible: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            dropDownVisible: false,
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
                            status: 'sent',
                            dropDownVisible: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropDownVisible: false,
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
                        status: 'received',
                        dropDownVisible: false
                    });
                }, 1000)
            },
            userSentNewMessage: function(){
                if (this.newTextMessage.trim().length > 0){
                    this.contacts[this.contactIndex].messages.push({
                        text: this.newTextMessage,
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        status: 'sent',
                        dropDownVisible: false
                    });
                    this.newTextMessage='';
                    this.sendReply();
                }
            },
            filterContact: function(){
                // It searchs letters written by the user in the contact's name, and if they are not included, this one displays as none
                this.contacts.forEach(element => {
                    if (!element.name.toLowerCase().includes(this.contactSearch.toLowerCase())){
                        element.visible = false;
                    } else{
                        element.visible = true;
                    }
                });
            },
            appearDropdown: function(contactIndex, index){

                // The dropdown menu pops up
                this.contacts[contactIndex].messages[index].dropDownVisible = ! this.contacts[contactIndex].messages[index].dropDownVisible;

                // If the user clicks another dropdown icon, all the other different dropdown menus will close
                this.contacts[contactIndex].messages.forEach(element => {
                    if (Object.is(element, this.contacts[contactIndex].messages[index]) === false && element.dropDownVisible === true){
                        element.dropDownVisible = false;
                    }
                })
            },
            deleteMessage: function(contactIndex ,index){
                this.contacts[contactIndex].messages.splice(index, 1);
            }
        }
    }
);