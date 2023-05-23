import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: 'Greet',
        message: 'Hey , Welcome to our shop!',
        trigger: 'Ask Name',
    }, {
        id: 'Ask Name',
        message: 'Write your name Please !',
        trigger: 'waiting1',
    }, {
        id: 'waiting1',
        user: true,
        trigger: 'Name',
    }, {
        id: 'Name',
        message: " Hi {previousValue}, how can I help you ?",
        trigger: 'help',
    }, {
        id: 'help',
        options: [
            { value: 1, label: 'Donuts Fillings', trigger: 'fillings' },
            { value: 2, label: 'Offers Available', trigger: 'offers' },
        ]
    }, {
        id: 'fillings',
        message: ' Thank you for asking , Donut fillings are Chocolate , ganache , custard and cooked fruit   ',
        trigger: 'anther1',
    }, {
        id: 'offers',
        message: ' Thank you for asking , (buy 1 get 1 free) and (10% off for packages) ',
        trigger: 'anther2',
    },{
        id: 'anther1',
        message: 'Do you like to see the available offers ?',
        trigger: 'option',
    },{
        id : 'option',
        options: [
            { value: 1, label: 'Yes , of cource ', trigger: 'yes' },
            { value: 2, label: 'No , thank you ', trigger: 'no' },
        ]
    },{
        id : 'yes',
        message :' Thank you for asking ,offer available is  (buy 1 get 1 free) and (10% off for packages) ',
        end : true ,
    },{
        id : 'no',
        message :' Thank you , it was nice chatting',
        end : true ,
    },{
        id: 'anther2',
        message: 'Do you like to know Donuts Fillings?',
        trigger: 'option2',
    },{
        id : 'option2',
        options: [
            { value: 1, label: 'Yes , of cource ', trigger: 'yes' },
            { value: 2, label: 'No , thank you ', trigger: 'no' },
        ]
    },{
        id : 'yes',
        message :' Thank you for asking ,Donut fillings are Chocolate , ganache , custard and cooked fruit ',
        end : true ,
    },{
        id : 'no',
        message :' Thank you , it was nice chatting',
        end : true ,
    }
];

// Creating our own theme
const theme = {
    fontFamily : '',
    background: '#f9e0ec',
    headerBgColor: '#F3477B',
    headerFontSize: '20px',
    botBubbleColor: '#F3477B',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FFABAB',
    userFontColor: 'white',
    
};


const config = {
    // botAvatar: "img.png",
    floating: true,
};

const Chatbot = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle=" Chat Bot" 
                   
                    bubbleStyle={{
                        fontFamily: 'Arial, sans-serif', 
                      }}
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    )
}

export default Chatbot