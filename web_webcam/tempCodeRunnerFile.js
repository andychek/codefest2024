fs.writeFile("public/socket.txt", pythonOutput, (err)=>{
          if (err) {
            console.error('Error appending to file:', err);
          } else {
            console.log('Content appended to file successfully');
          }
        })