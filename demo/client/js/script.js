((io, Whiteboard) => {
    const printDemoMessage = () => {
        console.log(
            '%c👋 Hello there!',
            'font-weight: bold; font-size: 2rem;',
        );

        console.log(
            'Make the line %cgreen',
            'color: #00ff00;',
        );

        console.log(
            '%cwhiteboard.color = \'#00ff00\';',
            'color: #f3900c;',
        );

        console.log(
            'Make the line %cthicker',
            'font-weight: bold;',
        );

        console.log(
            '%cwhiteboard.increaseThickness(20);',
            'color: #f3900c;',
        );

        console.log(
            '🎉 Or you can %cdownload the image!',
            'font-weight: bold;',
        );

        console.log(
            '%cwhiteboard.download();',
            'color: #f3900c;',
        );
    };

    window.addEventListener('load', () => {
        console.log('🌍 Connecting to server…');

        const socket = io();
        const canvas = document.querySelector('#myCanvas');

        socket.on('connect', () => {
            // At this point we have connected to the server
            console.log('🌍 Connected to server');
            
            // Random Colors
//             let myColors = ['#3c72de', '#f09800', '#f98790', '#de3cad', '#3c95ad', '#903cad'];
//             let chosenColor = myColors[floor(random(5))];
            
            // Create a Whiteboard instance
            const whiteboard = new Whiteboard(canvas, socket, '#3c72de',15);
//             const whiteboard = new Whiteboard(canvas, socket, chosenColor, 40);
            
            
            
            // Expose the whiteboard instance
            window.whiteboard = whiteboard;
            
//             const newValue = '#de3cad';
            const newValue = random (['#3c72de', '#f09800', '#f98790', '#de3cad', '#3c95ad', '#903cad']);
            
            whiteboard.color = newValue;

            printDemoMessage();
          
        });
    });    
    
    
})(io, Whiteboard);
