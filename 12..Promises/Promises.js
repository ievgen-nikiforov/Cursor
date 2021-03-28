function getRandomChinese(length) {
        let promise = new Promise (
          function (resolve, reject){
            let chineseLetter=""
              setTimeout(function() { 
                let date = Date.now().toString().substring(8);
                chineseLetter += String.fromCharCode(date)
              },5000)
              resolve (chineseLetter)
              reject(new Error("Whoops!"))

          })
          let i = 0;
          let chineseString = "";  
          while (i < length) {
            chineseString = chineseString + promise.then();
            i++
          }
          console.log(chineseString)
          return chineseString
      }
  
  getRandomChinese(5);