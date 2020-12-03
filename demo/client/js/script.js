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

            // Create a Whiteboard instance
            
//             const whiteboard = new Whiteboard(canvas, socket, '#3c72de');
            
            const whiteboard = new Drawing ();

            // Expose the whiteboard instance
            window.whiteboard = whiteboard;

            printDemoMessage();
        });
        
//         test test test
        
        function Drawing(data){
            noStroke(); 
             fill(50,200,random(150,255),50);
             ellipse(data.x,data.y, random (10,30));
        }
        function mouseDragged (){
            
            var data = {
             x: mouseX,
             y: mouseY
                 }
   
        socket.emit ('mouse', data);
             noStroke(); 
             fill(255,0,random(50,150),50);
             ellipse(mouseX,mouseY, random (10,30));
                                }
        
        
    });
})(io, Whiteboard);
